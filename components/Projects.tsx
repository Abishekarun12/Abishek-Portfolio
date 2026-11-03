import Image from "next/image";
import { GITHUB_URL, moreOnGithub, projects, type ProjectLink } from "@/lib/data";
import LiveDemoLink from "./LiveDemoLink";

function Link({ link }: { link: ProjectLink }) {
  if (link.kind === "live-demo") return <LiveDemoLink href={link.href} />;
  const className = `proj-link${link.live ? " live" : ""}`;
  if (link.kind === "badge") {
    return (
      <span className={className}>
        <i className={link.icon} /> {link.label}
      </span>
    );
  }
  return (
    <a href={link.href} target="_blank" rel="noopener" className={className}>
      <i className={link.icon} /> {link.label}
    </a>
  );
}

export default function Projects() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="section-header">
        <span className="section-tag">03 — Work</span>
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-grid">
        {/* Flagship */}
        <div className="project-card featured reveal-up">
          <div className="project-info">
            <div className="project-num">01 — Flagship · My Product</div>
            <h3>DevOps AI Agent</h3>
            <p>
              A full-stack, AI-powered AWS infrastructure management platform. Three-repo system —
              Next.js frontend &rarr; Laravel 11 API (auth, proxy, audit) &rarr; FastAPI AI service.
              Ships a <strong>transparent AWS proxy</strong> where developers use fake DVAK keys
              while every SDK call is intercepted, re-signed via SigV4 with real IAM credentials and
              forwarded — real credentials never touch developer machines. Multi-provider LLM
              routing (Bedrock, Claude, Groq, Gemini) behind one streaming interface, plus a DevOps
              co-pilot for Terraform generation, CloudWatch log analysis and cost optimization.
            </p>
            <div className="project-tags">
              {["Next.js", "Laravel 11", "FastAPI", "AWS Bedrock", "boto3"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <span className="proj-link live">
                <i className="fas fa-rocket" /> My Own Product
              </span>
              <span className="proj-link">
                <i className="fas fa-layer-group" /> Solo build
              </span>
              <a href={GITHUB_URL} target="_blank" rel="noopener" className="proj-link">
                <i className="fab fa-github" /> Connect on GitHub
              </a>
            </div>
          </div>
          <div className="project-img-wrap ph">
            <i className="fas fa-robot" />
            <span className="ph-label">Transparent AWS Proxy · LLM Routing</span>
          </div>
        </div>

        {projects.map((p) => (
          <div className="project-card reveal-up" data-delay={p.delay} key={p.num}>
            <div className="project-num">{p.num}</div>
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                {p.links.map((link, i) => (
                  <Link link={link} key={i} />
                ))}
              </div>
            </div>
            {p.image ? (
              <div className="project-img-wrap">
                <Image src={p.image} alt={p.title} width={800} height={500} unoptimized />
              </div>
            ) : (
              <div className="project-img-wrap ph">
                <i className={p.placeholderIcon} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="tools-row reveal-up">
        <span>More on GitHub:</span>
        <div className="tools-list">
          {moreOnGithub.map((r) => (
            <a className="tool-tag" href={r.href} target="_blank" rel="noopener" key={r.href}>
              {r.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
