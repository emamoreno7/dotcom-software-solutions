import { useState, useRef, useCallback } from 'react';
import {
  Shield,
  Award,
  Zap,
  MapPin,
  Code,
  Server,
  Layout,
  ShieldCheck,
  Palette,
  Target,
  Mail,
  Sparkles,
  ChevronRight,
  Quote,
  Briefcase,
  Users,
  Globe,
  CheckCircle2,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useInView } from 'react-intersection-observer';

// ─── Datos ────────────────────────────────────────────────────────────────────

const credentials = [
  '15+ años en sistemas TI y ciberseguridad',
  '8+ años desarrollando software a medida',
  'Especialización en OSINT e inteligencia digital',
  'Experiencia con PYMEs en LATAM y Europa',
];

const stats = [
  { value: 15, suffix: '+', label: 'Años en TI', accent: '#00BFFF', accentRGB: '0, 191, 255', icon: Briefcase },
  { value: 50, suffix: '+', label: 'Proyectos entregados', accent: '#8B5CF6', accentRGB: '139, 92, 246', icon: CheckCircle2 },
  { value: 5, suffix: '', label: 'Personas en el equipo', accent: '#00FF88', accentRGB: '0, 255, 136', icon: Users },
  { value: 3, suffix: '', label: 'Países atendidos', accent: '#FB923C', accentRGB: '251, 146, 60', icon: Globe },
];

const team = [
  {
    role: 'Backend Engineer',
    focus: 'APIs · Bases de datos · Cloud',
    initials: 'BE',
    accent: '#00BFFF',
    accentRGB: '0, 191, 255',
    icon: Server,
  },
  {
    role: 'Frontend Developer',
    focus: 'React · UI · Performance',
    initials: 'FD',
    accent: '#8B5CF6',
    accentRGB: '139, 92, 246',
    icon: Layout,
  },
  {
    role: 'Security Specialist',
    focus: 'Pentesting · OSINT · Hardening',
    initials: 'SS',
    accent: '#EC4899',
    accentRGB: '236, 72, 153',
    icon: ShieldCheck,
  },
  {
    role: 'UX/UI Designer',
    focus: 'Interfaces · Prototipado · UX',
    initials: 'UX',
    accent: '#FB923C',
    accentRGB: '251, 146, 60',
    icon: Palette,
  },
  {
    role: 'Project Lead',
    focus: 'Coordinación · Cliente · Delivery',
    initials: 'PL',
    accent: '#00FF88',
    accentRGB: '0, 255, 136',
    icon: Target,
  },
];

const pillars = [
  {
    icon: Code,
    title: 'Desarrollo 100% a medida',
    description: 'Cada proyecto se construye desde cero según las necesidades reales del cliente. Sin plantillas, sin atajos.',
    accent: '#00BFFF',
    accentRGB: '0, 191, 255',
  },
  {
    icon: Award,
    title: 'Certificaciones internacionales',
    description: 'Certificados por Cisco Systems, Oracle, Google y TryHackMe en Python, C++, TypeScript, React y ciberseguridad.',
    accent: '#8B5CF6',
    accentRGB: '139, 92, 246',
  },
  {
    icon: Shield,
    title: 'Experiencia en seguridad TI',
    description: 'Más de 15 años en sistemas TI, ciberseguridad y OSINT aplicados a cada solución que desarrollamos.',
    accent: '#EC4899',
    accentRGB: '236, 72, 153',
  },
  {
    icon: Zap,
    title: 'Equipo enfocado y ágil',
    description: 'Un equipo de 5 personas especializadas en desarrollo, seguridad, hosting, publicidad y front-end trabajando juntas.',
    accent: '#00FF88',
    accentRGB: '0, 255, 136',
  },
];

const certifications = [
  { name: 'Cisco Systems', area: 'Networking & Security' },
  { name: 'Oracle', area: 'Java & Databases' },
  { name: 'Google', area: 'Cloud & Web' },
  { name: 'TryHackMe', area: 'Cybersecurity' },
];

const locations = [
  {
    title: 'Casa Central',
    city: 'Mendoza',
    country: 'Argentina',
    accent: '#00BFFF',
    accentRGB: '0, 191, 255',
  },
  {
    title: 'Sucursal',
    city: 'Pilar',
    country: 'Buenos Aires',
    accent: '#8B5CF6',
    accentRGB: '139, 92, 246',
  },
];

