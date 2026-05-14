import { useEffect, useState } from 'react';

export default function WebMockup() {
  const [typedUrl, setTypedUrl] = useState('');
  const fullUrl = 'https://tu-empresa.com';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullUrl.length) {
        setTypedUrl(fullUrl.slice(0, i));
        i++;
      } else {
        i = 0;
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border border-cyan-500/20">
      {/* Browser window */}
      <div className="absolute inset-4 bg-[#0a0e1a] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Browser header */}
        <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 mx-3 px-3 py-1 bg-black/40 rounded-md text-xs text-cyan-400 font-mono truncate">
            {typedUrl}
            <span className="animate-pulse">|</span>
          </div>
        </div>

        {/* Browser content */}
        <div className="p-4 space-y-3">
          {/* Hero block */}
          <div className="h-12 rounded-lg bg-gradient-to-r from-cyan-500/30 to-blue-500/30 animate-pulse" />
          
          {/* Text lines */}
          <div className="space-y-2">
            <div className="h-2 rounded bg-white/10 w-full" />
            <div className="h-2 rounded bg-white/10 w-4/5" />
            <div className="h-2 rounded bg-white/10 w-3/5" />
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="h-10 rounded bg-cyan-500/20 border border-cyan-500/30" />
            <div className="h-10 rounded bg-cyan-500/15 border border-cyan-500/20" />
            <div className="h-10 rounded bg-cyan-500/10 border border-cyan-500/15" />
          </div>

          {/* CTA button */}
          <div className="pt-2">
            <div className="h-8 w-32 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50" />
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-cyan-400 animate-ping" />
      <div className="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-blue-400 animate-ping" style={{ animationDelay: '1s' }} />
    </div>
  );
}