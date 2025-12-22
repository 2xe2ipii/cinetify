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

// THEMES: 'bg' is the color of the bottom stub. 'fade' must match 'bg' for the blend to work.
const THEMES: Record<Theme, { bg: string; fade: string; text: string; accent: string; font: string; border: string }> = {
  classic: { bg: 'bg-[#f4f4f0]', fade: 'from-[#f4f4f0]', text: 'text-stone-900', accent: 'text-red-600', font: 'font-mono', border: 'border-stone-300' },
  midnight: { bg: 'bg-black', fade: 'from-black', text: 'text-white', accent: 'text-cyan-400', font: 'font-sans', border: 'border-stone-800' },
  retro: { bg: 'bg-[#fdf6e3]', fade: 'from-[#fdf6e3]', text: 'text-amber-900', accent: 'text-orange-600', font: 'font-serif', border: 'border-amber-200' },
  blueprint: { bg: 'bg-blue-900', fade: 'from-blue-900', text: 'text-blue-50', accent: 'text-yellow-400', font: 'font-mono', border: 'border-blue-700' },
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
        // Fallback proxy
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
  const theme = THEMES[currentTheme];

  const allGenres = artists.flatMap(a => a.genres || []);
  const genreCounts: Record<string, number> = {};
  allGenres.forEach(g => { genreCounts[g] = (genreCounts[g] || 0) + 1; });
  const topGenres = Object.entries(genreCounts).sort(([, a], [, b]) => b - a).slice(0, 6).map(([g]) => g);

  const handleDownload = useCallback(async () => {
    if (!ticketRef.current) return;
    setIsDownloading(true);
    try {
      await new Promise(r => setTimeout(r, 100));
      const dataUrl = await toPng(ticketRef.current, {
        cacheBust: true, pixelRatio: 3, backgroundColor: 'transparent', style: { transform: 'none' }
      });
      const link = document.createElement('a');
      link.download = `Sinetify_${match.title.replace(/[^a-z0-9]/gi, '_')}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) { alert("Try screenshotting instead!"); } finally { setIsDownloading(false); }
  }, [match.title]);

  return (
    <div className="w-full flex flex-col items-center gap-6 animate-in slide-in-from-bottom-8 duration-700">
      
      {/* TOOLBAR */}
      <div className="flex gap-3 p-3 bg-stone-900/90 backdrop-blur rounded-full border border-stone-800 shadow-2xl z-50">
        {(Object.keys(THEMES) as Theme[]).map((t) => (
          <button
            key={t}
            onClick={() => setCurrentTheme(t)}
            className={`w-6 h-6 rounded-full border-2 transition-all ${currentTheme === t ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
            style={{ backgroundColor: t === 'classic' ? '#f4f4f0' : t === 'midnight' ? '#000' : t === 'retro' ? '#fdf6e3' : '#1e3a8a' }}
          />
        ))}
        <div className="w-px h-6 bg-stone-700 mx-1" />
        <button onClick={handleDownload} disabled={isDownloading} className="text-white hover:text-red-500 transition disabled:opacity-50">
          {isDownloading ? <Loader2 size={20} className="animate-spin" /> : <Download size={20} />}
        </button>
      </div>

      {/* --- THE TICKET (Fixed 9:16 Ratio) --- */}
      <div 
        ref={ticketRef}
        className={`relative aspect-[9/16] w-full max-w-[380px] shadow-2xl overflow-hidden flex flex-col rounded-[24px] ${theme.bg} ${theme.text} ${theme.font}`}
      >
        
        {/* === TOP SECTION: POSTER (3/5 Height) === */}
        <div className="h-[58%] relative bg-black overflow-hidden z-0">
          <CorsImg 
            src={match.posterPath} 
            alt="Poster"
            className="w-full h-full object-cover object-top" 
          />
          
          {/* THE BLEND: Gradient matches the ticket body color exactly */}
          <div className={`absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t ${theme.fade} to-transparent`} />
          
          {/* Overlay Text inside the gradient area */}
          <div className="absolute bottom-4 left-6 right-6 z-10">
             <div className="flex items-center gap-2 opacity-70 mb-2">
                 <Quote size={12} />
                 <span className="text-[9px] uppercase tracking-widest font-bold">Vibe Check</span>
             </div>
             <p className="text-lg md:text-xl font-serif italic leading-tight drop-shadow-md opacity-90">
                "{match.quote}"
             </p>
          </div>
        </div>

        {/* === BOTTOM SECTION: DATA STUB (2/5 Height) === */}
        <div className="flex-1 relative z-10 flex flex-col px-6 pb-6 pt-2">
          
          {/* Visual Divider: Perforation Line */}
          <div className="w-full border-t-2 border-dashed border-current/20 mb-4 relative">
             {/* Side Notches (The "Ticket" Look) */}
             <div className="absolute -left-9 -top-3 w-6 h-6 rounded-full bg-stone-950" /> 
             <div className="absolute -right-9 -top-3 w-6 h-6 rounded-full bg-stone-950" />
          </div>

          {/* Title Header */}
          <div className="mb-4">
             <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2 line-clamp-2">
               {match.title}
             </h1>
             <div className="flex justify-between items-center">
               <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest border border-current/20 rounded ${theme.accent}`}>
                 {match.genre}
               </span>
               <div className="flex items-center gap-1 opacity-40">
                  <TicketIcon size={10} />
                  <span className="text-[9px] font-black tracking-widest">ADMIT ONE</span>
               </div>
             </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mb-4 text-[9px] font-bold uppercase tracking-widest border-b border-current/10 pb-2">
             <button onClick={() => setActiveTab('soundtrack')} className={`hover:opacity-100 transition ${activeTab === 'soundtrack' ? 'opacity-100 underline decoration-2 underline-offset-4' : 'opacity-40'}`}>Tracks</button>
             <button onClick={() => setActiveTab('cast')} className={`hover:opacity-100 transition ${activeTab === 'cast' ? 'opacity-100 underline decoration-2 underline-offset-4' : 'opacity-40'}`}>Cast</button>
             <button onClick={() => setActiveTab('themes')} className={`hover:opacity-100 transition ${activeTab === 'themes' ? 'opacity-100 underline decoration-2 underline-offset-4' : 'opacity-40'}`}>Themes</button>
          </div>

          {/* Data List (Scroll-free) */}
          <div className="flex-1">
             {activeTab === 'soundtrack' && (
               <div className="space-y-2">
                 {tracks.slice(0, 5).map((t, i) => (
                   <div key={i} className="flex justify-between items-center text-[11px] border-b border-current/5 pb-1 last:border-0">
                     <div className="flex items-center gap-2 overflow-hidden">
                       <span className="font-mono opacity-30 text-[9px]">0{i+1}</span>
                       <span className="font-bold truncate max-w-[140px]">{t.name}</span>
                     </div>
                     <span className="opacity-50 text-[9px] truncate max-w-[70px]">{t.artists[0].name}</span>
                   </div>
                 ))}
               </div>
             )}

             {activeTab === 'cast' && (
                <div className="grid grid-cols-2 gap-2">
                   {artists.slice(0, 6).map((a, i) => (
                     <div key={i} className="flex items-center gap-2 bg-black/5 p-1.5 rounded-md">
                       {a.images?.[0]?.url && <CorsImg src={a.images[0].url} className="w-5 h-5 rounded-full grayscale object-cover" />}
                       <span className="text-[9px] font-bold uppercase truncate">{a.name}</span>
                     </div>
                   ))}
                </div>
             )}

             {activeTab === 'themes' && (
                <div className="flex flex-wrap gap-1.5 content-start">
                   {topGenres.map((g, i) => (
                     <span key={i} className="px-2 py-1 text-[9px] font-bold uppercase tracking-wider border border-current/20 rounded-sm">
                       {g}
                     </span>
                   ))}
                </div>
             )}
          </div>

          {/* Footer Barcode */}
          <div className="mt-auto pt-2 opacity-30 flex justify-between items-end">
             <span className="text-[8px] tracking-[0.2em] uppercase">{userName}</span>
             <div className="h-5 flex items-stretch gap-[1px] overflow-hidden">
                {[...Array(30)].map((_, i) => (
                   <div key={i} className="bg-current" style={{ width: Math.random() > 0.5 ? '2px' : '1px' }} />
                ))}
             </div>
          </div>

        </div>
      </div>
      
      <p className="text-[10px] text-stone-500 uppercase tracking-widest animate-pulse pb-10">
        Ready to Share
      </p>
    </div>
  );
};