import { EMAIL, LOCATION, PHONE, RESUME_URL, timeline } from "@/lib/data";

const details = [
  { icon: "fas fa-map-marker-alt", text: LOCATION },
  { icon: "fas fa-envelope", text: EMAIL },
  { icon: "fas fa-phone", text: PHONE },
  { icon: "fas fa-language", text: "English, Tamil" },
];

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
            I&apos;m a <strong>Full-Stack Developer</strong> from Tamil Nadu, India — specialising in{" "}
            <strong>Laravel (PHP)</strong>, <strong>FastAPI (Python)</strong> and{" "}
            <strong>Next.js</strong>, with a growing focus on <strong>AWS cloud</strong> and{" "}
            <strong>AI systems</strong>.
          </p>
          <p>
            As a <strong>Software Engineer at Cloudrevel Innovation</strong>, I&apos;ve shipped
            production systems across fintech, e-commerce, food-delivery and DevOps — building
            scalable REST APIs for Laravel apps serving <strong>1,000+ active users</strong>.
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

        <div className="timeline reveal-right">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.title}>
              <div className="tl-dot" />
              <div className="tl-content">
                <span className="tl-year">{item.year}</span>
                <h4>{item.title}</h4>
                <span className="tl-company">{item.company}</span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
