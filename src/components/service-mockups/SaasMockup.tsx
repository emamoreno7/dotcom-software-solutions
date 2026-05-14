import { Check, Zap } from 'lucide-react';

export default function SaasMockup() {
  return (
    <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-950/40 to-purple-950/40 border border-cyan-500/20 p-4 flex items-center justify-center gap-3">
      
      {/* Plan Free */}
      <div className="flex-1 bg-white/5 rounded-lg p-3 border border-white/10 h-44 flex flex-col">
        <div className="text-[9px] text-gray-400 uppercase font-bold tracking-wider mb-1">Free</div>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-lg font-bold text-white">$0</span>
          <span className="text-[8px] text-gray-500">/mes</span>
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-1">
            <Check className="w-2.5 h-2.5 text-cyan-400 flex-shrink-0" />
            <div className="h-1 rounded bg-white/20 w-full" />
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-2.5 h-2.5 text-cyan-400 flex-shrink-0" />
            <div className="h-1 rounded bg-white/20 w-3/4" />
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-2.5 h-2.5 text-cyan-400 flex-shrink-0" />
            <div className="h-1 rounded bg-white/20 w-2/3" />
          </div>
        </div>
        <div className="h-6 rounded bg-white/10 mt-2" />
      </div>

      {/* Plan PRO (destacado) */}
      <div className="flex-1 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg p-3 border-2 border-cyan-400 h-48 flex flex-col relative shadow-lg shadow-cyan-500/30 scale-105">
        {/* Badge */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
          <Zap className="w-2 h-2" />
          POPULAR
        </div>
        
        <div className="text-[9px] text-cyan-300 uppercase font-bold tracking-wider mb-1 mt-1">Pro</div>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-xl font-bold text-white">$29</span>
          <span className="text-[8px] text-cyan-300">/mes</span>
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-1">
            <Check className="w-2.5 h-2.5 text-cyan-400 flex-shrink-0" />
            <div className="h-1 rounded bg-cyan-400/40 w-full" />
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-2.5 h-2.5 text-cyan-400 flex-shrink-0" />
            <div className="h-1 rounded bg-cyan-400/40 w-4/5" />
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-2.5 h-2.5 text-cyan-400 flex-shrink-0" />
            <div className="h-1 rounded bg-cyan-400/40 w-full" />
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-2.5 h-2.5 text-cyan-400 flex-shrink-0" />
            <div className="h-1 rounded bg-cyan-400/40 w-3/4" />
          </div>
        </div>
        <div className="h-6 rounded bg-gradient-to-r from-cyan-400 to-purple-500 mt-2 animate-pulse" />
      </div>

      {/* Plan Enterprise */}
      <div className="flex-1 bg-white/5 rounded-lg p-3 border border-white/10 h-44 flex flex-col">
        <div className="text-[9px] text-gray-400 uppercase font-bold tracking-wider mb-1">Enterprise</div>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-lg font-bold text-white">$99</span>
          <span className="text-[8px] text-gray-500">/mes</span>
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-1">
            <Check className="w-2.5 h-2.5 text-purple-400 flex-shrink-0" />
            <div className="h-1 rounded bg-white/20 w-full" />
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-2.5 h-2.5 text-purple-400 flex-shrink-0" />
            <div className="h-1 rounded bg-white/20 w-full" />
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-2.5 h-2.5 text-purple-400 flex-shrink-0" />
            <div className="h-1 rounded bg-white/20 w-4/5" />
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-2.5 h-2.5 text-purple-400 flex-shrink-0" />
            <div className="h-1 rounded bg-white/20 w-3/4" />
          </div>
        </div>
        <div className="h-6 rounded bg-white/10 mt-2" />
      </div>
    </div>
  );
}