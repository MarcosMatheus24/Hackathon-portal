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
        As inscrições para o <strong>Hackathon ClubeDS</strong> estão encerradas.
      </p>
    </div>

    <InscricaoGateway steps={steps} faq={faq} />
  </div>
</section>
      </main>

      <Footer />
    </>
  );
}
