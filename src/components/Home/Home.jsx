/** @format */

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Layers,
  Zap,
} from "lucide-react";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const techStack = [
  "Angular",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "RxJS",
  "PrimeNG",
  "Git",
  "REST APIs",
  "Responsive Design",
];

export default function Home() {
  useScrollAnimation();
  const heroRef = useRef(null);
  const featuredProjects = projects.filter((p) => p.featured);

  useEffect(() => {
    // Cursor glow effect
    const hero = heroRef.current;
    if (!hero) return;
    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty("--mouse-x", `${x}%`);
      hero.style.setProperty("--mouse-y", `${y}%`);
    };
    hero.addEventListener("mousemove", handleMove);
    return () => hero.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <Helmet>
        <title>Omnia Salama — Front-End Developer</title>
        <meta
          name="description"
          content="Omnia Salama is a passionate Front-End Developer from Alexandria, Egypt. Specializing in Angular, TypeScript, and modern web development."
        />
      </Helmet>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 60% 60% at var(--mouse-x, 30%) var(--mouse-y, 40%), rgba(0, 112, 255, 0.15) 0%, transparent 70%), #05070A`,
        }}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 112, 255, 0.08) 1px, transparent 1px), 
                  linear-gradient(90deg, rgba(0, 112, 255, 0.08) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at center, black, transparent)",
          }}
        />

        {/* Floating orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.04] animate-float"
          style={{
            background: "radial-gradient(circle, #00F2FE, transparent)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #00F2FE, transparent)",
            animationDelay: "3s",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="animate-on-scroll flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 border border-cyan-400 bg-cyan-400-muted">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                <span className="font-display text-[10px] text-cyan-400 tracking-[0.3em] uppercase font-600">
                  Available for Work
                </span>
              </div>
            </div>

            {/* Name */}
            <div
              className="animate-on-scroll"
              style={{ transitionDelay: "100ms" }}
            >
              <h1 className="font-display font-800 leading-[0.9] mb-3">
                <span className="block text-[clamp(3rem,10vw,7rem)] text-text">
                  OMNIA
                </span>
                <span className="block text-[clamp(3rem,10vw,7rem)]">
                  <span className="cyan-400-gradient">SALAMA</span>
                </span>
              </h1>
            </div>

            {/* Role */}
            <div
              className="animate-on-scroll mt-4"
              style={{ transitionDelay: "200ms" }}
            >
              <p className="font-display font-400 text-muted text-lg md:text-xl tracking-[0.15em] uppercase">
                Front-End Developer{" "}
                <span className="text-cyan-400 mx-3">|</span> Alexandria, Egypt
              </p>
            </div>

            {/* Description */}
            <div
              className="animate-on-scroll mt-6 max-w-2xl"
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-muted text-lg leading-relaxed">
                Passionate about crafting clean, responsive, and user-friendly
                web experiences. Specialized in{" "}
                <span className="text-text">Angular</span>,{" "}
                <span className="text-text">TypeScript</span>, and modern
                frontend ecosystems.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="animate-on-scroll flex flex-wrap items-center gap-4 mt-10"
              style={{ transitionDelay: "400ms" }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan-400 text-bg font-display font-700 text-sm tracking-wider uppercase hover:bg-cyan-400-dim transition-all duration-200"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-cyan-400 text-text font-display font-600 text-sm tracking-wider uppercase hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social */}
            <div
              className="animate-on-scroll flex items-center gap-4 mt-10"
              style={{ transitionDelay: "500ms" }}
            >
              <span className="text-muted text-xs tracking-widest uppercase">
                Find me on
              </span>
              <div className="flex items-center gap-3">
                {[
                  {
                    href: "https://github.com/Omniasalama",
                    Icon: Github,
                    label: "GitHub",
                  },
                  {
                    href: "https://linkedin.com/in/omniasalama",
                    Icon: Linkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: "mailto:omniamsalama25@gmail.com",
                    Icon: Mail,
                    label: "Email",
                  },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-cyan-400 transition-colors text-sm"
                  >
                    <Icon size={14} />
                    <span className="font-display text-xs">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <span className="text-muted text-[10px] tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-surface py-12 bg-blue-600/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "17+", label: "GitHub Repos", icon: Github },
              { value: "2+", label: "Years Learning", icon: Code2 },
              { value: "5+", label: "Frameworks", icon: Layers },
              { value: "100%", label: "Passion", icon: Zap },
            ].map(({ value, label, icon: Icon }, i) => (
              <div
                key={label}
                className="animate-on-scroll text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Icon
                  size={20}
                  className="text-cyan-400 mx-auto mb-2 opacity-70"
                />
                <div className="font-display font-800 text-3xl text-text mb-1">
                  {value}
                </div>
                <div className="text-muted text-xs tracking-widest uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH TICKER */}
      <div className="border-b border-border overflow-hidden py-4 bg-blue-600/5">
        <div
          className="flex gap-8 animate-[scroll_20s_linear_infinite]"
          style={{
            animation: "ticker 20s linear infinite",
          }}
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-muted text-xs font-display font-600 tracking-widest uppercase whitespace-nowrap flex-shrink-0"
            >
              <span className="w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0" />
              {tech}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes ticker {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="animate-on-scroll flex items-end justify-between mb-12">
          <div>
            <span className="section-label">Work</span>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-text mt-2">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden md:inline-flex items-center gap-2 text-cyan-400 text-sm font-display font-600 tracking-wider uppercase hover:gap-3 transition-all"
          >
            All Projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-cyan-400 text-sm font-display font-600 tracking-wider uppercase"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll relative overflow-hidden border border-blue-400/30 bg-cyan-400-muted p-12 md:p-16 text-center">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0, 112, 255, 0.08) 0%, transparent 70%)",
              }}
            />
            <span className="section-label mx-auto">Let's Work Together</span>
            <h2 className="font-display font-800 text-4xl md:text-6xl text-text mt-4 mb-6">
              Have a project in mind?
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-bg font-display font-700 text-sm tracking-wider uppercase hover:bg-cyan-400-dim transition-all duration-200"
            >
              Start a Conversation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
