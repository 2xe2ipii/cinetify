import type { Track, AudioFeatures } from "../types";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.MODE === 'production'
  ? "https://cinetify.vercel.app" 
  : "http://127.0.0.1:5173/callback";

// Using standard Spotify API URL
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const API_BASE_URL = "https://api.spotify.com/v1";

export const redirectToAuthCodeFlow = async () => {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("verifier", verifier);

  const params = new URLSearchParams();
  params.append("client_id", CLIENT_ID);
  params.append("response_type", "code");
  params.append("redirect_uri", REDIRECT_URI);
  params.append("scope", "user-top-read");
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  document.location = `${AUTH_ENDPOINT}?${params.toString()}`;
};

export const getAccessToken = async (code: string) => {
  const verifier = localStorage.getItem("verifier");

  const params = new URLSearchParams();
  params.append("client_id", CLIENT_ID);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", REDIRECT_URI);
  params.append("code_verifier", verifier!);

  const result = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params
  });

  const { access_token } = await result.json();
  return access_token;
};

// --- UPDATED: Fetch Tracks, Artists AND Audio Features ---
export const getProfileData = async (token: string, timeRange: string = "medium_term") => {
  const headers = { Authorization: `Bearer ${token}` };

  // 1. Fetch Tracks and Artists first
  const [tracksRes, artistsRes] = await Promise.all([
    fetch(`${API_BASE_URL}/me/top/tracks?limit=20&time_range=${timeRange}`, { headers }),
    fetch(`${API_BASE_URL}/me/top/artists?limit=10&time_range=${timeRange}`, { headers })
  ]);

  if (!tracksRes.ok || !artistsRes.ok) {
    throw new Error(`Spotify API Error`);
  }

  const tracksData = await tracksRes.json();
  const artistsData = await artistsRes.json();
  
  const tracks: Track[] = tracksData.items;

  // 2. Fetch Audio Features for these specific tracks
  // We extract IDs and join them with commas
  const trackIds = tracks.map(t => t.id).join(',');
  
  const featuresRes = await fetch(`${API_BASE_URL}/audio-features?ids=${trackIds}`, { headers });
  
  if (!featuresRes.ok) {
    // We don't crash the app if features fail, just return empty
    return { tracks, artists: artistsData.items, features: [] };
  }

  const featuresData = await featuresRes.json();

  return {
    tracks,
    artists: artistsData.items,
    features: featuresData.audio_features as AudioFeatures[]
  };
};

// --- PKCE Helper Functions ---
function generateCodeVerifier(length: number) {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier: string) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}