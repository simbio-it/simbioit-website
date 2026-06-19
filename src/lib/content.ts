/**
 * Conteúdo do site — extraído de doc/planejamento/antigo/*.md.
 * Centralizado para manter as seções declarativas.
 */

export const nav = [
  { label: "Home", to: "/" },
  { label: "IA", to: "/ia" },
  { label: "DevOps", to: "/devops" },
  { label: "FinOps", to: "/finops" },
  { label: "APM", to: "/apm" },
] as const;

/** Rota de cada serviço (usada nos cards e no rodapé). */
export const serviceRoutes: Record<ServiceKey, string> = {
  devops: "/devops",
  finops: "/finops",
  apm: "/apm",
  ia: "/ia",
};

export const hero = {
  eyebrow: "DevOps · FinOps · APM",
  title: "Transformando Desafios em Soluções Inovadoras",
  // "Soluções Inovadoras" recebe o gradiente da marca
  highlight: "Soluções Inovadoras",
  subtitle:
    "Especialistas em DevOps, FinOps e APM Monitoramento. Nossa força está na diversidade, expertise e compromisso com a excelência.",
  primaryCta: { label: "Conheça nossos serviços", href: "#servicos" },
  secondaryCta: { label: "Entre em contato", href: "#contato" },
  highlights: [
    { title: "Cloud Native", subtitle: "Infraestrutura moderna", icon: "cloud" },
    { title: "Alta Performance", subtitle: "Otimização contínua", icon: "performance" },
    { title: "Segurança", subtitle: "Proteção robusta", icon: "security" },
  ] as const,
};

export type ServiceKey = "devops" | "finops" | "apm" | "ia";

export const services: {
  key: ServiceKey;
  name: string;
  tag: string;
  description: string;
  bullets: string[];
}[] = [
  {
    key: "devops",
    name: "DevOps / SRE",
    tag: "Automação & Confiabilidade",
    description:
      "Automação completa de infraestrutura, CI/CD e práticas de Site Reliability Engineering para garantir alta disponibilidade e eficiência operacional.",
    bullets: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring & Alerting",
      "Disaster Recovery",
    ],
  },
  {
    key: "finops",
    name: "FinOps",
    tag: "Economia de Nuvem",
    description:
      "Otimização de custos na nuvem com governança financeira, análise de gastos e estratégias para maximizar o ROI dos seus investimentos em cloud.",
    bullets: [
      "Cost Optimization",
      "Budget Management",
      "Usage Analytics",
      "ROI Analysis",
    ],
  },
  {
    key: "apm",
    name: "APM Monitoramento",
    tag: "Observabilidade 360°",
    description:
      "Observabilidade completa das suas aplicações com monitoramento em tempo real, análise de performance e detecção proativa de problemas.",
    bullets: [
      "Real-time Monitoring",
      "Performance Analytics",
      "Log Management",
      "Distributed Tracing",
    ],
  },
  {
    key: "ia",
    name: "IA & Automação",
    tag: "Inteligência Artificial",
    description:
      "Agentes inteligentes, automação de processos e desenvolvimento de sites e sistemas acelerado por IA, de ponta a ponta.",
    bullets: [
      "Agentes de IA",
      "Automação de processos",
      "Sites & sistemas com IA",
      "Integração de LLMs",
    ],
  },
];

/* --------------------------------- DevOps --------------------------------- */
export const devops = {
  hero: {
    eyebrow: "DevOps & SRE",
    title: "DevOps & SRE Solutions",
    highlight: "SRE",
    subtitle:
      "Automatize sua infraestrutura, acelere seus deployments e garanta alta disponibilidade com nossas soluções especializadas em DevOps e Site Reliability Engineering.",
  },
  outro: {
    title: "Pronto para acelerar seu DevOps?",
    text: "Nossa consultoria personalizada identifica oportunidades específicas para sua empresa e desenvolve uma estratégia sob medida. Valores e cronograma definidos após uma avaliação gratuita.",
  },
  eyebrow: "DevOps & SRE",
  title: "Soluções DevOps Completas",
  intro:
    "Implementamos as melhores práticas de DevOps e SRE para transformar sua operação de TI em uma vantagem competitiva.",
  solutions: [
    {
      title: "CI/CD Pipelines",
      desc: "Automação completa do ciclo de desenvolvimento, desde o código até a produção.",
    },
    {
      title: "Infrastructure as Code",
      desc: "Provisionamento e gerenciamento automatizado de infraestrutura.",
    },
    {
      title: "Monitoring & Alerting",
      desc: "Observabilidade completa com alertas inteligentes e dashboards.",
    },
    {
      title: "Security & Compliance",
      desc: "Implementação de melhores práticas de segurança e conformidade.",
    },
    {
      title: "Container Orchestration",
      desc: "Kubernetes e Docker para escalabilidade e eficiência.",
    },
    {
      title: "Disaster Recovery",
      desc: "Estratégias robustas de backup e recuperação de desastres.",
    },
  ],
  results: [
    "Redução de até 70% no tempo de deployment",
    "Aumento de 99.9% na disponibilidade dos sistemas",
    "Automação completa de processos manuais",
    "Redução significativa de incidentes em produção",
    "Melhoria contínua da performance",
    "Escalabilidade automática baseada em demanda",
  ],
  metric: { value: "99.9%", label: "Uptime garantido" },
  cta: { label: "Solicitar consultoria", href: "/#contato" },
};

