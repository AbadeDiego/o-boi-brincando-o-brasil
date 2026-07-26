import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";

import heroBoiAsset from "@/assets/hero-boi-ornate.png.asset.json";
import arenaAsset from "@/assets/tres-bois-arena.png.asset.json";
import atelierAsset from "@/assets/coautoria-atelier.png.asset.json";
import telasAsset from "@/assets/telas-app.png.asset.json";

const heroBoi = heroBoiAsset.url;
const arenaImg = arenaAsset.url;
const atelierImg = atelierAsset.url;
const telasImg = telasAsset.url;


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O Boi — Tradições que atravessam o Brasil" },
      {
        name: "description",
        content:
          "O Boi é um jogo mobile multiplayer brasileiro em fase de idealização, feito em coautoria com mestres portadores de manifestações da cultura popular.",
      },
      { property: "og:title", content: "O Boi — Tradições que atravessam o Brasil" },
      {
        property: "og:description",
        content:
          "Jogo mobile multiplayer em desenvolvimento. Uma experiência derivada das regras reais de manifestações vivas da cultura popular brasileira.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ValueProp />
      <Manifestations />
      <Screens />
      <About />
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* NAV                                                                 */
/* ------------------------------------------------------------------ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="display text-[15px] tracking-tight">
          O Boi
        </a>
        <nav className="hidden items-center gap-8 text-[13px] text-muted-foreground md:flex">
          <a href="#proposta" className="transition-colors hover:text-foreground">
            Projeto
          </a>
          <a href="#manifestacoes" className="transition-colors hover:text-foreground">
            Manifestações
          </a>
          <a href="#telas" className="transition-colors hover:text-foreground">
            Conceito
          </a>
          <a href="#sobre" className="transition-colors hover:text-foreground">
            Sobre
          </a>
        </nav>
        <a
          href="#registro"
          className="rounded-full border border-border/80 px-4 py-1.5 text-[12px] text-foreground/90 transition-colors hover:border-foreground/40 hover:text-foreground"
        >
          Pré-registro
        </a>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-24 md:grid-cols-12 md:pb-40">
        <div className="md:col-span-7">
          <Reveal>
            <span className="eyebrow">Em fase de idealização</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display mt-6 text-[clamp(3.5rem,10vw,8.5rem)]">O Boi.</h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="display mt-2 text-[clamp(1.5rem,3vw,2.5rem)] text-muted-foreground">
              Tradições que atravessam o Brasil.
            </p>
          </Reveal>
          <Reveal delay={380}>
            <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              O Boi é um jogo mobile multiplayer em desenvolvimento, no qual jogadores se tornam
              brincantes e vivenciam manifestações reais da cultura popular brasileira por meio de
              suas próprias regras. Este projeto está em fase de idealização, e esta página
              apresenta o conceito antes de sua disponibilização.
            </p>
          </Reveal>
          <Reveal delay={520}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#registro"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-transform duration-300 hover:-translate-y-0.5"
              >
                Quero ser avisado
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#proposta"
                className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
              >
                Conheça o conceito
              </a>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal delay={200} className="relative">
            <div className="float-slow relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src={heroBoi}
                alt="Boi ornamentado com bordados, fitas e adornos dourados — referência visual ao imaginário do projeto O Boi."
                width={1728}
                height={2160}
                className="h-full w-full object-cover object-right"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

      </div>

      {/* Status ribbon — sober, typographic */}
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <div className="hairline" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-[12px] text-muted-foreground">
          <span className="eyebrow">Status do projeto</span>
          <span className="max-w-xl text-right">
            Idealização e desenvolvimento conceitual. Sem previsão de disponibilidade.
          </span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* VALUE PROP                                                          */
/* ------------------------------------------------------------------ */