// ─── Componente: Stat animada ──────────────────────────────────────────────────

function AnimatedStat({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const [displayed, setDisplayed] = useState(0);
  const startedRef = useRef(false);
  const Icon = stat.icon;

  const startCounter = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    const duration = 1500;
    const steps = 40;
    const increment = stat.value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setDisplayed(stat.value);
        clearInterval(timer);
      } else {
        setDisplayed(Math.floor(current));
      }
    }, duration / steps);
  }, [stat.value]);

  if (inView && !startedRef.current) {
    startCounter();
  }

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
      className="about-stat-card"
      style={{
        '--accent-color': stat.accent,
        '--accent-rgb': stat.accentRGB,
        animationDelay: `${delay}ms`,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
    >
      <div className="about-stat-spotlight" />
      <div className="about-stat-icon-wrap" style={{ color: stat.accent, background: `rgba(${stat.accentRGB}, 0.1)` }}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="about-stat-value" style={{ color: stat.accent }}>
        {displayed}
        <span>{stat.suffix}</span>
      </div>
      <div className="about-stat-label">{stat.label}</div>
    </div>
  );
}

// ─── Componente: Team card ─────────────────────────────────────────────────────

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const Icon = member.icon;

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
      className={`about-team-card transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
        '--accent-color': member.accent,
        '--accent-rgb': member.accentRGB,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
    >
      <div className="about-team-spotlight" />

      <div
        className="about-team-avatar"
        style={{
          background: `linear-gradient(135deg, rgba(${member.accentRGB}, 0.2), rgba(${member.accentRGB}, 0.05))`,
          borderColor: `rgba(${member.accentRGB}, 0.3)`,
        }}
      >
        <span style={{ color: member.accent }}>{member.initials}</span>
        <div
          className="about-team-avatar-icon"
          style={{ background: member.accent }}
        >
          <Icon className="w-3 h-3" style={{ color: '#0A0E1A' }} />
        </div>
      </div>

      <div className="about-team-role">{member.role}</div>
      <div className="about-team-focus">{member.focus}</div>
    </div>
  );
}

// ─── Componente: Pillar card ───────────────────────────────────────────────────

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const Icon = pillar.icon;

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
      className={`about-pillar-card transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        '--accent-color': pillar.accent,
        '--accent-rgb': pillar.accentRGB,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
    >
      <div className="about-pillar-spotlight" />
      <div className="about-pillar-border" />

      <div
        className="about-pillar-icon-wrap"
        style={{
          background: `rgba(${pillar.accentRGB}, 0.1)`,
          borderColor: `rgba(${pillar.accentRGB}, 0.25)`,
        }}
      >
        <Icon className="w-5 h-5" style={{ color: pillar.accent }} />
      </div>

      <h4 className="about-pillar-title">{pillar.title}</h4>
      <p className="about-pillar-desc">{pillar.description}</p>

      <div
        className="about-pillar-line"
        style={{ background: `linear-gradient(90deg, ${pillar.accent}, transparent)` }}
      />
    </div>
  );
}