/* --------------------------------- FinOps --------------------------------- */
export const finops = {
  hero: {
    eyebrow: "FinOps · Cloud Economics",
    title: "FinOps Cloud Economics",
    highlight: "Economics",
    subtitle:
      "Maximize o retorno dos seus investimentos em nuvem com governança financeira inteligente, otimização de custos e análise preditiva.",
  },
  outro: {
    title: "Otimize seus custos de nuvem hoje",
    text: "Cada projeto é único. Oferecemos consultoria personalizada com valores e cronograma definidos após análise detalhada das suas necessidades.",
  },
  eyebrow: "FinOps · Cloud Economics",
  title: "Governança Financeira Inteligente",
  intro:
    "Ferramentas e metodologias avançadas para controle total dos seus investimentos em infraestrutura de nuvem.",
  capabilities: [
    {
      title: "Análise de Custos",
      desc: "Visibilidade completa dos gastos em nuvem com relatórios detalhados e insights acionáveis.",
    },
    {
      title: "Otimização Contínua",
      desc: "Identificação automática de oportunidades de economia e implementação de melhorias.",
    },
    {
      title: "Budget Management",
      desc: "Controle orçamentário com alertas proativos e previsões precisas.",
    },
    {
      title: "Cost Allocation",
      desc: "Distribuição inteligente de custos por departamentos, projetos e recursos.",
    },
    {
      title: "ROI Tracking",
      desc: "Acompanhamento do retorno sobre investimento em iniciativas de nuvem.",
    },
    {
      title: "Anomaly Detection",
      desc: "Detecção automática de gastos anômalos e desperdícios de recursos.",
    },
  ],
  methodology: [
    {
      step: "01",
      title: "Auditoria Inicial",
      desc: "Análise completa da sua infraestrutura atual e padrões de gasto.",
    },
    {
      step: "02",
      title: "Estratégia Personalizada",
      desc: "Desenvolvimento de plano de otimização específico para seu negócio.",
    },
    {
      step: "03",
      title: "Implementação",
      desc: "Aplicação das melhores práticas e ferramentas de FinOps.",
    },
    {
      step: "04",
      title: "Monitoramento Contínuo",
      desc: "Acompanhamento constante e ajustes para maximizar economia.",
    },
  ],
  metric: { value: "40%", label: "Economia média" },
  benefits: [
    "Redução média de 30-50% nos custos de nuvem",
    "Visibilidade completa dos gastos em tempo real",
    "Previsibilidade orçamentária precisa",
    "Alocação justa de custos por área/projeto",
    "Otimização automática de recursos subutilizados",
    "Relatórios executivos com insights estratégicos",
  ],
  cta: { label: "Solicitar orçamento", href: "/#contato" },
};

