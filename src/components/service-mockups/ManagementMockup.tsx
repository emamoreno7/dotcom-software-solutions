import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

export default function ManagementMockup() {
  return (
    <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border border-cyan-500/20 p-4">
      {/* Dashboard header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">Dashboard</div>
          <div className="text-xs text-white font-semibold">Resumen general</div>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[9px] text-cyan-400">LIVE</span>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-white/5 rounded-lg p-2 border border-cyan-500/20">
          <div className="flex items-center gap-1 mb-1">
            <Users className="w-3 h-3 text-cyan-400" />
            <span className="text-[9px] text-gray-400 uppercase">Clientes</span>
          </div>
          <div className="text-sm font-bold text-white">1.247</div>
          <div className="text-[9px] text-green-400 flex items-center gap-1">
            <TrendingUp className="w-2 h-2" /> +12%
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-2 border border-cyan-500/20">
          <div className="flex items-center gap-1 mb-1">
            <DollarSign className="w-3 h-3 text-cyan-400" />
            <span className="text-[9px] text-gray-400 uppercase">Ventas</span>
          </div>
          <div className="text-sm font-bold text-white">$48.2K</div>
          <div className="text-[9px] text-green-400 flex items-center gap-1">
            <TrendingUp className="w-2 h-2" /> +24%
          </div>
        </div>
      </div>

      {/* Animated chart */}
      <div className="bg-white/5 rounded-lg p-2 border border-cyan-500/20">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <Activity className="w-3 h-3 text-cyan-400" />
            <span className="text-[9px] text-gray-400 uppercase">Actividad</span>
          </div>
          <span className="text-[9px] text-cyan-400">7 días</span>
        </div>
        
        {/* Bar chart animado */}
        <div className="flex items-end justify-between gap-1 h-12">
          {[40, 60, 35, 75, 50, 85, 65].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-400 rounded-sm relative overflow-hidden"
              style={{
                height: `${h}%`,
                animation: `barGrow 2s ease-out ${i * 0.1}s infinite alternate`,
              }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes barGrow {
          0% { transform: scaleY(0.7); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}