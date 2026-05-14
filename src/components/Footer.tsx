import { useState } from 'react';
import {
  Mail,
  MessageCircle,
  MapPin,
  ArrowUp,
  ArrowRight,
  Send,
  CheckCircle2,
  Globe,
  Heart,
  Code2,
  Sparkles,
} from 'lucide-react';

// ─── Datos de links ───────────────────────────────────────────────────────────

const navLinks = [
  { href: '#inicio',           label: 'Inicio' },
  { href: '#problemas',        label: 'Problemas' },
  { href: '#servicios',        label: 'Servicios' },
  { href: '#por-que-elegirnos',label: 'Por qué elegirnos' },
  { href: '#proceso',          label: 'Proceso' },
  { href: '#casos',            label: 'Casos' },
];

const companyLinks = [
  { href: '#sobre-nosotros', label: 'Sobre nosotros' },
  { href: '#faq',            label: 'FAQ' },
  { href: '#contacto',       label: 'Contacto' },
  { href: 'https://www.linkedin.com/in/emamorenodicesare', label: 'LinkedIn', external: true },
];

const serviceLinks = [
  { href: '#servicios', label: 'Apps móviles a medida' },
  { href: '#servicios', label: 'Plataformas SaaS' },
  { href: '#servicios', label: 'Software de gestión' },
  { href: '#servicios', label: 'Integraciones API' },
  { href: '#servicios', label: 'Ciberseguridad' },
];

const legalLinks = [
  { href: '#privacidad', label: 'Política de privacidad' },
  { href: '#terminos',   label: 'Términos y condiciones' },
  { href: '#contacto',   label: 'Acuerdo NDA' },
];

const locations = [
  { city: 'Mendoza',  country: 'Argentina',          label: 'Casa Central' },
  { city: 'Pilar',    country: 'Buenos Aires, AR',   label: 'Oficina' },
];

