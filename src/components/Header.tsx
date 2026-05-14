import { useState, useEffect, useRef } from "react";
import { Calendar, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio", id: "inicio" },
  { href: "#problemas", label: "Problemas", id: "problemas" },
  { href: "#servicios", label: "Servicios", id: "servicios" },
  { href: "#nosotros", label: "Nosotros", id: "nosotros" },
  { href: "#proceso", label: "Proceso", id: "proceso" },
  { href: "#casos", label: "Casos", id: "casos" },
  { href: "#contacto", label: "Contacto", id: "contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const lastScrollY = useRef(0);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleMagnetic = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const resetMagnetic = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translate(0, 0)";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className={`mx-auto px-4 transition-all duration-500 ${scrolled ? "pt-3" : "pt-6"}`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            
            {/* LOGO */}
            <a href="#inicio" className="group flex items-center gap-2 shrink-0">
              <div
                className="relative overflow-hidden rounded-2xl transition-all duration-500 px-3 py-2"
                style={{
                  background: scrolled ? "rgba(0, 0, 0, 0.5)" : "transparent",
                  backdropFilter: scrolled ? "blur(20px)" : "none",
                  WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
                  border: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.png`}
                  alt="DotCom Software & Web Solutions"
                  className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </a>

            {/* DESKTOP NAV - PILL FLOTANTE */}
<nav
  className="hidden lg:flex relative items-center"
  style={{
    background: "rgba(15, 23, 42, 0.7)",
    backdropFilter: "blur(24px) saturate(180%)",
    WebkitBackdropFilter: "blur(24px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    borderRadius: "9999px",
    padding: "6px",
    gap: "4px",
    boxShadow: `
      0 8px 32px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      inset 0 -1px 0 rgba(0, 0, 0, 0.3)
    `,
  }}
>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseMove={handleMagnetic}
                  onMouseLeave={resetMagnetic}
                  className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                    activeSection === link.id ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA DESKTOP */}
            <a
              href="#contacto"
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105 group relative overflow-hidden shrink-0"
              style={{
                background: "linear-gradient(90deg, #06b6d4, #2563eb)",
                boxShadow: "0 4px 20px rgba(6, 182, 212, 0.4)",
              }}
            >
              <Calendar className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Agendar reunión</span>
            </a>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-full text-white transition-colors"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU FULLSCREEN */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
          }}
          onClick={() => setIsOpen(false)}
        />
        <nav className="relative h-full flex flex-col items-center justify-center gap-2 px-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-bold text-white hover:text-cyan-400 transition-all duration-500 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className={`mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              background: "linear-gradient(90deg, #06b6d4, #2563eb)",
              boxShadow: "0 8px 40px rgba(6, 182, 212, 0.5)",
              transitionDelay: isOpen ? `${navLinks.length * 60}ms` : "0ms",
            }}
          >
            <Calendar className="w-5 h-5" />
            Agendar reunión
          </a>
        </nav>
      </div>
    </>
  );
}
