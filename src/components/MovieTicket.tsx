import { useState, useEffect, useRef, useCallback } from 'react';
import { Download, Ticket as TicketIcon, Loader2 } from 'lucide-react';
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

// THEMES now control the Gradient Color (fade) instead of paper color
const THEMES: Record<Theme, { fade: string; text: string; accent: string; font: string; border: string }> = {
  classic: { fade: 'from-stone-950 via-stone-950/90', text: 'text-stone-100', accent: 'text-red-500', font: 'font-mono', border: 'border-white/20' },
  midnight: { fade: 'from-black via-black/90', text: 'text-white', accent: 'text-cyan-400', font: 'font-sans', border: 'border-stone-800' },
  retro: { fade: 'from-[#2a1b0a] via-[#2a1b0a]/90', text: 'text-orange-50', accent: 'text-orange-400', font: 'font-serif', border: 'border-orange-500/20' },
  blueprint: { fade: 'from-blue-950 via-blue-950/90', text: 'text-blue-50', accent: 'text-yellow-400', font: 'font-mono', border: 'border-blue-500/30' },
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
        } catch (e) { console.error("Image load failed", e); }
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
      link.download = `Sinetify_Story_${match.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) { alert("Download failed. Try screenshotting!"); } finally { setIsDownloading(false); }
  }, [match.title]);

  return (
    <div className="w-full flex flex-col items-center gap-6 animate-in slide-in-from-bottom-8 duration-700">
      
      {/* THEME SELECTOR */}
      <div className="flex gap-3 p-3 bg-stone-900/90 backdrop-blur rounded-full border border-stone-800 shadow-2xl z-50">
        {(Object.keys(THEMES) as Theme[]).map((t) => (
          <button
            key={t}
            onClick={() => setCurrentTheme(t)}
            className={`w-6 h-6 rounded-full border-2 transition-all ${currentTheme === t ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
            style={{ backgroundColor: t === 'classic' ? '#333' : t === 'midnight' ? '#000' : t === 'retro' ? '#4a3b2a' : '#172554' }}
          />
        ))}
        <div className="w-px h-6 bg-stone-700 mx-1" />
        <button onClick={handleDownload} disabled={isDownloading} className="text-white hover:text-red-500 transition disabled:opacity-50">
          {isDownloading ? <Loader2 size={20} className="animate-spin" /> : <Download size={20} />}
        </button>
      </div>

      {/* --- THE TICKET (9:16 Aspect Ratio) --- */}
      <div 
        ref={ticketRef}
        className={`relative aspect-[9/16] w-full max-w-[400px] shadow-2xl overflow-hidden rounded-[32px] bg-black group select-none`}
      >
        {/* 1. BACKGROUND LAYER (Full Poster) */}
        <div className="absolute inset-0 z-0">
          <CorsImg 
            src={match.posterPath} 
            alt="Poster"
            className="w-full h-full object-cover opacity-100" 
          />
        </div>

        {/* 2. GRADIENT SCRIM (The Fade) */}
        <div className={`absolute inset-0 z-10 bg-gradient-to-t ${theme.fade} to-transparent to-50%`} />

        {/* 3. CONTENT LAYER */}
        <div className={`relative z-20 h-full flex flex-col justify-end p-6 ${theme.text} ${theme.font}`}>
          
          {/* Top Section (Quote floating in the visual space) */}
          <div className="absolute top-8 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <p className="text-white/90 font-serif italic text-lg drop-shadow-md leading-tight text-center">"{match.quote}"</p>
          </div>

          {/* Ticket Info (Bottom) */}
          <div className="flex flex-col gap-4">
            
            {/* Header */}
            <div className={`border-b ${theme.border} pb-4`}>
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-2 opacity-60 text-[10px] uppercase tracking-widest font-bold">
                  <TicketIcon size={12} />
                  <span>Admit One</span>
                </div>
                <div className="text-[10px] opacity-50 font-mono">
                  {new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                </div>
              </div>
              <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter drop-shadow-lg mb-2">
                {match.title}
              </h1>
              <span className={`inline-block px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest border border-current/30 rounded ${theme.accent}`}>
                {match.genre}
              </span>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
               <button onClick={() => setActiveTab('soundtrack')} className={`hover:text-white transition ${activeTab === 'soundtrack' ? 'text-white underline decoration-2 underline-offset-4' : 'opacity-40'}`}>Tracks</button>
               <button onClick={() => setActiveTab('cast')} className={`hover:text-white transition ${activeTab === 'cast' ? 'text-white underline decoration-2 underline-offset-4' : 'opacity-40'}`}>Cast</button>
               <button onClick={() => setActiveTab('themes')} className={`hover:text-white transition ${activeTab === 'themes' ? 'text-white underline decoration-2 underline-offset-4' : 'opacity-40'}`}>Vibes</button>
            </div>

            {/* List Data */}
            <div className="min-h-[220px]">
               {activeTab === 'soundtrack' && (
                 <div className="space-y-3">
                   {tracks.slice(0, 6).map((t, i) => (
                     <div key={i} className="flex justify-between items-end text-xs border-b border-current/10 pb-1">
                       <div className="flex items-center gap-3 overflow-hidden">
                         <span className="font-mono opacity-30 text-[10px] w-3">0{i+1}</span>
                         <span className="font-bold truncate max-w-[150px]">{t.name}</span>
                       </div>
                       <span className="opacity-50 text-[10px] truncate max-w-[80px]">{t.artists[0].name}</span>
                     </div>
                   ))}
                 </div>
               )}

               {activeTab === 'cast' && (
                  <div className="grid grid-cols-2 gap-3 mt-2">
                     {artists.slice(0, 6).map((a, i) => (
                       <div key={i} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg backdrop-blur-sm">
                         {a.images?.[0]?.url && <CorsImg src={a.images[0].url} className="w-6 h-6 rounded-full grayscale object-cover" />}
                         <span className="text-[10px] font-bold uppercase truncate">{a.name}</span>
                       </div>
                     ))}
                  </div>
               )}

               {activeTab === 'themes' && (
                  <div className="flex flex-wrap gap-2 content-start mt-2">
                     {topGenres.map((g, i) => (
                       <span key={i} className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider border border-current/20 bg-white/5 rounded-full backdrop-blur-md">
                         {g}
                       </span>
                     ))}
                  </div>
               )}
            </div>

            {/* Footer / Barcode */}
            <div className="opacity-30 flex justify-between items-end pt-2">
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-[0.2em]">{userName}</span>
                <span className="text-[7px] font-mono mt-0.5">ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="h-6 flex items-stretch gap-[1px]">
                  {[...Array(25)].map((_, i) => (
                     <div key={i} className="bg-current" style={{ width: Math.random() > 0.5 ? '2px' : '1px' }} />
                  ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <p className="text-[10px] text-stone-500 uppercase tracking-widest animate-pulse pb-8">
        Tap to reveal quote • Download for Stories
      </p>
    </div>
  );
};