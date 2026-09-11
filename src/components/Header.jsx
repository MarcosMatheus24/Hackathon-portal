import React, { useEffect, useState } from "react";

export default function Header({ navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  // Marca como "ativo" o link cuja seção está no centro da tela no momento —
  // assim o destaque laranja aparece só enquanto a pessoa está naquela parte
  // da página, e não fica preso pra sempre.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) {
          setActiveHref(`#${mostVisible.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <a className="brand" href="#topo">
          <img className="brand__logo-icon" src="/img/favicon_powertech-removebg-preview.png" alt="Ícone ClubeDS" />
          <span className="brand__text">
            <strong>ClubeDS</strong>
            <span>SENAI CIMATEC </span>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
        </button>

        <nav className={`topnav${menuOpen ? " is-open" : ""}`}>
          {navLinks.map((link) => {
            const classes = [
              link.cta ? "cta" : "",
              link.href === activeHref ? "is-active" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <a
                key={link.href}
                href={link.href}
                className={classes || undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
