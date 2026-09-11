import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/img/favicon_powertech-removebg-preview.png" alt="Ícone ClubeDS" />
          <span>ClubeDS — Grupo de estudo em Programação</span>
        </div>
        <div className="footer__meta">© <span>{year}</span> ClubeDS</div>
      </div>
    </footer>
  );
}
