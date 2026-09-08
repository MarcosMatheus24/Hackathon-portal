import React from "react";

export default function HackathonDestaque({ nodes }) {
  return (
    <section id="hackathon" className="hackathon">
      <div className="container">
        <div className="hackathon__head">
          <h2>O Hackathon ClubeDS</h2>
          <p>
            Um desafio real e um prazo apertado: você entra com uma ideia — ou entra numa
            equipe — e sai com um projeto testável, apresentado pra uma banca no
            encerramento do evento.
          </p>
        </div>

        <div className="circuit-row">
          {nodes.map((node) => (
            <div className="node" key={node.title}>
              <span className="node__dot" aria-hidden="true"></span>
              <strong>{node.title}</strong>
              <span>{node.text}</span>
            </div>
          ))}
        </div>

        <div className="hackathon__actions" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a className="btn btn--solid" href="#inscricao">Quero me inscrever</a>
          {/* Botão do edital do hackathon: substitua o href pelo link/arquivo oficial do edital (PDF ou página) */}
          <a className="btn" href="/img/regulamento.pdf" target="_blank" rel="noopener noreferrer">
            Ver edital do hackathon
          </a>
        </div>
      </div>
    </section>
  );
}
