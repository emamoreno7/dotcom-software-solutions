import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import { useWaterDrop } from '../hooks/useWaterDrop';

const ROTATING_WORDS = ['WEB', 'APP', 'SISTEMA', 'SOFTWARE'];

// ============================================
// COMPONENTE: Estadística Animada
// ============================================
function AnimatedStat({ value, suffix, label, delay = 0 }: { value: number; suffix: string; label: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const count = useCountUp(value, 2200, isVisible);

  return (
    <div
      ref={ref}
      className="text-center group relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-2xl blur-xl transition-all duration-500" />
      <div className="relative text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
        style={{ filter: 'drop-shadow(0 0 20px rgba(0, 191, 255, 0.3))' }}
      >
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-400 mt-2 tracking-wider uppercase relative">{label}</div>
    </div>
  );
}

// ============================================
// COMPONENTE: Texto Rotativo (Typewriter)
// ============================================
function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = ROTATING_WORDS[currentIndex];
    const typingSpeed = isDeleting ? 80 : 150;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        } else {
          setDisplayText(
            isDeleting
              ? currentWord.substring(0, displayText.length - 1)
              : currentWord.substring(0, displayText.length + 1)
          );
        }
      },
      displayText === currentWord && !isDeleting ? pauseTime : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className="relative inline-block min-w-[200px] sm:min-w-[300px] md:min-w-[400px] text-left">
      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        {displayText}
      </span>
      <span className="inline-block w-1 h-[0.9em] bg-cyan-400 ml-1 animate-blink align-middle" />
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-2xl opacity-30 -z-10" />
    </span>
  );
}

