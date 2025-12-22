import { useState, useEffect, useRef, useCallback } from 'react';
import { Download, Loader2 } from 'lucide-react';
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
    bgHex: '#e8e8e3', 
    text: 'text-stone-900', 
    accent: 'text-red-700', 
    font: 'font-mono', 
    border: 'border-stone-400',
    highlight: 'bg-stone-900 text-stone-100',
    panel: 'bg-stone-200'
  },
  midnight: { 
    bgHex: '#0a0a0a', 
    text: 'text-stone-100', 
    accent: 'text-cyan-400', 
    font: 'font-sans', 
    border: 'border-stone-800',
    highlight: 'bg-white text-black',
    panel: 'bg-stone-900'
  },
  retro: { 
    bgHex: '#fdf6e3', 
    text: 'text-amber-950', 
    accent: 'text-orange-700', 
    font: 'font-serif', 
    border: 'border-amber-900/20',
    highlight: 'bg-amber-900 text-amber-50',
    panel: 'bg-amber-100'
  },
  blueprint: { 
    bgHex: '#1e3a8a', 
    text: 'text-blue-100', 
    accent: 'text-yellow-400', 
    font: 'font-mono', 
    border: 'border-blue-400/30',
    highlight: 'bg-yellow-400 text-blue-900',
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
    {[...Array(26)].map((_, i) => (
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
            // NOTCH MASK - Placed lower (75%) to separate list from footer
            maskImage: `radial-gradient(circle at 0% 75%, transparent 12px, black 13px), 
                        radial-gradient(circle at 100% 75%, transparent 12px, black 13px)`,
            WebkitMaskImage: `radial-gradient(circle at 0% 75%, transparent 12px, black 13px), 
                              radial-gradient(circle at 100% 75%, transparent 12px, black 13px)`
          }}
        >
          {/* --- POSTER BACKGROUND (Deep Backdrop) --- */}
          {/* It takes up 75% of the ticket height */}
          <div className="absolute top-0 left-0 w-full h-[75%] z-0">
             <CorsImg
               src={match.posterPath}
               alt="Poster"
               className="w-full h-full object-cover object-top"
             />
             {/* THE FADE:
                Starts transparent, fades to theme color.
                This allows text to sit ON TOP of the image comfortably.
             */}
             <div 
               className="absolute inset-0"
               style={{
                 background: `linear-gradient(to bottom, transparent 20%, ${theme.bgHex} 90%, ${theme.bgHex} 100%)`
               }}
             />
          </div>

          {/* Texture Overlay */}
          <div className="absolute inset-0 z-10 opacity-[0.05] pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
          />

          {/* --- CONTENT LAYER --- */}
          {/* Z-20 ensures this sits ON TOP of the poster and gradient */}
          <div className="relative z-20 flex flex-col h-full px-6 pt-6 pb-4">

            {/* 1. Header Area */}
            <div className="flex justify-between items-start mb-2">
                <div className={`px-2 py-0.5 ${isDark ? 'bg-white text-black' : 'bg-black text-white'} text-[9px] font-black uppercase tracking-[0.25em] shadow-lg`}>
                    Now Showing
                </div>
                {/* Admit One Stamp */}
                <div className={`px-2 py-1 ${theme.highlight} font-mono text-[9px] font-bold uppercase tracking-tighter rotate-[-6deg] shadow-lg border-2 border-dashed border-current/20`}>
                    ADMIT ONE
                </div>
            </div>

            {/* Spacer to push content down slightly */}
            <div className="h-[25%] shrink-0" />

            {/* 2. TAB SELECTION (Sitting ON the poster) */}
            <div className="flex w-full text-[11px] font-black uppercase tracking-widest mb-4 drop-shadow-md">
                <button
                  onClick={() => setActiveTab('soundtrack')}
                  className={`flex-1 pb-1 text-left transition ${
                    activeTab === 'soundtrack' ? 'opacity-100 border-b-2 border-current' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  Tracks
                </button>
                <button
                  onClick={() => setActiveTab('cast')}
                  className={`flex-1 pb-1 text-center transition ${
                    activeTab === 'cast' ? 'opacity-100 border-b-2 border-current' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  Cast
                </button>
                <button
                  onClick={() => setActiveTab('genres')}
                  className={`flex-1 pb-1 text-right transition ${
                    activeTab === 'genres' ? 'opacity-100 border-b-2 border-current' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  Genres
                </button>
            </div>

            {/* 3. MAIN LIST (Overlapping Fade) */}
            <div className="flex-1 overflow-hidden">
                {activeTab === 'soundtrack' && (
                    <div className="flex flex-col gap-2.5">
                      {tracks.slice(0, 7).map((t, i) => (
                        <div 
                          key={i} 
                          className="flex items-baseline justify-between w-full text-[12px] leading-none drop-shadow-md group"
                        >
                          <div className="flex items-center gap-3 truncate max-w-[75%]">
                              {/* Index */}
                              <span className="font-mono text-[10px] opacity-60 w-3 text-right">{i + 1}</span>
                              {/* Title */}
                              <span className="font-bold uppercase tracking-tight truncate opacity-100 group-hover:text-red-500 transition-colors">
                                {t.name}
                              </span>
                          </div>
                          {/* Artist */}
                          <span className="text-[10px] font-medium opacity-70 truncate max-w-[20%] text-right">
                            {t.artists[0].name}
                          </span>
                        </div>
                      ))}
                    </div>
                )}
                
                {activeTab === 'cast' && (
                    <div className="grid grid-cols-4 gap-3 pt-2">
                      {artists.slice(0, 8).map((a, i) => (
                          <div key={i} className="flex flex-col items-center gap-1 drop-shadow-sm">
                            <div className={`w-11 h-11 rounded-full overflow-hidden grayscale ${theme.panel} ring-2 ring-white/10 shadow-lg`}>
                              {a.images?.[0]?.url && <CorsImg src={a.images[0].url} className="w-full h-full object-cover" />}
                            </div>
                            <span className="text-[7px] font-bold uppercase truncate max-w-full opacity-90">{a.name.split(' ')[0]}</span>
                          </div>
                      ))}
                    </div>
                )}

                {activeTab === 'genres' && (
                  <div className="flex flex-wrap gap-2 content-start pt-4 justify-center">
                    {topGenres.map((g, i) => (
                      <span key={i} className={`px-3 py-1.5 text-[10px] font-bold uppercase border ${theme.border} backdrop-blur-sm shadow-sm ${i < 2 ? theme.highlight : 'opacity-80 bg-current/5'}`}>
                        {g}
                      </span>
                    ))}
                  </div>
                )}
            </div>

            {/* 4. PERFORATION & FOOTER */}
            {/* Matches the mask position at 75% */}
            <div className="relative w-full py-4 flex items-center justify-center">
               <div className={`w-full border-t-[3px] border-dashed ${theme.border} opacity-40`} />
            </div>

            {/* Footer Data */}
            <div className="flex flex-col gap-2 mt-auto">
                 <div className="flex justify-between items-end opacity-70">
                      <div className="flex flex-col">
                         <span className="text-[7px] uppercase tracking-widest opacity-60">Film</span>
                         <span className="text-[11px] font-black uppercase leading-none max-w-[150px] truncate">{match.title}</span>
                      </div>
                      <div className="flex flex-col items-end">
                         <span className="text-[7px] uppercase tracking-widest opacity-60">Seat</span>
                         <span className="text-[11px] font-mono font-bold leading-none">A-12</span>
                      </div>
                 </div>

                 <div className="h-8 w-full opacity-60">
                    <Barcode />
                 </div>
                 
                 <div className="flex justify-between text-[7px] uppercase font-bold tracking-[0.2em] opacity-40">
                     <span>{userName}</span>
                     <span>{new Date().toLocaleDateString()}</span>
                 </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};