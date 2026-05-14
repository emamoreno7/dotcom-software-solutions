import { GraduationCap, Award, CheckCircle2, BookOpen } from 'lucide-react';

export default function TrainingMockup() {
  return (
    <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-green-950/40 to-emerald-950/40 border border-green-500/20 p-4">
      
      {/* Holographic shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent animate-shimmer pointer-events-none"
        style={{
          backgroundSize: '200% 100%',
        }}
      />

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      {/* Diploma/Certificate */}
      <div className="relative bg-gradient-to-br from-emerald-900/80 to-green-900/80 rounded-xl border-2 border-green-400/40 p-4 backdrop-blur-sm shadow-2xl shadow-green-500/20">
        
        {/* Top decoration */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-0.5">
            <div className="w-1 h-1 rounded-full bg-green-400" />
            <div className="w-1 h-1 rounded-full bg-green-400/60" />
            <div className="w-1 h-1 rounded-full bg-green-400/30" />
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-3 h-3 text-yellow-400" />
            <span className="text-[8px] text-yellow-300 font-mono font-bold">CERTIFIED</span>
          </div>
        </div>

        {/* Certificate header */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 mb-2 shadow-lg shadow-green-500/50">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div className="text-[9px] text-green-300 font-mono uppercase tracking-wider mb-0.5">
            Certificado de
          </div>
          <div className="text-sm font-bold text-white">Ciberseguridad</div>
          <div className="text-[8px] text-green-400 font-mono mt-0.5">Nivel: Avanzado</div>
        </div>

        {/* Modules completed */}
        <div className="space-y-1 mb-2">
          <div className="flex items-center gap-1.5 text-[9px]">
            <CheckCircle2 className="w-2.5 h-2.5 text-green-400" />
            <span className="text-green-200">Phishing & Ingeniería social</span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px]">
            <CheckCircle2 className="w-2.5 h-2.5 text-green-400" />
            <span className="text-green-200">Gestión de contraseñas</span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px]">
            <CheckCircle2 className="w-2.5 h-2.5 text-green-400" />
            <span className="text-green-200">Protección de datos (GDPR)</span>
          </div>
        </div>

        {/* Holographic seal */}
        <div className="flex items-center justify-between pt-2 border-t border-green-400/20">
          <div className="text-[7px] text-green-300/70 font-mono">
            ID: DOTCOM-2024-CYB-0847
          </div>
          <div className="relative w-8 h-8">
            {/* Holographic effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 animate-spin" style={{ animationDuration: '4s' }} />
            <div className="absolute inset-0.5 rounded-full bg-emerald-900 flex items-center justify-center">
              <BookOpen className="w-3 h-3 text-green-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating sparkles */}
      <div className="absolute top-4 right-4 text-yellow-400 text-xs animate-pulse">✨</div>
      <div className="absolute bottom-4 left-4 text-green-400 text-[10px] animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
      <div className="absolute top-12 left-8 text-cyan-400 text-[10px] animate-pulse" style={{ animationDelay: '1s' }}>✨</div>
    </div>
  );
}