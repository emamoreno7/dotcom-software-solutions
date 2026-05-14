import { useEffect, useRef, useState } from 'react';
import {
  FileSpreadsheet,
  Database,
  Rocket,
  TrendingUp,
  Shield,
  Workflow,
} from 'lucide-react';

// ============================================
// 📊 DATA: Problemas con color y tamaño
// ============================================
const problems = [
  {
    icon: FileSpreadsheet,
    title: 'Digitalizar procesos manuales',
    description:
      'Reducimos tareas repetitivas, errores operativos y pérdida de tiempo. Tu equipo deja de depender de planillas y herramientas genéricas para enfocarse en lo que importa.',
    color: '0, 191, 255', // cyan
    size: 'large', // ocupa 2 columnas
  },
  {
    icon: Database,
    title: 'Centralizar información clave',
    description:
      'Unificamos datos, usuarios y procesos en una sola plataforma. No más información dispersa entre Excel, WhatsApp, emails y sistemas que no se hablan entre sí.',
    color: '139, 92, 246', // purple
    size: 'normal',
  },
  {
    icon: Rocket,
    title: 'Lanzar productos digitales con rapidez',
    description:
      'Convertimos ideas en MVPs, SaaS o apps listas para validar y crecer. Si tenés un producto digital en la cabeza, nosotros lo llevamos a la realidad.',
    color: '236, 72, 153', // pink
    size: 'normal',
  },
  {
    icon: TrendingUp,
    title: 'Escalar sin depender de herramientas limitadas',
    description:
      'Creamos software que evoluciona junto con el negocio. Dejá de forzar tu operación dentro de un sistema genérico que ya no da para más.',
    color: '59, 130, 246', // blue
    size: 'large', // ocupa 2 columnas
  },
  {
    icon: Workflow,
    title: 'Automatizar flujos de trabajo',
    description:
      'Conectamos sistemas, eliminamos pasos manuales y dejamos que el software haga el trabajo repetitivo. Tu equipo se enfoca en decisiones, no en tareas mecánicas.',
    color: '34, 197, 94', // green
    size: 'normal',
  },
  {
    icon: Shield,
    title: 'Proteger los datos de tu negocio',
    description:
      'Implementamos buenas prácticas de seguridad, backups automáticos y control de accesos. Tu información crítica resguardada con estándares profesionales.',
    color: '249, 115, 22', // orange
    size: 'normal',
  },
];

// ============================================
// 🎯 COMPONENTE: Hook de visibilidad
// ============================================
function useInView(threshold: number = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// ============================================
// 🎴 COMPONENTE: Card con efectos premium
// ============================================
function ProblemCard({
  icon: Icon,
  title,
  description,
  index,
  color,
  size,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
  color: string;
  size: 'normal' | 'large';
}) {
  const { ref, isVisible } = useInView(0.15);
  const cardRef = useRef<HTMLDivElement>(null);

  // Spotlight que sigue al mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  // 3D tilt effect
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  };

  return (
    <div
      ref={ref}
      className={`problem-card-wrapper relative ${
        size === 'large' ? 'md:col-span-2' : ''
      } ${isVisible ? 'visible' : ''}`}
      style={{
        animationDelay: `${index * 120}ms`,
      }}
    >
      {/* Glow ambient detrás */}
      <div
        className="problem-card-glow"
        style={{ ['--card-color' as any]: color }}
      />

      {/* Card principal */}
      <div
        ref={cardRef}
        className="problem-card p-6 md:p-8 rounded-2xl bg-[#0F1424]/80 backdrop-blur-sm border border-white/[0.06] h-full cursor-pointer"
        style={{
          ['--card-color' as any]: color,
          animationDelay: `${index * 120}ms`,
        }}
        onMouseMove={(e) => {
          handleMouseMove(e);
          handleTilt(e);
        }}
        onMouseLeave={handleMouseLeave}
      >
        {/* Número decorativo grande */}
        <div
          className="problem-number absolute top-4 right-6 text-7xl md:text-8xl font-black select-none leading-none pointer-events-none"
          style={{ ['--card-color' as any]: color }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        <div className={`flex ${size === 'large' ? 'md:flex-row md:items-center md:gap-8' : 'flex-col'} gap-5`}>
          {/* Ícono */}
          <div
            className="problem-icon-box flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ ['--card-color' as any]: color }}
          >
            <Icon className="w-8 h-8" />
          </div>

          {/* Texto */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
              {title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {description}
            </p>
          </div>
        </div>

        {/* Línea inferior decorativa */}
        <div
          className="absolute bottom-0 left-6 right-6 h-px opacity-30"
          style={{
            background: `linear-gradient(90deg, transparent, rgb(${color}), transparent)`,
          }}
        />
      </div>
    </div>
  );
}

// ============================================
// 🏛️ COMPONENTE PRINCIPAL: Problems
// ============================================
export default function Problems() {
  const { ref, isVisible } = useInView(0.2);

  return (
    <section
      id="problemas"
      className="relative py-24 md:py-32 bg-[#050510] overflow-hidden"
    >
      {/* Transición elegante desde Hero */}
      <div className="problems-section-divider" />

      {/* Grid sutil de fondo */}
      <div className="problems-bg-grid" />

      {/* Glows ambientales de fondo */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-md mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
            <span className="text-cyan-300 text-xs font-semibold tracking-[0.2em] uppercase">
              Problemas que resolvemos
            </span>
          </div>

          {/* Título grande */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Si tu operación creció,
            <br />
            <span className="problem-title-gradient">
              tu software también debería hacerlo
            </span>
          </h2>

          {/* Subtítulo */}
          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Muchas empresas y emprendedores frenan su crecimiento porque dependen de hojas de cálculo, herramientas aisladas o sistemas genéricos que no escalan con el negocio.
          </p>
        </div>

        {/* BENTO GRID asimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 auto-rows-fr">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <ProblemCard
                key={problem.title}
                icon={Icon}
                title={problem.title}
                description={problem.description}
                index={index}
                color={problem.color}
                size={problem.size as 'normal' | 'large'}
              />
            );
          })}
        </div>

        {/* CTA al final */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-gray-500 text-sm md:text-base mb-4">
            ¿Te identificás con alguno de estos problemas?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-base md:text-lg transition-colors group"
          >
            Charlemos sobre tu caso
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}