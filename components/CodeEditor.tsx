// VS Code-style editor window shown in the hero
const K = ({ c }: { c: string }) => <span className="kw">{c}</span>;
const C = ({ c }: { c: string }) => <span className="cls">{c}</span>;
const F = ({ c }: { c: string }) => <span className="fn">{c}</span>;
const S = ({ c }: { c: string }) => <span className="str">&apos;{c}&apos;</span>;

const LINE_COUNT = 10;

const sidebarIcons = [
  { icon: "fas fa-code", active: true },
  { icon: "far fa-copy" },
  { icon: "fas fa-code-branch" },
  { icon: "far fa-circle-play" },
  { icon: "fas fa-table-cells-large" },
];

export default function CodeEditor() {
  return (
    <div className="hero-card">
      <div className="editor">
        <div className="editor-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>

        <div className="editor-body">
          <aside className="editor-sidebar" aria-hidden="true">
            {sidebarIcons.map((s) => (
              <i key={s.icon} className={`${s.icon}${s.active ? " active" : ""}`} />
            ))}
            <i className="fas fa-gear sidebar-bottom" />
          </aside>

          <div className="editor-main">
            <div className="editor-tabs">
              <span className="editor-tab">
                <i className="far fa-file-code" /> app.php
              </span>
              <i className="fas fa-list-ul editor-tab-icon" aria-hidden="true" />
              <span className="editor-badge">
                <i className="fab fa-laravel" /> Laravel
              </span>
            </div>

            <div className="code-body">
              <div className="code-lines" aria-hidden="true">
                {Array.from({ length: LINE_COUNT }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <pre className="code-content">
                <code>
                  <span className="op">&lt;?php</span>{"\n"}
                  <K c="class" /> <C c="AbishekController" /> <K c="extends" /> <C c="Controller" />{"\n"}
                  {"{\n"}
                  {"    "}<K c="public function" /> <F c="home" />(){"\n"}
                  {"    {\n"}
                  {"        "}<K c="return" /> <F c="view" />(<S c="welcome" />, [{"\n"}
                  {"            "}<S c="developer" /> <span className="op">=&gt;</span> <span className="bool">true</span>,{"\n"}
                  {"        "}]);{"\n"}
                  {"    }\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