/* ----------------------------------- APM ---------------------------------- */
export const apm = {
  hero: {
    eyebrow: "APM · Observabilidade",
    title: "APM Monitoramento",
    highlight: "Monitoramento",
    subtitle:
      "Observabilidade completa das suas aplicações com monitoramento em tempo real, análise de performance e detecção proativa de problemas antes que afetem seus usuários.",
  },
  outro: {
    title: "Precisa de uma configuração diferente?",
    text: "Monte um plano com os volumes que você precisa. Nossa equipe prepara uma proposta sob medida para o seu ambiente.",
  },
  eyebrow: "APM · Observabilidade",
  title: "Monitoramento Inteligente",
  intro:
    "Plataforma completa de APM com recursos avançados para garantir a performance e disponibilidade das suas aplicações.",
  features: [
    {
      title: "Observabilidade 360°",
      desc: "Visão completa das suas aplicações com métricas, logs e traces distribuídos.",
    },
    {
      title: "Performance Analytics",
      desc: "Análise profunda de performance com identificação de gargalos e otimizações.",
    },
    {
      title: "Log Management",
      desc: "Centralização e análise inteligente de logs com busca avançada.",
    },
    {
      title: "Real-time Alerting",
      desc: "Alertas inteligentes e personalizáveis para detecção proativa de problemas.",
    },
    {
      title: "Distributed Tracing",
      desc: "Rastreamento de requests através de microsserviços e sistemas distribuídos.",
    },
    {
      title: "Incident Management",
      desc: "Gestão completa de incidentes com automação e escalabilidade.",
    },
  ],
  platform: [
    "Service Dashboard",
    "Distributed Tracing",
    "Service Topology",
    "eBPF Profiling",
    "Service Mesh",
    "Kubernetes",
    "Database",
    "Linux Monitoring",
  ],
  ecosystems: [
    "OpenTelemetry",
    "Prometheus",
    "Zipkin",
    "Zabbix",
    "Fluentd",
    "BanyanDB",
  ],
  plans: [
    {
      name: "Starter",
      audience: "Ideal para pequenas aplicações",
      price: "$710",
      cadence: "/mês",
      capacity: "50GB tráfego + 50GB armazenamento",
      features: [
        "Dashboards básicos",
        "Alertas por email",
        "Suporte por email",
      ],
      popular: false,
    },
    {
      name: "Professional",
      audience: "Para empresas em crescimento",
      price: "$1.440",
      cadence: "/mês",
      capacity: "100GB tráfego + 200GB armazenamento",
      features: [
        "Dashboards avançados",
        "Alertas multi-canal",
        "Distributed tracing",
        "Suporte prioritário",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      audience: "Para grandes operações",
      price: "$2.900",
      cadence: "/mês",
      capacity: "200GB tráfego + 500GB armazenamento",
      features: [
        "Dashboards personalizados",
        "Automação de alertas",
        "AI-powered insights",
        "SLA garantido",
        "Suporte 24/7",
      ],
      popular: false,
    },
    {
      name: "Personalizado",
      audience: "Volume customizado · pay as you go",
      price: "$14",
      cadence: "/GB",
      capacity: "$0.20 por GB de armazenamento",
      features: [
        "Dashboards personalizados",
        "AI-powered insights",
        "SLA garantido",
        "Suporte 24/7",
      ],
      popular: false,
    },
  ],
  cta: { label: "Solicitar proposta personalizada", href: "/#contato" },
};

/* ------------------------------- IA & Auto -------------------------------- */
export const ia = {
  hero: {
    eyebrow: "IA · Automação · Desenvolvimento",
    title: "Inteligência Artificial aplicada ao seu negócio",
    highlight: "Inteligência Artificial",
    subtitle:
      "Automatize processos, crie agentes inteligentes e construa sites e sistemas em tempo recorde — com IA de ponta a ponta, integrada à sua operação.",
  },
  outro: {
    title: "Pronto para colocar IA para trabalhar?",
    text: "Mapeamos onde a IA gera mais valor no seu negócio e entregamos uma solução sob medida — do primeiro agente ao sistema completo. Avaliação inicial gratuita.",
  },
  eyebrow: "Soluções de IA",
  title: "Da automação ao produto, com IA",
  intro:
    "Unimos engenharia de software e IA generativa para automatizar o repetitivo, dar inteligência aos seus dados e acelerar a entrega de produtos digitais.",
  // três pilares da oferta
  pillars: [
    {
      title: "IA & Agentes",
      desc: "Agentes autônomos e copilots que executam tarefas, consultam seus dados e tomam decisões com segurança.",
    },
    {
      title: "Automação de Processos",
      desc: "Fluxos que conectam seus sistemas e eliminam trabalho manual — integrando IA onde ela decide melhor.",
    },
    {
      title: "Desenvolvimento via IA",
      desc: "Sites, landing pages e sistemas sob medida construídos com IA, do protótipo ao deploy em produção.",
    },
  ],
  offerings: [
    {
      title: "Agentes de IA & Copilots",
      desc: "Assistentes que automatizam atendimento, suporte e tarefas internas com acesso seguro ao seu contexto.",
    },
    {
      title: "Automação de Processos",
      desc: "Orquestração de fluxos entre ferramentas (RPA + IA) para reduzir custo e erro operacional.",
    },
    {
      title: "Chatbots & Atendimento",
      desc: "Bots de atendimento em WhatsApp, site e apps, treinados na sua base de conhecimento.",
    },
    {
      title: "Sites & Landing Pages",
      desc: "Sites modernos e rápidos, criados e iterados com IA — do briefing ao ar em dias.",
    },
    {
      title: "Sistemas sob medida",
      desc: "Aplicações web completas (dashboards, portais, internos) desenvolvidas com aceleração de IA.",
    },
    {
      title: "Integração de LLMs & RAG",
      desc: "Conecte modelos de linguagem aos seus dados com RAG, embeddings e guardrails de produção.",
    },
  ],
  steps: [
    {
      step: "01",
      title: "Descoberta",
      desc: "Mapeamos processos, dados e oportunidades de maior impacto para a IA.",
    },
    {
      step: "02",
      title: "Prototipação",
      desc: "Construímos um protótipo funcional rápido para validar valor antes de escalar.",
    },
    {
      step: "03",
      title: "Integração & Treino",
      desc: "Conectamos aos seus sistemas e ajustamos o modelo ao seu contexto com segurança.",
    },
    {
      step: "04",
      title: "Deploy & Evolução",
      desc: "Colocamos em produção com observabilidade e evoluímos com base em dados reais.",
    },
  ],
  metrics: [
    { value: "10x", label: "Entrega mais rápida" },
    { value: "70%", label: "Menos trabalho manual" },
    { value: "24/7", label: "Operação automatizada" },
  ],
  cta: { label: "Quero aplicar IA", href: "/#contato" },
};

/* ------------------------------ Diferenciais ------------------------------ */
export const pipeline = {
  eyebrow: "Nossos Diferenciais",
  title: "Pipeline Contínuo de Excelência",
  intro:
    "Assim como um pipeline DevOps, nossa abordagem é cíclica e contínua. Cada fase alimenta a próxima, criando um fluxo infinito de melhoria e evolução.",
  phases: [
    {
      step: "01",
      title: "Diagnóstico",
      desc: "Análise profunda do seu ambiente para identificar gargalos, vulnerabilidades e oportunidades de otimização.",
    },
    {
      step: "02",
      title: "Plano Estratégico",
      desc: "Roadmap detalhado e personalizado, com objetivos claros, cronogramas realistas e marcos mensuráveis.",
    },
    {
      step: "03",
      title: "Implementação",
      desc: "Execução controlada e iterativa, aplicando metodologias ágeis e DevOps para gerar valor com mínimo risco.",
    },
    {
      step: "04",
      title: "Monitoramento",
      desc: "Observabilidade completa com dashboards em tempo real, alertas inteligentes e métricas de negócio.",
    },
    {
      step: "05",
      title: "Otimização",
      desc: "Ciclo perpétuo de análise e melhorias baseado em dados reais, mantendo a operação na vanguarda.",
    },
    {
      step: "06",
      title: "Evolução",
      desc: "Acompanhamento de longo prazo que antecipa tendências e adapta a estratégia ao crescimento do negócio.",
    },
  ],
};

/* --------------------------------- Equipe --------------------------------- */
export const team = {
  eyebrow: "Nossa Equipe",
  title: "Inovação e Excelência",
  intro:
    "Uma equipe de especialistas apaixonados, dedicados a transformar desafios em soluções inovadoras de nuvem.",
  members: [
    {
      name: "Rodrigo Moreira",
      role: "CTO · SRE",
      bio: "Especialista em Site Reliability Engineering e arquitetura de sistemas distribuídos.",
      photo: "/team/rodrigo.jpg",
      ai: false,
    },
    {
      name: "Bruno Arruda",
      role: "CEO · DevOps",
      bio: "Líder em transformação digital e automação de infraestrutura empresarial.",
      photo: "/team/bruno.jpg",
      ai: false,
    },
    {
      name: "Francis Rizzo",
      role: "CEO · FinOps",
      bio: "Especialista em otimização de custos e governança financeira na nuvem.",
      photo: "/team/francis.jpg",
      ai: false,
    },
    {
      name: "CREW IA",
      role: "IA Bot",
      bio: "Inteligência artificial integrada para automação e análise preditiva.",
      photo: null,
      ai: true,
    },
  ],
};

/* --------------------------------- Contato -------------------------------- */
export const contact = {
  eyebrow: "Contato",
  title: "Pronto para transformar sua infraestrutura?",
  intro: "Vamos conversar! Fale com nossa equipe e dê o próximo passo.",
  serviceOptions: [
    "DevOps/SRE",
    "FinOps",
    "APM Monitoramento",
    "IA & Automação",
    "Interesse Geral",
  ],
};

export const footer = {
  tagline:
    "Transformando desafios em soluções inovadoras de nuvem. Especialistas em DevOps, FinOps e APM Monitoramento.",
  year: new Date().getFullYear(),
};
