/**
 * Micro-interações globais:
 *  - Botões (.btn): brilho/glow que acompanha o cursor (--mx, --my)
 *  - Cards com [data-tilt]: inclinação 3D + brilho de borda (--glow-x, --glow-y)
 *
 * Usa delegação de evento em document, então funciona pra qualquer
 * botão/card renderizado por qualquer componente, sem precisar de ref
 * individual em cada um.
 */
export function initMicroInteractions() {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced) return () => {};

  const isSmallScreen = () => window.matchMedia("(max-width: 700px)").matches;
  const TILT_MAX_DEG = 7;

  function handlePointerMove(e) {
    const btn = e.target.closest(".btn");
    if (btn) {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      btn.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }

    if (!isSmallScreen()) {
      const card = e.target.closest("[data-tilt]");
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const px = x / rect.width - 0.5;
        const py = y / rect.height - 0.5;

        card.style.setProperty("--glow-x", `${x}px`);
        card.style.setProperty("--glow-y", `${y}px`);
        card.style.transform =
          `perspective(800px) ` +
          `rotateX(${(-py * TILT_MAX_DEG).toFixed(2)}deg) ` +
          `rotateY(${(px * TILT_MAX_DEG).toFixed(2)}deg) ` +
          `translateZ(0)`;
      }
    }
  }

  function handlePointerOut(e) {
    const card = e.target.closest("[data-tilt]");
    if (card && !card.contains(e.relatedTarget)) {
      card.style.transform = "";
    }
  }

  document.addEventListener("pointermove", handlePointerMove, { passive: true });
  document.addEventListener("pointerout", handlePointerOut, { passive: true });

  return () => {
    document.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("pointerout", handlePointerOut);
  };
}