// ─── Componente principal ──────────────────────────────────────────────────────

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre-nosotros" className="py-20 md:py-28 bg-dark-light relative overflow-hidden">

      {/* ── Fondos decorativos ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 about-bg-grid opacity-[0.025] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ──────── Header ──────── */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Sobre nosotros · Quiénes somos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Tecnología con experiencia real,{' '}
            <span className="title-shimmer">trato humano</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            No somos una agencia más. Somos un equipo chico, técnico y enfocado
            que construye software directo, sin intermediarios.
          </p>
        </div>

        {/* ──────── Founder Spotlight ──────── */}
        <div className="about-founder-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Foto */}
            <div className="lg:col-span-5">
              <div className="about-founder-photo-wrap">
                <div className="about-founder-photo-glow" />
                <div className="about-founder-photo-border" />
                <img
  src="/emanuel.webp"
  alt="Emanuel Moreno Di Cesare — Founder & Lead Developer"
  width={420}
  height={525}
  loading="eager"
  fetchPriority="high"
  className="about-founder-photo"
/>
                {/* Floating badge */}
                <div className="about-founder-badge">
                  <div className="about-founder-badge-dot" />
                  <span>Founder & Lead Developer</span>
                </div>
              </div>
            </div>

            {/* Texto */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/15 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  Quien está detrás
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                Emanuel Moreno Di Cesare
              </h3>
              <p className="text-primary text-base font-medium mb-5">
                Founder · Developer · Security Engineer
              </p>

              {/* Quote */}
              <div className="about-founder-quote">
                <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-200 italic leading-relaxed">
                  "Cuando un cliente me contrata, habla conmigo. No con un comercial,
                  no con un bot. Esa es la diferencia que defendemos hace 15 años."
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed mb-5">
                Más de <strong className="text-white">15 años trabajando en sistemas TI,
                ciberseguridad y OSINT</strong>, y más de 8 años construyendo software
                a medida para PYMEs, comercios y emprendedores en Argentina, Chile y
                expandiéndonos a otros mercados.
              </p>

              {/* Credenciales bullets */}
              <ul className="about-credentials-list">
                {credentials.map((cred) => (
                  <li key={cred} className="about-credential-item">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>

              {/* Socials */}
              <div className="about-founder-socials">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-btn"
                  aria-label="LinkedIn"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-btn"
                  aria-label="GitHub"
                >
                  <Code className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="#contacto"
                  className="about-social-btn"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contacto directo</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ──────── Stats grid ──────── */}
        <div className="about-stats-grid">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} delay={i * 100} />
          ))}
        </div>

        {/* ──────── Equipo ──────── */}
        <div className="about-section-block">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-card border border-dark-border mb-4">
              <Users className="w-3.5 h-3.5 text-primary" />
              <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider">
                El equipo
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              5 especialistas, <span className="title-shimmer">un solo objetivo</span>
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Cada rol aporta una mirada distinta. Trabajamos coordinados, sin silos
              y con foco en resultados.
            </p>
          </div>

          <div className="about-team-grid">
            {team.map((member, i) => (
              <TeamCard key={member.role} member={member} index={i} />
            ))}
          </div>
        </div>

        {/* ──────── Pilares ──────── */}
        <div className="about-section-block">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-card border border-dark-border mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider">
                Lo que nos define
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Pilares que <span className="title-shimmer">nos diferencian</span>
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              No son frases de marketing. Son las reglas con las que trabajamos
              todos los días.
            </p>
          </div>

          <div className="about-pillars-grid">
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.title} pillar={pillar} index={i} />
            ))}
          </div>
        </div>

        {/* ──────── Certificaciones + Ubicaciones ──────── */}
        <div className="about-section-block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Certificaciones */}
            <div className="about-info-card">
              <div className="flex items-center gap-3 mb-5">
                <div className="about-info-icon">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Certificaciones internacionales</h4>
                  <p className="text-gray-500 text-sm">Validadas por organismos globales</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="about-cert-pill">
                    <div className="about-cert-name">{cert.name}</div>
                    <div className="about-cert-area">{cert.area}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ubicaciones */}
            <div className="about-info-card">
              <div className="flex items-center gap-3 mb-5">
                <div className="about-info-icon">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Dónde estamos</h4>
                  <p className="text-gray-500 text-sm">Atendemos LATAM, EU y US</p>
                </div>
              </div>
              <div className="space-y-3">
                {locations.map((loc) => (
                  <div
                    key={loc.title}
                    className="about-location-item"
                    style={{ '--accent-color': loc.accent, '--accent-rgb': loc.accentRGB } as React.CSSProperties}
                  >
                    <div className="about-location-pin">
                      <span className="about-location-pin-pulse" />
                      <MapPin className="w-4 h-4" style={{ color: loc.accent }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">{loc.title}</div>
                      <div className="text-gray-400 text-xs">{loc.city}, {loc.country}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ──────── CTA final ──────── */}
        <div className="about-bottom-cta">
          <p className="text-gray-400 text-base mb-4">
            ¿Querés trabajar con un equipo que realmente te escucha?
          </p>
          <a href="#contacto" className="about-bottom-cta-btn group">
            Hablemos directamente
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
