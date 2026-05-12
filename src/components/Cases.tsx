import { Smartphone, Cloud, Settings, AlertTriangle, Lightbulb, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const cases = [
  {
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    tag: 'App Móvil',
    title: 'App móvil para gestión de servicios en campo',
    problem:
      'Los técnicos usaban planillas de papel y WhatsApp para reportar visitas. La información llegaba tarde, incompleta y sin trazabilidad.',
    solution:
      'Desarrollamos una app móvil que permite registrar visitas, completar formularios dinámicos, capturar fotos y firmas, y sincronizar todo con la oficina central en tiempo real, incluso sin conexión.',
    results: [
      'Reducción del 60% en tiempo de reportes',
      'Eliminación total del papel',
      'Sincronización offline/online automática',
    ],
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    tag: 'Plataforma SaaS',
    title: 'Plataforma SaaS para gestión de clientes y operaciones',
    problem:
      'La empresa necesitaba ofrecer su servicio como producto digital, pero no tenía la infraestructura ni la plataforma para escalar.',
    solution:
      'Construimos una plataforma multi-tenant que permite gestionar clientes, operaciones, facturación y métricas de negocio desde un panel centralizado con acceso basado en roles.',
    results: [
      'Más de 200 empresas activas en la plataforma',
      'Integración con 5 pasarelas de pago',
      'Dashboard con métricas en tiempo real',
    ],
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
  },
  {
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    tag: 'Software de gestión',
    title: 'Software de gestión a medida para empresa en crecimiento',
    problem:
      'La empresa usaba 4 herramientas distintas que no se comunicaban entre sí: inventario, ventas, compras y contabilidad funcionaban de forma aislada.',
    solution:
      'Diseñamos un sistema integral de gestión que unificó todos los módulos en una sola plataforma, con reportes automáticos y flujos de trabajo optimizados.',
    results: [
      'Unificación de 4 sistemas en 1',
      'Reportes automáticos que ahorraron 20hs/semana',
      'Escalado de 5 a 50 usuarios sin problemas',
    ],
    tech: ['React', 'Python', 'PostgreSQL', 'Docker'],
  },
];

export default function Cases() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="casos" className="py-20 md:py-28 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Casos · Soluciones aplicadas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Proyectos diseñados para{' '}
            <span className="gradient-text">resolver problemas reales</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada proyecto nace de un desafío concreto. Así es como transformamos
            problemas en soluciones funcionales.
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((caseItem, index) => (
            <CaseCard key={caseItem.title} caseItem={caseItem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  caseItem,
  index,
}: {
  caseItem: (typeof cases)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = caseItem.icon;
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`group rounded-2xl bg-dark-card border border-dark-border glow-border overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className={`relative overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
          <img
            src={caseItem.image}
            alt={caseItem.title}
            className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-card/90 via-dark-card/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-dark-card/50" />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium backdrop-blur-sm border border-primary/10">
              <Icon className="w-4 h-4" />
              {caseItem.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`}>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-5 group-hover:text-primary transition-colors duration-300">
            {caseItem.title}
          </h3>

          {/* Problem */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <div className="text-xs font-semibold text-red-400/80 uppercase tracking-wider mb-1">Problema</div>
              <p className="text-gray-400 text-sm leading-relaxed">{caseItem.problem}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="flex items-start gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Lightbulb className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-1">Solución</div>
              <p className="text-gray-400 text-sm leading-relaxed">{caseItem.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-xs font-semibold text-green-400/80 uppercase tracking-wider">Resultados</span>
            </div>
            <div className="space-y-2 pl-6">
              {caseItem.results.map((result) => (
                <div key={result} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {caseItem.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}