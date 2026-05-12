import { Smartphone, Cloud, Settings, Plug, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Smartphone,
    title: 'Apps móviles a medida',
    description:
      'Desarrollamos aplicaciones móviles pensadas para ofrecer una experiencia clara, estable y escalable. Diseñamos cada flujo para que se adapte naturalmente a tu operación.',
    idealFor: [
      'Apps de servicios en campo',
      'Marketplaces y plataformas de comercio',
      'Plataformas internas para equipos',
      'Soluciones logísticas y de seguimiento',
    ],
  },
  {
    icon: Cloud,
    title: 'Plataformas SaaS y productos digitales',
    description:
      'Creamos SaaS y productos digitales desde cero, con enfoque en validación, crecimiento y escalabilidad. Del MVP a la plataforma robusta.',
    idealFor: [
      'Emprendedores con una idea nueva',
      'Startups que necesitan velocidad',
      'Empresas lanzando un nuevo producto',
      'Plataformas de suscripción y membresía',
    ],
  },
  {
    icon: Settings,
    title: 'Software de gestión a medida',
    description:
      'Diseñamos sistemas personalizados para organizar operaciones, automatizar procesos y mejorar el control del negocio. Todo hecho según tu flujo real.',
    idealFor: [
      'Gestión comercial y ventas',
      'Operaciones internas y producción',
      'Seguimiento de clientes y CRM',
      'Paneles administrativos y reportes',
    ],
  },
  {
    icon: Plug,
    title: 'Integraciones y evolución tecnológica',
    description:
      'Conectamos tu software con APIs, servicios externos, pasarelas de pago, herramientas de facturación y analítica. Hacemos que todo funcione junto.',
    idealFor: [
      'Automatización de procesos entre sistemas',
      'Conexión con ERPs y herramientas legacy',
      'Pasarelas de pago y facturación',
      'Sincronización de datos y reportería',
    ],
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicios" className="py-20 md:py-28 bg-dark-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Nuestros servicios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Soluciones que{' '}
            <span className="gradient-text">desarrollamos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            No trabajamos con plantillas genéricas. Diseñamos software según
            los objetivos, flujos y necesidades reales de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`group relative p-6 md:p-8 rounded-2xl bg-dark-card border border-dark-border glow-border transition-all duration-700 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Gradient accent on top */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-primary/10 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      {/* Title & Description */}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-400 leading-relaxed mb-5">{service.description}</p>

      {/* Ideal for label */}
      <div className="text-xs font-semibold text-primary/70 uppercase tracking-wider mb-3">
        Ideal para
      </div>

      {/* Bullets */}
      <ul className="space-y-2.5">
        {service.idealFor.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
