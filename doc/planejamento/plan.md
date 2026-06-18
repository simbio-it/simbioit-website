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

## 4. Stack técnica

- **Framework:** React + TypeScript
- **UI:** shadcn/ui
- **Estilo:** Tailwind CSS
- Componentes de referência em `referencias/componet-prompt.md` já assumem essa
  stack (estrutura shadcn, `/components/ui`).

## 5. Estrutura de páginas e seções

### Home (`antigo/home.md`)
1. **Hero** — "Transformando Desafios em Soluções Inovadoras" + 2 CTAs
   (Conheça nossos serviços / Entre em contato). Destaques: Cloud Native,
   Alta Performance, Segurança.
2. **Nossos Serviços** — cards DevOps/SRE, FinOps, APM (cada um com bullets + CTA).
3. **Nossos Diferenciais** — pipeline cíclico de 6 fases (Diagnóstico →
   Plano → Implementação → Monitoramento → Otimização → Evolução).
4. **Nossa Equipe** — Rodrigo Moreira (CTO-SRE), Bruno Arruda (CEO-DevOps),
   Francis Rizzo (CEO-FinOps), CREW IA (IA Bot).
5. **Contato** — formulário (Nome*, Email*, Serviço de interesse, Mensagem*).

### DevOps & SRE (`antigo/devops.md`)
Hero → 6 soluções (CI/CD, IaC, Monitoring, Security, Containers, DR) →
resultados (métrica destaque **99.9% uptime**) → CTA consultoria.

### FinOps (`antigo/finops.md`)
Hero → 6 capacidades de governança → metodologia em 4 etapas →
benefícios (métrica destaque **40% economia**) → CTA orçamento.

### APM / Observabilidade (`antigo/apm.md`)
Hero → plataforma de observabilidade (telas) → solução all-in-one →
arquitetura aberta → recursos → **planos** (Starter/Professional/Enterprise/
Personalizado) → proposta personalizada.

### Comum (`antigo/rodape-e-navegacao.md`)
- **Nav:** Home · DevOps · FinOps · APM
- **Rodapé:** tagline + links (GitHub, Serviços, Contato) + © SimbioIT.

## 6. Como usar este plano (para a IA)

1. Ler este `plan.md` por completo antes de começar.
2. Carregar o conteúdo real de cada página em `antigo/*.md` — não inventar texto.
3. Consultar `referencias/imagens-legais/` para o tom visual e
   `referencias/componet-prompt.md` para componentes.
4. Manter a stack da seção 4 e a estrutura da seção 5.
5. Em caso de dúvida sobre conteúdo, priorizar o que está em `antigo/`.
