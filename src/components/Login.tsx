import { Play, Clapperboard } from 'lucide-react';
import { redirectToAuthCodeFlow } from '../services/spotify';

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-in fade-in zoom-in duration-1000">
      {/* Decorative Icon */}
      <div className="mb-6 p-4 rounded-full bg-stone-900 border border-stone-800 shadow-inner">
        <Clapperboard className="w-12 h-12 text-red-600 animate-pulse" />
      </div>

      {/* Hero Text */}
      <div className="mb-10 space-y-3">
        <h1 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter leading-none">
          CINETIFY
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-8 bg-stone-800" />
          <p className="text-stone-500 text-[10px] md:text-xs uppercase tracking-[0.5em] font-medium">
            Soundtrack Your Life
          </p>
          <div className="h-px w-8 bg-stone-800" />
        </div>
      </div>

      {/* The Main Action */}
      <div className="group relative">
        {/* Animated Glow Effect */}
        <div className="absolute -inset-0.5 bg-red-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        
        <button 
          onClick={redirectToAuthCodeFlow}
          className="relative inline-flex items-center gap-3 px-10 py-5 bg-stone-50 text-stone-950 font-black rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer"
        >
          <Play size={18} fill="currentColor" />
          <span className="uppercase tracking-widest text-sm">Enter the Cinema</span>
        </button>
      </div>

      {/* Footer disclaimer */}
      <p className="mt-12 text-[9px] text-stone-700 uppercase tracking-[0.3em] max-w-xs leading-relaxed">
        Requires a Spotify account. <br />
      </p>
    </div>
  );
};