import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/img/logo-icon.png" alt="Ícone ClubeDS" />
          <span>ClubeDS — Grupo de estudo em Programação</span>
        </div>

        <div className="footer__links">
          <a
            href="https://www.instagram.com/hckt_powertech?stkn=MWFlcmJseHFuaHYwbQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="Instagram do ClubeDS"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
            </svg>
            @clubeds
          </a>

          <a
            href="mailto:ds.clube00@gmail.com"
            className="footer__link"
            aria-label="Enviar email para o ClubeDS"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            contato@clubeds.com
          </a>
        </div>

        <div className="footer__meta">© <span>{year}</span> ClubeDS</div>
      </div>
    </footer>
  );
}