// ============================================
// 💧 COMPONENTE: Texto con efecto LÍQUIDO + sonido sintético
// ============================================
function RevealText({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const { playDrop } = useWaterDrop();
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (hasPlayedRef.current) return;
    hasPlayedRef.current = true;

    const letters = text.split('');
    letters.forEach((char, i) => {
      if (char === ' ') return;
      const impactTime = delay + i * 70 + 1080;
      setTimeout(() => {
        const randomPitch = 0.85 + Math.random() * 0.4;
        const randomVolume = 0.10 + Math.random() * 0.06;
        playDrop(randomPitch, randomVolume);
      }, impactTime);
    });
  }, [text, delay, playDrop]);

  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((char, i) => {
        if (char === ' ') {
          return (
            <span key={i} className="liquid-space">
              &nbsp;
            </span>
          );
        }
        return (
          <span
            key={i}
            className="animate-liquid-drop"
            style={{ animationDelay: `${delay + i * 70}ms` }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}

// ============================================
// COMPONENTE: Botón Magnético
// ============================================
function MagneticButton({ children, href, className = '', strength = 0.3 }: { children: React.ReactNode; href: string; className?: string; strength?: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
      }}
    >
      {children}
    </a>
  );
}

// ============================================
// COMPONENTE: Esfera 3D Wireframe
// ============================================
function Sphere3D({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
    };
    resize();
    window.addEventListener('resize', resize);

    const points: { x: number; y: number; z: number }[] = [];
    const numPoints = 800;
    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      points.push({
        x: Math.sin(theta) * Math.cos(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(theta),
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;

      rotationRef.current.y += 0.003;
      rotationRef.current.x = mouseY * 0.0005;
      const targetY = rotationRef.current.y + mouseX * 0.0005;

      const cosX = Math.cos(rotationRef.current.x);
      const sinX = Math.sin(rotationRef.current.x);
      const cosY = Math.cos(targetY);
      const sinY = Math.sin(targetY);

      const projected = points.map((p) => {
        let x = p.x * cosY - p.z * sinY;
        let z = p.x * sinY + p.z * cosY;
        let y = p.y * cosX - z * sinX;
        z = p.y * sinX + z * cosX;
        const scale = 1 / (2 - z);
        return { x: centerX + x * radius * scale, y: centerY + y * radius * scale, z, scale };
      });

      projected.forEach((p1, i) => {
        projected.slice(i + 1, i + 4).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 80) {
            const opacity = (1 - dist / 80) * 0.3 * ((p1.z + 1) / 2);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 191, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      projected.forEach((p) => {
        const opacity = (p.z + 1) / 2;
        const size = p.scale * 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 191, 255, ${opacity * 0.15})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      style={{ width: '100%', height: '100%' }}
    />
  );
}

// ============================================
// COMPONENTE PRINCIPAL: HERO
// ============================================
export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let rafId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const x = e.clientX - window.innerWidth / 2;
        const y = e.clientY - window.innerHeight / 2;
        setMousePos({ x: e.clientX, y: e.clientY });
        setParallax({ x: x / 50, y: y / 50 });
        rafId = null;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const scrollProgress = Math.min(scrollY / heroHeight, 1);
  const contentOpacity = Math.max(1 - scrollProgress * 1.5, 0);
  const contentTranslateY = scrollY * 0.5;
  const bgTranslateY = scrollY * 0.3;

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050510]"
    >
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${bgTranslateY}px)` }}>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/70 via-[#050510]/50 to-[#050510]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050510]/80 via-transparent to-[#050510]/80" />
      </div>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          transform: `translate(${parallax.x}px, ${parallax.y + bgTranslateY * 0.5}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <Sphere3D mouseX={mousePos.x} mouseY={mousePos.y} />
      </div>

      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(0, 191, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      <div
        className="absolute pointer-events-none z-[3] hidden md:block transition-transform duration-300 ease-out"
        style={{
          left: mousePos.x - 250,
          top: mousePos.y - 250,
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(0, 191, 255, 0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div
        className="absolute inset-0 z-[4] opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,191,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse z-[5]" />
      <div
        className="absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse z-[5]"
        style={{ animationDelay: '1.5s' }}
      />

      <div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16"
        style={{
          transform: `translate(${parallax.x * -0.3}px, ${parallax.y * -0.3 - contentTranslateY}px)`,
          opacity: contentOpacity,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-md text-cyan-300 text-sm font-medium mb-8 animate-fade-in-up shadow-lg shadow-cyan-500/20">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Desarrollo a medida · Trato directo · De la idea al producto real
          </span>
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
        </div>

        {/* 💧 TÍTULO con efecto líquido */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight">
          <span className="block mb-2">
            <RevealText text="Desarrollamos tu" delay={300} />
          </span>
          <RotatingText />
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4 animate-fade-in-up delay-200 leading-relaxed">
          Somos un equipo especializado en desarrollo web, apps móviles y sistemas de gestión a medida. Trabajamos codo a codo con cada cliente desde la primera idea hasta que el sistema corre solo.
        </p>

        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-300">
          Más de 15 años en sistemas TI y más de 8 años construyendo software para PYMEs, emprendedores y comercios en Argentina y Chile.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <MagneticButton
            href="#contacto"
            className="group relative inline-flex items-center gap-2 px-8 py-4 font-bold text-lg rounded-xl overflow-hidden hover:-translate-y-1 hover:scale-105"
            strength={0.3}
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 rounded-xl overflow-hidden">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </span>
            <span className="relative z-10 text-white flex items-center gap-2">
              Hablemos de tu proyecto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </MagneticButton>

          <MagneticButton
            href="#servicios"
            className="group relative inline-flex items-center gap-2 px-8 py-4 font-semibold text-lg rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-cyan-400/50 hover:-translate-y-1"
            strength={0.2}
          >
            <Eye className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
            Ver qué hacemos
          </MagneticButton>
        </div>

        <p className="mt-6 text-sm text-gray-500 animate-fade-in-up delay-500 tracking-wide">
          Atención personalizada de principio a fin · Sin intermediarios · Con vos en cada paso
        </p>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up delay-600 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl shadow-cyan-500/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
          <AnimatedStat value={50} suffix="+" label="Proyectos entregados" />
          <AnimatedStat value={15} suffix="+" label="Años en sistemas TI" />
          <AnimatedStat value={2} suffix="" label="Países activos" />
          <AnimatedStat value={5} suffix="" label="Especialistas" />
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 transition-opacity duration-300"
        style={{ opacity: contentOpacity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2 animate-pulse" />
        </div>
        <p className="text-xs text-gray-500 mt-2 tracking-widest text-center">SCROLL</p>
      </div>
    </section>
  );
}