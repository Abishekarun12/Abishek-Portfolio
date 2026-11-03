import { Fragment } from "react";
import { heroStats, heroTech, RESUME_URL } from "@/lib/data";
import CodeEditor from "./CodeEditor";

export default function Hero() {
  return (
    <section className="section hero" id="home">
      <div className="hero-main">
        <div className="hero-content">
          <div className="hero-tag">
            <span className="dot" /> Full-Stack Developer
            <span className="tag-sep">•</span>
            <span className="tag-stack">Laravel | AWS | Next.js</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-line hero-hi">Hi, I&apos;m</span>
            <span className="hero-line">Abishek</span>
            <span className="hero-line accent">
              Arunachalam<span className="title-caret" aria-hidden="true" />
            </span>
          </h1>
          <p className="hero-role">
            Building scalable <em>web</em> applications, powerful <em>cloud</em> solutions and
            intelligent <em>AI</em> experiences.
          </p>
          <div className="hero-cta">
            <a href="#portfolio" className="btn btn-primary">
              <i className="fas fa-rocket" /> Explore My Work <i className="fas fa-arrow-right" />
            </a>
            <a href={RESUME_URL} className="btn btn-outline" target="_blank" rel="noopener">
              <i className="fas fa-download" /> Download Resume
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="editor-back" />
          <CodeEditor />
        </div>
      </div>

      <div className="hero-stats">
        {heroStats.map((s, i) => (
          <Fragment key={s.label}>
            {i > 0 && <span className="stats-divider" />}
            <div className="stat-item">
              <i className={`${s.icon} stat-icon`} />
              <div>
                <span className="stat-num">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
          </Fragment>
        ))}
        <span className="stats-divider strong" />
        <div className="stat-tech">
          {heroTech.map((t) => (
            <span className="tech-logo" key={t.label} title={t.label} aria-label={t.label}>
              {t.icon === "next" ? (
                <span className="tech-next">N</span>
              ) : (
                <i className={t.icon} style={{ color: t.color }} />
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="mouse" />
        Scroll to explore
      </div>
    </section>
  );
}
