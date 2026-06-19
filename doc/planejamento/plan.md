# Plano — Novo site da SimbioIT

> Brief de referência para construção do novo site. Leia este arquivo primeiro:
> ele aponta para todo o material de apoio (conteúdo, logos e referências visuais).

## 1. Objetivo

Reconstruir o site da **SimbioIT Cloud Solutions** com visual **moderno, com
identidade de tecnologia, IA, DevOps e SRE**. O site atual serve de base de
conteúdo, mas o novo deve ter linguagem visual própria — nada de template
genérico.

- **Site de referência (atual):** https://simbioit.com.br/Home
- **Empresa:** SimbioIT Cloud Solutions
- **Tagline:** "Transformando Desafios em Soluções Inovadoras"
- **Posicionamento:** Especialistas em DevOps/SRE, FinOps e APM (observabilidade).

## 2. Onde está o material de apoio

Todos os caminhos são relativos a `doc/planejamento/`.

| Pasta / arquivo | O que contém | Como usar |
|---|---|---|
| `antigo/` | Texto extraído do site atual (uma página por arquivo) + logos | **Fonte de conteúdo.** Reaproveitar os textos; reorganizar/refinar à vontade. |
| `antigo/imagens/` | `logo.png`, `logo-reduzido.png`, `logo-reduzido-2.png` | Logos oficiais — **usar estes**. |
| `referencias/imagens-legais/` | Imagens de sites que o cliente curtiu | **Só inspiração** — não copiar; capturar o "mood" (dark, hero premium, estética AI/SRE). |
| `referencias/componet-prompt.md` | Componentes do [21st.dev](https://21st.dev) que o cliente gostou, com instruções de integração | Base para componentes (hero, etc.). Stack: **React + shadcn/ui + Tailwind + TypeScript**. |
| `referencias/paleta.html` | Mock visual da paleta (logo no fundo, swatches, gradiente, hero/cards) — **aprovado** | Abrir no navegador. Fonte da verdade das cores; ver seção 3. |

### Páginas do site antigo (conteúdo já extraído)

| Arquivo | Página |
|---|---|
| `antigo/home.md` | Home |
| `antigo/devops.md` | DevOps & SRE |
| `antigo/finops.md` | FinOps |
| `antigo/apm.md` | APM / Observabilidade |
| `antigo/rodape-e-navegacao.md` | Rodapé + navegação (comum) |

## 3. Direção visual

- **Mood:** moderno, dark, "premium tech". Toque de IA, automação, DevOps/SRE.
- **Inspiração:** ver `referencias/imagens-legais/` (hero escuro, gradientes,
  estética de observabilidade/SRE). Capturar a vibe, não replicar.
- **Identidade própria:** escolhas deliberadas de tipografia, paleta e layout —
  evitar o visual "padrão de template".
- **Logos:** usar os de `antigo/imagens/`.

### Paleta de cores (derivada do logo)

O logo é um gradiente **teal → verde → verde-limão**. A paleta segue essas
cores para o logo combinar com o fundo. **Regra principal:** o fundo escuro
**não é preto puro** — é um escuro com leve tom *teal* (deep teal-charcoal),
para o logo "pertencer" ao fundo e não ficar perdido.

| Token | Hex | Uso |
|---|---|---|
| `brand-teal` | `#2CC7D3` | Cor primária (links, botões, ícones, o "D" do logo) |
| `brand-green` | `#74D693` | Secundária / transições de gradiente (verde mais claro) |
| `brand-lime` | `#B6D94E` | Acento (destaques, métricas, hovers) |
| `bg-base` | `#111B21` | Fundo principal (dark "soft", levantado um tom) |
| `bg-surface` | `#19262D` | Cards, seções elevadas |
| `bg-elevated` | `#21323A` | Superfícies internas / ícones |
| `border` | `#2E454D` | Bordas / divisórias sutis |
| `ink` | `#EEF3F3` | **Texto de corpo** — quase branco, alto contraste (leitura) |
| `ink-muted` | `#B4C4C3` | Texto secundário ainda legível |
| `ink-faint` | `#80999A` | Só legendas/labels mono |

> **Legibilidade:** neutros com tom teal reduzido e **levantados um tom** (menos
> escuro), texto de corpo clareado, e marca (teal/verde/lime) mais clara. Corpo
> a 17px, line-height 1.65.
>
> **Movimento:** animações fluidas (só `transform`/`opacity`) — deriva lenta das
> linhas de fundo (`drift`), respiro do glow (`breathe`), shimmer no título do
> hero, reveal sutil no scroll, marquee de tecnologias. Tudo desativado sob
> `prefers-reduced-motion`.

- **Gradiente da marca:** `linear-gradient(135deg, #20B8C4 → #5FBF7E → #A8CC3C)`
  — usar no hero, em títulos de destaque e detalhes, ecoando o logo.
- **Acento de luz:** glows/auras sutis em `brand-teal` sobre o fundo escuro
  (estética de observabilidade), nunca lavando o contraste do texto.

> **Mock visual:** `referencias/paleta.html` — abrir no navegador para ver o logo
> sobre o fundo recomendado (comparado com preto puro), os swatches, o gradiente
> e amostras de hero/cards aplicando a paleta.

## 4. Stack técnica

- **Framework:** React + TypeScript
- **UI:** shadcn/ui
- **Estilo:** Tailwind CSS
- Componentes de referência em `referencias/componet-prompt.md` já assumem essa
  stack (estrutura shadcn, `/components/ui`).

## 5. Estrutura — 4 páginas (roteamento)

O site tem **4 páginas** com roteamento client-side (react-router-dom), como no
site antigo. Layout compartilhado (Navbar + Footer + scroll-to-top entre rotas).

- **Nav fixa (sticky):** Logo · Home · DevOps · FinOps · APM · "Fale conosco"
- **Rotas:** `/` · `/devops` · `/finops` · `/apm`

### Home (`/`, de `antigo/home.md`)
1. **Hero** — "Transformando Desafios em Soluções Inovadoras" + 2 CTAs
   (Conheça nossos serviços ↦ `#servicos` / Entre em contato ↦ `#contato`).
   Destaques: Cloud Native, Alta Performance, Segurança.
2. **Marquee de tecnologias** — stack de DevOps/observabilidade.
3. **Serviços** (`#servicos`) — cards DevOps/SRE, FinOps, APM que **navegam para
   as páginas** `/devops`, `/finops`, `/apm`.
4. **Diferenciais** — pipeline cíclico de 6 fases.
5. **Equipe** (`#equipe`) — Rodrigo Moreira (CTO-SRE), Bruno Arruda (CEO-DevOps),
   Francis Rizzo (CEO-FinOps), CREW IA (IA Bot).
6. **Contato** (`#contato`) — formulário (Nome*, Email*, Serviço de interesse,
   Mensagem*).

### DevOps & SRE (`/devops`, de `antigo/devops.md`)
PageHero próprio → 6 soluções (CI/CD, IaC, Monitoring, Security, Containers, DR)
→ resultados + métrica **99.9% uptime** → CTA "Solicitar consultoria".

### FinOps (`/finops`, de `antigo/finops.md`)
PageHero → 6 capacidades de governança → metodologia em 4 etapas → métrica
**40% economia** → CTA "Solicitar orçamento".

### APM / Observabilidade (`/apm`, de `antigo/apm.md`)
PageHero → plataforma e recursos → **planos** (Starter / Professional /
Enterprise / Personalizado) → CTA proposta personalizada.

### Comum
- **Rodapé** (`antigo/rodape-e-navegacao.md`) — tagline + links (Serviços,
  navegação, GitHub) + © SimbioIT.
- CTAs internos de serviço levam ao contato da Home via `/#contato`.

## 6. Como usar este plano (para a IA)

1. Ler este `plan.md` por completo antes de começar.
2. Carregar o conteúdo real de cada página em `antigo/*.md` — não inventar texto.
3. Consultar `referencias/imagens-legais/` para o tom visual e
   `referencias/componet-prompt.md` para componentes.
4. Manter a stack da seção 4 e a estrutura da seção 5.
5. Em caso de dúvida sobre conteúdo, priorizar o que está em `antigo/`.
