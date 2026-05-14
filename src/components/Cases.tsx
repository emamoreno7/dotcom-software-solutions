import { useState, useRef, useCallback } from 'react';
import {
  Smartphone,
  Cloud,
  Settings,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Shield,
  ShoppingCart,
  Users,
  Clock,
  ExternalLink,
  Quote,
  ChevronRight,
  Sparkles,
  Filter,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useInView } from 'react-intersection-observer';

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface Metric {
  value: number;
  suffix: string;
  label: string;
}

interface CaseItem {
  icon: React.ElementType;
  image: string;
  category: string;
  industries: string[];
  tag: string;
  isReal: boolean;
  duration: string;
  accentColor: string;
  accentRGB: string;
  title: string;
  clientQuote: string;
  clientName: string;
  problem: string;
  solution: string;
  results: string[];
  metrics: Metric[];
  tech: string[];
}

// ─── Datos ────────────────────────────────────────────────────────────────────

const cases: CaseItem[] = [
  {
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    category: 'App Móvil',
    industries: ['Servicios', 'Field Service'],
    tag: 'App Móvil',
    isReal: true,
    duration: '4 meses',
    accentColor: '#00BFFF',
    accentRGB: '0, 191, 255',
    title: 'App móvil para gestión de servicios en campo',
    clientQuote: 'Pasamos de perder información todos los días a tener todo centralizado y en tiempo real.',
    clientName: 'Gerente de Operaciones · Empresa de servicios técnicos',
    problem:
      'Los técnicos usaban planillas de papel y WhatsApp para reportar visitas. La información llegaba tarde, incompleta y sin trazabilidad.',
    solution:
      'Desarrollamos una app móvil que permite registrar visitas, completar formularios dinámicos, capturar fotos y firmas, y sincronizar todo con la oficina central en tiempo real, incluso sin conexión.',
    results: [
      'Reducción del 60% en tiempo de reportes',
      'Eliminación total del papel',
      'Sincronización offline/online automática',
    ],
    metrics: [
      { value: 60, suffix: '%', label: 'Menos tiempo en reportes' },
      { value: 100, suffix: '%', label: 'Trazabilidad de visitas' },
      { value: 3, suffix: 'x', label: 'Más visitas por día' },
    ],
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    category: 'SaaS',
    industries: ['SaaS', 'Tecnología'],
    tag: 'Plataforma SaaS',
    isReal: true,
    duration: '6 meses',
    accentColor: '#8B5CF6',
    accentRGB: '139, 92, 246',
    title: 'Plataforma SaaS para gestión de clientes y operaciones',
    clientQuote: 'Lo que antes era un sueño de escalar, hoy es una realidad con más de 200 empresas usando el producto.',
    clientName: 'CEO · Startup de servicios B2B',
    problem:
      'La empresa necesitaba ofrecer su servicio como producto digital, pero no tenía la infraestructura ni la plataforma para escalar.',
    solution:
      'Construimos una plataforma multi-tenant que permite gestionar clientes, operaciones, facturación y métricas de negocio desde un panel centralizado con acceso basado en roles.',
    results: [
      'Más de 200 empresas activas en la plataforma',
      'Integración con 5 pasarelas de pago',
      'Dashboard con métricas en tiempo real',
    ],
    metrics: [
      { value: 200, suffix: '+', label: 'Empresas activas' },
      { value: 5, suffix: '', label: 'Pasarelas integradas' },
      { value: 99, suffix: '%', label: 'Uptime garantizado' },
    ],
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
  },
  {
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    category: 'ERP / Gestión',
    industries: ['Distribución', 'Retail'],
    tag: 'Software a medida',
    isReal: true,
    duration: '5 meses',
    accentColor: '#00FF88',
    accentRGB: '0, 255, 136',
    title: 'Software de gestión integral para empresa en crecimiento',
    clientQuote: 'Pasamos de 5 a 50 usuarios sin que el sistema siquiera pestañeara. No podíamos creerlo.',
    clientName: 'Director Comercial · Distribuidora regional',
    problem:
      'La empresa usaba 4 herramientas distintas que no se comunicaban entre sí: inventario, ventas, compras y contabilidad funcionaban de forma aislada.',
    solution:
      'Diseñamos un sistema integral de gestión que unificó todos los módulos en una sola plataforma, con reportes automáticos y flujos de trabajo optimizados.',
    results: [
      'Unificación de 4 sistemas en 1',
      'Reportes automáticos que ahorraron 20hs/semana',
      'Escalado de 5 a 50 usuarios sin problemas',
    ],
    metrics: [
      { value: 4, suffix: '→1', label: 'Sistemas unificados' },
      { value: 20, suffix: 'hs', label: 'Ahorradas por semana' },
      { value: 10, suffix: 'x', label: 'Usuarios escalados' },
    ],
    tech: ['React', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&q=80',
    category: 'Ciberseguridad',
    industries: ['Finanzas', 'Legal'],
    tag: 'Ciberseguridad',
    isReal: false,
    duration: '3 semanas',
    accentColor: '#EC4899',
    accentRGB: '236, 72, 153',
    title: 'Auditoría y hardening para estudio contable con datos sensibles',
    clientQuote: 'No sabíamos que éramos tan vulnerables. Ahora dormimos tranquilos sabiendo que estamos protegidos.',
    clientName: 'Socio fundador · Estudio contable (30 colaboradores)',
    problem:
      'El estudio manejaba información financiera crítica de más de 150 clientes corporativos sin políticas de seguridad formales, contraseñas compartidas y accesos sin auditoría.',
    solution:
      'Realizamos una auditoría completa de infraestructura, implementamos un SIEM con Wazuh para monitoreo continuo, aplicamos hardening a servidores y capacitamos al equipo en buenas prácticas de seguridad.',
    results: [
      'Reducción del 94% en superficie de ataque',
      'Alertas en tiempo real ante comportamiento anómalo',
      'Cumplimiento de estándares ISO 27001 básico',
    ],
    metrics: [
      { value: 94, suffix: '%', label: 'Reducción de vulnerabilidades' },
      { value: 150, suffix: '+', label: 'Clientes protegidos' },
      { value: 24, suffix: '/7', label: 'Monitoreo activo' },
    ],
    tech: ['Wazuh', 'Fail2Ban', 'Ubuntu Server', 'Ansible'],
  },
  {
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    category: 'E-commerce',
    industries: ['Retail', 'B2B'],
    tag: 'E-commerce B2B',
    isReal: false,
    duration: '3 meses',
    accentColor: '#FB923C',
    accentRGB: '251, 146, 60',
    title: 'Plataforma de ventas B2B con catálogo dinámico y precios por cliente',
    clientQuote: 'Nuestros representantes dejaron de perder tiempo con Excel y los pedidos se duplicaron en 60 días.',
    clientName: 'Gerente de Ventas · Importadora industrial',
    problem:
      'Los vendedores gestionaban pedidos por correo y Excel con catálogos desactualizados. Los errores en precios y stock generaban conflictos constantes con los clientes.',
    solution:
      'Desarrollamos una plataforma B2B con catálogo en tiempo real, precios diferenciados por segmento de cliente, carrito de pedidos y panel de administración para el equipo comercial.',
    results: [
      'Duplicación de pedidos procesados en 60 días',
      'Eliminación de errores en precios y stock',
      'Integración directa con sistema de facturación',
    ],
    metrics: [
      { value: 2, suffix: 'x', label: 'Pedidos en 60 días' },
      { value: 0, suffix: '', label: 'Errores de precio' },
      { value: 40, suffix: '%', label: 'Menos carga administrativa' },
    ],
    tech: ['Next.js', 'Shopify API', 'Redis', 'Vercel'],
  },
  {
    icon: Users,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
    category: 'RRHH / Gestión',
    industries: ['Recursos Humanos', 'Industria'],
    tag: 'Panel de RRHH',
    isReal: false,
    duration: '4 meses',
    accentColor: '#8B5CF6',
    accentRGB: '139, 92, 246',
    title: 'Sistema de RRHH y liquidación de sueldos para empresa industrial',
    clientQuote: 'Lo que antes nos tomaba 3 días de trabajo ahora lo hacemos en 2 horas. El ROI fue inmediato.',
    clientName: 'Responsable de RRHH · Empresa industrial (120 empleados)',
    problem:
      'La liquidación de sueldos se realizaba manualmente en planillas de Excel con más de 15 variables por empleado. Cualquier error implicaba correcciones manuales y demoras en los pagos.',
    solution:
      'Construimos un sistema de RRHH con módulo de liquidación automatizada, control de asistencia, gestión de vacaciones, recibos digitales y reportes para contaduría.',
    results: [
      'Reducción de 3 días a 2 horas en liquidación',
      'Recibos digitales firmados por los empleados',
      'Reportes automáticos para contaduría',
    ],
    metrics: [
      { value: 90, suffix: '%', label: 'Menos tiempo de liquidación' },
      { value: 120, suffix: '', label: 'Empleados gestionados' },
      { value: 0, suffix: '', label: 'Errores de liquidación' },
    ],
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
];

// ─── Filtros disponibles ───────────────────────────────────────────────────────

const ALL_FILTER = 'Todos';
const filters = [
  ALL_FILTER,
  'App Móvil',
  'SaaS',
  'ERP / Gestión',
  'Ciberseguridad',
  'E-commerce',
  'RRHH / Gestión',
];

// ─── Componente: Métrica animada ───────────────────────────────────────────────

function AnimatedMetric({ metric, accentRGB }: { metric: Metric; accentRGB: string }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const [displayed, setDisplayed] = useState(0);

  // Arrancamos el counter cuando entra en view
  const startedRef = useRef(false);

  const startCounter = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    const duration = 1500;
    const steps = 40;
    const increment = metric.value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= metric.value) {
        setDisplayed(metric.value);
        clearInterval(timer);
      } else {
        setDisplayed(Math.floor(current));
      }
    }, duration / steps);
  }, [metric.value]);

  // Efecto: cuando inView se vuelve true, arrancamos
  if (inView && !startedRef.current) {
    startCounter();
  }

  return (
    <div ref={ref} className="cases-metric-item">
      <div
        className="cases-metric-value"
        style={{ color: `rgb(${accentRGB})` }}
      >
        {displayed}
        <span className="cases-metric-suffix">{metric.suffix}</span>
      </div>
      <div className="cases-metric-label">{metric.label}</div>
    </div>
  );
}

