import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project, index }) {
  return (
    <div
      className="animate-on-scroll group relative glass-card p-6 flex flex-col gap-4 hover:border-cyan-400 transition-all duration-400 overflow-hidden"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${project.color}08 0%, transparent 60%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Color indicator */}
          <div
            className="w-2 h-2 rounded-full flex-shrink-0 mt-1"
            style={{ backgroundColor: project.color, boxShadow: `0 0 8px ${project.color}80` }}
          />
          <div>
            <span className="font-display text-[10px] text-muted tracking-widest uppercase">{project.subtitle}</span>
            <h3 className="font-display font-700 text-text text-lg leading-tight group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer"
              className="w-8 h-8 border border-border flex items-center justify-center text-muted hover:text-cyan-400 hover:border-cyan-400 transition-all">
              <ExternalLink size={14} />
            </a>
          )}
          <a href={project.github} target="_blank" rel="noreferrer"
            className="w-8 h-8 border border-border flex items-center justify-center text-muted hover:text-cyan-400 hover:border-cyan-400 transition-all">
            <Github size={14} />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-[10px] font-display font-600 tracking-wider uppercase border border-border text-muted group-hover:border-border transition-colors"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 5 && (
          <span className="px-2.5 py-1 text-[10px] font-display font-600 tracking-wider uppercase border border-border text-muted">
            +{project.tags.length - 5}
          </span>
        )}
      </div>

      {/* Year */}
      <div className="flex items-center justify-between pt-2 border-t border-border">
        <span className="text-muted text-xs">{project.year}</span>
        <a href={project.github} target="_blank" rel="noreferrer"
          className="flex items-center gap-1 text-cyan-400 text-xs font-display font-600 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
          View <ArrowUpRight size={12} />
        </a>
      </div>
    </div>
  )
}
