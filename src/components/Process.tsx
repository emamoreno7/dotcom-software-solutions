import { Search, FileText, Palette, Code, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    icon: Search,
    title: 'Descubrimiento y análisis',
    description:
      'Analizamos tu negocio, objetivos y desafíos. Entendemos a fondo qué necesitás para diseñar la solución correcta.',
    detail: 'Entrevistas · Análisis de procesos · Benchmarking',
  },
  {
    icon: FileText,
    title: 'Definición de alcance y estrategia',
    description:
      'Definimos alcance, funcionalidades clave y roadmap del proyecto. Te presentamos una propuesta clara y detallada.',
    detail: 'Especificaciones · Roadmap · Presupuesto',
  },
  {
    icon: Palette,
    title: 'Diseño UX/UI',
    description:
      'Creamos wireframes y prototipos interactivos. Validamos cada pantalla con vos antes de escribir una línea de código.',
    detail: 'Wireframes · Prototipos · Validación',
  },
  {
    icon: Code,
    title: 'Desarrollo e integración',
    description:
      'Construimos tu solución en sprints, con entregas parciales para que veas el avance real y nos des feedback continuo.',
    detail: 'Sprints · Code review · Testing',
  },
  {
    icon: Rocket,
    title: 'Lanzamiento y acompañamiento',
    description:
      'Desplegamos, capacitamos a tu equipo y te acompañamos en la etapa post-lanzamiento con soporte y mejoras continuas.',
    detail: 'Deploy · Capacitación · Soporte',
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="proceso" className="py-20 md:py-28 bg-dark-light relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Cómo trabajamos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Un proceso{' '}
            <span className="gradient-text">claro, sin improvisación</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Desde la primera reunión hasta el lanzamiento, te acompañamos en cada
            etapa para que siempre sepas en qué estado está tu proyecto.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line - desktop */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[10%] right-[10%] h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 rounded-full" />
          </div>

          {/* Connector line - mobile/tablet: vertical */}
          <div className="lg:hidden absolute top-0 bottom-0 left-7 w-0.5 bg-gradient-to-b from-primary/10 via-primary/20 to-primary/10" />

          {/* Desktop layout */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <DesktopStepCard key={step.title} step={step} index={index} />
            ))}
          </div>

          {/* Mobile/tablet layout */}
          <div className="lg:hidden space-y-2">
            {steps.map((step, index) => (
              <MobileStepCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DesktopStepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`relative text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Step number & icon */}
      <div className="relative inline-flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-dark-card border-2 border-primary/30 flex items-center justify-center mb-4 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 relative z-10">
          <Icon className="w-7 h-7 text-primary" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-dark text-xs font-bold rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
            {index + 1}
          </div>
        </div>
      </div>

      <h3 className="text-base font-bold text-white mb-2 leading-tight">{step.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-3">{step.description}</p>
      <p className="text-primary/50 text-xs font-medium">{step.detail}</p>
    </div>
  );
}

function MobileStepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-5 pl-2 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Node on timeline */}
      <div className="relative flex-shrink-0 z-10">
        <div className="w-12 h-12 rounded-xl bg-dark-card border-2 border-primary/30 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-dark text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
          {index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="pb-8">
        <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-2">{step.description}</p>
        <p className="text-primary/50 text-xs font-medium">{step.detail}</p>
      </div>
    </div>
  );
}
