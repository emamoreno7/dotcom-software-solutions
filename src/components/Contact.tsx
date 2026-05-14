import { useState } from 'react';
import {
  Send,
  Mail,
  MessageCircle,
  MapPin,
  Calendar,
  ArrowRight,
  Sparkles,
  Clock,
  Shield,
  CheckCircle2,
  Smartphone,
  Cloud,
  Settings,
  Wrench,
  Link2,
  HelpCircle,
  ChevronRight,
  Lock,
  Zap,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// ─── Datos ────────────────────────────────────────────────────────────────────

const projectTypes = [
  { value: 'App móvil',           label: 'App móvil',           icon: Smartphone, color: '#00BFFF', rgb: '0, 191, 255' },
  { value: 'SaaS',                label: 'SaaS',                icon: Cloud,      color: '#8B5CF6', rgb: '139, 92, 246' },
  { value: 'Software de gestión', label: 'Software gestión',    icon: Settings,   color: '#00FF88', rgb: '0, 255, 136' },
  { value: 'Mejora de sistema',   label: 'Mejora sistema',      icon: Wrench,     color: '#FB923C', rgb: '251, 146, 60' },
  { value: 'Integración',         label: 'Integración',         icon: Link2,      color: '#EC4899', rgb: '236, 72, 153' },
  { value: 'No definido',         label: 'No estoy seguro',     icon: HelpCircle, color: '#9CA3AF', rgb: '156, 163, 175' },
];

const projectStages = [
  'Solo es una idea',
  'Tengo los requerimientos claros',
  'Ya tengo un sistema funcionando',
  'Es urgente / lo necesito ya',
];

const budgetRanges = [
  'Menos de USD 5.000',
  'USD 5.000 – 15.000',
  'USD 15.000 – 50.000',
  'Más de USD 50.000',
  'Prefiero no decirlo todavía',
];

const trustStats = [
  { icon: Clock,        label: 'Respuesta',     value: '< 24hs',  color: '#00BFFF', rgb: '0, 191, 255' },
  { icon: CheckCircle2, label: 'Compromiso',    value: '100%',      color: '#00FF88', rgb: '0, 255, 136' },
  { icon: Shield,       label: 'Confidencial',  value: '100%',    color: '#EC4899', rgb: '236, 72, 153' },
];

const nextSteps = [
  { num: '01', title: 'Te respondemos', desc: 'En menos de 24 horas con propuesta inicial.' },
  { num: '02', title: 'Reunión técnica', desc: 'Profundizamos en alcance, stack y tiempos.' },
  { num: '03', title: 'Propuesta final', desc: 'Recibís cotización detallada sin compromiso.' },
];

// ─── Componente principal ──────────────────────────────────────────────────────

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('');
  const [messageLength, setMessageLength] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => alert('Hubo un error al enviar el formulario. Intentá de nuevo.'));
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-dark-light relative overflow-hidden">

      {/* ── Fondos decorativos ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 contact-bg-grid opacity-[0.025] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ──────── Header ──────── */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Contacto · Empecemos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Hablemos de la solución que{' '}
            <span className="title-shimmer">tu negocio necesita</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Contanos sobre tu proyecto y te respondemos en menos de 24 horas
            con una propuesta personalizada. Sin compromiso.
          </p>
        </div>

        {/* ──────── Trust stats bar ──────── */}
        <div className="contact-trust-bar">
          {trustStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="contact-trust-item"
                style={{ '--accent-color': stat.color, '--accent-rgb': stat.rgb } as React.CSSProperties}
              >
                <div
                  className="contact-trust-icon"
                  style={{
                    background: `rgba(${stat.rgb}, 0.1)`,
                    borderColor: `rgba(${stat.rgb}, 0.25)`,
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: stat.color }} />
                </div>
                <div>
                  <div className="contact-trust-value" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="contact-trust-label">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ──────── Grid: sidebar + form ──────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* ===== SIDEBAR ===== */}
          <div className="lg:col-span-2 space-y-4">

            {/* Email card */}
            <a
              href="mailto:emamoreno@icloud.com"
              className="contact-info-card"
              style={{ '--accent-color': '#00BFFF', '--accent-rgb': '0, 191, 255' } as React.CSSProperties}
            >
              <div className="contact-info-spotlight" />
              <div className="contact-info-icon-wrap">
                <Mail className="w-5 h-5" style={{ color: '#00BFFF' }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="contact-info-label">Email</div>
                <div className="contact-info-value">emamoreno@icloud.com</div>
              </div>
              <ChevronRight className="contact-info-arrow w-4 h-4" />
            </a>

            {/* WhatsApp card */}
            <a
              href="https://wa.me/5492634340284?text=Hola%20DotCom,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card"
              style={{ '--accent-color': '#25D366', '--accent-rgb': '37, 211, 102' } as React.CSSProperties}
            >
              <div className="contact-info-spotlight" />
              <div className="contact-info-icon-wrap">
                <MessageCircle className="w-5 h-5" style={{ color: '#25D366' }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="contact-info-label">WhatsApp</div>
                <div className="contact-info-value">+54 9 2634 340284</div>
              </div>
              <ChevronRight className="contact-info-arrow w-4 h-4" />
            </a>

            {/* Ubicaciones card */}
            <div
              className="contact-info-card contact-info-card--static"
              style={{ '--accent-color': '#EC4899', '--accent-rgb': '236, 72, 153' } as React.CSSProperties}
            >
              <div className="contact-info-icon-wrap">
                <MapPin className="w-5 h-5" style={{ color: '#EC4899' }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="contact-info-label">Oficinas</div>
                <div className="contact-info-value">Mendoza, Argentina</div>
                <div className="contact-info-sub">Pilar, Buenos Aires</div>
              </div>
            </div>

            {/* Reunión CTA card (highlight) */}
            <div className="contact-meeting-card">
              <div className="contact-meeting-icon-wrap">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <h4 className="contact-meeting-title">¿Preferís hablar directamente?</h4>
              <p className="contact-meeting-desc">
                Agendá una videollamada de 30 minutos sin compromiso para charlar
                sobre tu proyecto.
              </p>
              <a
                href="https://wa.me/5492634340284?text=Hola%20DotCom,%20quiero%20agendar%20una%20reuni%C3%B3n%20para%20hablar%20sobre%20mi%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-meeting-cta group"
              >
                <Calendar className="w-4 h-4" />
                Agendar reunión
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Next steps */}
            <div className="contact-steps-card">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Qué pasa después
                </span>
              </div>
              <div className="space-y-3">
                {nextSteps.map((step) => (
                  <div key={step.num} className="contact-step-item">
                    <span className="contact-step-num">{step.num}</span>
                    <div>
                      <div className="contact-step-title">{step.title}</div>
                      <div className="contact-step-desc">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== FORM ===== */}
          <div className="lg:col-span-3">
            {submitted ? (
              <SuccessState onReset={() => setSubmitted(false)} />
            ) : (
              <form
                name="contacto"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="contact-form-card"
              >
                <input type="hidden" name="form-name" value="contacto" />
                <p className="hidden">
                  <label>
                    No rellenar: <input name="bot-field" />
                  </label>
                </p>

                {/* Header del form */}
                <div className="contact-form-header">
                  <div className="contact-form-header-icon">
                    <Send className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="contact-form-title">Contanos sobre tu proyecto</h3>
                    <p className="contact-form-subtitle">
                      Cuanto más detalle nos des, mejor podemos ayudarte
                    </p>
                  </div>
                </div>

                {/* Datos personales */}
                <div className="contact-form-section">
                  <div className="contact-form-section-label">
                    <span className="contact-form-section-num">1</span>
                    Datos de contacto
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="contact-label">
                        Nombre <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        placeholder="Tu nombre completo"
                        className="contact-input"
                      />
                    </div>

                    <div>
                      <label className="contact-label">Empresa</label>
                      <input
                        type="text"
                        name="empresa"
                        placeholder="Nombre de tu empresa"
                        className="contact-input"
                      />
                    </div>

                    <div>
                      <label className="contact-label">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="tu@email.com"
                        className="contact-input"
                      />
                    </div>

                    <div>
                      <label className="contact-label">País</label>
                      <input
                        type="text"
                        name="pais"
                        placeholder="Argentina"
                        className="contact-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Tipo de proyecto - Pills visuales */}
                <div className="contact-form-section">
                  <div className="contact-form-section-label">
                    <span className="contact-form-section-num">2</span>
                    ¿Qué tipo de proyecto tenés en mente?
                  </div>

                  <div className="contact-project-grid">
                    {projectTypes.map((type) => {
                      const Icon = type.icon;
                      const isActive = selectedProjectType === type.value;
                      return (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setSelectedProjectType(type.value)}
                          className={`contact-project-pill ${isActive ? 'contact-project-pill--active' : ''}`}
                          style={
                            isActive
                              ? {
                                  color: type.color,
                                  background: `rgba(${type.rgb}, 0.1)`,
                                  borderColor: `rgba(${type.rgb}, 0.4)`,
                                }
                              : undefined
                          }
                        >
                          <Icon className="w-4 h-4" />
                          <span>{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                  <input type="hidden" name="tipo_proyecto" value={selectedProjectType} />
                </div>

                {/* Etapa + Presupuesto - Custom selects */}
                <div className="contact-form-section">
                  <div className="contact-form-section-label">
                    <span className="contact-form-section-num">3</span>
                    Detalles del proyecto
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="contact-label">Etapa actual</label>
                      <div className="contact-select-wrap">
                        <select name="etapa_proyecto" className="contact-select" defaultValue="">
                          <option value="" disabled>Seleccionar...</option>
                          {projectStages.map((stage) => (
                            <option key={stage} value={stage}>{stage}</option>
                          ))}
                        </select>
                        <ChevronRight className="contact-select-icon w-4 h-4 rotate-90" />
                      </div>
                    </div>

                    <div>
                      <label className="contact-label">
                        Presupuesto estimado{' '}
                        <span className="text-gray-500 text-xs font-normal">(opcional)</span>
                      </label>
                      <div className="contact-select-wrap">
                        <select name="presupuesto" className="contact-select" defaultValue="">
                          <option value="" disabled>Seleccionar...</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                        <ChevronRight className="contact-select-icon w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mensaje */}
                <div className="contact-form-section">
                  <div className="contact-form-section-label">
                    <span className="contact-form-section-num">4</span>
                    Contanos más
                  </div>

                  <div>
                    <label className="contact-label flex justify-between items-center">
                      <span>
                        Mensaje <span className="text-primary">*</span>
                      </span>
                      <span className={`text-xs font-normal ${messageLength > 500 ? 'text-orange-400' : 'text-gray-500'}`}>
                        {messageLength} caracteres
                      </span>
                    </label>
                    <textarea
                      name="mensaje"
                      required
                      rows={5}
                      maxLength={1000}
                      placeholder="Describí brevemente tu idea, necesidad o proyecto. Cuanto más sepamos, mejor te podemos ayudar..."
                      className="contact-textarea"
                      onChange={(e) => setMessageLength(e.target.value.length)}
                    />
                  </div>
                </div>

                {/* Trust signals */}
                <div className="contact-trust-row">
                  <div className="contact-trust-tag">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Tus datos están protegidos</span>
                  </div>
                  <div className="contact-trust-tag">
                    <Shield className="w-3.5 h-3.5" />
                    <span>NDA disponible</span>
                  </div>
                  <div className="contact-trust-tag">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Sin compromiso</span>
                  </div>
                </div>

                {/* CTA */}
                <button type="submit" className="contact-submit-btn group">
                  <Send className="w-5 h-5" />
                  <span>Quiero hablar sobre mi proyecto</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Disclaimer pequeño */}
                <p className="contact-disclaimer">
                  Al enviar este formulario aceptás que te contactemos por email o WhatsApp.
                  No compartimos tus datos con terceros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Componente: Success state ─────────────────────────────────────────────────

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="contact-success-card">
      <div className="contact-success-icon-wrap">
        <CheckCircle2 className="w-10 h-10 text-primary" />
        <div className="contact-success-icon-glow" />
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
        ¡Mensaje enviado con éxito! 🎉
      </h3>
      <p className="text-gray-400 mb-8 max-w-md">
        Recibimos tu consulta. Te respondemos en menos de 24 horas
        por email o WhatsApp con los próximos pasos.
      </p>

      <div className="contact-success-steps">
        <div className="contact-success-step">
          <Clock className="w-4 h-4 text-primary" />
          <span>Revisión y análisis inicial</span>
        </div>
        <div className="contact-success-step">
          <Mail className="w-4 h-4 text-primary" />
          <span>Respuesta personalizada</span>
        </div>
        <div className="contact-success-step">
          <Calendar className="w-4 h-4 text-primary" />
          <span>Reunión técnica si aplica</span>
        </div>
      </div>

      <button onClick={onReset} className="contact-success-reset">
        Enviar otro mensaje
      </button>
    </div>
  );
}