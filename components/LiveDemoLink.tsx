"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// Warns before opening a demo hosted on a bare public IP
export default function LiveDemoLink({ href }: { href: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const proceed = () => {
    window.open(href, "_blank", "noopener");
    setOpen(false);
  };

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="proj-link live"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <i className="fas fa-external-link-alt" /> Live Demo
      </a>

      {mounted &&
        createPortal(
      <div
        className={`modal-overlay${open ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-icon">
            <i className="fas fa-shield-alt" />
          </div>
          <h3 id="modal-title">External Link</h3>
          <p>This will redirect you to a public IP address server.</p>
          <div className="modal-actions">
            <button className="btn btn-outline" onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={proceed}>
              Proceed
            </button>
          </div>
        </div>
      </div>,
          document.body
        )}
    </>
  );
}
