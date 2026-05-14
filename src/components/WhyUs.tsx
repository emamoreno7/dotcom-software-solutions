import { Fingerprint, Target, Users, Layers, Headphones, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const reasons = [
  {
    icon: Users,
    title: 'Trato directo, sin intermediarios',
    description:
      'Hablás con quien construye tu sistema. Nuestro equipo te acompaña de principio a fin, sin call centers ni mensajes automáticos.',
    color: '0, 191, 255',
    colorHex: '#00BFFF',
    highlight: 'Sin call centers',
    featured: true,
  },
  {
    icon: Fingerprint,
    title: 'Tu sistema, hecho a tu medida',
    description:
      'No usamos plantillas ni soluciones genéricas. Cada proyecto se diseña desde cero según tu operación, usuarios y objetivos.',
    color: '139, 92, 246',
    colorHex: '#8B5CF6',
    highlight: '100% custom',
  },
  {
    icon: Target,
    title: 'Enfoque humano en cada proyecto',
    description:
      'Nos importa que entiendas lo que construimos. Te llevamos de a poco para que manejes tu sistema con autonomía.',
    color: '236, 72, 153',
    colorHex: '#EC4899',
    highlight: 'Te capacitamos',
  },
  {
    icon: Shield,
    title: 'Seguridad y solidez técnica',
    description:
      'Con más de 15 años en sistemas TI y ciberseguridad, cada solución se construye con seguridad desde el inicio. No es un plus.',
    color: '0, 255, 136',
    colorHex: '#00FF88',
    highlight: 'Security-first',
  },
  {
    icon: Layers,
    title: 'Equipo completo, un solo contacto',
    description:
      'Desarrollo, seguridad, hosting, publicidad y front-end en un solo equipo. No coordinás múltiples proveedores.',
    color: '251, 146, 60',
    colorHex: '#FB923C',
    highlight: 'Todo en uno',
  },
  {
    icon: Headphones,
    title: 'Acompañamiento post-lanzamiento',
    description:
      'No desaparecemos después de entregar. Seguimos disponibles para ajustes, mejoras y soporte continuo.',
    color: '0, 191, 255',
    colorHex: '#00BFFF',
    highlight: 'Soporte continuo',
  },
];

const stats = [
  { value: '100%', label: 'Código propio', sublabel: 'Sin plantillas' },
  { value: '0', label: 'Intermediarios', sublabel: 'Trato directo' },
  { value: '<24h', label: 'Tiempo respuesta', sublabel: 'Soporte real' },
  { value: '15+', label: 'Años de experiencia', sublabel: 'TI & Ciber' },
];

export default function WhyUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="por-que-elegirnos"
      className="relative py-24 md:py-32 bg-dark overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="whyus-bg-grid" />
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              Por qué elegirnos
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            No somos una agencia más.
            <br />
            <span className="whyus-gradient-text">Somos tu equipo técnico.</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Trabajamos con pocas empresas a la vez para darte la atención que tu
            proyecto merece.{' '}
            <span className="text-white font-semibold">
              Calidad, cercanía y resultados reales.
            </span>
          </p>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm mb-4">
            ¿Listo para trabajar con un equipo que se preocupa por tu proyecto?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold group transition-colors"
          >
            Conocé nuestro proceso de trabajo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`whyus-stat-card transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl md:text-4xl font-black whyus-gradient-text mb-1">
        {stat.value}
      </div>
      <div className="text-white text-sm font-semibold mb-0.5">{stat.label}</div>
      <div className="text-gray-500 text-xs">{stat.sublabel}</div>
    </div>
  );
}

function ReasonCard({
  reason,
  index,
}: {
  reason: typeof reasons[0];
  index: number;
}) {
  const { ref: scrollRef, isVisible } = useScrollAnimation();
  const Icon = reason.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={scrollRef}
      className={`whyus-card group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        '--card-color': reason.color,
        transitionDelay: `${index * 80}ms`,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
    >
      <div className="whyus-number">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="whyus-icon-box">
        <Icon className="w-6 h-6" strokeWidth={2} />
      </div>

      <div className="whyus-highlight-badge">
        <Sparkles className="w-3 h-3" />
        <span>{reason.highlight}</span>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight relative z-10">
        {reason.title}
      </h3>
      <p className="text-gray-400 leading-relaxed text-sm md:text-base relative z-10">
        {reason.description}
      </p>

      <div className="whyus-bottom-line" />
    </div>
  );
}
