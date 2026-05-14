import { Eye, Globe, User, Database } from 'lucide-react';

export default function OsintMockup() {
  return (
    <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-green-950/40 to-black border border-green-500/20">
      
      {/* World map dots pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 200">
        {/* Dot pattern simulando un mapa */}
        {[...Array(80)].map((_, i) => {
          const x = (i % 20) * 22;
          const y = Math.floor(i / 20) * 50;
          const size = Math.random() > 0.7 ? 2 : 1;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={size}
              fill="#00FF88"
              opacity={0.3 + Math.random() * 0.5}
            />
          );
        })}
      </svg>

      {/* Active investigation points */}
      <div className="absolute inset-0">
        {/* Point 1 - top left */}
        <div className="absolute top-8 left-12">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-ping absolute" />
            <div className="w-3 h-3 rounded-full bg-green-400 relative shadow-lg shadow-green-400/70" />
          </div>
          <div className="text-[8px] text-green-300 font-mono mt-1">USA</div>
        </div>

        {/* Point 2 - top right */}
        <div className="absolute top-12 right-16">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-yellow-400 animate-ping absolute" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 relative shadow-lg shadow-yellow-400/70" />
          </div>
          <div className="text-[8px] text-yellow-300 font-mono mt-1">EU</div>
        </div>

        {/* Point 3 - middle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-4 h-4 rounded-full bg-red-400 animate-ping absolute" />
            <div className="w-4 h-4 rounded-full bg-red-500 relative shadow-lg shadow-red-500/70 border border-red-300" />
          </div>
          <div className="text-[8px] text-red-300 font-mono mt-1 font-bold">TARGET</div>
        </div>

        {/* Point 4 - bottom */}
        <div className="absolute bottom-12 left-20">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-ping absolute" />
            <div className="w-3 h-3 rounded-full bg-green-400 relative shadow-lg shadow-green-400/70" />
          </div>
          <div className="text-[8px] text-green-300 font-mono mt-1">LATAM</div>
        </div>
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="osintLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FF88" stopOpacity="0" />
            <stop offset="50%" stopColor="#00FF88" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00FF88" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="50" y1="40" x2="200" y2="110" stroke="url(#osintLine)" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" />
        <line x1="320" y1="50" x2="200" y2="110" stroke="url(#osintLine)" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <line x1="80" y1="180" x2="200" y2="110" stroke="url(#osintLine)" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" style={{ animationDelay: '1s' }} />
      </svg>

      {/* Header overlay */}
      <div className="absolute top-2 left-2 right-2 flex items-center justify-between bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 border border-green-500/30">
        <div className="flex items-center gap-1.5">
          <Eye className="w-3 h-3 text-green-400" />
          <span className="text-[10px] text-green-400 font-mono font-bold uppercase tracking-wider">
            OSINT Tracker
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          <span className="text-[8px] text-red-300 font-mono">REC</span>
        </div>
      </div>

      {/* Bottom data feed */}
      <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1.5 border border-green-500/30">
        <div className="flex items-center gap-2 text-[8px] font-mono">
          <div className="flex items-center gap-1 text-green-300">
            <User className="w-2.5 h-2.5" />
            <span>247</span>
          </div>
          <div className="flex items-center gap-1 text-green-300">
            <Database className="w-2.5 h-2.5" />
            <span>1.2k</span>
          </div>
          <div className="flex items-center gap-1 text-green-300">
            <Globe className="w-2.5 h-2.5" />
            <span>34</span>
          </div>
          <div className="flex-1 text-right text-green-400 font-bold">
            Match: 94%
          </div>
        </div>
      </div>
    </div>
  );
}