import React from "react";

export default function InscricaoGateway({ steps, faq }) {
  return (
    <div className="gateway-grid">
      <div className="panel gateway-panel" data-tilt>
        <div className="notice">
          <span className="notice__icon" aria-hidden="true">!</span>
          <p>
            <strong>Inscrições encerradas.</strong> O período de inscrição do
            Hackathon ClubeDS já foi finalizado e não estamos mais recebendo
            novas equipes.
          </p>
        </div>

        <p className="gateway-panel__text">
          Fique de olho nos nossos canais para as próximas edições do Hackathon!
        </p>
      </div>

      <aside className="panel" data-tilt>
        <h3 style={{ marginBottom: 16, fontSize: 16 }}>O que acontece depois</h3>
        <ol className="steps">
          {steps.map((step) => (
            <li data-n={step.n} key={step.n}>{step.text}</li>
          ))}
        </ol>

        <div className="faq-mini">
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </aside>
    </div>
  );
}