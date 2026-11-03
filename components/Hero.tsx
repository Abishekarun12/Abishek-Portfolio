import { Fragment } from "react";
import { heroStats, RESUME_URL } from "@/lib/data";

export default function Hero() {
  return (
    <section className="section hero" id="home">
      <div className="hero-bg-grid" />
      <div className="hero-content">
        <div className="hero-tag">
          <span className="dot" /> Available for work
        </div>
        <h1 className="hero-title">
          <span className="hero-line" data-text="Abishek">
            Abishek
          </span>
          <span className="hero-line accent" data-text="Arunachalam">
            Arunachalam
          </span>
        </h1>
        <p className="hero-role">
          Full-Stack Developer <span className="separator">—</span> Backend, Cloud &amp; AI Systems
        </p>
        <p className="hero-desc">
          Building production-grade systems across fintech, e-commerce, food-delivery and DevOps —
          with Laravel, FastAPI and Next.js. Recently shipped a full-stack AI-powered AWS
          infrastructure platform end to end.
        </p>
        <div className="hero-cta">
          <a href={RESUME_URL} className="btn btn-primary" target="_blank" rel="noopener">
            View Resume <i className="fas fa-arrow-up-right-from-square" />
          </a>
          <a href="#portfolio" className="btn btn-outline">
            See My Work <i className="fas fa-arrow-down" />
          </a>
        </div>
        <div className="hero-stats">
          {heroStats.map((stat, i) => (
            <Fragment key={stat.label}>
              {i > 0 && <div className="stat-divider" />}
              <div className="stat">
                <span className="stat-num">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <div className="card-glow" />
          <div className="card-inner">
            <div className="code-window">
              <div className="window-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <pre className="code-content">
                <code>
                  <span className="kw">class</span> <span className="fn">Abishek</span> {"{\n"}
                  {"  "}<span className="prop">role</span> = <span className="str">&apos;Full-Stack Dev&apos;</span>;{"\n"}
                  {"  "}<span className="prop">location</span> = <span className="str">&apos;Tamil Nadu, IN&apos;</span>;{"\n"}
                  {"  "}<span className="prop">focus</span> = <span className="str">&apos;Cloud + AI Systems&apos;</span>;{"\n\n"}
                  {"  "}<span className="fn">stack</span>() {"{\n"}
                  {"    "}<span className="kw">return</span> [{"\n"}
                  {"      "}<span className="str">&apos;Laravel&apos;</span>, <span className="str">&apos;FastAPI&apos;</span>,{"\n"}
                  {"      "}<span className="str">&apos;Next.js&apos;</span>, <span className="str">&apos;AWS&apos;</span>,{"\n"}
                  {"      "}<span className="str">&apos;Bedrock&apos;</span>, <span className="str">&apos;MySQL&apos;</span>{"\n"}
                  {"    "}];{"\n"}
                  {"  }\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div className="floating-badge badge-1">
          <i className="fab fa-laravel" /> Laravel
        </div>
        <div className="floating-badge badge-2">
          <i className="fab fa-python" /> FastAPI
        </div>
        <div className="floating-badge badge-3">
          <i className="fab fa-aws" /> AWS
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
