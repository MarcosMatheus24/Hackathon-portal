#  Hackathon PowerTech - SENAI CIMATEC

Uma aplicação web moderna e responsiva desenvolvida em **React** e **Vite** para apresentação e captura de inscrições no **Hackathon PowerTech**.

---

##  Sobre o Projeto

O **Hackathon PowerTech** é uma landing page interativa voltada para engajar participantes, apresentar a proposta do evento, exibir destaques, prêmios, patrocinadores e permitir o cadastro rápido dos candidatos. 

Após o envio do formulário, o usuário é redirecionado para uma página de confirmação/agradecimento.

---

##  Funcionalidades

- **Header / Navegação:** Acesso rápido às seções da página e logo do evento.
- **Hero Section:** Chamada principal destacando o propósito e o tema do Hackathon.
- **Apresentação & Sobre:** Informações detalhadas do evento e ambiente do SENAI CIMATEC.
- **Oportunidades & Premiação:** Seção visual com cards destacando benefícios, mentorias e prêmios.
- **Destaques do Hackathon:** Banner responsivo detalhando a experiência do participante.
- **Formulário de Inscrição:** Captura de dados (nome, e-mail, telefone e perfil) para participação.
- **Página de Agradecimento:** Rota de confirmação após o envio bem-sucedido dos dados.

---

##  Tecnologias Utilizadas

- **[React](https://reactjs.org/):** Biblioteca para construção da interface de usuário.
- **[Vite](https://vitejs.dev/):** Build tool para um desenvolvimento rápido e otimizado.
- **CSS3 Vanilla:** Estilização personalizada, responsiva e otimizada.
- **JavaScript (ES6+):** Lógica e manipulação de estado.

---

##  Estrutura do Projeto

```text
react-app/
├── public/
│   └── img/                 # Imagens do evento, logos e banners
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Footer.jsx
│   │   ├── HackathonDestaque.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── InscricaoAside.jsx
│   │   ├── InscricaoForm.jsx
│   │   ├── Oportunidades.jsx
│   │   └── Sobre.jsx
│   ├── data/
│   │   └── content.js       # Dados estruturados do projeto
│   ├── pages/
│   │   ├── Home.jsx         # Página principal da Landing Page
│   │   └── Obrigado.jsx     # Página de confirmação de inscrição
│   ├── App.jsx              # Componente principal / Rotas
│   ├── main.jsx             # Ponto de entrada React
│   └── styles.css           # Estilos globais
├── index.html
├── package.json
└── vite.config.js
