// Conteúdo estático do portal, extraído do HTML original e organizado
// para ser passado como props aos componentes React.

export const navLinks = [
  { href: "#sobre", label: "Sobre o clube" },
  { href: "#hackathon", label: "O hackathon" },
  { href: "#inscricao", label: "Inscrever-se", cta: true },
];

// ⚠️ IMPORTANTE: Substitua pelo link real do Google Forms de inscrição.
export const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdUa95OBK7rT4pKq9bClChYmGoId5JXZboY5z5pI-I_j1rSyA/viewform";

export const aboutList = [
  "Trilhas por nível, do zero ao avançado",
  "Mentoria direta com docentes do técnico",
  "Projetos reais, com repositório e deploy",
  "Comunidade ativa de alunos e ex-alunos",
];

export const specRows = [
  { label: "Grupo", value: "ClubeDS" },
  { label: "Mantido por", value: "SENAI CIMATEC" },
  { label: "Formato", value: "Oficinas semanais" },
  { label: "Requisito", value: "Matrícula ativa" },
  { label: "Nível de entrada", value: "Todos" },
];

export const modules = [
  {
    title: "Mentoria direta",
    text: "Orientação de docentes em decisões técnicas e de carreira, sessão a sessão.",
  },
  {
    title: "Portfólio com deploy",
    text: "Cada ciclo termina com um projeto no ar, não só um exercício fechado numa pasta.",
  },
  {
    title: "Rede de contato",
    text: "Convidados do mercado de tecnologia em palestras e eventos ao longo do ano.",
  },
];

export const circuitNodes = [
  { title: "Formato", text: "Presencial, em equipes" },
  { title: "Equipe", text: "Com grupo pronto ou montada no evento" },
  { title: "Mentoria", text: "Docentes e voluntários durante o hack" },
  { title: "Premiação", text: "Reconhecimento pras melhores entregas" },
];

export const steps = [
  { n: 1, text: "Você recebe a confirmação da inscrição." },
  { n: 2, text: "A organização das equipes é comunicada." },
  { n: 3, text: "Você participa do hackathon com mentoria ao vivo." },
  { n: 4, text: "Apresentação final e premiação." },
];

export const faq = [
  {
    q: "Não tenho equipe, posso me inscrever?",
    a: 'Pode sim. Marque "Ainda não tenho" e você será ajudado(a) a formar um grupo no início do evento.',
  },
  {
    q: "Preciso saber programar bem?",
    a: "Não. Teremos workshops para os alunos participantes, a fim de nivelar o conhecimento dos mesmos.",
  },
  {
    q: "Preciso estar matriculado?",
    a: "Sim, a participação exige matrícula ativa (ou em processo) no curso técnico.",
  },
];

