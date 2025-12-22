import { useState, useEffect, useRef, useCallback } from 'react';
import { Quote, Download, Ticket as TicketIcon, Loader2 } from 'lucide-react';
import { toPng } from 'html-to-image';
import type { MovieMatch } from '../types';

interface Props {
  match: MovieMatch;
  tracks: any[];
  artists: any[];
  userName: string;
}

type Tab = 'soundtrack' | 'cast' | 'themes';
type Theme = 'classic' | 'midnight' | 'retro' | 'blueprint';

const THEMES: Record<Theme, { bg: string; text: string; accent: string; paper: string; font: string; border: string }> = {
  classic: { bg: 'bg-stone-900', text: 'text-stone-900', accent: 'text-red-600', paper: 'bg-[#f4f4f0]', font: 'font-mono', border: 'border-stone-300' },
  midnight: { bg: 'bg-black', text: 'text-white', accent: 'text-cyan-400', paper: 'bg-stone-900', font: 'font-sans', border: 'border-stone-800' },
  retro: { bg: 'bg-orange-50', text: 'text-amber-900', accent: 'text-orange-600', paper: 'bg-[#fdf6e3]', font: 'font-serif', border: 'border-amber-200' },
  blueprint: { bg: 'bg-blue-950', text: 'text-blue-100', accent: 'text-yellow-400', paper: 'bg-blue-900', font: 'font-mono', border: 'border-blue-700/50' },
};

