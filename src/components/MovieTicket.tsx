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
  { bgHex: string; text: string; accent: string; font: string; border: string }
> = {
  classic: { bgHex: '#f4f4f0', text: 'text-stone-900', accent: 'text-red-600', font: 'font-mono', border: 'border-stone-300' },
  midnight: { bgHex: '#050505', text: 'text-white', accent: 'text-cyan-400', font: 'font-sans', border: 'border-stone-800' },
  retro: { bgHex: '#fdf6e3', text: 'text-amber-900', accent: 'text-orange-600', font: 'font-serif', border: 'border-amber-200' },
  blueprint: { bgHex: '#172554', text: 'text-blue-50', accent: 'text-yellow-400', font: 'font-mono', border: 'border-blue-700' },
};

const CorsImg = ({
  src,
  className,
  alt,
}: {
  src: string | undefined;
  className?: string;
  alt?: string;
}) => {
  const [imgData, setImgData] = useState<string | null>(null);

  useEffect(() => {
    if (!src) return;
    let isMounted = true;

    const load = async () => {
      try {
        const response = await fetch(src);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          if (isMounted) setImgData(reader.result as string);
        };
        reader.readAsDataURL(blob);
      } catch {
        try {
          const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(src)}`;
          const res = await fetch(proxy);
          const blob = await res.blob();
          const reader = new FileReader();
          reader.onloadend = () => {
            if (isMounted) setImgData(reader.result as string);
          };
          reader.readAsDataURL(blob);
        } catch (e) {
          console.error(e);
        }
      }
    };

    load();
    return () => {
      isMounted = false;
    };
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
  const isDark = currentTheme === 'midnight' || currentTheme === 'blueprint';

  const allGenres = artists.flatMap((a) => a.genres || []);
  const genreCounts: Record<string, number> = {};
  allGenres.forEach((g) => {
    genreCounts[g] = (genreCounts[g] || 0) + 1;
  });
  const topGenres = Object.entries(genreCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8)
    .map(([g]) => g);

  const handleDownload = useCallback(async () => {
    if (!ticketRef.current) return;
    setIsDownloading(true);

    try {
      await new Promise((r) => setTimeout(r, 120));

      const dataUrl = await toPng(ticketRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: theme.bgHex,
        style: { transform: 'none', backgroundColor: theme.bgHex },
      });

      const link = document.createElement('a');
      link.download = `Sinetify_${match.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      alert('Download failed. Try screenshotting!');
    } finally {
      setIsDownloading(false);
    }
  }, [match.title, theme.bgHex]);

  return (
    <div className="w-full flex flex-col items-center gap-6 animate-in slide-in-from-bottom-8 duration-700">
      {/* TOOLBAR */}
      <div className="flex gap-3 p-3 bg-stone-900/90 backdrop-blur rounded-full border border-stone-800 shadow-2xl z-50">
        {(Object.keys(THEME_CONFIG) as Theme[]).map((t) => (
          <button
            key={t}
            onClick={() => setCurrentTheme(t)}
            className={`w-6 h-6 rounded-full border-2 transition-all ${
              currentTheme === t ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-100'
            }`}
            style={{
              backgroundColor: t === 'classic' ? '#f4f4f0' : t === 'midnight' ? '#000' : t === 'retro' ? '#fdf6e3' : '#172554',
            }}
            aria-label={`Theme: ${t}`}
          />
        ))}
        <div className="w-px h-6 bg-stone-700 mx-1" />
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="text-white hover:text-red-500 transition disabled:opacity-50"
          aria-label="Download story"
        >
          {isDownloading ? <Loader2 size={20} className="animate-spin" /> : <Download size={20} />}
        </button>
      </div>

      {/* --- THE STORY (Fixed 9:16 Aspect Ratio) --- */}
      <div
        ref={ticketRef}
        className={`relative aspect-[9/16] w-full max-w-[420px] shadow-2xl overflow-hidden flex flex-col rounded-[24px] ${theme.text} ${theme.font}`}
        style={{ backgroundColor: theme.bgHex }}
      >
        {/* === POSTER SECTION (Top 38% - Full Bleed) === */}
        <div className="h-[38%] relative w-full bg-black">
           <CorsImg
              src={match.posterPath}
              alt="Poster"
              // Object-top usually captures faces better for movie posters
              className="w-full h-full object-cover object-top opacity-90"
            />
            
            {/* The Blend: Heavy gradient at the bottom to merge into ticket */}
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, transparent 40%, ${theme.bgHex} 100%)`
              }}
            />
        </div>

        {/* === DATA STUB (Remaining 62%) === */}
        <div className="flex-1 relative z-10 flex flex-col px-6 pb-6 -mt-4">
          
          {/* Title Header - Floating slightly over the fade */}
          <div className="mb-4">
            <h1 className="text-[32px] font-black uppercase tracking-tight leading-[0.9] drop-shadow-sm line-clamp-2 mb-1">
              {match.title}
            </h1>
            <div className="flex justify-between items-end">
               <div>
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-widest ${theme.accent}`}>
                    {match.genre}
                  </span>
                  {match.quote && (
                    <p className="mt-1 text-[11px] italic opacity-60 leading-tight max-w-[240px] line-clamp-2">
                       "{match.quote}"
                    </p>
                  )}
               </div>
               
               {/* Stamp */}
               <div className="border border-current/30 rounded px-2 py-1 text-center opacity-40 rotate-[-8deg]">
                  <div className="text-[7px] uppercase font-black leading-none">ADMIT</div>
                  <div className="text-[7px] uppercase font-black leading-none">ONE</div>
               </div>
            </div>
          </div>

          {/* Perforation Line Separator */}
          <div className="w-full border-t-2 border-dashed border-current/20 mb-3 relative" />

          {/* Navigation */}
          <div className="flex w-full border-b border-current/10 text-[10px] font-bold uppercase tracking-widest mb-3">
            <button
              onClick={() => setActiveTab('soundtrack')}
              className={`flex-1 pb-2 hover:opacity-100 transition text-left ${
                activeTab === 'soundtrack' ? 'opacity-100 border-b-2 border-current' : 'opacity-40'
              }`}
            >
              Tracks
            </button>
            <button
              onClick={() => setActiveTab('cast')}
              className={`flex-1 pb-2 hover:opacity-100 transition text-center ${
                activeTab === 'cast' ? 'opacity-100 border-b-2 border-current' : 'opacity-40'
              }`}
            >
              Cast
            </button>
            <button
              onClick={() => setActiveTab('genres')}
              className={`flex-1 pb-2 hover:opacity-100 transition text-right ${
                activeTab === 'genres' ? 'opacity-100 border-b-2 border-current' : 'opacity-40'
              }`}
            >
              Genres
            </button>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-hidden">
            {activeTab === 'soundtrack' && (
              <div className="flex flex-col gap-[6px] h-full">
                {tracks.slice(0, 10).map((t, i) => (
                  <div key={i} className="flex items-center justify-between w-full text-[12px] leading-none">
                    <div className="flex items-center gap-3 overflow-hidden pr-2 min-w-0">
                      <span className="font-mono opacity-30 text-[10px] w-4 text-right flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="font-bold truncate opacity-90">{t?.name}</span>
                    </div>
                    <span className="opacity-50 text-[10px] truncate max-w-[35%] text-right">
                      {t?.artists?.[0]?.name ?? ''}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'cast' && (
              <div className="grid grid-cols-2 gap-3 content-start">
                {artists.slice(0, 8).map((a, i) => (
                  <div key={i} className={`flex items-center gap-2 ${isDark ? 'bg-white/5' : 'bg-black/5'} p-2 rounded-md`}>
                    {a.images?.[0]?.url && (
                      <CorsImg src={a.images[0].url} className="w-8 h-8 rounded-full grayscale object-cover" alt={a.name} />
                    )}
                    <span className="text-[10px] font-bold uppercase truncate">{a.name}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'genres' && (
              <div className="flex flex-wrap gap-2 content-start pt-2">
                {topGenres.map((g, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider border border-current/20 rounded-md"
                  >
                    {g}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-3 pt-2 border-t border-dashed border-current/10 opacity-40 flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-widest font-bold">Issued To</span>
              <span className="text-[8px] font-mono">{userName}</span>
            </div>
            <div className="h-5 flex items-stretch gap-[2px]">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="bg-current" style={{ width: Math.random() > 0.5 ? '2px' : '1px' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};