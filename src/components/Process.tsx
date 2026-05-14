import { Search, FileText, Palette, Code, Rocket, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    icon: Search,
    title: 'Descubrimiento y análisis',
    shortTitle: 'Discovery',
    description:
      'Analizamos tu negocio, objetivos y desafíos. Entendemos a fondo qué necesitás para diseñar la solución correcta.',
    duration: '1-2 semanas',
    deliverables: ['Entrevistas con stakeholders', 'Análisis de procesos actuales', 'Benchmarking competitivo'],
    color: '0, 191, 255',     // Cyan
    colorHex: '#00BFFF',
  },
  {
    icon: FileText,
    title: 'Definición de alcance',
    shortTitle: 'Strategy',
    description:
      'Definimos alcance, funcionalidades clave y roadmap del proyecto. Te presentamos una propuesta clara y detallada.',
    duration: '1 semana',
    deliverables: ['Especificaciones técnicas', 'Roadmap detallado', 'Presupuesto cerrado'],
    color: '139, 92, 246',    // Purple
    colorHex: '#8B5CF6',
  },
  {
    icon: Palette,
    title: 'Diseño UX/UI',
    shortTitle: 'Design',
    description:
      'Creamos wireframes y prototipos interactivos. Validamos cada pantalla con vos antes de escribir una línea de código.',
    duration: '2-3 semanas',
    deliverables: ['Wireframes', 'Prototipos navegables', 'Design system'],
    color: '236, 72, 153',    // Pink
    colorHex: '#EC4899',
  },
  {
    icon: Code,
    title: 'Desarrollo e integración',
    shortTitle: 'Build',
    description:
      'Construimos tu solución en sprints, con entregas parciales para que veas el avance real y nos des feedback continuo.',
    duration: '4-12 semanas',
    deliverables: ['Sprints semanales', 'Code review continuo', 'Testing automatizado'],
    color: '251, 146, 60',    // Orange
    colorHex: '#FB923C',
  },
  {
    icon: Rocket,
    title: 'Lanzamiento y soporte',
    shortTitle: 'Launch',
    description:
      'Desplegamos, capacitamos a tu equipo y te acompañamos en la etapa post-lanzamiento con soporte y mejoras continuas.',
    duration: 'Continuo',
    deliverables: ['Deploy en producción', 'Capacitación del equipo', 'Soporte post-launch'],
    color: '0, 255, 136',     // Green
    colorHex: '#00FF88',
  },
];

export default function Process() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section
      id="proceso"
      className="relative py-24 md:py-32 bg-dark-light overflow-hidden"
    >
      {/* Background effects */}
      <div className="process-bg-grid" />
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* HEADER */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              Cómo trabajamos
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Un proceso{' '}
            <span className="process-gradient-text">claro, sin improvisación.</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Desde la primera reunión hasta el lanzamiento, te acompañamos en cada
            etapa.{' '}
            <span className="text-white font-semibold">
              Siempre sabés en qué estado está tu proyecto.
            </span>
          </p>
        </div>

        {/* DESKTOP TIMELINE */}
        <div className="hidden lg:block">
          <DesktopTimeline />
        </div>

        {/* MOBILE TIMELINE */}
        <div className="lg:hidden">
          <MobileTimeline />
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm mb-4">
            ¿Querés ver cómo aplicamos este proceso en proyectos reales?
          </p>
          <a
            href="#casos"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold group transition-colors"
          >
            Ver casos de éxito
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   DESKTOP TIMELINE - Horizontal con línea animada
   ============================================ */
function DesktopTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.7;
      const end = windowHeight * 0.3;
      const total = start - end;
      const current = start - rect.top;
      const pct = Math.max(0, Math.min(100, (current / total) * 100));
      setProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Connector line - background */}
      <div className="absolute top-[3.75rem] left-[10%] right-[10%] h-[2px] bg-white/5 rounded-full" />

      {/* Connector line - animated progress */}
      <div
        className="absolute top-[3.75rem] left-[10%] h-[2px] rounded-full transition-all duration-300 ease-out"
        style={{
          width: `${(progress / 100) * 80}%`,
          background: 'linear-gradient(90deg, #00BFFF 0%, #8B5CF6 25%, #EC4899 50%, #FB923C 75%, #00FF88 100%)',
          boxShadow: '0 0 20px rgba(0, 191, 255, 0.5)',
        }}
      />

      {/* Steps grid */}
      <div className="grid grid-cols-5 gap-4">
        {steps.map((step, index) => (
          <DesktopStepCard
            key={step.title}
            step={step}
            index={index}
            isActive={activeStep === index}
            onHover={() => setActiveStep(index)}
            onLeave={() => setActiveStep(null)}
          />
        ))}
      </div>
    </div>
  );
}

function DesktopStepCard({
  step,
  index,
  isActive,
  onHover,
  onLeave,
}: {
  step: typeof steps[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`process-step-desktop ${isVisible ? 'visible' : ''}`}
      style={{
        '--step-color': step.color,
        '--step-color-hex': step.colorHex,
        transitionDelay: `${index * 100}ms`,
      } as React.CSSProperties}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Icon container */}
      <div className="process-icon-wrapper">
        <div className="process-icon-glow" />
        <div className="process-icon-box">
          <Icon className="w-7 h-7" strokeWidth={2} />
        </div>
        <div className="process-step-number">{index + 1}</div>
      </div>

      {/* Duration badge */}
      <div className="process-duration-badge">
        <Clock className="w-3 h-3" />
        <span>{step.duration}</span>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-white mb-2 leading-tight">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {step.description}
      </p>

      {/* Deliverables - expand on hover */}
      <div className={`process-deliverables ${isActive ? 'expanded' : ''}`}>
        <div className="process-deliverables-label">Entregables</div>
        <ul className="space-y-1.5">
          {step.deliverables.map((item, i) => (
            <li key={i} className="process-deliverable-item">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ============================================
   MOBILE TIMELINE - Vertical
   ============================================ */
function MobileTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;
      const total = rect.height + (start - end);
      const current = start - rect.top;
      const pct = Math.max(0, Math.min(100, (current / total) * 100));
      setProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical line - background */}
      <div className="absolute top-0 bottom-0 left-7 w-[2px] bg-white/5 rounded-full" />

      {/* Vertical line - animated */}
      <div
        className="absolute top-0 left-7 w-[2px] rounded-full transition-all duration-300 ease-out"
        style={{
          height: `${progress}%`,
          background: 'linear-gradient(180deg, #00BFFF 0%, #8B5CF6 25%, #EC4899 50%, #FB923C 75%, #00FF88 100%)',
          boxShadow: '0 0 20px rgba(0, 191, 255, 0.5)',
        }}
      />

      <div className="space-y-8">
        {steps.map((step, index) => (
          <MobileStepCard key={step.title} step={step} index={index} />
        ))}
      </div>
    </div>
  );
}

function MobileStepCard({
  step,
  index,
}: {
  step: typeof steps[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`process-step-mobile ${isVisible ? 'visible' : ''}`}
      style={{
        '--step-color': step.color,
        '--step-color-hex': step.colorHex,
        transitionDelay: `${index * 120}ms`,
      } as React.CSSProperties}
    >
      {/* Icon node */}
      <div className="process-mobile-icon-wrapper">
        <div className="process-mobile-icon-glow" />
        <div className="process-mobile-icon-box">
          <Icon className="w-5 h-5" strokeWidth={2} />
        </div>
        <div className="process-mobile-step-number">{index + 1}</div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <h3 className="text-lg font-bold text-white">{step.title}</h3>
          <div className="process-duration-badge-mobile">
            <Clock className="w-3 h-3" />
            <span>{step.duration}</span>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">
          {step.description}
        </p>
        <ul className="space-y-1.5">
          {step.deliverables.map((item, i) => (
            <li key={i} className="process-deliverable-item">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}