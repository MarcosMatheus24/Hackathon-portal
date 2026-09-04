import React, { useEffect } from "react";
import { initMicroInteractions } from "../lib/microInteractions.js";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Sobre from "../components/Sobre.jsx";
import Oportunidades from "../components/Oportunidades.jsx";
import HackathonDestaque from "../components/HackathonDestaque.jsx";
import InscricaoGateway from "../components/InscricaoGateway.jsx";
import Footer from "../components/Footer.jsx";
import {
  navLinks,
  aboutList,
  specRows,
  modules,
  circuitNodes,
  steps,
  faq,
  googleFormUrl,
} from "../data/content.js";

export default function Home() {
  useEffect(() => {
    const cleanup = initMicroInteractions();
    return cleanup;
  }, []);

  return (
    <>
      <Header navLinks={navLinks} />

      <main id="topo">
        <Hero />

        <Sobre aboutList={aboutList} specRows={specRows} />

        <Oportunidades modules={modules} />

        <HackathonDestaque nodes={circuitNodes} />

        {/* INSCRIÇÃO */}
        <section id="inscricao" className="section form-section">
          <div className="container">
            <div className="section__head">
              <h2>Inscrição</h2>
              <p>
                A inscrição para o <strong>Hackathon ClubeDS</strong> é feita pelo nosso
                formulário no Google Forms. Clique no botão abaixo para abrir e preencher.
              </p>
            </div>

            <InscricaoGateway formUrl={googleFormUrl} steps={steps} faq={faq} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
