"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [light, setLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Restore the saved theme
  useEffect(() => {
    try {
      if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        setLight(true);
      }
    } catch {}
  }, []);

  const toggleTheme = () => {
    const isLight = document.body.classList.toggle("light-mode");
    setLight(isLight);
    try {
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch {}
  };

  // Glass nav background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-brand">
          <a href="#home" className="nav-logo" aria-label="Abishek — home">
            <span className="logo-mark">AA</span>
            Abishek
          </a>
          <span className="nav-status">
            <span className="logo-dot" /> Available for work
          </span>
        </div>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link${active === item.id ? " active" : ""}`}
            >
              <i className={item.icon} />
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
            onClick={toggleTheme}
          >
            <i className={light ? "far fa-moon" : "far fa-sun"} />
          </button>
          <a href="#contact" className="nav-cta">
            Let&apos;s Connect <i className="fas fa-arrow-right" />
          </a>
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
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            <i className={item.icon} />
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
