import { aiTools, skills, tools } from "@/lib/data";

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-header">
        <span className="section-tag">02 — Skills</span>
        <h2 className="section-title">Tech Stack</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card reveal-up" data-delay={i * 0.1} key={skill.name}>
            <div className="skill-icon">
              <i className={skill.icon} />
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

      <div className="tools-row reveal-up">
        <span>Also working with:</span>
        <div className="tools-list">
          {tools.map((tool) => (
            <span className="tool-tag" key={tool}>
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="ai-tools-block ai-tools-reveal">
        <div className="ai-tools-header">
          <i className="fas fa-robot" />
          <span>Building &amp; Working with AI</span>
        </div>
        <p className="ai-tools-desc">
          I build with LLMs, not just alongside them — multi-provider AI routing across{" "}
          <strong>AWS Bedrock</strong> (Nova, DeepSeek, Qwen), <strong>Anthropic Claude</strong>,{" "}
          <strong>Groq</strong> and <strong>Gemini</strong>, with LLM tool-use and streaming SSE. I
          also lean on AI tools daily to accelerate development and ship better code.
        </p>
        <div className="ai-tools-list">
          {aiTools.map((tool) => (
            <div className="ai-tool-card" key={tool.name}>
              <div className={`ai-tool-logo ${tool.className}`}>
                <i className={tool.icon} />
              </div>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
