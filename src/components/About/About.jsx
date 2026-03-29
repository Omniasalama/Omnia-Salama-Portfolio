/** @format */

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Download,
  ArrowRight,
  MapPin,
  GraduationCap,
  Briefcase,
  BookOpen,
} from "lucide-react";
import { skills, skillCategories, timeline } from "../../data/skills";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const typeConfig = {
  education: { icon: GraduationCap, color: "#00F2FE", label: "Education" },
  work: { icon: Briefcase, color: "#00CCFF", label: "Work" },
  training: { icon: BookOpen, color: "#A78BFA", label: "Training" },
};

export default function About() {
  useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>About — Omnia Salama</title>
        <meta
          name="description"
          content="Learn about Omnia Salama's background, skills, and journey as a Front-End Developer."
        />
      </Helmet>

      <section className="relative pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="animate-on-scroll">
          <span className="section-label">About Me</span>
          <h1 className="font-display font-800 text-5xl md:text-7xl text-text mt-2 leading-[0.9]">
            The person
            <br />
            <span className="cyan-400-gradient">behind the code.</span>
          </h1>
        </div>

        <div
          className="animate-on-scroll mt-10 grid md:grid-cols-2 gap-12 items-start"
          style={{ transitionDelay: "150ms" }}
        >
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              I'm <span className="text-text font-500">Omnia Salama</span>, a
              passionate Front-End Developer based in{" "}
              <span className="inline-flex items-center gap-1 text-text">
                <MapPin size={13} /> Alexandria, Egypt
              </span>
              . I graduated with a degree in Management Information Systems from
              Alexandria University, where I developed a deep interest in how
              technology shapes user experiences.
            </p>
            <p>
              My journey into front-end development started with the
              fundamentals — HTML, CSS, JavaScript — and quickly evolved into
              mastering modern frameworks like{" "}
              <span className="text-cyan-400">Angular</span> and tooling like{" "}
              <span className="text-cyan-400">Tailwind CSS</span> and{" "}
              <span className="text-cyan-400">TypeScript</span>.
            </p>
            <p>
              I love the intersection of design and code. Building something
              that not only works flawlessly but looks beautiful and feels
              intuitive is what drives me. I'm always learning, always building.
            </p>
          </div>

          <div className="glass-card p-6 space-y-4">
            <h3 className="font-display font-700 text-sm text-muted tracking-widest uppercase mb-5">
              Quick Facts
            </h3>
            {[
              { label: "Location", value: "Alexandria, Egypt" },
              {
                label: "Education",
                value: "MIS — Alexandria University (2024)",
              },
              { label: "Specialization", value: "Front-End Development" },
              {
                label: "Primary Stack",
                value: "Angular + NodeJS",
              },
              { label: "Email", value: "omniamsalama25@gmail.com" },
              { label: "Status", value: "Open to Opportunities" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
              >
                <span className="text-muted text-xs font-display uppercase tracking-wider w-28 flex-shrink-0">
                  {label}
                </span>
                <span className="text-text text-sm flex-1">
                  {value === "Open to Opportunities" ? (
                    <span className="text-cyan-400 font-600">{value}</span>
                  ) : (
                    value
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 bg-accent/5 shadow-[inset_0_0_80px_rgba(0,112,255,0.1)]">
        {" "}
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-on-scroll mb-14">
            <span className="section-label">Expertise</span>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-text mt-2">
              Skills & Technologies
            </h2>
          </div>

          {skillCategories.map((cat, ci) => (
            <div
              key={cat}
              className="animate-on-scroll mb-12"
              style={{ transitionDelay: `${ci * 100}ms` }}
            >
              <h3 className="font-display font-600 text-xs text-muted tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-cyan-400/30 shadow-[0_0_8px_rgba(0,112,255,0.2)]" />
                {cat}
                <span className="h-px flex-1 bg-cyan-400/30 shadow-[0_0_8px_rgba(0,112,255,0.2)]" />
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, si) => (
                    <div
                      key={skill.name}
                      className="group animate-on-scroll glass-card p-4 hover:border-cyan-400 transition-all duration-300"
                      style={{ transitionDelay: `${si * 60}ms` }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-display font-600 text-sm text-text">
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 text-xs font-display font-700">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-cyan-400 rounded-full transition-all duration-700 ease-out group-hover:shadow-[0_0_12px_rgba(0,112,255,0.8)]"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="animate-on-scroll mb-14">
          <span className="section-label">Journey</span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-text mt-2">
            Education & Experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const { icon: Icon, color } = typeConfig[item.type];
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`animate-on-scroll relative flex md:items-center gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex-1">
                    <div
                      className={`glass-card p-6 hover:border-current transition-all duration-300 ${isLeft ? "md:mr-8" : "md:ml-8"}`}
                      style={{ "--tw-border-opacity": 0.3 }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p
                            className="text-[10px] font-display font-600 tracking-widest uppercase mb-1"
                            style={{ color }}
                          >
                            {item.year}
                          </p>
                          <h3 className="font-display font-700 text-text text-lg">
                            {item.title}
                          </h3>
                          <p className="text-muted text-sm mt-0.5">
                            {item.place}
                          </p>
                        </div>
                        <div
                          className="w-8 h-8 border flex-shrink-0 flex items-center justify-center"
                          style={{
                            borderColor: `${color}40`,
                            backgroundColor: `${color}10`,
                          }}
                        >
                          <Icon size={14} style={{ color }} />
                        </div>
                      </div>
                      <p className="text-muted text-sm leading-relaxed mt-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-bg items-center justify-center"
                    style={{ backgroundColor: color }}
                  >
                    <div className="w-1 h-1 rounded-full bg-bg" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="pb-20 max-w-7xl mx-auto px-6">
        <div className="animate-on-scroll glass-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-700 text-xl text-text">
              Want to see my work?
            </h3>
            <p className="text-muted text-sm mt-1">
              Check out the projects I've built.
            </p>
          </div>
          <Link
            to="/projects"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-cyan-400 text-bg font-display font-700 text-sm tracking-wider uppercase hover:bg-cyan-400-dim transition-all duration-200"
          >
            View Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