function ValueProp() {
  const pillars = [
    {
      title: "Cultura como sistema, não como tema.",
      body: "Cada modo de jogo nasce da lógica interna de uma manifestação real, não de uma referência estética.",
    },
    {
      title: "Coautoria remunerada.",
      body: "Mestres e grupos portadores das tradições participam como autores, com crédito e remuneração previstos desde a concepção.",
    },
    {
      title: "Multiplayer genuinamente brasileiro.",
      body: "Mecânicas cooperativas que não existem em nenhum outro lugar do mundo, porque nenhuma outra cultura as inventou.",
    },
  ];

  return (
    <section id="proposta" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-48">
        <Reveal>
          <span className="eyebrow">Proposta</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)]">
            Feito de cultura,
            <br />
            <span className="text-muted-foreground">não sobre cultura.</span>
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Diferente de jogos que usam a cultura como cenário decorativo, O Boi deriva cada
            mecânica das regras reais das manifestações que representa. Cada modo é escrito com
            mestres e grupos portadores dessas tradições — em coautoria remunerada — resultando em
            uma jogabilidade que não poderia existir fora do Brasil.
          </p>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-10">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="flex flex-col gap-4">
                <span className="text-[13px] text-accent">0{i + 1}</span>
                <div className="hairline w-12 bg-none" style={{ background: "currentColor", opacity: 0.2 }} />
                <h3 className="display text-[1.5rem] leading-tight">{p.title}</h3>
                <p className="text-[14px] leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* MANIFESTATIONS                                                      */
/* ------------------------------------------------------------------ */

const manifestations = [
  {
    kicker: "Modo I · Maranhão",
    title: "Bumba-meu-boi",
    body: "O Complexo Cultural do Bumba-meu-boi do Maranhão é reconhecido pela UNESCO como Patrimônio Cultural Imaterial da Humanidade. Nascido da fusão entre tradições indígenas, africanas e europeias, o auto popular celebra, por meio da música, da dança e do teatro, o ciclo de morte e ressurreição do boi.",
  },
  {
    kicker: "Modo II · Amazonas",
    title: "Boi-bumbá",
    body: "Tradição do Médio Amazonas, o Boi-bumbá é um dos maiores espetáculos populares do país. Reúne dimensões cênicas, coreográficas, plásticas e musicais em grande arena, capaz de mobilizar uma cidade inteira em torno de sua celebração anual.",
  },
  {
    kicker: "Modo III · Santa Catarina",
    title: "Boi-de-mamão",
    body: "De forte caráter teatral, musical e intergeracional, o Boi-de-mamão reúne personagens populares como Cavalinho, Cabrinha e Maricota em cenas conduzidas por cantigas tradicionais, transmitidas de geração em geração.",
  },
];

