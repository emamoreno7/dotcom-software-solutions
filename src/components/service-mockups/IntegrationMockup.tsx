import { Database, Cloud, CreditCard, Mail, Zap } from 'lucide-react';

export default function IntegrationMockup() {
  return (
    <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border border-cyan-500/20 flex items-center justify-center">
      
      {/* SVG con líneas de conexión animadas */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00BFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00BFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00BFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Líneas hacia el centro */}
        <line x1="60" y1="50" x2="200" y2="100" stroke="url(#lineGrad)" strokeWidth="1.5" className="animate-pulse" />
        <line x1="340" y1="50" x2="200" y2="100" stroke="url(#lineGrad)" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <line x1="60" y1="150" x2="200" y2="100" stroke="url(#lineGrad)" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '1s' }} />
        <line x1="340" y1="150" x2="200" y2="100" stroke="url(#lineGrad)" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '1.5s' }} />

        {/* Puntos viajando por las líneas */}
        <circle r="3" fill="#00BFFF">
          <animateMotion dur="2s" repeatCount="indefinite" path="M60,50 L200,100" />
        </circle>
        <circle r="3" fill="#8B5CF6">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M340,50 L200,100" />
        </circle>
        <circle r="3" fill="#EC4899">
          <animateMotion dur="2.2s" repeatCount="indefinite" path="M60,150 L200,100" />
        </circle>
        <circle r="3" fill="#3B82F6">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M340,150 L200,100" />
        </circle>
      </svg>

      {/* Nodo central (TU SISTEMA) */}
      <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex flex-col items-center justify-center shadow-2xl shadow-cyan-500/50 border-2 border-cyan-300">
        <Zap className="w-6 h-6 text-white mb-0.5" />
        <span className="text-[8px] text-white font-bold">TU APP</span>
      </div>

      {/* Nodos de servicios externos */}
      {/* Top left - Database */}
      <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/40 flex flex-col items-center justify-center backdrop-blur-md">
        <Database className="w-4 h-4 text-purple-400" />
        <span className="text-[7px] text-purple-300 font-semibold mt-0.5">DB</span>
      </div>

      {/* Top right - Cloud */}
      <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex flex-col items-center justify-center backdrop-blur-md">
        <Cloud className="w-4 h-4 text-cyan-400" />
        <span className="text-[7px] text-cyan-300 font-semibold mt-0.5">API</span>
      </div>

      {/* Bottom left - Payments */}
      <div className="absolute bottom-6 left-6 w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-400/40 flex flex-col items-center justify-center backdrop-blur-md">
        <CreditCard className="w-4 h-4 text-pink-400" />
        <span className="text-[7px] text-pink-300 font-semibold mt-0.5">PAY</span>
      </div>

      {/* Bottom right - Mail */}
      <div className="absolute bottom-6 right-6 w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/40 flex flex-col items-center justify-center backdrop-blur-md">
        <Mail className="w-4 h-4 text-blue-400" />
        <span className="text-[7px] text-blue-300 font-semibold mt-0.5">SMTP</span>
      </div>

      {/* Status badge */}
      <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 border border-green-400/40">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[8px] text-green-300 font-bold">ONLINE</span>
      </div>
    </div>
  );
}