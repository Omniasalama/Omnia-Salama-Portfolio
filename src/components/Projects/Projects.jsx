/** @format */

import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Github } from "lucide-react";
import { projects, categories } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  useScrollAnimation();

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category?.includes(activeCategory));
  return (
    <>
      <Helmet>
        <title>Projects — Omnia Salama</title>
        <meta
          name="description"
          content="Explore Omnia Salama's front-end development projects, including Angular apps, vanilla JS projects, and more."
        />
      </Helmet>

      {/* HEADER */}
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <div className="animate-on-scroll">
          <span className="section-label text-cyan-400">Portfolio</span>
          <h1 className="font-display font-800 text-5xl md:text-7xl text-text mt-2 leading-[0.9]">
            All Projects
          </h1>
          <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">
            A collection of work spanning e-commerce platforms, portfolio sites,
            utility apps, and more. Each project represents a step in my growth
            as a developer.
          </p>
        </div>

        {/* Stats row */}
        <div
          className="animate-on-scroll flex flex-wrap gap-6 mt-10"
          style={{ transitionDelay: "150ms" }}
        >
          <div className="glass-card px-5 py-3 flex items-center gap-3">
            <span className="font-display font-800 text-2xl text-cyan-400">
              {projects.length}
            </span>
            <span className="text-muted text-xs uppercase tracking-wider">
              Projects
            </span>
          </div>
          <div className="glass-card px-5 py-3 flex items-center gap-3">
            <span className="font-display font-800 text-2xl text-cyan-400">
              17+
            </span>
            <span className="text-muted text-xs uppercase tracking-wider">
              GitHub Repos
            </span>
          </div>
          <a
            href="https://github.com/Omniasalama"
            target="_blank"
            rel="noreferrer"
            className="glass-card px-5 py-3 flex items-center gap-3 hover:border-cyan-400/50 transition-colors"
          >
            <Github size={16} className="text-cyan-400" />
            <span className="text-muted text-xs uppercase tracking-wider">
              View All on GitHub
            </span>
          </a>
        </div>
      </section>

      {/* FILTER */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div className="animate-on-scroll flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 font-display font-600 text-xs tracking-widest uppercase transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-cyan-400 text-bg"
                  : "border border-border text-muted hover:border-cyan-400/50 hover:text-text"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span
                  className={`ml-2 text-[10px] ${activeCategory === cat ? "text-bg/70" : "text-muted"}`}
                >
                  {projects.filter((p) => p.category?.includes(cat)).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {/* Featured highlight */}
        {activeCategory === "All" && (
          <div className="animate-on-scroll mb-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-cyan-400 text-xs font-display font-600 tracking-[0.2em] uppercase">
                Featured
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects
                .filter((p) => p.featured)
                .map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>
            <div className="flex items-center gap-3 mt-10 mb-6">
              <span className="text-muted text-xs font-display font-600 tracking-[0.2em] uppercase">
                Other Projects
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects
                .filter((p) => !p.featured)
                .map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>
          </div>
        )}

        {/* Filtered view */}
        {activeCategory !== "All" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-3 text-center py-20">
                <p className="text-muted">No projects in this category yet.</p>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
}