// ─── Componente principal ──────────────────────────────────────────────────────

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Acá podrías integrar con tu service preferido (Mailchimp, ConvertKit, etc.)
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ════════ PRE-FOOTER CTA BANNER ════════ */}
      <section className="footer-cta-section">
        <div className="footer-cta-bg-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer-cta-banner">
            <div className="footer-cta-content">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  Última oportunidad
                </span>
              </div>
              <h2 className="footer-cta-title">
                ¿Listo para llevar tu negocio al{' '}
                <span className="title-shimmer">siguiente nivel?</span>
              </h2>
              <p className="footer-cta-subtitle">
                Trabajamos con vos desde la idea hasta el lanzamiento. Sin intermediarios,
                sin atajos. Te respondemos en menos de 24 horas.
              </p>
              <div className="footer-cta-actions">
                <a href="#contacto" className="footer-cta-primary group">
                  Empezar mi proyecto
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/5492634340284?text=Hola%20DotCom,%20quiero%20conocer%20m%C3%A1s%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-cta-secondary"
                >
                  <MessageCircle className="w-4 h-4" />
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            {/* Decorative element */}
            <div className="footer-cta-deco" aria-hidden="true">
              <Code2 className="w-32 h-32 text-primary/10" strokeWidth={1.2} />
            </div>
          </div>
        </div>
      </section>

      {/* ════════ FOOTER PRINCIPAL ════════ */}
      <footer className="site-footer">

        {/* Glow superior decorativo */}
        <div className="footer-top-glow" />
        <div className="footer-bg-grid" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ──── Top section: Brand + Newsletter ──── */}
          <div className="footer-top-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

              {/* Brand block */}
              <div className="lg:col-span-5">
                <a href="#inicio" className="inline-block mb-5">
                  <img
                    src="/images/logo.png"
                    alt="DotCom Software & Web Solutions"
                    className="h-10 w-auto"
                  />
                </a>
                <p className="footer-brand-desc">
                  Software a medida que se adapta a tu negocio, no al revés.
                  Desarrollamos soluciones digitales para empresas que quieren crecer
                  con tecnología robusta y trato directo.
                </p>

                {/* Contactos rápidos */}
                <div className="footer-contacts">
                  <a
                    href="mailto:emamoreno@icloud.com"
                    className="footer-contact-link"
                  >
                    <Mail className="w-4 h-4" />
                    <span>emamoreno@icloud.com</span>
                  </a>
                  <a
                    href="https://wa.me/5492634340284?text=Hola%20DotCom,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-contact-link footer-contact-link--wa"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>+54 9 2634 340284</span>
                  </a>
                </div>

                {/* Alcance global */}
                <div className="footer-global-badge">
                  <Globe className="w-3.5 h-3.5 text-primary" />
                  <span className="text-gray-400 text-xs">
                    Atendemos clientes en{' '}
                    <span className="text-white font-semibold">LATAM</span>,{' '}
                    <span className="text-white font-semibold">Europa</span> y{' '}
                    <span className="text-white font-semibold">Estados Unidos</span>
                  </span>
                </div>
              </div>

              {/* Newsletter block */}
              <div className="lg:col-span-7">
                <div className="footer-newsletter-card">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="footer-newsletter-icon">
                      <Send className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="footer-newsletter-title">
                        Recibí tips y casos reales
                      </h3>
                      <p className="footer-newsletter-desc">
                        Una vez al mes te mandamos un resumen útil sobre tecnología,
                        ciberseguridad y casos de PYMEs. Sin spam, prometido.
                      </p>
                    </div>
                  </div>

                  {subscribed ? (
                    <div className="footer-newsletter-success">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>¡Listo! Te suscribiste correctamente. 🎉</span>
                    </div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        className="footer-newsletter-input"
                      />
                      <button type="submit" className="footer-newsletter-btn group">
                        <span>Suscribirme</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </form>
                  )}

                  <p className="footer-newsletter-disclaimer">
                    Al suscribirte aceptás recibir comunicaciones esporádicas. Podés darte
                    de baja cuando quieras.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ──── Middle section: Links grid ──── */}
          <div className="footer-links-section">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">

              {/* Navegación */}
              <div>
                <h4 className="footer-links-title">Navegación</h4>
                <ul className="footer-links-list">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Servicios */}
              <div>
                <h4 className="footer-links-title">Servicios</h4>
                <ul className="footer-links-list">
                  {serviceLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empresa */}
              <div>
                <h4 className="footer-links-title">Empresa</h4>
                <ul className="footer-links-list">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="footer-link"
                      >
                        {link.label}
                        {link.external && (
                          <ArrowRight className="w-3 h-3 -rotate-45 inline-block ml-1 opacity-50" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ubicaciones */}
              <div>
                <h4 className="footer-links-title">Ubicaciones</h4>
                <ul className="footer-links-list">
                  {locations.map((loc) => (
                    <li key={loc.city} className="footer-location-item">
                      <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white text-sm font-semibold leading-tight">
                          {loc.city}
                        </div>
                        <div className="text-gray-500 text-xs leading-tight mt-0.5">
                          {loc.country}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Legal links */}
                <h4 className="footer-links-title mt-8">Legal</h4>
                <ul className="footer-links-list">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ──── Bottom bar ──── */}
          <div className="footer-bottom-bar">

            {/* Left: Status + Copyright */}
            <div className="footer-bottom-left">
              {/* Status badge */}
              <div className="footer-status-badge">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="text-gray-300 text-xs font-medium">
                  All systems operational
                </span>
              </div>

              <p className="footer-copyright">
                © {currentYear} <span className="text-white font-semibold">DotCom Software & Web Solutions</span>.
                Todos los derechos reservados.
              </p>
            </div>

            {/* Right: Socials + Made with + Back to top */}
            <div className="footer-bottom-right">
              {/* Made with love */}
              <div className="footer-made-with">
                <span>Hecho con</span>
                <Heart className="w-3.5 h-3.5 text-pink-400 footer-heart" fill="currentColor" />
                <span>en Argentina</span>
              </div>

              {/* Social icons */}
              <a
                href="https://www.linkedin.com/in/emamorenodicesare"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn de Emanuel Moreno Di Cesare"
              >
                <Globe className="w-4 h-4" />
              </a>

              <a
                href="mailto:emamoreno@icloud.com"
                className="footer-social-icon"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Back to top */}
              <button
                onClick={scrollToTop}
                className="footer-back-to-top group"
                aria-label="Volver arriba"
              >
                <span>Volver arriba</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
