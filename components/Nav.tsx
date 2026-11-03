"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Restore the saved theme
  useEffect(() => {
    try {
      if (localStorage.getItem("theme") === "light") document.body.classList.add("light-mode");
    } catch {}
  }, []);

  const toggleTheme = () => {
    const isLight = document.body.classList.toggle("light-mode");
    try {
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch {}
  };

  // Highlight the nav link for the section in the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    document.querySelectorAll(".section").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Smooth-scroll every in-page anchor, leaving room for the fixed nav
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector<HTMLElement>(anchor.getAttribute("href")!);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          A<span>.A</span>
        </div>
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link${active === item.id ? " active" : ""}`}
              data-section={item.id}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
          <i className="fas fa-circle-half-stroke" />
        </button>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="mobile-link"
            data-section={item.id}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
