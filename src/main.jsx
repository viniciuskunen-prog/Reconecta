import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  CalendarDays,
  Clock,
  HeartHandshake,
  MessageCircle,
  Users,
  Sparkles,
  MapPin,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Compass,
  Ear,
} from "lucide-react";
import "./styles.css";

const ASSETS = {
  logo: "/assets/logo-principal.png",
  logoHorizontal: "/assets/logo-horizontal.png",
  symbol: "/assets/simbolo.png",
  heroCouple: "/assets/hero-casal.webp",
  roscely: "/assets/roscely.webp",
  cleyton: "/assets/cleyton.webp",
};

const painPoints = [
  "Conflitos recorrentes",
  "Distanciamento emocional",
  "Dificuldade de comunicação",
  "Rotina no automático",
];

const benefits = [
  {
    icon: <HeartHandshake size={26} />,
    title: "Reconexão afetiva",
    text: "Um espaço para reencontrar o vínculo com mais presença e verdade.",
  },
  {
    icon: <Ear size={26} />,
    title: "Escuta",
    text: "Práticas que favorecem conversas menos defensivas e mais conscientes.",
  },
  {
    icon: <Compass size={26} />,
    title: "Consciência",
    text: "Mais clareza sobre padrões, necessidades e movimentos da relação.",
  },
  {
    icon: <MessageCircle size={26} />,
    title: "Diálogo",
    text: "Ferramentas para transformar silêncio, ruído e desgaste em abertura.",
  },
  {
    icon: <Sparkles size={26} />,
    title: "Presença",
    text: "Um convite para sair do automático e voltar ao que realmente importa.",
  },
  {
    icon: <Users size={26} />,
    title: "Compreensão mútua",
    text: "Novas perspectivas para olhar para si, para o outro e para a vida a dois.",
  },
];

const audience = [
  "Sentem que a rotina afastou os dois.",
  "Vivem conflitos que se repetem sem resolução clara.",
  "Desejam melhorar a comunicação sem cair em ataques e defesas.",
  "Querem resgatar a intimidade, a parceria e a presença.",
  "Ainda se amam, mas percebem que algo precisa ser cuidado.",
  "Querem fortalecer a relação antes que o desgaste cresça.",
];

