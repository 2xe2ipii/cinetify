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
  midnight: { bgHex: '#000000', text: 'text-white', accent: 'text-cyan-400', font: 'font-sans', border: 'border-stone-800' },
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
      // Give the browser a beat to finish painting / image decoding.
      await new Promise((r) => setTimeout(r, 120));

      // IMPORTANT: Do NOT export with a transparent canvas.
      // PNG transparency often shows as black in some viewers / IG workflows.
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
        {/* === POSTER STAGE (45%) === */}
        <div className="h-[45%] relative overflow-hidden">
          {/* Blurred backdrop uses the poster so nothing looks empty/awkward */}
          <CorsImg
            src={match.posterPath}
            alt="Poster backdrop"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px] brightness-75"
          />

          {/* Blend into the ticket color (so bottom reads clean) */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 55%, ${theme.bgHex} 100%)`,
            }}
          />

          {/* Actual poster shown as a contained card (no awkward cropping) */}
          <div className="absolute inset-0 p-6 pb-8 flex items-center justify-center">
            <div
              className={`w-full h-full rounded-[18px] overflow-hidden shadow-2xl ring-1 ${
                isDark ? 'ring-white/10' : 'ring-black/10'
              }`}
            >
              <CorsImg src={match.posterPath} alt="Poster" className="w-full h-full object-contain bg-black/20" />
            </div>
          </div>
        </div>

        {/* === DATA STUB (55%) === */}
        <div className="flex-1 relative z-10 flex flex-col px-6 pb-4 pt-2">
          {/* Perforation */}
          <div className="w-full border-t-2 border-dashed border-current/25 mb-3 relative">
            <div className="absolute -left-9 -top-3 w-6 h-6 rounded-full" style={{ backgroundColor: theme.bgHex }} />
            <div className="absolute -right-9 -top-3 w-6 h-6 rounded-full" style={{ backgroundColor: theme.bgHex }} />
          </div>

          {/* Header */}
          <div className="mb-2 flex justify-between items-start">
            <div className="w-[78%]">
              <h1 className="text-[28px] font-black uppercase tracking-tight leading-[0.95] line-clamp-2">
                {match.title}
              </h1>
              <div className="mt-1 flex items-center gap-2">
                <span className={`inline-block text-[10px] font-bold uppercase tracking-widest ${theme.accent}`}>
                  {match.genre}
                </span>
              </div>

              {/* Keep quote minimal so the list stays the focus */}
              {match.quote ? (
                <p className="mt-1 text-[11px] italic opacity-70 leading-snug line-clamp-2">“{match.quote}”</p>
              ) : null}
            </div>

            <div className="border border-current/30 rounded px-2 py-1 text-center opacity-60">
              <div className="text-[8px] uppercase font-black leading-none">ADMIT</div>
              <div className="text-[8px] uppercase font-black leading-none">ONE</div>
            </div>
          </div>

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

          {/* Data List */}
          <div className="flex-1 overflow-hidden">
            {activeTab === 'soundtrack' && (
              <div className="flex flex-col gap-2">
                {tracks.slice(0, 10).map((t, i) => (
                  <div key={i} className="flex items-center justify-between w-full text-[12px] leading-tight">
                    <div className="flex items-center gap-2 overflow-hidden pr-2 min-w-0">
                      <span className="font-mono opacity-40 text-[10px] w-6 flex-shrink-0">
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="font-extrabold truncate">{t?.name}</span>
                    </div>
                    <span className="opacity-60 text-[11px] truncate max-w-[42%] text-right">
                      {t?.artists?.[0]?.name ?? ''}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'cast' && (
              <div className="grid grid-cols-2 gap-2 content-start">
                {artists.slice(0, 8).map((a, i) => (
                  <div key={i} className={`flex items-center gap-2 ${isDark ? 'bg-white/5' : 'bg-black/5'} p-2 rounded-md`}>
                    {a.images?.[0]?.url && (
                      <CorsImg src={a.images[0].url} className="w-7 h-7 rounded-full grayscale object-cover" alt={a.name} />
                    )}
                    <span className="text-[10px] font-bold uppercase truncate">{a.name}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'genres' && (
              <div className="flex flex-wrap gap-2 content-start">
                {topGenres.map((g, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-current/20 rounded-sm"
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
            <div className="h-4 flex items-stretch gap-[1px]">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="bg-current" style={{ width: Math.random() > 0.5 ? '2px' : '1px' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
