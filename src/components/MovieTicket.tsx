import { useState, useEffect, useRef, useCallback } from 'react';
import { Download, Loader2, Disc, Users, Tag } from 'lucide-react';
import { toPng } from 'html-to-image';
import type { MovieMatch } from '../types';

interface Props {
  match: MovieMatch;
  tracks: any[];
  artists: any[];
  userName: string;
}

type Tab = 'soundtrack' | 'cast' | 'genres';
type Theme = 'classic' | 'midnight' | 'retro' | 'blueprint';

const THEME_CONFIG: Record<
  Theme,
  { bgHex: string; text: string; accent: string; font: string; border: string; highlight: string }
> = {
  classic: { 
    bgHex: '#e8e8e3', 
    text: 'text-stone-900', 
    accent: 'text-red-700', 
    font: 'font-mono', 
    border: 'border-stone-400',
    highlight: 'bg-stone-900 text-stone-100'
  },
  midnight: { 
    bgHex: '#0a0a0a', 
    text: 'text-stone-200', 
    accent: 'text-cyan-400', 
    font: 'font-sans', 
    border: 'border-stone-800',
    highlight: 'bg-white text-black'
  },
  retro: { 
    bgHex: '#fdf6e3', 
    text: 'text-amber-900', 
    accent: 'text-orange-700', 
    font: 'font-serif', 
    border: 'border-amber-900/20',
    highlight: 'bg-amber-900 text-amber-50'
  },
  blueprint: { 
    bgHex: '#1e3a8a', 
    text: 'text-blue-100', 
    accent: 'text-yellow-400', 
    font: 'font-mono', 
    border: 'border-blue-400/30',
    highlight: 'bg-yellow-400 text-blue-900'
  },
};

