import { useEffect, useRef, useState } from 'react';
import {
  Globe,
  Smartphone,
  Settings,
  Cloud,
  Bot,
  Plug,
  Shield,
  Search,
  Eye,
  Siren,
  Lock,
  GraduationCap,
  Check,
  ArrowRight,
  Sparkles,
  Star,
} from 'lucide-react';
// Importar mockups de Software
import WebMockup from './service-mockups/WebMockup';
import AppMockup from './service-mockups/AppMockup';
import ManagementMockup from './service-mockups/ManagementMockup';
import SaasMockup from './service-mockups/SaasMockup';
import AIMockup from './service-mockups/AIMockup';
import IntegrationMockup from './service-mockups/IntegrationMockup';
// Importar mockups de Ciberseguridad
import PentestMockup from './service-mockups/PentestMockup';
import ForensicMockup from './service-mockups/ForensicMockup';
import OsintMockup from './service-mockups/OsintMockup';
import IncidentMockup from './service-mockups/IncidentMockup';
import HardeningMockup from './service-mockups/HardeningMockup';
import TrainingMockup from './service-mockups/TrainingMockup';
// ============================================
// 🎨 Mapa de mockups por ID de servicio
// ============================================
const mockupsMap: Record<string, React.ComponentType> = {
  // Software
  web: WebMockup,
  app: AppMockup,
  management: ManagementMockup,
  saas: SaasMockup,
  ai: AIMockup,
  integrations: IntegrationMockup,
  // Ciberseguridad
  pentest: PentestMockup,
  forensic: ForensicMockup,
  osint: OsintMockup,
  incident: IncidentMockup,
  hardening: HardeningMockup,
  training: TrainingMockup,
};
// ============================================
// 📊 DATA: Servicios por categoría
// ============================================
const softwareServices = [
  {
    id: 'web',
    icon: Globe,
    title: 'Desarrollo Web a medida',
    tagline: 'Sitios, landings y plataformas que convierten',
    description:
      'Creamos sitios web modernos, rápidos y optimizados para conversión. Desde landings de alto impacto hasta plataformas web complejas, todo desarrollado desde cero según tus objetivos.',
    features: [
      'Landing pages con foco en conversión',
      'Sitios corporativos premium',
      'E-commerce y tiendas online',
      'Plataformas web complejas (SaaS, marketplaces)',
      'SEO técnico y performance optimizada',
    ],
    popular: true,
  },
  {
    id: 'app',
    icon: Smartphone,
    title: 'Apps móviles',
    tagline: 'iOS, Android y cross-platform',
    description:
      'Desarrollamos aplicaciones móviles nativas y cross-platform con experiencia fluida y escalable. Diseñamos cada flujo para que se adapte naturalmente a tu negocio.',
    features: [
      'Apps nativas iOS y Android',
      'Apps cross-platform (React Native, Flutter)',
      'Apps de servicios en campo y logística',
      'Marketplaces y plataformas de comercio',
      'Apps internas para equipos de trabajo',
    ],
  },
  {
    id: 'management',
    icon: Settings,
    title: 'Software de gestión',
    tagline: 'ERP, CRM y sistemas a medida',
    description:
      'Diseñamos sistemas personalizados para organizar operaciones, automatizar procesos y mejorar el control del negocio. Todo hecho según tu flujo real.',
    features: [
      'ERPs personalizados para tu industria',
      'CRMs y gestión de clientes',
      'Sistemas POS y gestión comercial',
      'Paneles administrativos y reportería',
      'Gestión de inventario y logística',
    ],
  },
  {
    id: 'saas',
    icon: Cloud,
    title: 'SaaS y MVPs',
    tagline: 'De la idea al producto escalable',
    description:
      'Convertimos tu idea en un producto digital validable y escalable. Del MVP funcional a la plataforma SaaS robusta lista para crecer.',
    features: [
      'MVPs en tiempo récord para validar',
      'Plataformas SaaS con suscripciones',
      'Productos digitales escalables',
      'Arquitectura cloud-native',
      'Multi-tenant y multi-idioma',
    ],
    popular: true,
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'IA & Automatización',
    tagline: 'Chatbots, asistentes y workflows inteligentes',
    description:
      'Integramos inteligencia artificial en tu negocio. Desde chatbots avanzados hasta automatizaciones complejas que reducen tiempo y costos operativos.',
    features: [
      'Chatbots con IA (GPT, Claude, Gemini)',
      'Asistentes virtuales personalizados',
      'Automatización de procesos (RPA)',
      'Análisis predictivo y BI',
      'Integraciones con n8n, Make, Zapier',
    ],
  },
  {
    id: 'integrations',
    icon: Plug,
    title: 'Integraciones y APIs',
    tagline: 'Conectamos todos tus sistemas',
    description:
      'Hacemos que tus herramientas se hablen entre sí. APIs, pasarelas de pago, ERPs, sistemas legacy y servicios externos integrados de forma robusta.',
    features: [
      'Pasarelas de pago (Mercado Pago, Stripe, PayPal)',
      'Integración con ERPs y sistemas legacy',
      'Sincronización de datos en tiempo real',
      'APIs REST y GraphQL personalizadas',
      'Webhooks y eventos asíncronos',
    ],
  },
];

