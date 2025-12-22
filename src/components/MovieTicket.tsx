import { useState, useEffect, useRef, useCallback } from 'react';
import { Quote, Download,  Loader2 } from 'lucide-react';
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

const THEME_CONFIG: Record<Theme, { bgHex: string; text: string; accent: string; font: string; border: string }> = {
  classic:   { bgHex: '#f4f4f0', text: 'text-stone-900', accent: 'text-red-600', font: 'font-mono', border: 'border-stone-300' },
  midnight:  { bgHex: '#000000', text: 'text-white', accent: 'text-cyan-400', font: 'font-sans', border: 'border-stone-800' },
  retro:     { bgHex: '#fdf6e3', text: 'text-amber-900', accent: 'text-orange-600', font: 'font-serif', border: 'border-amber-200' },
  blueprint: { bgHex: '#172554', text: 'text-blue-50', accent: 'text-yellow-400', font: 'font-mono', border: 'border-blue-700' },
};

const CorsImg = ({ src, className, alt }: { src: string | undefined, className?: string, alt?: string }) => {
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

export const MovieTicket = ({ match, tracks, artists, userName }: Props) => {
  const [activeTab, setActiveTab] = useState<Tab>('soundtrack');
  const [currentTheme, setCurrentTheme] = useState<Theme>('classic');
  const [isDownloading, setIsDownloading] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);
  const theme = THEME_CONFIG[currentTheme];

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
        pixelRatio: 3,
        // FIX: Force the background color to match the theme (prevents black background)
        backgroundColor: theme.bgHex, 
        style: { transform: 'none' }
      });
      const link = document.createElement('a');
      link.download = `Sinetify_${match.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) { alert("Download failed. Try screenshotting!"); } finally { setIsDownloading(false); }
  }, [match.title, theme.bgHex]);

  return (
    <div className="w-full flex flex-col items-center gap-6 animate-in slide-in-from-bottom-8 duration-700">
      
      {/* TOOLBAR */}
      <div className="flex gap-3 p-3 bg-stone-900/90 backdrop-blur rounded-full border border-stone-800 shadow-2xl z-50">
        {(Object.keys(THEME_CONFIG) as Theme[]).map((t) => (
          <button
            key={t}
            onClick={() => setCurrentTheme(t)}
            className={`w-6 h-6 rounded-full border-2 transition-all ${currentTheme === t ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
            style={{ backgroundColor: t === 'classic' ? '#f4f4f0' : t === 'midnight' ? '#000' : t === 'retro' ? '#fdf6e3' : '#172554' }}
          />
        ))}
        <div className="w-px h-6 bg-stone-700 mx-1" />
        <button onClick={handleDownload} disabled={isDownloading} className="text-white hover:text-red-500 transition disabled:opacity-50">
          {isDownloading ? <Loader2 size={20} className="animate-spin" /> : <Download size={20} />}
        </button>
      </div>

      {/* --- THE TICKET (9:16 Story Format) --- */}
      <div 
        ref={ticketRef}
        className={`relative aspect-[9/16] w-full max-w-[380px] shadow-2xl overflow-hidden flex flex-col rounded-[24px] ${theme.text} ${theme.font}`}
        style={{ backgroundColor: theme.bgHex }}
      >
        
        {/* === POSTER SECTION (Top 40%) - Reduced size to give list more room === */}
        <div className="h-[40%] relative bg-black overflow-hidden z-0">
          <CorsImg 
            src={match.posterPath} 
            alt="Poster"
            className="w-full h-full object-cover object-center" 
          />
          
          {/* Blend Gradient */}
          <div 
            className="absolute inset-x-0 bottom-0 h-32 z-10"
            style={{ background: `linear-gradient(to top, ${theme.bgHex} 15%, transparent)` }}
          />
          
          {/* Quote */}
          <div className="absolute bottom-4 left-6 right-6 z-20">
             <div className="flex items-center gap-2 opacity-80 mb-1">
                 <Quote size={12} className={currentTheme === 'classic' || currentTheme === 'retro' ? 'text-stone-900' : 'text-white'} />
             </div>
             <p className={`text-lg font-serif italic leading-tight drop-shadow-md opacity-90 ${currentTheme === 'classic' || currentTheme === 'retro' ? 'text-stone-900' : 'text-white'}`}>
                "{match.quote}"
             </p>
          </div>
        </div>

        {/* === DATA SECTION (Bottom 60%) - Expanded for readability === */}
        <div className="flex-1 relative z-10 flex flex-col px-6 pb-5 pt-2">
          
          {/* Divider */}
          <div className="w-full border-t-2 border-dashed border-current/20 mb-4 relative">
             <div className="absolute -left-9 -top-3 w-6 h-6 rounded-full bg-stone-950" /> 
             <div className="absolute -right-9 -top-3 w-6 h-6 rounded-full bg-stone-950" />
          </div>

          {/* Title Header */}
          <div className="mb-4 flex justify-between items-start">
            <div className="w-[80%]">
               <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-1 line-clamp-2">
                 {match.title}
               </h1>
               <span className={`inline-block text-[10px] font-bold uppercase tracking-widest ${theme.accent}`}>
                 {match.genre}
               </span>
            </div>
            {/* Minimal Stamp */}
            <div className="border border-current/30 rounded p-1 text-center opacity-50">
               <div className="text-[7px] uppercase font-black leading-none">ADMIT</div>
               <div className="text-[7px] uppercase font-black leading-none">ONE</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex w-full border-b border-current/10 text-[10px] font-bold uppercase tracking-widest mb-3">
             <button onClick={() => setActiveTab('soundtrack')} className={`flex-1 pb-2 hover:opacity-100 transition text-left ${activeTab === 'soundtrack' ? 'opacity-100 border-b-2 border-current' : 'opacity-40'}`}>Tracks</button>
             <button onClick={() => setActiveTab('cast')} className={`flex-1 pb-2 hover:opacity-100 transition text-center ${activeTab === 'cast' ? 'opacity-100 border-b-2 border-current' : 'opacity-40'}`}>Cast</button>
             <button onClick={() => setActiveTab('genres')} className={`flex-1 pb-2 hover:opacity-100 transition text-right ${activeTab === 'genres' ? 'opacity-100 border-b-2 border-current' : 'opacity-40'}`}>Genres</button>
          </div>

          {/* List Content - BIGGER TEXT */}
          <div className="flex-1 overflow-hidden">
             {activeTab === 'soundtrack' && (
               <div className="flex flex-col justify-between h-full pb-2">
                 {tracks.slice(0, 10).map((t, i) => (
                   <div key={i} className="flex justify-between items-center text-xs w-full py-[2px]">
                     <div className="flex items-center gap-3 overflow-hidden w-[70%]">
                       <span className="font-mono opacity-40 text-[10px] w-4 flex-shrink-0">{i+1}.</span>
                       {/* Increased font weight and size slightly */}
                       <span className="font-bold truncate text-[11px]">{t.name}</span>
                     </div>
                     <span className="opacity-60 text-[10px] truncate w-[25%] text-right">{t.artists[0].name}</span>
                   </div>
                 ))}
               </div>
             )}

             {activeTab === 'cast' && (
                <div className="grid grid-cols-2 gap-3 content-start pt-2">
                   {artists.slice(0, 8).map((a, i) => (
                     <div key={i} className="flex items-center gap-3 bg-black/5 p-2 rounded-md">
                       {a.images?.[0]?.url && <CorsImg src={a.images[0].url} className="w-8 h-8 rounded-full grayscale object-cover" />}
                       <span className="text-[10px] font-bold uppercase truncate">{a.name}</span>
                     </div>
                   ))}
                </div>
             )}

             {activeTab === 'genres' && (
                <div className="flex flex-wrap gap-2 content-start pt-2">
                   {topGenres.map((g, i) => (
                     <span key={i} className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider border border-current/20 rounded-sm">
                       {g}
                     </span>
                   ))}
                </div>
             )}
          </div>

          {/* Footer */}
          <div className="mt-2 pt-3 border-t border-dashed border-current/10 opacity-40 flex justify-between items-end">
             <div className="flex flex-col">
                <span className="text-[7px] uppercase tracking-widest font-bold">Issued To</span>
                <span className="text-[7px] font-mono">{userName}</span>
             </div>
             <div className="h-5 flex items-stretch gap-[2px]">
                {[...Array(20)].map((_, i) => (
                   <div key={i} className="bg-current" style={{ width: Math.random() > 0.5 ? '2px' : '1px' }} />
                ))}
             </div>
          </div>

        </div>
      </div>
      
      <p className="text-[10px] text-stone-500 uppercase tracking-widest animate-pulse pb-10">
        Ready for IG Stories
      </p>
    </div>
  );
};