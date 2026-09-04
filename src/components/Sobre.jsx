import React from "react";

export default function Sobre({ aboutList, specRows }) {
  return (
    <section id="sobre" className="section section--line">
      <div className="container">
        <div className="section__head">
          <h2>O que é o ClubeDS</h2>
          <p>O grupo de estudo em Programação da CIMATEC, aberto a alunos do curso técnico.</p>
        </div>

        <div className="about">
          <div className="about__text">
            <p>
              O ClubeDS existe pra tirar a programação do papel: oficinas semanais,
              palestras sobre carreira e trilhas organizadas por nível, do primeiro
              "olá, mundo" até projetos publicados com deploy.
            </p>
            <p>
              Não é um curso passivo. Você aprende revisando código de verdade,
              trabalhando em equipe e entregando resultado — o Hackathon é a versão
              mais intensa dessa rotina, concentrada em poucos dias.
            </p>

            <div className="about__list">
              {aboutList.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>

            {/* Botão "Saiba mais" do ClubeDS: aponta para o link de inscrição/adesão ao clube*/}
            <a className="btn" style={{ marginTop: 20 }} href="https://clubeds.vercel.app/" target="_blank" rel="noopener noreferrer">
              Saiba mais sobre o ClubeDS
            </a>
          </div>

          <aside className="panel spec" data-tilt>
            {specRows.map((row) => (
              <div className="spec__row" key={row.label}>
                <span className="spec__label">{row.label}</span>
                <span className="spec__value">{row.value}</span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
