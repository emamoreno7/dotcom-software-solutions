import { useState } from 'react';
import {
  ChevronDown,
  Search,
  HelpCircle,
  Sparkles,
  MessageCircle,
  ChevronRight,
  Briefcase,
  CreditCard,
  Headphones,
  Shield,
  Globe,
  Filter,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Category = 'Todas' | 'Proyecto' | 'Pagos' | 'Soporte' | 'Seguridad' | 'Internacional';

interface FAQ {
  category: Exclude<Category, 'Todas'>;
  question: string;
  answer: string;
  highlight?: string; // dato destacado opcional
}

// ─── Categorías con su accent color ────────────────────────────────────────────

const categoryConfig: Record<Category, { color: string; rgb: string; icon: React.ElementType }> = {
  'Todas':         { color: '#00BFFF', rgb: '0, 191, 255',   icon: Filter },
  'Proyecto':      { color: '#00BFFF', rgb: '0, 191, 255',   icon: Briefcase },
  'Pagos':         { color: '#00FF88', rgb: '0, 255, 136',   icon: CreditCard },
  'Soporte':       { color: '#8B5CF6', rgb: '139, 92, 246',  icon: Headphones },
  'Seguridad':     { color: '#EC4899', rgb: '236, 72, 153',  icon: Shield },
  'Internacional': { color: '#FB923C', rgb: '251, 146, 60',  icon: Globe },
};

// ─── Datos de FAQs ────────────────────────────────────────────────────────────

const faqs: FAQ[] = [
  // ── PROYECTO ──
  {
    category: 'Proyecto',
    question: '¿Cuánto cuesta un proyecto típico?',
    answer:
      'Cada proyecto es único, por eso trabajamos con presupuestos personalizados. Como referencia, los proyectos arrancan desde USD 1.000 para soluciones puntuales (landing pages, automatizaciones, módulos específicos) y escalan según complejidad para sistemas integrales, SaaS o plataformas con varios módulos. Después de una breve charla podemos darte un rango concreto sin compromiso.',
    highlight: 'Desde USD 1.000',
  },
  {
    category: 'Proyecto',
    question: '¿En cuánto tiempo recibo una propuesta?',
    answer:
      'En menos de 24 horas desde tu consulta inicial te enviamos una pre-propuesta con alcance estimado, tiempos y rangos de inversión. Si decidís avanzar, agendamos una reunión técnica para profundizar y entregamos la propuesta final detallada.',
    highlight: 'Pre-propuesta en 24hs',
  },
  {
    category: 'Proyecto',
    question: '¿Desarrollan productos desde cero?',
    answer:
      'Sí, es uno de nuestros servicios principales. Te acompañamos desde la idea hasta el producto en producción: definimos juntos el MVP, diseñamos la arquitectura, construimos la solución y la llevamos al mercado. Todo con un proceso claro, feedback continuo y entregas parciales para que veas el avance real.',
  },
  {
    category: 'Proyecto',
    question: '¿También mejoran o amplían software existente?',
    answer:
      'Sí. Trabajamos tanto con proyectos nuevos como con sistemas existentes que necesitan evolucionar. Ya sea integrar tu software con otros servicios, agregar nuevos módulos, modernizar tecnología legacy o mejorar el rendimiento, podemos ayudarte sin tener que empezar de cero.',
  },
  {
    category: 'Proyecto',
    question: '¿Qué tecnologías usan?',
    answer:
      'Trabajamos con un stack moderno y probado: React, Next.js, TypeScript y React Native para frontend y mobile; Node.js, Python y FastAPI para backend; PostgreSQL, MongoDB y Supabase para datos; AWS, Vercel y Docker para deploy. Para ciberseguridad usamos herramientas como Wazuh, Fail2Ban y prácticas de hardening estándar de la industria. Elegimos la tecnología en función de tu proyecto, no al revés.',
  },

  // ── PAGOS ──
  {
    category: 'Pagos',
    question: '¿Cómo se cobra el proyecto?',
    answer:
      'Trabajamos con un esquema simple y transparente en 3 partes: 25% al inicio para arrancar de inmediato, 50% al llegar a la mitad del proyecto (cuando ya viste avances concretos), y 25% final contra la entrega y conformidad total del producto. Sin sorpresas, sin costos ocultos.',
    highlight: '25% / 50% / 25%',
  },

  // ── SOPORTE ──
  {
    category: 'Soporte',
    question: '¿Qué pasa después del lanzamiento?',
    answer:
      'No desaparecemos cuando entregamos. Todos nuestros servicios incluyen 3 meses de soporte y mantenimiento gratuitos post-lanzamiento que cubren correcciones, ajustes menores, monitoreo y consultas técnicas. Después podés contratar planes mensuales de mantenimiento evolutivo según las necesidades de tu producto.',
    highlight: '3 meses gratis',
  },
  {
    category: 'Soporte',
    question: '¿Ofrecen mantenimiento y evolución?',
    answer:
      'Sí, ofrecemos planes de soporte continuo que incluyen corrección de bugs, actualizaciones de seguridad, mejoras de rendimiento, nuevas funcionalidades y monitoreo proactivo. Te acompañamos a lo largo del ciclo de vida completo de tu software, no solo en el lanzamiento.',
  },

  // ── SEGURIDAD ──
  {
    category: 'Seguridad',
    question: '¿Cómo manejan la seguridad de los datos?',
    answer:
      'La seguridad es parte de nuestro ADN, no un agregado. Trabajamos sobre infraestructura cloud-grade con cifrado en tránsito (TLS 1.3) y en reposo (AES-256), autenticación robusta con JWT/OAuth, control de accesos basado en roles (RBAC), backups automáticos diarios y logs de auditoría. Aplicamos mejores prácticas OWASP en cada línea de código y todas nuestras bases de datos cumplen con estándares internacionales de protección.',
    highlight: 'Cifrado AES-256 + TLS 1.3',
  },
  {
    category: 'Seguridad',
    question: '¿Firman acuerdo de confidencialidad (NDA)?',
    answer:
      'Por supuesto. Antes de iniciar cualquier proyecto firmamos un acuerdo de confidencialidad (NDA) revisado por nuestro asesor legal interno. Tu idea, tu información comercial, tus datos y todo lo que compartas con nosotros queda protegido legalmente. Tu propiedad intelectual es 100% tuya.',
    highlight: 'NDA con respaldo legal',
  },

  // ── INTERNACIONAL ──
  {
    category: 'Internacional',
    question: '¿Trabajan con clientes de distintos países?',
    answer:
      'Sí, trabajamos con clientes en LATAM, Estados Unidos y Europa. Nos adaptamos al mercado donde opere tu proyecto: idioma, zona horaria, regulaciones locales, pasarelas de pago regionales y cualquier requerimiento del entorno. Nuestra experiencia internacional nos permite operar en contextos diversos con total fluidez.',
  },
  {
    category: 'Internacional',
    question: '¿Pueden adaptar el software a requisitos legales o administrativos?',
    answer:
      'Absolutamente. Parte de nuestro diferencial es la adaptación a requerimientos legales, administrativos y operativos de cada mercado. Contemplamos facturación electrónica (AFIP, SII, SAT, etc.), normativas de protección de datos (GDPR, LGPD, Ley 25.326), regulaciones sectoriales y cualquier marco legal que aplique a tu negocio o industria.',
  },
];

// ─── Componente: Item individual ───────────────────────────────────────────────

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const config = categoryConfig[faq.category];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <div
      ref={ref}
      className={`faq-item transition-all duration-700 ${
        isOpen ? 'faq-item--open' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{
        transitionDelay: `${Math.min(index * 60, 240)}ms`,
        '--accent-color': config.color,
        '--accent-rgb': config.rgb,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
    >
      <div className="faq-item-spotlight" />
      <div className="faq-item-border" />

      <button
        onClick={onToggle}
        className="faq-item-button"
        aria-expanded={isOpen}
      >
        {/* Number badge */}
        <span className="faq-item-number" style={{ color: config.color }}>
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Pregunta + categoría */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="faq-item-category"
              style={{
                color: config.color,
                background: `rgba(${config.rgb}, 0.1)`,
                borderColor: `rgba(${config.rgb}, 0.25)`,
              }}
            >
              {faq.category}
            </span>
            {faq.highlight && (
              <span className="faq-item-highlight">
                <Sparkles className="w-3 h-3" />
                {faq.highlight}
              </span>
            )}
          </div>
          <h3
            className={`faq-item-question ${isOpen ? 'faq-item-question--open' : ''}`}
            style={isOpen ? { color: config.color } : undefined}
          >
            {faq.question}
          </h3>
        </div>

        {/* Chevron */}
        <div
          className={`faq-item-chevron ${isOpen ? 'faq-item-chevron--open' : ''}`}
          style={{
            background: isOpen ? `rgba(${config.rgb}, 0.15)` : undefined,
            borderColor: isOpen ? `rgba(${config.rgb}, 0.3)` : undefined,
          }}
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            style={{ color: config.color }}
          />
        </div>
      </button>

      {/* Respuesta */}
      <div className={`faq-item-answer ${isOpen ? 'faq-item-answer--open' : ''}`}>
        <div className="faq-item-answer-inner">
          <div
            className="faq-item-answer-line"
            style={{ background: `linear-gradient(180deg, ${config.color}, transparent)` }}
          />
          <p className="faq-item-answer-text">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Componente principal ──────────────────────────────────────────────────────

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<Category>('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // primera pregunta abierta por default

  const categories: Category[] = ['Todas', 'Proyecto', 'Pagos', 'Soporte', 'Seguridad', 'Internacional'];

  // Filtrado: categoría + búsqueda
  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'Todas' || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 md:py-28 bg-dark relative overflow-hidden">

      {/* ── Fondos decorativos ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 faq-bg-grid opacity-[0.025] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              FAQ · Preguntas frecuentes
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Resolvemos tus <span className="title-shimmer">dudas</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Las preguntas más comunes que recibimos antes de empezar un proyecto.
            Respuestas claras, sin vueltas.
          </p>

          {/* Highlight badge */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-dark-card border border-dark-border">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-gray-300 text-sm">
              <span className="text-white font-semibold">{faqs.length} respuestas</span>
              {' '}· Actualizadas según consultas reales
            </span>
          </div>
        </div>

        {/* ── Search bar ── */}
        <div
          className={`faq-search-wrap transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Search className="faq-search-icon" />
          <input
            type="text"
            placeholder="Buscar una pregunta..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="faq-search-input"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="faq-search-clear"
              aria-label="Limpiar búsqueda"
            >
              ×
            </button>
          )}
        </div>

        {/* ── Filtros por categoría ── */}
        <div
          className={`faq-filters transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {categories.map((cat) => {
            const config = categoryConfig[cat];
            const Icon = config.icon;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`faq-filter-btn ${isActive ? 'faq-filter-btn--active' : ''}`}
                style={
                  isActive
                    ? {
                        color: config.color,
                        borderColor: `rgba(${config.rgb}, 0.4)`,
                        background: `rgba(${config.rgb}, 0.1)`,
                      }
                    : undefined
                }
              >
                <Icon className="w-3.5 h-3.5" />
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Contador ── */}
        <p className="text-gray-500 text-sm mb-6 ml-1">
          {filteredFaqs.length === 0 ? (
            <>No se encontraron preguntas</>
          ) : (
            <>
              Mostrando{' '}
              <span className="text-gray-300 font-medium">{filteredFaqs.length}</span>{' '}
              {filteredFaqs.length === 1 ? 'pregunta' : 'preguntas'}
              {activeCategory !== 'Todas' && (
                <> en{' '}
                  <span style={{ color: categoryConfig[activeCategory].color }}>
                    {activeCategory}
                  </span>
                </>
              )}
              {searchQuery && <> para "<span className="text-primary">{searchQuery}</span>"</>}
            </>
          )}
        </p>

        {/* ── Lista de FAQs ── */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <FAQItem
                key={`${faq.category}-${faq.question}`}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))
          ) : (
            <div className="faq-empty-state">
              <Search className="w-10 h-10 text-gray-600 mb-3" />
              <p className="text-gray-400 mb-1">No encontramos resultados</p>
              <p className="text-gray-600 text-sm">Probá con otra palabra clave o cambiá la categoría</p>
            </div>
          )}
        </div>

        {/* ── Card "¿No encontraste?" ── */}
        <div
          className={`faq-help-card transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="faq-help-icon-wrap">
            <MessageCircle className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-1">
              ¿No encontraste tu pregunta?
            </h3>
            <p className="text-gray-400 text-sm">
              Escribinos directamente. Respondemos en menos de 24 horas, hablás con quien construye tu sistema.
            </p>
          </div>
          <a href="#contacto" className="faq-help-cta group">
            Hablemos
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}