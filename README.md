# SimbioIT — Website

Site institucional da **SimbioIT Cloud Solutions**. SPA com 5 páginas cobrindo as
frentes da empresa: **IA & Automação**, **DevOps/SRE**, **FinOps** e
**APM/Observabilidade** — mais a Home com serviços, equipe e contato.

O formulário de contato envia as mensagens direto para o **Telegram** através de um
servidor Node embutido (que também serve o site). Empacotado em **Docker** para
rodar em qualquer VPS.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Build / Dev | **Vite 6** |
| UI | **React 19** + **TypeScript** |
| Rotas | **react-router-dom 7** (client-side) |
| Estilo | **Tailwind CSS v4** (tokens em `src/index.css`, derivados do logo) |
| Ícones | **lucide-react** + **react-icons** (Simple Icons / Font Awesome) |
| Backend | **Express** (`server/index.js`) — estático + `POST /api/contact` |
| Deploy | **Docker** (multi-stage) + `docker-compose.yml` |

Estrutura compatível com **shadcn/ui** (`src/components/ui`, `cn` em `src/lib/utils`).

---

## Rodando o projeto

### Pré-requisitos
- Node 20+ (dev) · Docker (deploy)
- Um bot do Telegram (token do @BotFather) + chat ID — ver seção [Contato → Telegram](#formulário-de-contato--telegram)

### Desenvolvimento
```bash
npm install
cp .env.example .env     # preencha TELEGRAM_BOT_TOKEN e TELEGRAM_CHAT_ID
npm run server           # API/backend em :3001 (lê o .env)
npm run dev              # Vite em :5173 — /api é proxyado para :3001
```

### Scripts
```bash
npm run dev       # Vite dev server (HMR)
npm run server    # servidor Node (estático + /api/contact), carrega .env
npm run build     # typecheck (tsc) + build de produção em dist/
npm run preview   # serve só o build estático (sem API)
npm run start     # servidor Node em produção (usado no Docker)
```

> `preview` e `dev` sozinhos **não têm o `/api/contact`** — para testar o formulário,
> rode o `npm run server` junto (dev) ou use o Docker/`npm run start`.

---

## Estrutura

```
src/
  App.tsx                    # rotas (BrowserRouter)
  index.css                  # tokens de design + utilitários + animações
  pages/
    Home.tsx                 # /        hero, marquee, serviços, diferenciais, equipe, contato
    IaPage.tsx               # /ia       IA, automação e desenvolvimento via IA
    DevOpsPage.tsx           # /devops
    FinOpsPage.tsx           # /finops
    ApmPage.tsx              # /apm
  lib/
    content.ts               # TODO o conteúdo/copy do site (fonte única)
    utils.ts                 # cn()
    useReveal.ts             # reveal no scroll (IntersectionObserver, pré-carregado)
  components/
    Layout.tsx               # Navbar + Outlet + Footer + scroll entre rotas
    Navbar.tsx  Footer.tsx
    Hero.tsx  AnimatedLogo.tsx  TechMarquee.tsx   # blocos da Home
    Services.tsx  Pipeline.tsx  Team.tsx  Contact.tsx
    PageHero.tsx             # hero + CtaBanner das páginas internas (slot de visual)
    IA.tsx  DevOps.tsx  FinOps.tsx  APM.tsx        # seções de cada serviço
    IaVisuals.tsx            # chat de IA + fluxo briefing→deploy
    DevOpsVisuals.tsx        # terminal de deploy + pipeline CI/CD
    FinOpsVisuals.tsx        # dashboard de custos + alocação
    ApmVisuals.tsx           # painel de observabilidade + golden signals
    ApmPlatformCarousel.tsx  # menu de abas + carrossel de telas (auto-rotativo)
    ui/
      primitives.tsx         # Eyebrow, SectionHeading, Section (slot background), GradientRule
      image-banner.tsx       # imagem real + overlay + legenda
      pixel-canvas.tsx       # 21st.dev: PixelCanvas (fundo do hero)
      floating-paths.tsx     # 21st.dev: paths SVG com deriva lenta (fundos)
server/
  index.js                   # Express: estático + POST /api/contact → Telegram
public/
  logos/  team/  devops/  finops/  apm/            # imagens estáticas
doc/planejamento/            # brief, paleta de referência e textos do site antigo
Dockerfile  docker-compose.yml  .dockerignore  .env.example
```

---

## Páginas

- **Home (`/`)** — hero com o logo animado (bolinha pulando + tiles), marquee de
  tecnologias, cards de serviços (levam às páginas), pipeline de diferenciais,
  equipe (com fotos) e formulário de contato.
- **IA (`/ia`)** — agentes de IA, automação de processos e desenvolvimento de
  sites/sistemas via IA. Hero com chat de assistente; pilares, ofertas, processo.
- **DevOps (`/devops`)** — CI/CD, IaC, SRE. Hero com terminal de deploy + pipeline,
  foto de infra, métrica 99.9%.
- **FinOps (`/finops`)** — governança e otimização de custos. Dashboard de custos,
  metodologia em 4 etapas, métrica 40%.
- **APM (`/apm`)** — observabilidade. **Carrossel** com as telas reais da
  plataforma (Apache SkyWalking), golden signals e planos.

Cada página interna tem: fundo de linhas em movimento, hero com visual,
ícones específicos e um CtaBanner final que leva ao contato (`/#contato`).

---

## Design

- **Paleta** derivada do logo (teal → verde → lime) sobre um fundo dark "soft"
  (não preto puro). Tokens e justificativa em `src/index.css` e
  `doc/planejamento/plan.md` §3 (mock em `doc/planejamento/referencias/paleta.html`).
- **Tipografia:** Space Grotesk (display) · Hanken Grotesk (corpo) · IBM Plex Mono (dados).
- **Movimento:** animações fluidas (só `transform`/`opacity`) — deriva das linhas,
  respiro de glow, shimmer no título, reveal no scroll, marquees e carrossel.
  **Tudo desativado sob `prefers-reduced-motion`.**
- Leitura: corpo a 17px / line-height 1.65, texto de corpo de alto contraste.

### Componentes do 21st.dev
Adaptados à marca a partir de `doc/planejamento/referencias/componet-prompt.md`:
- **PixelCanvas** → fundo de pixels do hero (tiles maiores, arredondados).
- **FloatingPaths** → linhas SVG com deriva lenta nos fundos das seções/heros.
- **Marquee** (bloco "Trusted by") → stack real de DevOps/SRE/clouds.

> O **GlowCard/spotlight** foi removido: usava `background-attachment: fixed` e
> travava no scroll. Os cards usam um hover leve (`.card-hover`).

---

## Imagens

- **Time:** `public/team/` — fotos fornecidas pelo cliente.
- **APM (carrossel):** `public/apm/` — telas reais da plataforma (Apache SkyWalking),
  recuperadas do site antigo, uma por área. Mapeamento em `APM.tsx`.
- **DevOps / FinOps:** `public/devops/` e `public/finops/` — fotos do **Unsplash**
  (licença livre, uso comercial). Para trocar, substitua o arquivo mantendo o nome.

Todo o **texto/copy** vive em `src/lib/content.ts` (fonte única de verdade).

---

## Formulário de contato → Telegram

O `POST /api/contact` `{ nome, email, servico, mensagem }` é tratado por
`server/index.js`, que envia a mensagem ao Telegram. O **token do bot fica só no
servidor** (variável de ambiente) — nunca no frontend. Há um honeypot
(`empresa_site`) que descarta bots silenciosamente.

### Configuração
1. Crie um bot no **@BotFather** e copie o **token**.
2. Descubra o **chat ID**: mande uma mensagem ao bot e abra
   `https://api.telegram.org/bot<TOKEN>/getUpdates` — use o `chat.id`.
3. Copie `.env.example` para `.env` e preencha:
   ```
   TELEGRAM_BOT_TOKEN=123456:ABC...
   TELEGRAM_CHAT_ID=987654321
   ```

> O `.env` é **gitignored** — nunca comite credenciais reais. O `.env.example` só
> tem placeholders.

---

## Deploy (Docker / VPS)

```bash
cp .env.example .env     # preencha as credenciais do Telegram
docker compose up -d --build
```

- O site sobe em `http://<host>:3001` (o container roda na 3001 internamente).
- Para publicar em outra porta do host, defina `WEB_PORT` no `.env`
  (ex.: `WEB_PORT=3002`) — útil se a 3001 estiver ocupada.
- Coloque um proxy reverso (Nginx/Caddy/Traefik) na frente para HTTPS e domínio.
- O servidor Node faz o fallback de SPA (todas as rotas → `index.html`), então não
  precisa de configuração extra de roteamento.

---

## Pendências conhecidas (pós-v1)
- Links de **GitHub** e **e-mail** no rodapé/contato usam placeholders — trocar pelos reais.
- Copy de venda da página de IA (métricas como "10x", "70%") pode ser ajustada com números reais.
