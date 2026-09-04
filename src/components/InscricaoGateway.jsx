import React from "react";

export default function InscricaoGateway({ formUrl, steps, faq }) {
  return (
    <div className="gateway-grid">
      <div className="panel gateway-panel" data-tilt>
        <div className="notice">
          <span className="notice__icon" aria-hidden="true">!</span>
          <p>
            <strong>Atenção:</strong> a inscrição é feita em um formulário externo (Google Forms).
            Somente o <strong>LÍDER da equipe</strong> deve preencher.
          </p>
        </div>

        <p className="gateway-panel__text">
          Clique no botão abaixo para abrir o formulário de inscrição do Hackathon ClubeDS.
          Você será redirecionado(a) para o Google Forms em uma nova aba.
        </p>

        <a
          className="btn btn--solid btn--block"
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir formulário de inscrição
        </a>
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
