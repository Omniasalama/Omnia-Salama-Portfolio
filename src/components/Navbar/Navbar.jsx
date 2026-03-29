/** @format */

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center p-1.5">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-bg fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100 20 C55.8 20 20 55.8 20 100 C20 144.2 55.8 180 100 180 C144.2 180 180 144.2 180 100 C180 55.8 144.2 20 100 20 Z M100 45 C130.4 45 155 69.6 155 100 C155 130.4 130.4 155 100 155 C69.6 155 45 130.4 45 100 C45 69.6 69.6 45 100 45 Z" />
                <path
                  d="M85 110 L75 100 L85 90 M115 90 L125 100 L115 110 M105 85 L95 115"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-display font-700 text-text text-xl tracking-wide group-hover:text-cyan-400 transition-colors">
              Omnia <span className="text-cyan-400">Salama</span>
            </span>
          </NavLink>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 font-display text-xs font-600 tracking-[0.1em] uppercase transition-colors duration-200 ${
                      isActive ? "text-cyan-400" : "text-muted hover:text-text"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <span className="absolute bottom-0 left-4 right-4 h-px bg-cyan-400" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="mailto:omniamsalama25@gmail.com"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-cyan-400 text-cyan-400 font-display font-600 text-xs tracking-widest uppercase hover:bg-cyan-400 hover:text-bg transition-all duration-200"
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-muted hover:text-cyan-400 transition-colors p-1"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-bg/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-all duration-400 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map(({ to, label }, i) => (
          <NavLink
            key={to}
            to={to}
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            className={({ isActive }) =>
              `font-display font-700 text-4xl tracking-tight transition-all duration-300 ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } ${isActive ? "text-cyan-400 glow-text" : "text-muted hover:text-text"}`
            }
          >
            {label}
          </NavLink>
        ))}
        <a
          href="mailto:omniamsalama25@gmail.com"
          className="mt-4 px-8 py-3 border border-cyan-400 text-cyan-400 font-display font-600 text-sm tracking-widest uppercase hover:bg-cyan-400 hover:text-bg transition-all duration-200"
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
