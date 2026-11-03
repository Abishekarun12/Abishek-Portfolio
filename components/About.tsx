import {
  certifications,
  education,
  EMAIL,
  experience,
  LOCATION,
  ownProducts,
  PHONE,
  RESUME_URL,
} from "@/lib/data";

const details = [
  { icon: "fas fa-map-marker-alt", text: LOCATION },
  { icon: "fas fa-envelope", text: EMAIL },
  { icon: "fas fa-phone", text: PHONE },
  { icon: "fas fa-language", text: "English, Tamil" },
];

function BlockTitle({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <h3 className="about-block-title">
      <span className="about-block-icon">
        <i className={icon} />
      </span>
      {children}
    </h3>
  );
}

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-header">
        <span className="section-tag">01 — About</span>
        <h2 className="section-title">Who I Am</h2>
      </div>

      <div className="about-grid">
        <div className="about-text reveal-left">
          <p className="about-intro">
            I&apos;m a <strong>Full-Stack Developer</strong> from Tamil Nadu, India, now based in{" "}
            <strong>Dubai</strong> — specialising in <strong>Laravel (PHP)</strong>,{" "}
            <strong>FastAPI (Python)</strong> and <strong>Next.js</strong>, with a growing focus on{" "}
            <strong>AWS cloud</strong> and <strong>AI systems</strong>.
          </p>
          <p>
            I&apos;m currently a <strong>Software Engineer at CloudGate Host</strong> in Dubai, with{" "}
            <strong>3.5+ years</strong> of overall experience. Before that, at{" "}
            <strong>Cloudrevel Innovation</strong>, I shipped production systems across fintech,
            e-commerce, food-delivery and DevOps — building scalable REST APIs for Laravel apps
            serving <strong>1,000+ active users</strong>.
          </p>
          <p>
            On the side I designed and built <strong>DevOps AI Agent</strong>, my own product — a
            transparent AWS proxy with credential masking, multi-provider LLM chat, Terraform
            generation and cost optimization — owning it end to end from architecture through
            deployment.
          </p>
          <div className="about-details">
            {details.map((d) => (
              <div className="detail-item" key={d.text}>
                <i className={d.icon} />
                <span>{d.text}</span>
              </div>
            ))}
          </div>
          <a href={RESUME_URL} className="btn btn-primary" target="_blank" rel="noopener">
            Download Resume <i className="fas fa-download" />
          </a>
        </div>

        {/* Work experience */}
        <div className="about-block reveal-right">
          <BlockTitle icon="fas fa-briefcase">Experience</BlockTitle>
          <div className="timeline">
            {experience.map((job) => (
              <div className={`timeline-item${job.current ? " current" : ""}`} key={job.company + job.period}>
                <div className="tl-dot" />
                <div className="tl-content">
                  <span className="tl-year">
                    {job.period}
                    {job.current && <span className="tl-badge">Current</span>}
                  </span>
                  <h4>{job.role}</h4>
                  <span className="tl-company">
                    {job.company}
                    {job.location && (
                      <>
                        {" "}
                        · <i className="fas fa-location-dot" /> {job.location}
                      </>
                    )}
                  </span>
                  {job.text && <p>{job.text}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education, certifications and own products */}
      <div className="about-cards">
        <div className="about-card reveal-up">
          <BlockTitle icon="fas fa-graduation-cap">Education</BlockTitle>
          {education.map((e) => (
            <div className="about-card-item" key={e.title}>
              <span className="tl-year">{e.period}</span>
              <h4>{e.title}</h4>
              <span className="tl-company">{e.place}</span>
              <p>{e.text}</p>
            </div>
          ))}
        </div>

        <div className="about-card reveal-up" data-delay="0.1">
          <BlockTitle icon="fas fa-certificate">Certifications</BlockTitle>
          {certifications.map((c) => (
            <div className="about-card-item" key={c.title}>
              <h4>{c.title}</h4>
              <span className="tl-company">{c.issuer}</span>
              <p>{c.text}</p>
            </div>
          ))}
        </div>

        <div className="about-card reveal-up" data-delay="0.2">
          <BlockTitle icon="fas fa-rocket">Own Product</BlockTitle>
          {ownProducts.map((p) => (
            <div className="about-card-item" key={p.title}>
              <h4>{p.title}</h4>
              <span className="tl-company">{p.tag}</span>
              <p>{p.text}</p>
            </div>
          ))}
          <a href="#portfolio" className="about-card-link">
            See it in my work <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
