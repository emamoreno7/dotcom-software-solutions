import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: '¿Trabajan con clientes de distintos países?',
    answer:
      'Sí, trabajamos con clientes en Argentina y el exterior. Nos adaptamos al mercado donde opere tu proyecto, contemplando idioma, zona horaria, regulaciones locales, pasarelas de pago regionales y cualquier requerimiento específico del entorno. Nuestra experiencia internacional nos permite operar en contextos diversos con total fluidez.',
  },
  {
    question: '¿Pueden adaptar el software a requisitos legales o administrativos?',
    answer:
      'Absolutamente. Parte de nuestro diferencial es justamente la adaptación a requerimientos legales, administrativos y operativos de cada mercado. Contemplamos facturación electrónica, normativas de datos, regulaciones sectoriales y cualquier marco legal que aplique a tu negocio o industria.',
  },
  {
    question: '¿Desarrollan productos desde cero?',
    answer:
      'Sí, es uno de nuestros servicios principales. Te acompañamos desde la idea hasta el producto en producción. Definimos juntos el MVP, diseñamos la arquitectura, construimos la solución y la llevamos al mercado. Todo con un proceso claro, feedback continuo y entregas parciales para que veas el avance real.',
  },
  {
    question: '¿También mejoran o amplían software existente?',
    answer:
      'Sí. Trabajamos tanto con proyectos nuevos como con sistemas existentes que necesitan evolucionar. Ya sea que necesites integrar tu software con otros servicios, agregar nuevos módulos, modernizar tecnología legacy o mejorar el rendimiento, podemos ayudarte sin tener que empezar de cero.',
  },
  {
    question: '¿Ofrecen mantenimiento y evolución?',
    answer:
      'Sí, ofrecemos planes de soporte y mantenimiento post-lanzamiento que incluyen corrección de bugs, actualizaciones de seguridad, mejoras de rendimiento y evolución continua del producto. No desaparecemos después de entregar: te acompañamos a lo largo del ciclo de vida de tu software.',
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-20 md:py-28 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/[0.04] rounded-full blur-[130px]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Resolvemos tus <span className="gradient-text">dudas</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Las preguntas más comunes que recibimos de nuestros clientes antes
            de empezar un proyecto.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[0];
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`rounded-xl border overflow-hidden transition-all duration-700 ${
        isOpen
          ? 'border-primary/30 bg-dark-card shadow-lg shadow-primary/5'
          : 'border-dark-border bg-dark-card'
      } glow-border ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4 group"
      >
        <span className={`font-semibold text-base md:text-lg transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-primary/20' : 'bg-dark-border'}`}>
          <ChevronDown
            className={`w-4 h-4 text-primary transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-5 md:px-6 pb-5 md:pb-6 text-gray-400 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}
