import React from "react";

export default function Oportunidades({ modules }) {
  return (
    <section className="section section--line">
      <div className="container">
        <div className="section__head">
          <h2>Oportunidades pra quem participa</h2>
          <p>Além da técnica, o clube abre portas fora da sala de aula.</p>
        </div>

        <div className="modules">
          {modules.map((mod) => (
            <div className="module" data-tilt key={mod.title}>
              <h3>{mod.title}</h3>
              <p>{mod.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
