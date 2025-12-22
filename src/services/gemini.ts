import { GoogleGenerativeAI } from "@google/generative-ai";
import type { MovieMatch } from "../types";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
if (!apiKey) {
  throw new Error("Missing VITE_GEMINI_API_KEY (restart Vite after adding it).");
}

const genAI = new GoogleGenerativeAI(apiKey);

// We act as a database now, not a creative writer.
const responseSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    genre: { type: "string" },
    quote: { type: "string" },
  },
  required: ["title", "genre", "quote"],
};

const CACHE_PREFIX = "plot_twist_gemini_v2:"; 
const CACHE_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours
const inflight = new Map<string, Promise<MovieMatch>>();

function hashString(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16);
}

function cacheGet(key: string): MovieMatch | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.ts || !parsed?.data) return null;
    if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
    return parsed.data as MovieMatch;
  } catch {
    return null;
  }
}

function cacheSet(key: string, data: MovieMatch) {
  try {
    localStorage.setItem(key, JSON.stringify({ ts: Date.now(), data }));
  } catch {
    // ignore
  }
}

// === NEW FUNCTION: Force Clear Cache ===
export function clearGeminiCache() {
  try {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(CACHE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
    console.log("Gemini cache cleared.");
  } catch (e) {
    console.error("Failed to clear cache", e);
  }
}
// =======================================

function normalizeMovieMatch(x: any): MovieMatch {
  const title = String(x?.title ?? "").trim();
  const genre = String(x?.genre ?? "").trim();
  const quote = String(x?.quote ?? x?.quotation ?? x?.dialogue ?? "").trim();

  if (!title || !genre || !quote) {
    throw new Error("Gemini returned invalid JSON structure (missing quote).");
  }
  return { title, genre, quote };
}

async function getWorkingModelName() {
  try {
    const models = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }).apiKey 
        ? await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`)
            .then(res => res.json()) 
        : { models: [] };
    
    const validModels = (models.models || []).filter((m: any) => 
      m.name.includes("gemini") && 
      m.supportedGenerationMethods?.includes("generateContent")
    );

    if (validModels.length > 0) {
      const best = validModels.find((m: any) => m.name.includes("flash")) || validModels[0];
      return best.name.replace("models/", "");
    }
  } catch (e) {
    // Silently fail model detection and fallback
  }
  return "gemini-1.5-flash"; 
}

export async function matchMovieWithAI(tracks: string[], genres: string[]): Promise<MovieMatch> {
  const top = tracks.slice(0, 20);
  const key = CACHE_PREFIX + hashString(JSON.stringify({ top, genres }));

  const cached = cacheGet(key);
  if (cached) return cached;

  const existing = inflight.get(key);
  if (existing) return existing;

  const job = (async () => {
    const modelName = await getWorkingModelName();

    const prompt = [
      "You are a cinema archivist.",
      "Analyze the playlist vibe and pick ONE movie that matches strictly on atmosphere/mood.",
      "Output Requirement: Return valid JSON with 'title', 'genre', and 'quote'.",
      "Constraint: The 'quote' must be a REAL, verbatim line of dialogue from that specific movie. Do not fabricate quotes.",
      "",
      "Top tracks:",
      ...top.map((t, i) => `${i + 1}. ${t}`),
      "",
      `Vibe hints: ${genres.join(", ") || "General"}`,
    ].join("\n");

    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        generationConfig: {
          responseMimeType: "application/json",
          // @ts-expect-error - schema typing
          responseSchema: responseSchema,
        },
      });

      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();

      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch {
        const cleanText = text.replace(/```json|```/g, "").trim();
        parsed = JSON.parse(cleanText);
      }

      const finalData = normalizeMovieMatch(parsed);
      cacheSet(key, finalData);
      return finalData;

    } catch (e: any) {
      throw new Error(`AI Request Failed: ${e.message}`);
    }
  })();

  inflight.set(key, job);
  try {
    return await job;
  } finally {
    inflight.delete(key);
  }
}