// --- PROXY-ENABLED IMAGE COMPONENT ---
const CorsImg = ({ src, className, alt }: { src: string | undefined, className?: string, alt?: string }) => {
  const [imgData, setImgData] = useState<string | null>(null);

  useEffect(() => {
    if (!src) return;

    let isMounted = true;

    const fetchImage = async (url: string) => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });
      } catch (err) {
        throw new Error('Fetch failed');
      }
    };

    const load = async () => {
      try {
        // Attempt 1: Direct CORS fetch
        const data = await fetchImage(src);
        if (isMounted) setImgData(data);
      } catch {
        try {
          // Attempt 2: Public Proxy (The Bypass)
          const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(src)}`;
          const data = await fetchImage(proxyUrl);
          if (isMounted) setImgData(data);
        } catch (e) {
          console.error("Image load failed completely", e);
        }
      }
    };

    load();
    return () => { isMounted = false; };
  }, [src]);

  if (!imgData) return <div className={`${className} bg-current opacity-10 animate-pulse`} />;
  return <img src={imgData} alt={alt} className={className} />;
};


export const MovieTicket = ({ match, tracks, artists, userName }: Props) => {
  const [activeTab, setActiveTab] = useState<Tab>('soundtrack');
  const [currentTheme, setCurrentTheme] = useState<Theme>('classic');
  const [isDownloading, setIsDownloading] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);
  const theme = THEMES[currentTheme];

  const allGenres = artists.flatMap(a => a.genres || []);
  const genreCounts: Record<string, number> = {};
  allGenres.forEach(g => { genreCounts[g] = (genreCounts[g] || 0) + 1; });
  const topGenres = Object.entries(genreCounts).sort(([, a], [, b]) => b - a).slice(0, 8).map(([g]) => g);

  const handleDownload = useCallback(async () => {
    if (!ticketRef.current) return;
    setIsDownloading(true);

    try {
      await new Promise(r => setTimeout(r, 100));

      const dataUrl = await toPng(ticketRef.current, {
        cacheBust: true,
        pixelRatio: 4, 
        backgroundColor: 'transparent', 
        style: {
          transform: 'none', 
          boxShadow: 'none',
          perspective: 'none',
          margin: '0',
          // @ts-expect-error - fontSmooth is a valid CSS prop but not in standard types
          fontSmooth: 'always',
          webkitFontSmoothing: 'antialiased',
        }
      });

      const link = document.createElement('a');
      link.download = `Sinetify_${match.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();

    } catch (err) {
      console.error("Download failed:", err);
      alert("Browser security blocked the download. Try taking a screenshot!");
    } finally {
      setIsDownloading(false);
    }
  }, [match.title]);

  return (
    <div className="w-full max-w-[850px] mx-auto flex flex-col items-center gap-6 animate-in slide-in-from-bottom-8 duration-700">
      
      {/* TOOLBAR */}
      <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-sm md:max-w-none p-4 bg-stone-900/80 backdrop-blur-md rounded-full border border-stone-800 shadow-xl z-50">
        <div className="flex gap-2 mr-4 border-r border-stone-700 pr-4">
          {(Object.keys(THEMES) as Theme[]).map((t) => (
            <button
              key={t}
              onClick={() => setCurrentTheme(t)}
              className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${currentTheme === t ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
              style={{ backgroundColor: t === 'classic' ? '#e7e5e4' : t === 'midnight' ? '#1c1917' : t === 'retro' ? '#f59e0b' : '#1e3a8a' }}
              title={t.charAt(0).toUpperCase() + t.slice(1)}
            />
          ))}
        </div>
        <button 
          onClick={handleDownload} 
          disabled={isDownloading}
          className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-stone-200 transition disabled:opacity-50 disabled:cursor-wait"
        >
          {isDownloading ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
          {isDownloading ? "Developing..." : "Download PNG"}
        </button>
      </div>

      {/* --- THE TICKET --- */}
      <div 
        ref={ticketRef} 
        className={`relative w-full shadow-2xl overflow-hidden group perspective-1000 ${theme.bg}`}
        style={{ borderRadius: '1.5rem' }} 
      >
        <div className={`flex flex-col md:flex-row ${theme.paper} ${theme.text} ${theme.font} min-h-[600px] md:min-h-[500px] border-4 ${theme.border}`}>
          
          {/* LEFT: POSTER SECTION */}
          {/* Mobile: 2:3 Aspect Ratio (The "Justice" Ratio) | Desktop: 5/12 Width */}
          <div className="w-full aspect-[2/3] md:aspect-auto md:w-5/12 relative bg-black overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-dashed border-current">
            <CorsImg 
              src={match.posterPath} 
              alt="Poster"
              className="w-full h-full object-cover object-top opacity-90 mix-blend-hard-light" 
            />
            {/* Cinematic Fade: Stronger at bottom to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
               <div className="flex items-center gap-2 opacity-70 mb-2">
                 <Quote size={12} className="text-white" />
                 <span className="text-[10px] uppercase tracking-widest">Memorable Quote</span>
               </div>
               <p className="text-xl md:text-2xl font-serif italic leading-tight text-white/90 drop-shadow-md">
                 "{match.quote}"
               </p>
            </div>
          </div>

          {/* RIGHT: DATA STUB */}
          <div className="flex-1 flex flex-col relative">
            <div className="p-5 border-b-2 border-dashed border-current/20 flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-2 opacity-50">
                   <TicketIcon size={14} />
                   <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Admit One</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                  {match.title}
                </h1>
                <p className={`text-[10px] font-bold uppercase tracking-widest ${theme.accent}`}>
                  {match.genre}
                </p>
              </div>
              <div className={`border-2 border-current opacity-30 text-[10px] p-1 px-2 -rotate-12 uppercase font-black tracking-tighter`}>
                {new Date().toLocaleDateString(undefined, { month: 'short', year: '2-digit' })}
              </div>
            </div>

            <div className="flex w-full border-b border-current/10 text-[10px] font-bold uppercase tracking-widest">
              <button onClick={() => setActiveTab('soundtrack')} className={`flex-1 py-3 hover:bg-black/5 ${activeTab === 'soundtrack' ? 'opacity-100 underline decoration-2 underline-offset-4' : 'opacity-40'}`}>Tracks</button>
              <button onClick={() => setActiveTab('cast')} className={`flex-1 py-3 hover:bg-black/5 ${activeTab === 'cast' ? 'opacity-100 underline decoration-2 underline-offset-4' : 'opacity-40'}`}>Cast</button>
              <button onClick={() => setActiveTab('themes')} className={`flex-1 py-3 hover:bg-black/5 ${activeTab === 'themes' ? 'opacity-100 underline decoration-2 underline-offset-4' : 'opacity-40'}`}>Themes</button>
            </div>

            <div className="flex-1 p-5 md:overflow-hidden relative min-h-[300px]">
              
              {activeTab === 'soundtrack' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-2">
                  <div className="space-y-2">
                    {tracks.slice(0, 5).map((t, i) => (
                      <div key={i} className="flex justify-between items-baseline border-b border-current/10 pb-1">
                        <div className="truncate max-w-[180px] md:max-w-[120px]">
                          <span className="text-[10px] font-bold uppercase mr-2">{i + 1}.</span>
                          <span className="text-[11px] font-bold truncate">{t.name}</span>
                        </div>
                        <span className="text-[9px] opacity-50 truncate max-w-[80px] text-right">{t.artists[0].name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {tracks.slice(5, 10).map((t, i) => (
                      <div key={i + 5} className="flex justify-between items-baseline border-b border-current/10 pb-1">
                        <div className="truncate max-w-[180px] md:max-w-[120px]">
                          <span className="text-[10px] font-bold uppercase mr-2">{i + 6}.</span>
                          <span className="text-[11px] font-bold truncate">{t.name}</span>
                        </div>
                        <span className="text-[9px] opacity-50 truncate max-w-[80px] text-right">{t.artists[0].name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'cast' && (
                <div className="grid grid-cols-2 gap-3">
                  {artists.slice(0, 8).map((a, i) => (
                    <div key={i} className="flex items-center gap-2 bg-black/5 p-2 rounded-lg">
                      {a.images?.[0]?.url && (
                        <CorsImg 
                          src={a.images[0].url} 
                          className="w-6 h-6 rounded-full grayscale object-cover" 
                        />
                      )}
                      <span className="text-[10px] font-bold uppercase truncate">{a.name}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'themes' && (
                <div className="flex flex-wrap gap-2 content-start">
                  {topGenres.map((g, i) => (
                    <span key={i} className={`px-2 py-1 text-[9px] uppercase font-bold tracking-wider border border-current/20 rounded-sm`}>
                      {g}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t-2 border-dashed border-current/20 flex flex-col items-center gap-2 opacity-60">
               <div className="flex items-center gap-1 w-full justify-between">
                 <span className="text-[8px] uppercase tracking-widest">{userName}</span>
                 <span className="text-[8px] uppercase tracking-widest">ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
               </div>
               <div className="h-8 w-full flex items-stretch justify-center gap-[1px] overflow-hidden">
                 {[...Array(60)].map((_, i) => (
                    <div key={i} className="bg-current" style={{ width: Math.random() > 0.5 ? '2px' : '1px', opacity: Math.random() > 0.3 ? 1 : 0 }} />
                 ))}
               </div>
            </div>

            <div className="absolute -left-3 top-1/2 w-6 h-6 rounded-full bg-stone-950 md:hidden" />
            <div className="absolute -right-3 top-1/2 w-6 h-6 rounded-full bg-stone-950 md:hidden" />
          </div>
        </div>
      </div>
      
      <p className="text-[10px] text-stone-500 uppercase tracking-widest animate-pulse">
        Adjust theme above • Download to share
      </p>
    </div>
  );
};