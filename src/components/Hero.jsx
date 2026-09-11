import React from "react";
import ParticleField from "./ParticleField.jsx";

export default function Hero() {
  return (
    <section className="hero">
      <ParticleField />
      <div className="container hero__grid">
        <div className="hero__text">
          <h1>O START do seu projeto começa aqui.</h1>
          <p className="hero__lead">
            O PowerTech Hackathon é a mostra prática do grupo de estudo em Programação do
            ClubeDS: Em 3 dias, montar equipe e entregar um projeto de verdade — com mentoria de docentes e alunos do início ao fim.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#inscricao">Inscrever-se</a>
            <a className="btn" href="#hackathon">Como funciona</a>
          </div>
        </div>

        <div className="hero__frame panel" data-tilt>
          <img src="/img/logo_powertech-removebg-preview.png" alt="powertech" />
        </div>
      </div>
    </section>
  );
}
