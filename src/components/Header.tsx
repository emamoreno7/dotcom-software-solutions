import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#problemas', label: 'Problemas' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#por-que-elegirnos', label: 'Nosotros' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#casos', label: 'Casos' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32 md:h-36">
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="DotCom Software & Web Solutions"
              className="h-12 md:h-14 w-auto bg-transparent"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-300 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-dark font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <Calendar className="w-4 h-4" />
              Agendar reunión
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-dark/95 backdrop-blur-xl border-t border-dark-border px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="block px-4 py-3 text-gray-300 hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={handleNavClick}
            className="block mt-3 px-4 py-3 bg-primary hover:bg-primary-dark text-dark font-semibold text-center rounded-lg transition-all duration-300"
          >
            Agendar reunión
          </a>
        </nav>
      </div>
    </header>
  );
}