// ─── Componente: Card de caso ──────────────────────────────────────────────────

function CaseCard({ caseItem, index }: { caseItem: CaseItem; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = caseItem.icon;
  const isReversed = index % 2 !== 0;

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
      className={`cases-card transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${Math.min(index * 100, 300)}ms`,
        '--accent-color': caseItem.accentColor,
        '--accent-rgb': caseItem.accentRGB,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight layer */}
      <div className="cases-card-spotlight" />

      {/* Border gradient */}
      <div className="cases-card-border" />

      <div className={`grid grid-cols-1 lg:grid-cols-2 relative z-10`}>

        {/* ── Imagen ── */}
        <div className={`cases-image-wrapper ${isReversed ? 'lg:order-2' : ''}`}>
          <img
            src={caseItem.image}
            alt={caseItem.title}
            className="cases-image"
          />

          {/* Overlay hover */}
          <div className="cases-image-overlay" />

          {/* Gradiente lateral hacia el contenido */}
          <div
            className={`cases-image-fade ${isReversed ? 'cases-image-fade-right' : 'cases-image-fade-left'}`}
          />

          {/* Badge categoría */}
          <div className="absolute top-4 left-4 z-20">
            <span
              className="cases-category-badge"
              style={{
                color: caseItem.accentColor,
                background: `rgba(${caseItem.accentRGB}, 0.15)`,
                borderColor: `rgba(${caseItem.accentRGB}, 0.3)`,
              }}
            >
              <Icon className="w-3.5 h-3.5" />
              {caseItem.tag}
            </span>
          </div>

          {/* Badge duración */}
          <div className="absolute top-4 right-4 z-20">
            <span className="cases-duration-badge">
              <Clock className="w-3 h-3" />
              {caseItem.duration}
            </span>
          </div>

          {/* Badge caso representativo */}
          {!caseItem.isReal && (
            <div className="absolute bottom-4 left-4 z-20">
              <span className="cases-representative-badge">
                Caso representativo
              </span>
            </div>
          )}
        </div>

        {/* ── Contenido ── */}
        <div
          className={`cases-content ${isReversed ? 'lg:order-1' : ''}`}
        >
          {/* Título */}
          <h3
            className="cases-title"
            style={{ '--accent-color': caseItem.accentColor } as React.CSSProperties}
          >
            {caseItem.title}
          </h3>

          {/* Métricas */}
          <div className="cases-metrics-row">
            {caseItem.metrics.map((metric) => (
              <AnimatedMetric
                key={metric.label}
                metric={metric}
                accentRGB={caseItem.accentRGB}
              />
            ))}
          </div>

          {/* Problema */}
          <div className="cases-block">
            <div className="cases-block-icon cases-block-icon--problem">
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            </div>
            <div>
              <div className="cases-block-label cases-block-label--problem">Problema</div>
              <p className="cases-block-text">{caseItem.problem}</p>
            </div>
          </div>

          {/* Solución */}
          <div className="cases-block">
            <div
              className="cases-block-icon"
              style={{ background: `rgba(${caseItem.accentRGB}, 0.12)` }}
            >
              <Lightbulb
                className="w-3.5 h-3.5"
                style={{ color: caseItem.accentColor }}
              />
            </div>
            <div>
              <div
                className="cases-block-label"
                style={{ color: caseItem.accentColor }}
              >
                Solución
              </div>
              <p className="cases-block-text">{caseItem.solution}</p>
            </div>
          </div>

          {/* Resultados */}
          <div className="cases-results">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-3.5 h-3.5 text-green-400" />
              <span className="cases-block-label cases-block-label--results">Resultados</span>
            </div>
            <ul className="space-y-1.5">
              {caseItem.results.map((result) => (
                <li key={result} className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: caseItem.accentColor }}
                  />
                  <span className="text-gray-300 text-sm">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote cliente */}
          <div
            className="cases-quote"
            style={{ borderColor: `rgba(${caseItem.accentRGB}, 0.25)` }}
          >
            <Quote
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              style={{ color: caseItem.accentColor }}
            />
            <div>
              <p className="text-gray-300 text-sm italic leading-relaxed mb-1">
                "{caseItem.clientQuote}"
              </p>
              <span className="text-gray-500 text-xs">{caseItem.clientName}</span>
            </div>
          </div>

          {/* Footer: tech + CTA */}
          <div className="cases-footer">
            <div className="flex flex-wrap gap-1.5">
              {caseItem.tech.map((tech) => (
                <span
                  key={tech}
                  className="cases-tech-pill"
                  style={{
                    color: caseItem.accentColor,
                    background: `rgba(${caseItem.accentRGB}, 0.08)`,
                    borderColor: `rgba(${caseItem.accentRGB}, 0.2)`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              className="cases-cta-button"
              style={{ color: caseItem.accentColor }}
            >
              Ver caso completo
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Componente principal ──────────────────────────────────────────────────────

export default function Cases() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);

  const filteredCases = activeFilter === ALL_FILTER
    ? cases
    : cases.filter((c) => c.category === activeFilter);

  return (
    <section id="casos" className="py-20 md:py-28 bg-dark relative overflow-hidden">

      {/* ── Fondos decorativos ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid sutil */}
      <div className="absolute inset-0 cases-bg-grid opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

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
              Casos · Soluciones aplicadas
            </span>
          </div>

          {/* Título con shimmer */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-5 leading-tight">
            Proyectos diseñados para{' '}
            <span className="title-shimmer">resolver problemas reales</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada proyecto nace de un desafío concreto. Así transformamos problemas
            reales en soluciones que generan resultados medibles.
          </p>

          {/* Highlight badge */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-dark-card border border-dark-border">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-gray-300 text-sm">
              <span className="text-white font-semibold">6 casos documentados</span>
              {' '}· Software a medida y Ciberseguridad
            </span>
          </div>
        </div>

        {/* ── Filtros ── */}
        <div
          className={`cases-filters transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-2 text-gray-500 text-sm mr-2">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filtrar:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`cases-filter-btn ${activeFilter === filter ? 'cases-filter-btn--active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ── Contador de resultados ── */}
        <p className="text-gray-500 text-sm mb-8 ml-1">
          Mostrando{' '}
          <span className="text-gray-300 font-medium">{filteredCases.length}</span>{' '}
          {filteredCases.length === 1 ? 'caso' : 'casos'}
          {activeFilter !== ALL_FILTER && (
            <> en <span className="text-primary">{activeFilter}</span></>
          )}
        </p>

        {/* ── Cards ── */}
        <div className="space-y-8">
          {filteredCases.length > 0 ? (
            filteredCases.map((caseItem, index) => (
              <CaseCard key={caseItem.title} caseItem={caseItem} index={index} />
            ))
          ) : (
            <div className="text-center py-20 text-gray-500">
              No hay casos en esta categoría todavía.
            </div>
          )}
        </div>

        {/* ── CTA final ── */}
        <div
          className={`cases-bottom-cta transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-400 text-base mb-4">
            ¿Tu proyecto puede ser el próximo caso de éxito?
          </p>
          <a
            href="#contacto"
            className="cases-bottom-cta-btn group"
          >
            Hablemos de tu proyecto
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}