const cyberServices = [
  {
    id: 'pentest',
    icon: Shield,
    title: 'Auditoría de Ciberseguridad',
    tagline: 'Pentesting y análisis de vulnerabilidades',
    description:
      'Evaluamos la seguridad de tus sistemas con pruebas de penetración profesionales. Identificamos vulnerabilidades antes que los atacantes y te damos un plan de remediación claro.',
    features: [
      'Pentesting web, mobile e infraestructura',
      'Análisis de vulnerabilidades (VA)',
      'Reportes ejecutivos y técnicos',
      'Plan de remediación priorizado',
      'Re-test post-correcciones',
    ],
    popular: true,
  },
  {
    id: 'forensic',
    icon: Search,
    title: 'Forense Digital',
    tagline: 'Peritajes y análisis post-incidente',
    description:
      'Análisis forense profesional con cadena de custodia. Recuperamos evidencia digital, investigamos incidentes y elaboramos reportes válidos para procesos legales.',
    features: [
      'Análisis forense de dispositivos',
      'Recuperación de datos eliminados',
      'Cadena de custodia certificada',
      'Peritajes informáticos judiciales',
      'Investigación de fraude digital',
    ],
  },
  {
    id: 'osint',
    icon: Eye,
    title: 'OSINT e Investigación',
    tagline: 'Inteligencia de fuentes abiertas',
    description:
      'Investigación profesional usando técnicas OSINT. Due diligence de personas y empresas, monitoreo de amenazas y reputación digital.',
    features: [
      'Due diligence de personas y empresas',
      'Investigación de fraude y amenazas',
      'Monitoreo de marca y reputación',
      'Análisis de exposición digital',
      'Reportes de inteligencia accionables',
    ],
  },
  {
    id: 'incident',
    icon: Siren,
    title: 'Respuesta a Incidentes',
    tagline: 'Incident Response 24/7',
    description:
      'Cuando un incidente ocurre, cada minuto cuenta. Respondemos rápido para contener, erradicar y recuperar tu operación, minimizando el impacto en tu negocio.',
    features: [
      'Respuesta a incidentes de seguridad',
      'Contención y erradicación de amenazas',
      'Recuperación post-incidente',
      'Análisis de causa raíz',
      'Plan de mejora continua',
    ],
  },
  {
    id: 'hardening',
    icon: Lock,
    title: 'Hardening & Protección',
    tagline: 'Servidores, redes y endpoints seguros',
    description:
      'Implementamos capas de protección robustas en tu infraestructura. Hardening de servidores, segmentación de redes y protección de endpoints según estándares internacionales.',
    features: [
      'Hardening de servidores Linux/Windows',
      'Configuración de firewalls y WAF',
      'Protección de endpoints (EDR/XDR)',
      'Segmentación de redes',
      'Backups y planes de continuidad',
    ],
    popular: true,
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Consultoría TI & Capacitación',
    tagline: 'Formamos equipos seguros',
    description:
      'Asesoramos en estrategia de ciberseguridad y capacitamos a tu equipo. La mayoría de incidentes empiezan por error humano: lo arreglamos con formación profesional.',
    features: [
      'Capacitación en ciberseguridad para equipos',
      'Concientización (phishing, ingeniería social)',
      'Consultoría estratégica TI',
      'Cumplimiento normativo (ISO 27001, GDPR)',
      'Auditorías de buenas prácticas',
    ],
  },
];

