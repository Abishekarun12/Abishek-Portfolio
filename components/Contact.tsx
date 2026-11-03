import { EMAIL, GITHUB_URL, LOCATION, PHONE, PHONE_HREF, RESUME_URL, socials } from "@/lib/data";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-header">
        <span className="section-tag">04 — Contact</span>
        <h2 className="section-title">Let&apos;s Talk</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-info reveal-left">
          <p className="contact-intro">
            I&apos;m open to full-time roles, freelance projects, and interesting collaborations.
            Drop me a message or reach out on any platform below.
          </p>
          <div className="contact-details">
            <a href={`mailto:${EMAIL}`} className="contact-row">
              <div className="contact-icon-wrap">
                <i className="fas fa-envelope" />
              </div>
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">{EMAIL}</span>
              </div>
            </a>
            <a href={PHONE_HREF} className="contact-row">
              <div className="contact-icon-wrap">
                <i className="fas fa-phone" />
              </div>
              <div>
                <span className="contact-label">Phone</span>
                <span className="contact-value">{PHONE}</span>
              </div>
            </a>
            <div className="contact-row">
              <div className="contact-icon-wrap">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-value">{LOCATION}</span>
              </div>
            </div>
          </div>
          <div className="social-links">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="social-link"
                aria-label={s.label}
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
        <div className="contact-cta reveal-right">
          <div className="cta-card">
            <div className="cta-bg" />
            <h3>Ready to build something great?</h3>
            <p>
              Whether it&apos;s a full web app, a backend API, or just a conversation — I&apos;m
              here. Fellow developers, let&apos;s connect on GitHub.
            </p>
            <a href={`mailto:${EMAIL}`} className="btn btn-primary">
              Send a Message <i className="fas fa-paper-plane" />
            </a>
            <a href={GITHUB_URL} className="btn btn-outline" target="_blank" rel="noopener">
              <i className="fab fa-github" /> Connect on GitHub
            </a>
            <a href={RESUME_URL} className="btn btn-outline" target="_blank" rel="noopener">
              View Resume <i className="fas fa-file-alt" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>© 2026 Abishek Arunachalam. Full-Stack Developer · Backend, Cloud &amp; AI Systems.</p>
      </div>
    </section>
  );
}
