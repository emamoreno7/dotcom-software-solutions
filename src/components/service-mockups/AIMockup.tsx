import { Bot, User, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AIMockup() {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '.' : prev + '.'));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-950/40 to-purple-950/40 border border-cyan-500/20 p-4 flex flex-col justify-end">
      
      {/* Sparkles floating */}
      <Sparkles className="absolute top-3 right-3 w-4 h-4 text-cyan-400 animate-pulse" />
      <Sparkles className="absolute top-8 left-8 w-3 h-3 text-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <Sparkles className="absolute bottom-20 right-12 w-3 h-3 text-pink-400 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Mensaje del usuario */}
      <div className="flex items-start gap-2 mb-3 ml-auto max-w-[80%] animate-fade-in-up">
        <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-2xl rounded-tr-sm p-2.5 flex-1">
          <div className="space-y-1">
            <div className="h-1.5 rounded bg-cyan-300/60 w-full" />
            <div className="h-1.5 rounded bg-cyan-300/60 w-3/4" />
          </div>
        </div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
          <User className="w-3.5 h-3.5 text-white" />
        </div>
      </div>

      {/* Respuesta de la IA escribiendo */}
      <div className="flex items-start gap-2 max-w-[85%] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/50">
          <Bot className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="bg-purple-500/20 border border-purple-500/30 rounded-2xl rounded-tl-sm p-2.5 flex-1">
          <div className="space-y-1.5">
            <div className="h-1.5 rounded bg-purple-300/60 w-full" />
            <div className="h-1.5 rounded bg-purple-300/60 w-5/6" />
            <div className="h-1.5 rounded bg-purple-300/60 w-2/3" />
            
            {/* Indicador de "escribiendo" */}
            <div className="flex items-center gap-1 mt-2 pt-1 border-t border-purple-500/20">
              <div className="flex gap-0.5">
                <div className="w-1 h-1 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="w-1 h-1 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-1 h-1 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
              <span className="text-[8px] text-purple-300 font-mono">IA escribiendo{dots}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="mt-3 flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
        <div className="flex-1 h-1.5 rounded bg-white/10" />
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
          <Sparkles className="w-2.5 h-2.5 text-white" />
        </div>
      </div>
    </div>
  );
}