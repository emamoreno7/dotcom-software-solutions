import { Siren, AlertTriangle, Clock, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

const EVENTS = [
  { time: '14:32:01', text: 'Intrusión detectada en server-01', level: 'critical' },
  { time: '14:32:03', text: 'Iniciando contención automática', level: 'warning' },
  { time: '14:32:08', text: 'IP atacante bloqueada: 185.220.x.x', level: 'success' },
  { time: '14:32:15', text: 'Aislando sistema afectado...', level: 'warning' },
  { time: '14:32:22', text: 'Backup de evidencia completado', level: 'success' },
  { time: '14:32:30', text: 'Equipo IR notificado', level: 'info' },
];

export default function IncidentMockup() {
  const [visibleEvents, setVisibleEvents] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleEvents((prev) => (prev >= EVENTS.length ? 1 : prev + 1));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const getColor = (level: string) => {
    switch (level) {
      case 'critical':
        return 'text-red-400 border-red-400/40 bg-red-500/10';
      case 'warning':
        return 'text-yellow-400 border-yellow-400/40 bg-yellow-500/10';
      case 'success':
        return 'text-green-400 border-green-400/40 bg-green-500/10';
      default:
        return 'text-cyan-400 border-cyan-400/40 bg-cyan-500/10';
    }
  };

  return (
    <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-red-950/40 to-black border border-red-500/30">
      
      {/* Pulsing red overlay */}
      <div className="absolute inset-0 bg-red-500/5 animate-pulse pointer-events-none" />

      {/* Header alarm */}
      <div className="relative flex items-center justify-between px-3 py-2 bg-red-950/60 border-b border-red-500/40">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Siren className="w-4 h-4 text-red-400 animate-pulse" />
            <div className="absolute inset-0 bg-red-400 rounded-full blur-md opacity-50 animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] text-red-300 font-mono font-bold uppercase tracking-wider">
              Incident Response
            </div>
            <div className="text-[8px] text-red-400 font-mono">Severity: HIGH</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500/20 border border-red-400/40">
          <Clock className="w-2.5 h-2.5 text-red-300" />
          <span className="text-[9px] text-red-300 font-mono font-bold">00:02:34</span>
        </div>
      </div>

      {/* Status bar */}
      <div className="px-3 py-2 bg-black/40 border-b border-red-500/20 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-yellow-400 animate-pulse" />
          <span className="text-[10px] text-yellow-300 font-mono font-semibold">CONTAINING</span>
        </div>
        <div className="flex gap-3 text-[9px] font-mono">
          <span className="text-red-300">⚠ 1 host</span>
          <span className="text-yellow-300">◐ 247 IPs</span>
          <span className="text-green-300">✓ 12 actions</span>
        </div>
      </div>

      {/* Event log */}
      <div className="p-2 space-y-1 overflow-hidden">
        {EVENTS.slice(0, visibleEvents).reverse().map((event, i) => (
          <div
            key={`${event.time}-${i}`}
            className={`flex items-start gap-2 text-[9px] font-mono p-1.5 rounded border ${getColor(event.level)} animate-fade-in-up`}
            style={{ animationDuration: '0.4s' }}
          >
            <span className="text-gray-500 flex-shrink-0">[{event.time}]</span>
            {event.level === 'critical' && (
              <AlertTriangle className="w-2.5 h-2.5 flex-shrink-0 mt-0.5" />
            )}
            <span className="flex-1">{event.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}