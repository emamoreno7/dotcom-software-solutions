import { Shield, Lock, Server, Wifi } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HardeningMockup() {
  const [blockedCount, setBlockedCount] = useState(847);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlockedCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-green-950/40 to-emerald-950/40 border border-green-500/20 p-4 flex items-center justify-center">
      
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Central shield */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Shield with pulses */}
        <div className="relative mb-3">
          {/* Outer pulses */}
          <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-0 rounded-full border-2 border-green-400/20 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
          
          {/* Shield container */}
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/50 border-2 border-green-300">
            <Shield className="w-10 h-10 text-white" strokeWidth={2.5} />
            <Lock className="w-5 h-5 text-white absolute" />
          </div>
        </div>

        {/* Status text */}
        <div className="text-center mb-2">
          <div className="text-[10px] text-green-400 font-mono uppercase tracking-wider font-bold mb-0.5">
            System Protected
          </div>
          <div className="text-[8px] text-green-300/70 font-mono">
            Last hardened: 2 min ago
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-2 mt-1">
          <div className="bg-black/40 rounded-md px-2 py-1 border border-green-500/30 backdrop-blur-sm">
            <div className="text-[8px] text-green-300 font-mono uppercase">Blocked</div>
            <div className="text-xs text-green-400 font-bold font-mono">{blockedCount}</div>
          </div>
          <div className="bg-black/40 rounded-md px-2 py-1 border border-green-500/30 backdrop-blur-sm">
            <div className="text-[8px] text-green-300 font-mono uppercase">Uptime</div>
            <div className="text-xs text-green-400 font-bold font-mono">99.9%</div>
          </div>
        </div>
      </div>

      {/* Corner indicators */}
      <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded px-2 py-0.5 border border-green-500/30">
        <Server className="w-2.5 h-2.5 text-green-400" />
        <span className="text-[8px] text-green-300 font-mono">SRV: OK</span>
      </div>

      <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded px-2 py-0.5 border border-green-500/30">
        <Wifi className="w-2.5 h-2.5 text-green-400" />
        <span className="text-[8px] text-green-300 font-mono">FW: ACTIVE</span>
      </div>

      {/* Bottom firewall lines */}
      <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-3 bg-green-400/60 rounded-full"
            style={{
              animation: `wallPulse 1s ease-in-out ${i * 0.1}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes wallPulse {
          0%, 100% { transform: scaleY(0.5); opacity: 0.4; }
          50% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}