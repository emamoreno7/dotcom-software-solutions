import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const quickLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#problemas', label: 'Problemas' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#por-que-elegirnos', label: 'Por qué elegirnos' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#casos', label: 'Casos' },
  { href: '#sobre-nosotros', label: 'Sobre nosotros' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
];

const serviceLinks = [
  { href: '#servicios', label: 'Apps móviles a medida' },
  { href: '#servicios', label: 'Plataformas SaaS' },
  { href: '#servicios', label: 'Software de gestión' },
  { href: '#servicios', label: 'Integraciones' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark border-t border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="inline-block mb-5">
              <img
                src="/images/logo.png"
                alt="DotCom Software & Web Solutions"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Software a medida que se adapta a tu negocio, no al revés.
              Desarrollamos soluciones digitales para empresas que quieren crecer.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:emamoreno@icloud.com"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                emamoreno@icloud.com
              </a>
              <a
                href="https://wa.me/5492634340284?text=Hola%20DotCom,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-whatsapp transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +54 9 2634 340284
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ubicaciones</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white text-sm font-medium">Casa Central</div>
                  <div className="text-gray-400 text-sm">Mendoza, Argentina</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white text-sm font-medium">Sucursal</div>
                  <div className="text-gray-400 text-sm">Pilar, Buenos Aires, Argentina</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 DotCom Software & Web Solutions. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm group"
          >
            Volver arriba
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
