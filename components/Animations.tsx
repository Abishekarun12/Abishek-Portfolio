"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const canHover = () => window.matchMedia("(hover: hover)").matches;

// Page-wide GSAP + ScrollTrigger animations. Renders nothing.
export default function Animations() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      // Hero intro
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(".hero-tag", { opacity: 1, y: 0, duration: 0.7, delay: 0.3 })
        .to(".hero-line", { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, "-=0.3")
        .to(".hero-role", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(".hero-desc", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(".hero-cta", { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .to(".hero-visual", { opacity: 1, x: 0, duration: 0.9, ease: "power2.out" }, "-=0.8")
        .to(".hero-stats", { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .to(".scroll-indicator", { opacity: 1, duration: 0.6 }, "-=0.2");

      // Scroll reveals
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.to(el, {
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
          opacity: 1,
          y: 0,
          duration: 0.75,
          delay: parseFloat(el.dataset.delay || "0"),
          ease: "power3.out",
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal-left, .reveal-right").forEach((el) => {
        gsap.to(el, {
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: "power3.out",
        });
      });

      gsap.from(".ai-tool-card", {
        scrollTrigger: { trigger: ".ai-tools-block", start: "top 90%", toggleActions: "play none none none" },
        opacity: 0,
        y: 20,
        scale: 0.85,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });

      gsap.from(".timeline-item", {
        scrollTrigger: { trigger: ".timeline", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0,
        x: 30,
        duration: 0.6,
        stagger: 0.18,
        ease: "power2.out",
      });

      gsap.utils.toArray<HTMLElement>(".section-title").forEach((title) => {
        gsap.from(title, {
          scrollTrigger: { trigger: title, start: "top 90%", toggleActions: "play none none none" },
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
        });
      });

      gsap.from(".project-card", {
        scrollTrigger: { trigger: ".projects-grid", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".contact-row", {
        scrollTrigger: { trigger: ".contact-details", start: "top 85%", toggleActions: "play none none none" },
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Hero card 3D tilt
      const heroCard = document.querySelector<HTMLElement>(".hero-card");
      if (heroCard && canHover()) {
        const onMove = (e: MouseEvent) => {
          const rect = heroCard.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(heroCard, {
            rotateY: x * 12,
            rotateX: -y * 12,
            transformPerspective: 800,
            duration: 0.4,
            ease: "power2.out",
          });
        };
        const onLeave = () =>
          gsap.to(heroCard, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
        heroCard.addEventListener("mousemove", onMove);
        heroCard.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          heroCard.removeEventListener("mousemove", onMove);
          heroCard.removeEventListener("mouseleave", onLeave);
        });
      }

      // Floating badge hover
      document.querySelectorAll<HTMLElement>(".floating-badge").forEach((badge) => {
        const enter = () => gsap.to(badge, { scale: 1.1, duration: 0.3, ease: "back.out(2)" });
        const leave = () => gsap.to(badge, { scale: 1, duration: 0.3 });
        badge.addEventListener("mouseenter", enter);
        badge.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          badge.removeEventListener("mouseenter", enter);
          badge.removeEventListener("mouseleave", leave);
        });
      });
    });

    // Count the hero stats up from 0 when they come into view
    const timers: number[] = [];
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          statObserver.unobserve(el);
          const original = el.dataset.value ?? el.textContent ?? "";
          el.dataset.value = original;
          // e.g. "2.7+" → 2.7 and "+"; text like "AWS" is left as-is
          const match = original.match(/^(\d+(?:\.(\d+))?)(.*)$/);
          if (!match) return;
          const target = parseFloat(match[1]);
          const decimals = match[2]?.length ?? 0;
          const suffix = match[3];
          const step = target / 40;
          let current = 0;
          const timer = window.setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent =
              (decimals ? current.toFixed(decimals) : Math.floor(current).toString()) + suffix;
          }, 35);
          timers.push(timer);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".stat-num").forEach((el) => statObserver.observe(el));

    return () => {
      ctx.revert();
      cleanups.forEach((fn) => fn());
      statObserver.disconnect();
      timers.forEach(clearInterval);
      // Restore final stat values in case a count was interrupted
      document.querySelectorAll<HTMLElement>(".stat-num").forEach((el) => {
        if (el.dataset.value) el.textContent = el.dataset.value;
      });
    };
  }, []);

  return null;
}
