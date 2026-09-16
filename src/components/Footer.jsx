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
          
            href="https://instagram.com/clubeds"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <img
              src="/img/icon-instagram.png"
              alt="Instagram"
              className="footer__icon"
            />
            @clubeds
          </a>

          <a href="mailto:contato@clubeds.com" className="footer__link">
            <img
              src="/img/icon-email.png"
              alt="Email"
              className="footer__icon"
            />
            contato@clubeds.com
          </a>
        </div>

        <div className="footer__meta">© <span>{year}</span> ClubeDS</div>
      </div>
    </footer>
  );
}
