import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projectTypes = [
  'App móvil',
  'SaaS',
  'Software de gestión',
  'Mejora de sistema',
  'Integración',
  'No definido',
];

const projectStages = [
  'Solo idea',
  'Requerimientos claros',
  'Sistema existente',
  'Urgente',
];

const budgetRanges = [
  'Menos de USD 5.000',
  'USD 5.000 - 15.000',
  'USD 15.000 - 50.000',
  'Más de USD 50.000',
  'Prefiero no decirlo todavía',
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

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
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Empecemos a trabajar juntos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Hablemos de la solución que{' '}
            <span className="gradient-text">tu negocio necesita</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Contanos sobre tu proyecto y te respondemos en menos de 24 horas
            con una propuesta personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-dark-card border border-dark-border">
              <h3 className="text-xl font-bold text-white mb-6">Información de contacto</h3>

              <div className="space-y-5">
                <a
                  href="mailto:emamoreno@icloud.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">Email</div>
                    <div className="text-white text-sm group-hover:text-primary transition-colors">
                      emamoreno@icloud.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/5492634340284?text=Hola%20DotCom,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-whatsapp/10 flex items-center justify-center group-hover:bg-whatsapp/20 transition-colors">
                    <Phone className="w-5 h-5 text-whatsapp" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">WhatsApp</div>
                    <div className="text-white text-sm group-hover:text-whatsapp transition-colors">
                      +54 9 2634 340284
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">Oficinas</div>
                    <div className="text-white text-sm">Mendoza, Argentina</div>
                    <div className="text-gray-300 text-sm">Pilar, Buenos Aires</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <Calendar className="w-8 h-8 text-primary mb-3" />
              <h4 className="text-white font-bold mb-2">¿Preferís hablar directamente?</h4>
              <p className="text-gray-400 text-sm mb-4">
                Agendá una videollamada de 30 minutos sin compromiso para contarnos
                sobre tu proyecto.
              </p>
              <a
                href="https://wa.me/5492634340284?text=Hola%20DotCom,%20quiero%20agendar%20una%20reuni%C3%B3n%20para%20hablar%20sobre%20mi%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-dark font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <Calendar className="w-4 h-4" />
                Agendar reunión por WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="p-8 md:p-12 rounded-2xl bg-dark-card border border-primary/30 text-center min-h-[400px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-5 animate-pulse-glow">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  ¡Mensaje enviado con éxito!
                </h3>
                <p className="text-gray-400 mb-6">
                  Te respondemos en menos de 24 horas. Revisá tu email o WhatsApp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary text-sm hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                name="contacto"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-2xl bg-dark-card border border-dark-border"
              >
                <input type="hidden" name="form-name" value="contacto" />
                <p className="hidden">
                  <label>
                    No rellenar: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Nombre */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                  </div>

                  {/* País */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      País
                    </label>
                    <input
                      type="text"
                      name="pais"
                      placeholder="Argentina"
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                  </div>

                  {/* Tipo de proyecto */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tipo de proyecto
                    </label>
                    <div className="relative">
                      <select
                        name="tipo_proyecto"
                        className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 appearance-none pr-10"
                      >
                        <option value="">Seleccionar...</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Etapa del proyecto */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Etapa del proyecto
                    </label>
                    <div className="relative">
                      <select
                        name="etapa_proyecto"
                        className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 appearance-none pr-10"
                      >
                        <option value="">Seleccionar...</option>
                        {projectStages.map((stage) => (
                          <option key={stage} value={stage}>
                            {stage}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Presupuesto */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Presupuesto estimado (opcional)
                    </label>
                    <div className="relative">
                      <select
                        name="presupuesto"
                        className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 appearance-none pr-10"
                      >
                        <option value="">Seleccionar...</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      required
                      rows={4}
                      placeholder="Describí brevemente tu idea, necesidad o proyecto..."
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-6 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-dark font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
                >
                  Quiero hablar sobre mi proyecto
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