function Manifestations() {
  return (
    <section id="manifestacoes" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-48">
        <Reveal>
          <span className="eyebrow">As manifestações</span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)]">
            Três tradições,
            <br />
            <span className="text-muted-foreground">três modos de jogo.</span>
          </h2>
        </Reveal>

        <Reveal delay={220}>
          <div className="relative mt-16 overflow-hidden rounded-3xl">
            <div className="aspect-[16/9] w-full">
              <img
                src={arenaImg}
                alt="Três bois cerimoniais — Bumba-meu-boi, Boi-bumbá e Boi-de-mamão — reunidos em uma arena popular."
                width={1728}
                height={972}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
          {manifestations.map((m, i) => (
            <Reveal key={m.title} delay={i * 120}>
              <div className="flex flex-col gap-4">
                <span className="eyebrow text-accent">{m.kicker}</span>
                <div className="hairline w-12" />
                <h3 className="display text-[1.65rem] leading-tight">{m.title}</h3>
                <p className="text-[14px] leading-relaxed text-muted-foreground">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 border-t border-border/60 pt-8">
            <p className="mx-auto max-w-3xl text-center text-[13px] leading-relaxed text-muted-foreground">
              Todas as manifestações são desenvolvidas em coautoria direta com mestres e grupos
              portadores das tradições, com consentimento, crédito e remuneração previstos desde a
              concepção do projeto.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ */
/* SCREENS                                                             */
/* ------------------------------------------------------------------ */

const screenCaptions = [
  {
    title: "Identidade",
    body: "O jogador monta seu brincante com indumentárias, penteados e paletas inspiradas nos grupos populares.",
  },
  {
    title: "Cooperação",
    body: "No coração da partida, brincantes tocam, dançam e conduzem o boi em ritmo compartilhado.",
  },
  {
    title: "Memória viva",
    body: "Cenas, toadas e depoimentos dos mestres portadores ficam guardados como acervo do jogador.",
  },
  {
    title: "Mapa cultural",
    body: "Um Brasil de manifestações vivas: cada região abriga um modo e uma comunidade autora.",
  },
];

function Screens() {
  return (
    <section id="telas" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-48">
        <Reveal>
          <span className="eyebrow">Conceito visual · Não é o produto final</span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)]">
            Uma prévia do
            <br />
            <span className="text-muted-foreground">que ainda estamos imaginando.</span>
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-8 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
            As imagens abaixo são representações conceituais do aplicativo em fase de idealização.
            Não são capturas de tela de um produto finalizado.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-border/60 bg-background/40 p-4 md:p-8">
            <img
              src={telasImg}
              alt="Quatro telas conceituais do aplicativo O Boi — Identidade, Cooperação, Memória Viva e Mapa Cultural."
              width={1922}
              height={860}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {screenCaptions.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div>
                <span className="text-[12px] text-accent">Tela {i + 1}</span>
                <h4 className="display mt-2 text-[1.05rem] leading-snug">{s.title}</h4>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ */
/* ABOUT                                                               */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section id="sobre" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-48">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="aspect-[4/3] w-full">
                <img
                  src={atelierImg}
                  alt="Mesa de trabalho colaborativo: mestres e equipe do jogo O Boi projetando indumentárias, escutando gravações e desenhando o aplicativo."
                  width={1728}
                  height={1296}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
          <div className="md:col-span-6">
            <Reveal>
              <span className="eyebrow">Sobre o projeto</span>
            </Reveal>
            <Reveal delay={120}>
              <p className="display mt-6 text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.2]">
                O Boi é desenvolvido por uma equipe multidisciplinar de games, cultura popular e
                acessibilidade, em coautoria com mestres do Maranhão, do Amazonas e de Santa
                Catarina.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-8 text-[14px] leading-relaxed text-muted-foreground">
                O projeto está em busca de parceiros e patrocínio para viabilizar seu
                desenvolvimento completo.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ */
/* FOOTER + CAPTURE                                                    */
/* ------------------------------------------------------------------ */

function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "ok">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("ok");
  }

  return (
    <footer id="registro" className="border-t border-border/60 bg-surface/60">
      <div className="mx-auto max-w-4xl px-6 py-32 text-center md:py-48">
        <Reveal>
          <span className="eyebrow">Pré-registro</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display mt-6 text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05]">
            Seja um dos primeiros brincantes
            <br />
            <span className="text-muted-foreground">a saber quando O Boi estiver disponível.</span>
          </h2>
        </Reveal>

        <Reveal delay={220}>
          {state === "idle" ? (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-12 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="h-12 flex-1 rounded-full border border-border bg-background/40 px-5 text-[14px] text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-foreground/40 focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-foreground px-6 text-[13px] font-medium text-background transition-transform duration-300 hover:-translate-y-0.5"
              >
                Avise-me
              </button>
            </form>
          ) : (
            <p className="mx-auto mt-12 max-w-md rounded-full border border-border bg-background/40 px-6 py-4 text-[14px] text-foreground">
              Obrigado. Avisaremos você assim que houver novidades.
            </p>
          )}
        </Reveal>

        <Reveal delay={340}>
          <p className="mx-auto mt-10 max-w-lg text-[12px] leading-relaxed text-muted-foreground">
            O Boi está em fase de idealização e desenvolvimento. Não há data prevista de
            disponibilidade. Ao se inscrever, você concorda em receber comunicações ocasionais sobre
            o projeto.
          </p>
        </Reveal>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-border/60 pt-10 text-[12px] text-muted-foreground md:flex-row">
          <span className="display text-[13px] tracking-tight text-foreground">O Boi</span>
          <span>© {new Date().getFullYear()} · Projeto em desenvolvimento</span>
          <span>Coautoria com mestres portadores das tradições</span>
        </div>
      </div>
    </footer>
  );
}
