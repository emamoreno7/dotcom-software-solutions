import { Fingerprint, Target, Users, Layers, Headphones, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const reasons = [
  {
    icon: Users,
    title: 'Trato directo, sin intermediarios',
    description:
      'Hablás con quien construye tu sistema. Nuestro equipo te acompaña de principio a fin, sin call centers ni mensajes automáticos. La comunicación es real, cercana y continua.',
  },
  {
    icon: Fingerprint,
    title: 'Tu sistema, hecho a tu medida',
    description:
      'No usamos plantillas ni soluciones genéricas. Cada proyecto se diseña desde cero según tu operación, tus usuarios y tus objetivos reales. Lo que construimos es tuyo, no una copia.',
  },
  {
    icon: Target,
    title: 'Enfoque humano en cada proyecto',
    description:
      'Nos importa que entiendas lo que estamos construyendo. Te llevamos de a poco para que puedas manejar tu propio sistema de forma nativa, con autonomía y confianza.',
  },
  {
    icon: Shield,
    title: 'Seguridad y solidez técnica',
    description:
      'Con más de 15 años en sistemas TI y ciberseguridad, cada solución que construimos tiene en cuenta la seguridad desde el inicio. No es un plus, es parte del proceso.',
  },
  {
    icon: Layers,
    title: 'Equipo completo, un solo punto de contacto',
    description:
      'Desarrollo, seguridad, hosting, publicidad y front-end en un solo equipo. No necesitás coordinar con múltiples proveedores. Nosotros nos encargamos de todo.',
  },
  {
    icon: Headphones,
    title: 'Acompañamiento real post-lanzamiento',
    description:
      'No desaparecemos después de entregar. Seguimos disponibles para ajustes, mejoras y soporte. Porque un buen software no termina en el lanzamiento, evoluciona.',
  },
];

export default function WhyUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="por-que-elegirnos" className="py-20 md:py-28 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/[0.04] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
            No somos una agencia más.{' '}
            <span className="gradient-text">Somos tu equipo técnico</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trabajamos con pocas empresas a la vez para darte la atención que 
            tu proyecto merece. Calidad, cercanía y resultados reales.
          </p>
        </div>

        {/* 6 cards en 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = reason.icon;

  return (
    <div
      ref={ref}
      className={`group relative p-6 md:p-8 rounded-2xl bg-dark-card border border-dark-border glow-border transition-all duration-700 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Number badge */}
      <div className="absolute top-4 right-5 text-5xl font-black text-primary/[0.06] select-none leading-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
        {reason.title}
      </h3>
      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
        {reason.description}
      </p>
    </div>
  );
}