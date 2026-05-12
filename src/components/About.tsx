import { Shield, Award, Globe, Zap, MapPin, Code } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const highlights = [
  {
    icon: Code,
    title: 'Desarrollo 100% a medida',
    description:
      'Cada proyecto se construye desde cero según las necesidades reales del cliente. Sin plantillas, sin atajos.',
  },
  {
    icon: Award,
    title: 'Certificaciones internacionales',
    description:
      'Certificados por Cisco Systems, Oracle, Google y TryHackMe en Python, C++, TypeScript, React y ciberseguridad.',
  },
  {
    icon: Shield,
    title: 'Experiencia en seguridad TI',
    description:
      'Más de 15 años en sistemas TI, ciberseguridad y OSINT aplicados a cada solución que desarrollamos.',
  },
  {
    icon: Zap,
    title: 'Equipo enfocado y ágil',
    description:
      'Un equipo de 5 personas especializadas en desarrollo, seguridad, hosting, publicidad y front-end trabajando juntas.',
  },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre-nosotros" className="py-20 md:py-28 bg-dark-light relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left side — texto */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Sobre nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
              Tecnología con experiencia real,{' '}
              <span className="gradient-text">trato humano</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              Soy <strong className="text-white">Emanuel Moreno Di Cesare</strong>, 
              desarrollador con más de 15 años trabajando en sistemas TI, 
              ciberseguridad y OSINT, y más de 8 años construyendo software 
              a medida para PYMEs, comercios y emprendedores en Argentina y Chile.
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              Junto a un equipo de 5 personas especializadas en desarrollo, 
              seguridad, hosting, publicidad y front-end, trabajamos de forma 
              directa con cada cliente. Sin intermediarios, sin respuestas 
              automáticas. Vos hablás con quien construye tu sistema.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Hoy también estamos desarrollando nuestros propios productos: 
              plataformas SaaS con inteligencia artificial y apps diseñadas para 
              cubrir necesidades concretas de personas y negocios.
            </p>

            {/* Locations */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-dark-card border border-dark-border">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-semibold">Casa Central</div>
                  <div className="text-gray-400 text-xs">Mendoza, Argentina</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-dark-card border border-dark-border">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-semibold">Sucursal</div>
                  <div className="text-gray-400 text-xs">Pilar, Buenos Aires</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side — highlights + floating card */}
          <div className="relative">
            
            {/* Floating experience card */}
            <div className="mb-6 p-5 rounded-2xl bg-dark-card border border-primary/20 shadow-xl shadow-primary/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">15+</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Años de experiencia</div>
                  <div className="text-gray-400 text-sm">
                    En sistemas TI, ciberseguridad y desarrollo de software
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="pt-4 border-t border-dark-border">
                <div className="text-xs font-semibold text-primary/70 uppercase tracking-wider mb-3">
                  Certificaciones
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Cisco Systems', 'Oracle', 'Google', 'TryHackMe'].map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/10"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-dark-card border border-dark-border hover:border-primary/30 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                      <div className="text-gray-400 text-xs mt-1">{item.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}