// ============================================
// 🎨 COMPONENTE: Mockup placeholder (lo reemplazamos en Entrega 2 y 3)
// ============================================
function ServiceMockupPlaceholder({ service, color }: { service: any; color: string }) {
  const Icon = service.icon;
  return (
    <div
      className="relative w-full h-48 rounded-2xl overflow-hidden flex items-center justify-center border"
      style={{
        background: `linear-gradient(135deg, rgba(${color}, 0.08), rgba(${color}, 0.02))`,
        borderColor: `rgba(${color}, 0.2)`,
      }}
    >
      {/* Grid decorativo */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(${color}, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${color}, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />
      
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(circle at center, rgba(${color}, 0.2) 0%, transparent 70%)`,
        }}
      />
      
      {/* Ícono central grande */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{
            background: `rgba(${color}, 0.15)`,
            border: `1px solid rgba(${color}, 0.3)`,
            boxShadow: `0 0 40px rgba(${color}, 0.3)`,
          }}
        >
          <Icon
            className="w-10 h-10"
            style={{ color: `rgb(${color})` }}
          />
        </div>
        <span
          className="text-xs font-semibold tracking-wider uppercase opacity-60"
          style={{ color: `rgb(${color})` }}
        >
          Mockup en producción
        </span>
      </div>
    </div>
  );
}

// ============================================
// 🎯 HOOK: Visibilidad on scroll
// ============================================
function useInView(threshold: number = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// ============================================
// 🏛️ COMPONENTE PRINCIPAL: Services
// ============================================
export default function Services() {
  const [category, setCategory] = useState<'software' | 'cyber'>('software');
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } = useInView(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useInView(0.1);

  const services = category === 'software' ? softwareServices : cyberServices;
  const activeService = services[activeIndex];

  // Color base según categoría
  const colorRgb = category === 'software' ? '0, 191, 255' : '0, 255, 136';
  const colorHex = category === 'software' ? '#00BFFF' : '#00FF88';
  const colorDarkHex = category === 'software' ? '#0099CC' : '#00CC6A';

  // Reset al cambiar categoría
  useEffect(() => {
    setActiveIndex(0);
    setProgress(0);
  }, [category]);

  // Auto-rotate cada 6 segundos
  useEffect(() => {
    if (isPaused) return;

    const duration = 6000;
    const interval = 50;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((idx) => (idx + 1) % services.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [services.length, isPaused, activeIndex]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section
      id="servicios"
      className="relative py-24 md:py-32 bg-[#050510] overflow-hidden"
    >
      {/* Transición desde sección anterior */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050510] to-transparent pointer-events-none z-10" />

      {/* Glows ambientales */}
      <div
        className="absolute top-40 left-10 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none transition-all duration-1000"
        style={{ background: `rgba(${colorRgb}, 0.05)` }}
      />
      <div
        className="absolute bottom-40 right-10 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none transition-all duration-1000"
        style={{ background: `rgba(${colorRgb}, 0.05)` }}
      />

      {/* Grid de fondo */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(${colorHex} 1px, transparent 1px),
            linear-gradient(90deg, ${colorHex} 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: colorHex,
                boxShadow: `0 0 12px ${colorHex}`,
              }}
            />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: colorHex }}
            >
              Nuestros servicios
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Soluciones que{' '}
            <span className="problem-title-gradient">desarrollamos</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            No trabajamos con plantillas genéricas. Diseñamos software y servicios de seguridad según los objetivos, flujos y necesidades reales de cada cliente.
          </p>

          {/* SWITCH de categorías */}
          <div className="flex justify-center">
            <div className="services-switch">
              <div className={`services-switch-indicator ${category}`} />
              <button
                className={`services-switch-btn ${category === 'software' ? 'active' : ''}`}
                onClick={() => setCategory('software')}
              >
                <Sparkles className="w-4 h-4" />
                Software
              </button>
              <button
                className={`services-switch-btn ${category === 'cyber' ? 'active' : ''}`}
                onClick={() => setCategory('cyber')}
              >
                <Shield className="w-4 h-4" />
                Ciberseguridad
              </button>
            </div>
          </div>
        </div>

        {/* GRID PRINCIPAL: Tabs + Preview */}
        <div
          ref={contentRef}
          className={`services-grid-main grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Lista de tabs */}
          <div className="service-tabs-list flex flex-col gap-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeIndex === index;
              return (
                <button
                  key={service.id}
                  className={`service-tab ${isActive ? 'active' : ''}`}
                  style={
                    {
                      '--tab-color': colorHex,
                      '--tab-color-rgb': colorRgb,
                    } as React.CSSProperties
                  }
                  onClick={() => handleTabClick(index)}
                >
                  <div className="service-tab-icon">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="service-tab-text">{service.title}</span>
                  <ArrowRight className="service-tab-arrow w-4 h-4" />
                  
                  {/* Barra de progreso */}
                  {isActive && (
                    <div
                      className="service-tab-progress"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Panel de preview */}
          <div
            className="service-preview"
            style={
              {
                '--preview-color': colorHex,
                '--preview-color-dark': colorDarkHex,
                '--preview-color-rgb': colorRgb,
              } as React.CSSProperties
            }
          >
            <div className="service-preview-glow" />
            
            <div
              key={activeService.id}
              className="service-preview-content animating"
            >
              {/* Mockup dinámico según el servicio activo */}
              <div className="mb-6">
                {(() => {
                  const MockupComponent = mockupsMap[activeService.id];
                  return MockupComponent ? (
                    <MockupComponent />
                  ) : (
                    <ServiceMockupPlaceholder service={activeService} color={colorRgb} />
                  );
                })()}
              </div>

              {/* Header del servicio */}
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {activeService.title}
                    {activeService.popular && (
                      <span className="service-badge-popular">
                        <Star className="w-3 h-3 fill-current" />
                        MÁS SOLICITADO
                      </span>
                    )}
                  </h3>
                  <p
                    className="text-sm md:text-base font-medium"
                    style={{ color: colorHex }}
                  >
                    {activeService.tagline}
                  </p>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                {activeService.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <div
                  className="text-xs font-bold tracking-[0.15em] uppercase mb-4"
                  style={{ color: colorHex }}
                >
                  ✓ Ideal para
                </div>
                <div className="space-y-1">
                  {activeService.features.map((feature, i) => (
                    <div
                      key={feature}
                      className="service-feature"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      <div className="service-feature-check">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="text-gray-300 text-sm md:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a href="#contacto" className="service-preview-cta">
                Quiero este servicio
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* SECCIÓN DE CERTIFICACIONES (solo visible en Cyber) */}
        {category === 'cyber' && (
          <div className="mt-16 md:mt-20 certs-section animate-fade-in-up">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/20 bg-green-400/5 backdrop-blur-md mb-4">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-xs font-semibold tracking-[0.2em] uppercase">
                  Especialistas Certificados
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Avalados por las certificaciones más prestigiosas del sector
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Trabajamos con estándares internacionales de ciberseguridad
              </p>
            </div>

            {/* TOP TIER: ISC2 + CompTIA */}
            <div className="certs-top-tier">
              <div className="cert-card-top">
                <img
                  src="/certs/isc2.png"
                  alt="ISC2 Certified"
                  className="cert-logo-large"
                />
                <div className="text-white font-bold text-lg mb-1">ISC2</div>
                <div className="text-green-400 text-sm font-medium">
                  Top tier en ciberseguridad mundial
                </div>
              </div>
              <div className="cert-card-top">
                <img
                  src="/certs/comptia.png"
                  alt="CompTIA Security+"
                  className="cert-logo-large"
                />
                <div className="text-white font-bold text-lg mb-1">
                  CompTIA Security+
                </div>
                <div className="text-green-400 text-sm font-medium">
                  Estándar internacional certificado
                </div>
              </div>
            </div>

            {/* Carrusel de certs secundarias */}
            <div className="text-center text-gray-500 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
              También certificados por
            </div>
            <div className="certs-carousel">
              <div className="certs-carousel-track">
                {/* Duplicamos el array para loop infinito */}
                {[...Array(2)].map((_, dupIndex) => (
                  <div key={dupIndex} className="flex items-center gap-12">
                    <img src="/certs/google.svg" alt="Google" className="cert-logo-small" />
                    <img src="/certs/cisco.svg" alt="Cisco" className="cert-logo-small" />
                    <img src="/certs/coursera.svg" alt="Coursera" className="cert-logo-small" />
                    <img src="/certs/santander.png" alt="Santander" className="cert-logo-small" />
                    <img src="/certs/tryhackme.png" alt="TryHackMe" className="cert-logo-small" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}