const CorsImg = ({ src, className, alt }: { src: string | undefined; className?: string; alt?: string }) => {
  const [imgData, setImgData] = useState<string | null>(null);

  useEffect(() => {
    if (!src) return;
    let isMounted = true;
    const load = async () => {
      try {
        const response = await fetch(src);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => { if (isMounted) setImgData(reader.result as string); };
        reader.readAsDataURL(blob);
      } catch {
        try {
          const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(src)}`;
          const res = await fetch(proxy);
          const blob = await res.blob();
          const reader = new FileReader();
          reader.onloadend = () => { if (isMounted) setImgData(reader.result as string); };
          reader.readAsDataURL(blob);
        } catch (e) { console.error(e); }
      }
    };
    load();
    return () => { isMounted = false; };
  }, [src]);

  if (!imgData) return <div className={`${className} bg-stone-800 animate-pulse`} />;
  return <img src={imgData} alt={alt} className={className} />;
};

// Simple Barcode Generator Visual
const Barcode = ({ className }: { className?: string }) => (
  <div className={`flex items-stretch h-full w-full gap-[2px] ${className}`}>
    {[...Array(25)].map((_, i) => (
      <div 
        key={i} 
        className="bg-current opacity-80" 
        style={{ 
          width: Math.random() > 0.6 ? '4px' : Math.random() > 0.3 ? '2px' : '1px',
          flexGrow: Math.random() > 0.8 ? 1 : 0
        }} 
      />
    ))}
  </div>
);

export const MovieTicket = ({ match, tracks, artists, userName }: Props) => {
  const [activeTab, setActiveTab] = useState<Tab>('soundtrack');
  const [currentTheme, setCurrentTheme] = useState<Theme>('classic');
  const [isDownloading, setIsDownloading] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);

  const theme = THEME_CONFIG[currentTheme];
  const isDark = currentTheme === 'midnight' || currentTheme === 'blueprint';

  // Process Genres
  const allGenres = artists.flatMap((a) => a.genres || []);
  const genreCounts: Record<string, number> = {};
  allGenres.forEach((g) => { genreCounts[g] = (genreCounts[g] || 0) + 1; });
  const topGenres = Object.entries(genreCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([g]) => g);

  const handleDownload = useCallback(async () => {
    if (!ticketRef.current) return;
    setIsDownloading(true);
    try {
      await new Promise((r) => setTimeout(r, 150));
      const dataUrl = await toPng(ticketRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: theme.bgHex,
      });
      const link = document.createElement('a');
      link.download = `Sinetify_TICKET_${match.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      alert('Download failed. Please screenshot!');
    } finally {
      setIsDownloading(false);
    }
  }, [match.title, theme.bgHex]);

  return (
    <div className="w-full flex flex-col items-center gap-6 animate-in slide-in-from-bottom-8 duration-700 font-sans">
      
      {/* THEME SELECTOR */}
      <div className="flex gap-4 p-2 bg-stone-900/90 backdrop-blur rounded-full border border-stone-700 shadow-xl z-50">
        {(Object.keys(THEME_CONFIG) as Theme[]).map((t) => (
          <button
            key={t}
            onClick={() => setCurrentTheme(t)}
            className={`w-6 h-6 rounded-full border-2 transition-all ${
              currentTheme === t ? 'border-white scale-110 ring-2 ring-white/20' : 'border-transparent opacity-40 hover:opacity-100'
            }`}
            style={{ backgroundColor: THEME_CONFIG[t].bgHex }}
          />
        ))}
        <div className="w-px h-6 bg-stone-700" />
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="text-white hover:text-red-500 transition disabled:opacity-50"
        >
          {isDownloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
        </button>
      </div>

      {/* --- TICKET CONTAINER --- */}
      <div
        ref={ticketRef}
        className={`relative aspect-[9/16] w-full max-w-[400px] shadow-2xl overflow-hidden flex flex-col ${theme.text} ${theme.font}`}
        style={{ backgroundColor: theme.bgHex }}
      >
        {/* 1. BACKGROUND POSTER (Top 70%) */}
        <div className="absolute top-0 left-0 w-full h-[70%] z-0">
          <CorsImg
            src={match.posterPath}
            alt="Poster"
            className="w-full h-full object-cover object-top opacity-90"
          />
        </div>

        {/* 2. GRADIENT OVERLAY & TEXTURE */}
        {/* Starts fading at 50% (transparent), solid by 75% */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, transparent 45%, ${theme.bgHex} 75%, ${theme.bgHex} 100%)`
          }}
        />
        
        {/* Optional Noise/Grain Texture for "Paper" feel */}
        <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />

        {/* 3. CONTENT LAYER */}
        <div className="relative z-30 flex flex-col h-full">
          
          {/* Top Half (Empty to show poster) */}
          <div className="h-[55%]" />

          {/* Bottom Half (Data) */}
          <div className="flex-1 flex flex-col px-6 pb-6 pt-2">
            
            {/* Header Info */}
            <div className="mb-4 text-center">
              <span className={`inline-block px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] mb-2 border ${theme.border} rounded-sm opacity-70`}>
                Now Showing
              </span>
              <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter mb-2 line-clamp-2">
                {match.title}
              </h1>
              <div className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-wider opacity-60">
                 <span>{match.genre}</span>
                 <span>•</span>
                 <span>Admit One</span>
              </div>
            </div>

            {/* Dotted Line */}
            <div className={`w-full border-t-2 border-dashed ${theme.border} opacity-50 my-2`} />

            {/* Selection Tabs */}
            <div className="flex justify-between mb-4 px-2">
              <button onClick={() => setActiveTab('soundtrack')} className={`p-2 transition hover:opacity-100 ${activeTab === 'soundtrack' ? 'opacity-100 scale-110' : 'opacity-40 grayscale'}`}>
                 <Disc size={18} />
              </button>
              <button onClick={() => setActiveTab('cast')} className={`p-2 transition hover:opacity-100 ${activeTab === 'cast' ? 'opacity-100 scale-110' : 'opacity-40 grayscale'}`}>
                 <Users size={18} />
              </button>
              <button onClick={() => setActiveTab('genres')} className={`p-2 transition hover:opacity-100 ${activeTab === 'genres' ? 'opacity-100 scale-110' : 'opacity-40 grayscale'}`}>
                 <Tag size={18} />
              </button>
            </div>

            {/* Dynamic Content Area */}
            <div className="flex-1 overflow-hidden relative">
              
              {activeTab === 'soundtrack' && (
                 <div className="space-y-2 h-full">
                    {tracks.slice(0, 5).map((t, i) => (
                      <div key={i} className="flex items-baseline justify-between w-full text-[11px] font-medium border-b border-current/10 pb-1">
                        <div className="flex items-center gap-2 truncate max-w-[70%]">
                           <span className={`text-[9px] font-bold opacity-40 w-3`}>{i + 1}</span>
                           <span className="uppercase tracking-tight truncate">{t.name}</span>
                        </div>
                        <span className="text-[9px] opacity-50 truncate max-w-[25%]">{t.artists[0].name}</span>
                      </div>
                    ))}
                 </div>
              )}

              {activeTab === 'cast' && (
                <div className="grid grid-cols-4 gap-2">
                   {artists.slice(0, 8).map((a, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className={`w-10 h-10 rounded-sm overflow-hidden grayscale contrast-125 ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                           {a.images?.[0]?.url ? (
                             <CorsImg src={a.images[0].url} className="w-full h-full object-cover" />
                           ) : (
                             <div className="w-full h-full flex items-center justify-center text-[8px] font-bold opacity-30">N/A</div>
                           )}
                        </div>
                        <span className="text-[8px] uppercase font-bold truncate w-full text-center opacity-70">{a.name.split(' ')[0]}</span>
                      </div>
                   ))}
                </div>
              )}

              {activeTab === 'genres' && (
                <div className="flex flex-wrap gap-2 content-start justify-center pt-2">
                  {topGenres.map((g, i) => (
                    <span key={i} className={`px-3 py-1 text-[10px] font-bold uppercase border ${theme.border} ${i === 0 ? theme.highlight : 'opacity-70'}`}>
                      {g}
                    </span>
                  ))}
                </div>
              )}

            </div>

            {/* Footer / Barcode Area */}
            <div className="mt-auto pt-4 flex flex-col gap-2">
               <div className="flex justify-between items-end opacity-50 text-[9px] font-mono uppercase">
                  <span>Issued: {new Date().toLocaleDateString()}</span>
                  <span>{userName}</span>
               </div>
               <div className="h-8 w-full opacity-80">
                 <Barcode />
               </div>
               <div className="flex justify-between text-[7px] uppercase font-bold tracking-[0.2em] opacity-40 leading-none">
                  <span>Sinetify Ticket System</span>
                  <span>Row A • Seat 12</span>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};