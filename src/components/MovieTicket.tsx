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
  { bgHex: string; text: string; accent: string; font: string; border: string; highlight: string; panel: string }
> = {
  classic: { 
    bgHex: '#e6e6e6', 
    text: 'text-stone-900', 
    accent: 'text-red-700', 
    font: 'font-mono', 
    border: 'border-stone-400',
    highlight: 'bg-stone-900 text-stone-100',
    panel: 'bg-stone-200'
  },
  midnight: { 
    bgHex: '#080808', 
    text: 'text-stone-100', 
    accent: 'text-cyan-400', 
    font: 'font-sans', 
    border: 'border-stone-700',
    highlight: 'bg-white text-black',
    panel: 'bg-stone-900'
  },
  retro: { 
    bgHex: '#f4ecd8', 
    text: 'text-amber-950', 
    accent: 'text-orange-700', 
    font: 'font-serif', 
    border: 'border-amber-900/30',
    highlight: 'bg-amber-900 text-amber-50',
    panel: 'bg-amber-100'
  },
  blueprint: { 
    bgHex: '#172554', 
    text: 'text-blue-50', 
    accent: 'text-yellow-400', 
    font: 'font-mono', 
    border: 'border-blue-400/40',
    highlight: 'bg-yellow-400 text-blue-950',
    panel: 'bg-blue-900/50'
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

  if (!imgData) return <div className={`${className} bg-white/10 animate-pulse`} />;
  return <img src={imgData} alt={alt} className={className} />;
};

const Barcode = ({ className }: { className?: string }) => (
  <div className={`flex items-stretch h-full w-full gap-[3px] ${className}`}>
    {[...Array(24)].map((_, i) => (
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

export const MovieTicket = ({ match, tracks, artists }: Props) => {
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
    .slice(0, 8)
    .map(([g]) => g);

  const handleDownload = useCallback(async () => {
    if (!ticketRef.current) return;
    setIsDownloading(true);
    try {
      await new Promise((r) => setTimeout(r, 200));
      const dataUrl = await toPng(ticketRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: 'transparent', 
      });
      const link = document.createElement('a');
      link.download = `Sinetify_${match.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error(e);
      alert('Download failed. Try screenshotting!');
    } finally {
      setIsDownloading(false);
    }
  }, [match.title]);

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
      <div className="relative drop-shadow-2xl">
        <div
          ref={ticketRef}
          className={`relative aspect-[9/16] w-full max-w-[380px] overflow-hidden flex flex-col ${theme.text} ${theme.font}`}
          style={{ 
            backgroundColor: theme.bgHex,
            // NOTCH MASK: Moved to 62% to prioritize poster space
            maskImage: `radial-gradient(circle at 0% 62%, transparent 12px, black 13px), 
                        radial-gradient(circle at 100% 62%, transparent 12px, black 13px)`,
            WebkitMaskImage: `radial-gradient(circle at 0% 62%, transparent 12px, black 13px), 
                              radial-gradient(circle at 100% 62%, transparent 12px, black 13px)`
          }}
        >
          {/* --- POSTER BACKGROUND (Top 65%) --- */}
          <div className="absolute top-0 left-0 w-full h-[65%] z-0">
             <CorsImg
               src={match.posterPath}
               alt="Poster"
               className="w-full h-full object-cover object-top"
             />
             {/* GRADIENT FIX: Starts fading at 55% instead of 30% */}
             <div 
               className="absolute inset-0"
               style={{
                 background: `linear-gradient(to bottom, transparent 55%, ${theme.bgHex} 90%, ${theme.bgHex} 100%)`
               }}
             />
          </div>

          {/* Paper Texture */}
          <div className="absolute inset-0 z-10 opacity-[0.06] pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
          />

          {/* --- CONTENT LAYOUT --- */}
          <div className="relative z-20 flex flex-col h-full">

            {/* TOP SECTION (Poster Area) */}
            <div className="h-[62%] p-5 flex flex-col justify-between">
               {/* Header Badge */}
               <div className="flex justify-center mt-3">
                 <div className={`px-2 py-0.5 ${isDark ? 'bg-white text-black' : 'bg-black text-white'} text-[9px] font-black uppercase tracking-[0.25em] shadow-lg`}>
                    Now Showing
                 </div>
               </div>
               
               {/* Bottom Badges (Genre / Admit One) */}
               <div className="w-full flex justify-between items-end pb-2">
                  <div className={`px-2 py-1 ${theme.panel} backdrop-blur-md border ${theme.border} rounded-sm shadow-sm`}>
                     <p className="text-[9px] font-bold uppercase tracking-wider opacity-90 leading-none">
                        {match.genre.split('/')[0]}
                     </p>
                  </div>
                  
                  <div className={`px-2 py-1 ${theme.highlight} font-mono text-[9px] font-bold uppercase tracking-tighter -rotate-3 shadow-lg`}>
                     ADMIT ONE
                  </div>
               </div>
            </div>

            {/* --- PERFORATION LINE (Matched to Notch at 62%) --- */}
            <div className="relative w-full h-[2px] flex items-center justify-center">
               <div className={`w-[88%] border-t-[3px] border-dashed ${theme.border} opacity-50`} />
            </div>

            {/* --- DATA STUB (Bottom 38%) --- */}
            <div className="flex-1 flex flex-col px-5 pt-1 pb-3 bg-gradient-to-b from-transparent to-black/5">
              
              {/* COMPACT NAV */}
              <div className="flex justify-between items-center mb-1 border-b border-current/10 pb-1">
                 <div className="flex gap-4">
                    <button onClick={() => setActiveTab('soundtrack')} className={`transition hover:opacity-100 ${activeTab === 'soundtrack' ? 'opacity-100 scale-105' : 'opacity-40'}`}>
                      <Disc size={15} />
                    </button>
                    <button onClick={() => setActiveTab('cast')} className={`transition hover:opacity-100 ${activeTab === 'cast' ? 'opacity-100 scale-105' : 'opacity-40'}`}>
                      <Users size={15} />
                    </button>
                    <button onClick={() => setActiveTab('genres')} className={`transition hover:opacity-100 ${activeTab === 'genres' ? 'opacity-100 scale-105' : 'opacity-40'}`}>
                      <Tag size={15} />
                    </button>
                 </div>
                 <span className="text-[7px] font-mono opacity-50 uppercase">{new Date().toLocaleDateString()}</span>
              </div>

              {/* LIST CONTENT */}
              <div className="flex-1 flex flex-col justify-center">
                {activeTab === 'soundtrack' && (
                    <div className="flex flex-col gap-[2px]">
                      {tracks.slice(0, 7).map((t, i) => (
                        <div key={i} className="flex items-center justify-between w-full text-[11px] leading-tight group">
                          <div className="flex items-center gap-2 truncate max-w-[75%]">
                              {/* Index */}
                              <span className="font-mono text-[9px] opacity-40 w-3 text-right group-hover:text-red-500 transition-colors">
                                {i + 1}
                              </span>
                              {/* Title - Bold for readability */}
                              <span className="font-bold uppercase tracking-tight truncate opacity-95">
                                {t.name}
                              </span>
                          </div>
                          {/* Artist - Slightly smaller */}
                          <span className="text-[9px] font-medium opacity-60 truncate max-w-[20%] text-right">
                            {t.artists[0].name}
                          </span>
                        </div>
                      ))}
                    </div>
                )}
                
                {activeTab === 'cast' && (
                    <div className="grid grid-cols-4 gap-2 pt-1">
                      {artists.slice(0, 8).map((a, i) => (
                          <div key={i} className="flex flex-col items-center gap-1">
                            <div className={`w-10 h-10 rounded-full overflow-hidden grayscale ${theme.panel} ring-1 ring-current/10`}>
                              {a.images?.[0]?.url && <CorsImg src={a.images[0].url} className="w-full h-full object-cover" />}
                            </div>
                            <span className="text-[7px] font-bold uppercase truncate max-w-full opacity-80">{a.name.split(' ')[0]}</span>
                          </div>
                      ))}
                    </div>
                )}

                {activeTab === 'genres' && (
                  <div className="flex flex-wrap gap-1.5 content-center justify-center h-full">
                    {topGenres.map((g, i) => (
                      <span key={i} className={`px-2 py-1 text-[9px] font-bold uppercase border ${theme.border} ${i < 2 ? theme.highlight : 'opacity-60 bg-current/5'}`}>
                        {g}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* FOOTER */}
              <div className="mt-1 pt-1.5 flex items-end gap-2 border-t border-dashed border-current/20">
                  <div className="flex-1 flex flex-col justify-end overflow-hidden">
                     <span className="text-[6px] uppercase tracking-widest opacity-40">Film Title</span>
                     <span className="text-[10px] font-black uppercase truncate leading-none">{match.title}</span>
                  </div>
                  
                  {/* Barcode */}
                  <div className="h-5 w-24 opacity-60 shrink-0">
                    <Barcode />
                  </div>

                  <div className="flex flex-col items-end shrink-0">
                     <span className="text-[6px] uppercase tracking-widest opacity-40">Seat</span>
                     <span className="text-[10px] font-mono font-bold leading-none">A-12</span>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};