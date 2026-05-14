import { Bell, Heart, MessageCircle, Zap } from 'lucide-react';

export default function AppMockup() {
  return (
    <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-950/40 to-purple-950/40 border border-cyan-500/20 flex items-center justify-center">
      {/* iPhone mockup */}
      <div className="relative w-32 h-48 bg-[#0a0e1a] rounded-[24px] border-[3px] border-white/20 shadow-2xl shadow-cyan-500/30 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-10" />
        
        {/* Status bar */}
        <div className="flex justify-between items-center px-3 pt-1.5 text-[8px] text-white/70 font-bold">
          <span>9:41</span>
          <span>●●●</span>
        </div>

        {/* App content */}
        <div className="p-2 space-y-2">
          {/* Header */}
          <div className="h-6 rounded-md bg-gradient-to-r from-cyan-500/40 to-purple-500/40" />
          
          {/* Cards */}
          <div className="space-y-1.5">
            <div className="h-8 rounded-md bg-white/5 border border-cyan-500/20 flex items-center px-2 gap-1.5">
              <div className="w-3 h-3 rounded-full bg-cyan-400" />
              <div className="flex-1 space-y-0.5">
                <div className="h-1 rounded bg-white/30 w-full" />
                <div className="h-1 rounded bg-white/15 w-2/3" />
              </div>
            </div>
            <div className="h-8 rounded-md bg-white/5 border border-cyan-500/20 flex items-center px-2 gap-1.5">
              <div className="w-3 h-3 rounded-full bg-purple-400" />
              <div className="flex-1 space-y-0.5">
                <div className="h-1 rounded bg-white/30 w-full" />
                <div className="h-1 rounded bg-white/15 w-3/4" />
              </div>
            </div>
            <div className="h-8 rounded-md bg-white/5 border border-cyan-500/20 flex items-center px-2 gap-1.5">
              <div className="w-3 h-3 rounded-full bg-pink-400" />
              <div className="flex-1 space-y-0.5">
                <div className="h-1 rounded bg-white/30 w-full" />
                <div className="h-1 rounded bg-white/15 w-1/2" />
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-1 left-2 right-2 flex justify-around items-center py-1.5 bg-white/5 rounded-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>
        </div>
      </div>

      {/* Floating notifications */}
      <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 rounded-lg px-2 py-1 animate-bounce" style={{ animationDuration: '3s' }}>
        <Bell className="w-3 h-3 text-cyan-400" />
        <span className="text-[10px] text-white font-medium">Push</span>
      </div>

      <div className="absolute bottom-8 left-6 flex items-center gap-1.5 bg-pink-500/20 backdrop-blur-md border border-pink-400/40 rounded-lg px-2 py-1 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
        <Heart className="w-3 h-3 text-pink-400" />
        <span className="text-[10px] text-white font-medium">+1</span>
      </div>

      <div className="absolute top-12 left-4 flex items-center gap-1.5 bg-purple-500/20 backdrop-blur-md border border-purple-400/40 rounded-lg px-2 py-1 animate-bounce" style={{ animationDuration: '3s', animationDelay: '2s' }}>
        <MessageCircle className="w-3 h-3 text-purple-400" />
        <span className="text-[10px] text-white font-medium">New</span>
      </div>

      <div className="absolute bottom-4 right-4">
        <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
      </div>
    </div>
  );
}