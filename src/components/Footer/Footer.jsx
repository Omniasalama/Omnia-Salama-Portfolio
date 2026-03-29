/** @format */

import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-600/10 bg-cyan-700/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display font-800 text-2xl text-text">
              <span className="font-display font-700 text-text text-lg tracking-wide group-hover:text-cyan-400 transition-colors">
                Omnia <span className="text-cyan-400">Salama</span>
              </span>{" "}
            </Link>
            <p className="text-muted text-sm mt-2 max-w-xs">
              Front-End Developer crafting clean, performant, and beautiful web
              experiences.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="font-display text-xs text-muted tracking-widest uppercase">
              Navigation
            </p>
            <div className="flex gap-6">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/projects", "Projects"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  className="text-muted hover:text-cyan-400 text-sm transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Omniasalama"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 border border-border flex items-center justify-center text-muted hover:text-cyan-400 hover:border-cyan-400 transition-all duration-200"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/omniamsalama"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 border border-border flex items-center justify-center text-muted hover:text-cyan-400 hover:border-cyan-400 transition-all duration-200"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:omniamsalama25@gmail.com"
              className="w-9 h-9 border border-border flex items-center justify-center text-muted hover:text-cyan-400 hover:border-cyan-400 transition-all duration-200"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 border border-cyan-400 text-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-bg transition-all duration-200 ml-2"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-muted text-xs font-body">
            © {year} Omnia Salama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