const faqs = [
  {
    question: "Para quem é o Reconecta?",
    answer:
      "Para casais que desejam fortalecer a relação, resgatar a conexão afetiva, melhorar o diálogo e olhar com mais consciência para a vida a dois.",
  },
  {
    question: "Preciso estar em crise para participar?",
    answer:
      "Não. O Reconecta também é para casais que estão bem, mas querem cuidar da relação de forma intencional e preventiva.",
  },
  {
    question: "O evento é presencial?",
    answer:
      "Sim. A proposta foi pensada para uma experiência presencial, com palestras, reflexões e dinâmicas conduzidas passo a passo.",
  },
  {
    question: "Como será a programação?",
    answer:
      "O encontro acontece no sábado, das 13h30 às 18h, e no domingo, das 9h às 12h.",
  },
  {
    question: "Como faço minha inscrição?",
    answer:
      "Use os botões de inscrição da página. Eles podem ser ligados ao WhatsApp, checkout, formulário ou página de pagamento.",
  },
];

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span></span>
      <i></i>
      <span></span>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="header-brand" href="#top" aria-label="Reconecta">
        <img src={ASSETS.logoHorizontal} alt="Reconecta" loading="eager" />
      </a>

      <nav className="header-nav" aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#programacao">Programação</a>
        <a href="#facilitadores">Facilitadores</a>
        <a href="#faq">FAQ</a>
      </nav>

      <a className="button button-small" href="#inscricao">
        Quero participar
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Experiência transformadora para casais</p>
        <h1>
          Vocês ainda se amam. Mas talvez tenham esquecido como se encontrar.
        </h1>
        <p className="lead">
          O Reconecta é uma experiência criada para casais que desejam fortalecer
          a relação, resgatar a conexão afetiva e olhar com mais consciência para
          os movimentos invisíveis que influenciam a vida a dois.
        </p>

        <div className="hero-actions">
          <a className="button" href="#inscricao">
            Quero participar <ArrowRight size={18} />
          </a>
          <a className="button button-outline" href="#programacao">
            Ver programação
          </a>
        </div>
      </div>

      <div className="hero-visual hero-visual-photo" aria-label="Cleyton e Roscely">
        <img className="hero-photo" src={ASSETS.heroCouple} alt="Cleyton e Roscely, facilitadores do Reconecta" loading="eager" />
      </div>

      <div className="hero-footer">
        <div className="event-strip">
          <div>
            <CalendarDays size={22} />
            <span>Sábado</span>
            <strong>13h30 às 18h</strong>
          </div>
          <div>
            <Clock size={22} />
            <span>Domingo</span>
            <strong>9h às 12h</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  return (
    <section className="section compact">
      <div className="section-heading center">
        <p className="eyebrow">Antes de reconectar, é preciso perceber</p>
        <h2>Quando a relação pede cuidado</h2>
        <Divider />
      </div>

      <div className="pain-grid">
        {painPoints.map((item, index) => (
          <article className="pain-card" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section split-section" id="sobre">
      <div>
        <p className="eyebrow">O que é o Reconecta</p>
        <h2>Um espaço para voltar ao essencial.</h2>
        <Divider />
        <p>
          Muitos conflitos, distanciamentos e dificuldades de comunicação são
          apenas a expressão de dinâmicas que atuam silenciosamente na relação.
          O Reconecta cria um espaço seguro para olhar para essas questões com
          consciência, acolhimento e novas perspectivas.
        </p>
        <p>
          Durante o encontro, vocês serão conduzidos por palestras, reflexões e
          dinâmicas cuidadosamente estruturadas para promover autoconhecimento,
          compreensão mútua e reconexão emocional.
        </p>
        <strong>Não é sobre apontar culpados. É sobre reencontrar o vínculo.</strong>
      </div>

      <div className="about-card">
        <img src={ASSETS.symbol} alt="" />
        <p>
          A relação não é apenas a soma de duas pessoas. Ela é o espaço que nasce
          entre elas quando existe escuta, presença e escolha.
        </p>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="section muted">
      <div className="section-heading center">
        <p className="eyebrow">A experiência</p>
        <h2>O que vocês vão viver</h2>
        <Divider />
      </div>

      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit.title}>
            <div className="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="section audience-section">
      <div className="audience-symbol">
        <img src={ASSETS.symbol} alt="" />
      </div>

      <div>
        <p className="eyebrow">Para quem é</p>
        <h2>Para casais que desejam cuidar do que ainda importa.</h2>
        <Divider />
      </div>

      <div className="audience-list">
        {audience.map((item) => (
          <div key={item}>
            <CheckCircle2 size={20} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section className="section" id="programacao">
      <div className="section-heading center">
        <p className="eyebrow">Programação</p>
        <h2>Dois períodos para olhar, escutar e reconstruir caminhos.</h2>
        <Divider />
      </div>

      <div className="schedule-grid">
        <article className="schedule-card">
          <div className="schedule-header">
            <CalendarDays />
            <div>
              <span>Sábado</span>
              <strong>13h30 às 18h</strong>
            </div>
          </div>
          <ul>
            <li>Acolhimento dos casais</li>
            <li>Palestras e reflexões conduzidas</li>
            <li>Dinâmicas de conexão</li>
            <li>Integração e fechamento do dia</li>
          </ul>
        </article>

        <article className="schedule-card">
          <div className="schedule-header">
            <Clock />
            <div>
              <span>Domingo</span>
              <strong>9h às 12h</strong>
            </div>
          </div>
          <ul>
            <li>Retomada da experiência</li>
            <li>Dinâmicas vivenciais</li>
            <li>Compreensão mútua e diálogo</li>
            <li>Integração final do casal</li>
          </ul>
        </article>

        <article className="info-card">
          <h3>Informações do evento</h3>
          <p>
            <CalendarDays size={18} /> Data: <strong>[INSERIR DATA]</strong>
          </p>
          <p>
            <MapPin size={18} /> Local: <strong>[INSERIR LOCAL]</strong>
          </p>
          <p>
            <MapPin size={18} /> Endereço: <strong>[INSERIR ENDEREÇO]</strong>
          </p>
        </article>
      </div>
    </section>
  );
}

function Facilitators() {
  return (
    <section className="section muted" id="facilitadores">
      <div className="section-heading center">
        <p className="eyebrow">Facilitadores</p>
        <h2>Condução sensível, respeitosa e profunda.</h2>
        <Divider />
      </div>

      <div className="facilitator-grid">
        <article className="facilitator-card">
          <div className="photo-frame">
            <img
              className="facilitator-photo"
              src={ASSETS.roscely}
              alt="Roscely, facilitadora do Reconecta"
            />
          </div>
          <h3>Roscely</h3>
          <p>
            [Inserir mini bio da Roscely com sua abordagem, experiência e papel
            na condução do Reconecta.]
          </p>
        </article>

        <article className="facilitator-card">
          <div className="photo-frame">
            <img
              className="facilitator-photo"
              src={ASSETS.cleyton}
              alt="Cleyton, facilitador do Reconecta"
            />
          </div>
          <h3>Cleyton</h3>
          <p>
            [Inserir mini bio do Cleyton com sua abordagem, experiência e papel
            na condução do Reconecta.]
          </p>
        </article>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="section-heading center">
        <p className="eyebrow">Dúvidas frequentes</p>
        <h2>Perguntas frequentes</h2>
        <Divider />
      </div>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <article className={`faq-item ${open === index ? "is-open" : ""}`} key={item.question}>
            <button onClick={() => setOpen(open === index ? -1 : index)}>
              <span>{item.question}</span>
              <ChevronDown size={22} />
            </button>
            {open === index && <p>{item.answer}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta" id="inscricao">
      <img src={ASSETS.symbol} alt="" />
      <div>
        <p className="eyebrow">Reconectar também é escolher</p>
        <h2>Reencontrar também é uma escolha.</h2>
        <p>
          Talvez vocês não precisem de mais uma conversa apressada. Talvez
          precisem de um espaço seguro para realmente se escutar.
        </p>
      </div>

      <a className="button" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
        Garantir minha vaga <ArrowRight size={18} />
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <img src={ASSETS.logoHorizontal} alt="Reconecta" loading="lazy" decoding="async" />
      <p>Reconexão • Presença • Respeito • Escuta • Parceria</p>
      <span>© Reconecta. Todos os direitos reservados.</span>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="reveal"><PainPoints /></div>
        <div className="reveal"><About /></div>
        <div className="reveal"><Benefits /></div>
        <div className="reveal"><Audience /></div>
        <div className="reveal"><Schedule /></div>
        <div className="reveal"><Facilitators /></div>
        <div className="reveal"><FAQ /></div>
        <div className="reveal"><FinalCTA /></div>
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
