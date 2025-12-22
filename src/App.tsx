import { useEffect, useState, useCallback, useRef } from "react";
import { getAccessToken, getProfileData } from "./services/spotify"; // UPDATED import
import { matchMovieWithAI, clearGeminiCache } from "./services/gemini";
import { getMoviePoster } from "./services/tmdb";
import { MovieTicket } from "./components/MovieTicket";
import { Login } from "./components/Login";
import type { MovieMatch, Track } from "./types";
import { Loader2, RefreshCcw } from "lucide-react";

// Types for our time ranges
type TimeRange = 'short_term' | 'medium_term' | 'long_term';

const TIME_RANGES: { label: string; value: TimeRange }[] = [
  { label: 'Last Month', value: 'short_term' },
  { label: 'Last 6 Months', value: 'medium_term' },
  { label: 'Last Year', value: 'long_term' },
];

function App() {
  const [token, setToken] = useState<string | null>(null);
  
  // Data State
  const [tracks, setTracks] = useState<Track[]>([]);
  const [artists, setArtists] = useState<any[]>([]); // Added back artists state
  const [match, setMatch] = useState<MovieMatch | null>(null);
  const [timeRange, setTimeRange] = useState<TimeRange>('medium_term');

  // UI State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Locks
  const inFlight = useRef(false);
  const hasFetched = useRef(false);

  // UPDATED: Accepts optional range, defaults to current state
  const generateMovie = useCallback(async (authToken: string, rangeOverride?: TimeRange) => {
    if (inFlight.current) return;

    const range = rangeOverride || timeRange; // Use override if provided (clicking tab)

    inFlight.current = true;
    setLoading(true);
    setError(null);
    setMatch(null);

    try {
      // 1. Fetch Profile Data (Tracks + Artists)
      const { tracks: spotifyTracks, artists: spotifyArtists } = await getProfileData(authToken, range);
      
      setTracks(spotifyTracks);
      setArtists(spotifyArtists);

      if (!spotifyTracks.length) throw new Error("No tracks found on Spotify!");

      // 2. Prepare Prompt
      const trackList = spotifyTracks
        .slice(0, 20)
        .map((t: Track) => `${t.name} by ${t.artists?.[0]?.name ?? "Unknown Artist"}`);

      // 3. AI Match
      const aiResult = await matchMovieWithAI(trackList, ["General Vibe"]);

      // 4. Poster Fetch
      const poster = await getMoviePoster(aiResult.title);
      const finalMatch: MovieMatch = { ...aiResult, posterPath: poster || undefined };

      setMatch(finalMatch);
      
      // Save for persistence
      window.localStorage.setItem("plot_twist_match", JSON.stringify(finalMatch));
      // Also save the range preference if you want (optional)
      
    } catch (err: any) {
      console.error("Generation failed:", err);
      setError(err?.message || "The projector jammed.");
    } finally {
      setLoading(false);
      inFlight.current = false;
      hasFetched.current = true; 
    }
  }, [timeRange]); // Dependency on timeRange

  // Handle manual range switch
  const handleRangeChange = (newRange: TimeRange) => {
    if (newRange === timeRange) return;
    if (!token) return;
    
    setTimeRange(newRange);
    generateMovie(token, newRange);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    const localToken = window.localStorage.getItem("plot_twist_token");
    const localMatch = window.localStorage.getItem("plot_twist_match");

    if (code) {
      const handled = sessionStorage.getItem("plot_twist_code_handled");
      if (handled === code) return;
      sessionStorage.setItem("plot_twist_code_handled", code);

      getAccessToken(code).then((newToken) => {
        if (!newToken) return;

        window.localStorage.setItem("plot_twist_token", newToken);
        window.localStorage.removeItem("plot_twist_match");

        setToken(newToken);
        window.history.replaceState({}, document.title, "/");

        // Initial generation
        generateMovie(newToken, 'medium_term');
      });
      return;
    }

    if (localToken) {
      setToken(localToken);
      if (localMatch) {
        setMatch(JSON.parse(localMatch));
        // Silently re-fetch track data to populate the list behind the match
        getProfileData(localToken, timeRange)
          .then(({ tracks, artists }) => {
            setTracks(tracks);
            setArtists(artists);
          })
          .catch(() => null);
      } else {
        generateMovie(localToken, 'medium_term');
      }
    }
  }, []); // Run once on mount

  const logout = () => {
    window.localStorage.removeItem("plot_twist_token");
    window.localStorage.removeItem("plot_twist_match");
    window.localStorage.removeItem("verifier");
    sessionStorage.removeItem("plot_twist_code_handled");

    setToken(null);
    setMatch(null);
    setError(null);
    setTracks([]);
    setArtists([]);
    setLoading(false);

    hasFetched.current = false;
    inFlight.current = false;
  };

  const manualRetry = () => {
    if (!token) return;
    
    // Clear the UI persistence
    window.localStorage.removeItem("plot_twist_match");
    
    // Clear the AI persistence (THIS IS THE FIX)
    clearGeminiCache();
    
    generateMovie(token, timeRange);
  };

  return (
    <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center p-6 selection:bg-red-500 selection:text-white">
      {!token ? (
        <Login />
      ) : (
        <div className="w-full flex flex-col items-center gap-8">
          
          {/* TIME RANGE SELECTOR */}
          <div className="flex bg-stone-900/80 p-1.5 rounded-full border border-stone-800 shadow-lg animate-in fade-in slide-in-from-top-4 duration-700">
            {TIME_RANGES.map((option) => (
              <button
                key={option.value}
                onClick={() => handleRangeChange(option.value)}
                disabled={loading}
                className={`
                  relative px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300
                  ${timeRange === option.value 
                    ? 'bg-stone-100 text-stone-950 shadow-sm scale-105' 
                    : 'text-stone-500 hover:text-stone-300 hover:bg-stone-800'}
                  ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                {option.label}
              </button>
            ))}
          </div>

          {error && (
            <div className="text-center space-y-4 animate-in fade-in">
              <p className="text-red-500 font-mono text-sm max-w-md mx-auto bg-red-950/30 p-4 rounded border border-red-900">
                {error}
              </p>
              <button
                onClick={manualRetry}
                className="flex items-center gap-2 mx-auto px-6 py-3 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-stone-200 rounded-full cursor-pointer"
              >
                <RefreshCcw size={14} /> Retry Generation
              </button>
            </div>
          )}

          {loading && !match && (
            <div className="flex flex-col items-center gap-4 text-stone-500 animate-pulse">
              <Loader2 className="animate-spin w-10 h-10 text-red-600" />
              <p className="text-xs uppercase tracking-[0.3em]">Analyzing Soundtrack...</p>
            </div>
          )}

          {match && !loading && (
            <div className="animate-in slide-in-from-bottom-10 duration-1000 flex flex-col items-center w-full">
              <MovieTicket match={match} tracks={tracks} artists={artists} userName="MAIN CHARACTER" />
              
              <div className="flex gap-4 mt-8">
                <button
                  onClick={manualRetry}
                  className="text-stone-500 text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                >
                  Regenerate Movie
                </button>
                <button
                  onClick={logout}
                  className="text-stone-500 text-[10px] uppercase tracking-widest hover:text-red-500 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;