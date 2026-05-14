import { File, FileText, Image, Search, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ForensicMockup() {
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-green-950/40 to-emerald-950/40 border border-green-500/20 p-4">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <Search className="w-3.5 h-3.5 text-green-400" />
          <span className="text-[10px] text-green-400 font-mono uppercase tracking-wider font-bold">
            Forensic Scan
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] text-green-300 font-mono">ANALYZING</span>
        </div>
      </div>

      {/* Files grid */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {/* File 1 - scanned */}
        <div className="bg-white/5 rounded-lg p-2 border border-green-500/30 relative overflow-hidden">
          <FileText className="w-5 h-5 text-green-400 mx-auto" />
          <div className="text-[7px] text-green-300 text-center mt-1 font-mono">doc_01.pdf</div>
          <CheckCircle2 className="w-2.5 h-2.5 text-green-400 absolute top-1 right-1" />
        </div>

        {/* File 2 - scanning */}
        <div className="bg-yellow-500/10 rounded-lg p-2 border border-yellow-400/40 relative overflow-hidden">
          <Image className="w-5 h-5 text-yellow-400 mx-auto" />
          <div className="text-[7px] text-yellow-300 text-center mt-1 font-mono">img_02.jpg</div>
          {/* Scan line */}
          <div
            className="absolute left-0 right-0 h-0.5 bg-yellow-400 shadow-lg shadow-yellow-400/50"
            style={{
              top: `${scanProgress}%`,
              transition: 'top 0.05s linear',
            }}
          />
        </div>

        {/* File 3 - pending */}
        <div className="bg-white/5 rounded-lg p-2 border border-white/10 opacity-50">
          <File className="w-5 h-5 text-gray-500 mx-auto" />
          <div className="text-[7px] text-gray-500 text-center mt-1 font-mono">log_03.txt</div>
        </div>

        {/* File 4 - pending */}
        <div className="bg-white/5 rounded-lg p-2 border border-white/10 opacity-30">
          <File className="w-5 h-5 text-gray-500 mx-auto" />
          <div className="text-[7px] text-gray-500 text-center mt-1 font-mono">data_04.db</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-3">
        <div className="flex justify-between mb-1">
          <span className="text-[9px] text-green-300 font-mono">Recovery progress</span>
          <span className="text-[9px] text-green-400 font-mono font-bold">{scanProgress}%</span>
        </div>
        <div className="h-1.5 bg-black/50 rounded-full overflow-hidden border border-green-500/20">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 shadow-lg shadow-green-500/50 transition-all duration-100"
            style={{ width: `${scanProgress}%` }}
          />
        </div>
      </div>

      {/* Findings */}
      <div className="space-y-1">
        <div className="flex items-center gap-1.5 text-[9px] font-mono">
          <CheckCircle2 className="w-2.5 h-2.5 text-green-400" />
          <span className="text-green-300">3 archivos recuperados</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-mono">
          <CheckCircle2 className="w-2.5 h-2.5 text-green-400" />
          <span className="text-green-300">Cadena de custodia: OK</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-mono">
          <div className="w-2.5 h-2.5 rounded-full border border-yellow-400 border-t-transparent animate-spin" />
          <span className="text-yellow-300">Generando reporte legal...</span>
        </div>
      </div>
    </div>
  );
}