import { ArrowRight, Eye } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const count = useCountUp(value, 2200, isVisible);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-primary">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/50 via-transparent to-dark/50" />
      </div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,191,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-float delay-500" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Desarrollo a medida · Trato directo · De la idea al producto real
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
          Tu idea merece un software{' '}
          <span className="gradient-text">construido para vos</span>,{' '}
          no para cualquiera
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4 animate-fade-in-up delay-200 leading-relaxed">
          Somos un equipo especializado en desarrollo web, apps móviles y 
          sistemas de gestión a medida. Trabajamos codo a codo con cada cliente 
          desde la primera idea hasta que el sistema corre solo.
        </p>

        {/* Secondary text */}
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-300">
          Más de 15 años en sistemas TI y más de 8 años construyendo software 
          para PYMEs, emprendedores y comercios en Argentina y Chile.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-dark font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            Hablemos de tu proyecto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#servicios"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-gray-600 hover:border-primary/50 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-white/5"
          >
            <Eye className="w-5 h-5" />
            Ver qué hacemos
          </a>
        </div>

        {/* Tagline below buttons */}
        <p className="mt-6 text-sm text-gray-500 animate-fade-in-up delay-500 tracking-wide">
          Atención personalizada de principio a fin · Sin intermediarios · Con vos en cada paso
        </p>

        {/* Animated Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up delay-600">
          <AnimatedStat value={50} suffix="+" label="Proyectos entregados" />
          <AnimatedStat value={15} suffix="+" label="Años en sistemas TI" />
          <AnimatedStat value={2} suffix="" label="Países con clientes activos" />
          <AnimatedStat value={5} suffix="" label="Especialistas en el equipo" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}