import { FileSpreadsheet, Database, Rocket, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const problems = [
  {
    icon: FileSpreadsheet,
    title: 'Digitalizar procesos manuales',
    description:
      'Reducimos tareas repetitivas, errores operativos y pérdida de tiempo. Tu equipo deja de depender de planillas y herramientas genéricas para enfocarse en lo que importa.',
  },
  {
    icon: Database,
    title: 'Centralizar información clave',
    description:
      'Unificamos datos, usuarios y procesos en una sola plataforma. No más información dispersa entre Excel, WhatsApp, emails y sistemas que no se hablan entre sí.',
  },
  {
    icon: Rocket,
    title: 'Lanzar productos digitales con rapidez',
    description:
      'Convertimos ideas en MVPs, SaaS o apps listas para validar y crecer. Si tenés un producto digital en la cabeza, nosotros lo llevamos a la realidad.',
  },
  {
    icon: TrendingUp,
    title: 'Escalar sin depender de herramientas limitadas',
    description:
      'Creamos software que evoluciona junto con el negocio. Dejá de forzar tu operación dentro de un sistema genérico que ya no da para más.',
  },
];

export default function Problems() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="problemas" className="py-20 md:py-28 bg-dark relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Problemas que resolvemos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Si tu operación creció,{' '}
            <span className="gradient-text">tu software también debería hacerlo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Muchas empresas y emprendedores frenan su crecimiento porque dependen
            de hojas de cálculo, herramientas aisladas o sistemas genéricos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <ProblemCard
                key={problem.title}
                icon={Icon}
                title={problem.title}
                description={problem.description}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group relative p-6 md:p-8 rounded-2xl bg-dark-card border border-dark-border glow-border transition-all duration-700 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background number */}
      <div className="absolute top-4 right-5 text-6xl font-black text-primary/[0.04] select-none leading-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
