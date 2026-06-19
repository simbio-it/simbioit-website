import {
  SiKubernetes,
  SiDocker,
  SiHelm,
  SiRedhatopenshift,
  SiPodman,
  SiRancher,
  SiTerraform,
  SiAnsible,
  SiPulumi,
  SiVault,
  SiJenkins,
  SiGithubactions,
  SiGitlab,
  SiArgo,
  SiPrometheus,
  SiGrafana,
  SiOpentelemetry,
  SiDatadog,
  SiElastic,
  SiJaeger,
  SiNewrelic,
  SiIstio,
  SiLinkerd,
  SiCloudflare,
  SiGooglecloud,
  SiDigitalocean,
  SiLinux,
  SiPython,
  SiGo,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa6";
import type { IconType } from "react-icons";

/**
 * Marquee de tecnologias — principais ferramentas de DevOps/SRE e clouds.
 * Duas faixas rolando em sentidos opostos. (Logos monocromáticos via currentColor.)
 * AWS/Azure vêm do Font Awesome pois foram removidas do Simple Icons por marca.
 */
type Tech = { Icon: IconType; name: string };

// Clouds + plataforma
const clouds: Tech[] = [
  { Icon: FaAws, name: "AWS" },
  { Icon: FaMicrosoft, name: "Azure" },
  { Icon: SiGooglecloud, name: "Google Cloud" },
  { Icon: SiCloudflare, name: "Cloudflare" },
  { Icon: SiDigitalocean, name: "DigitalOcean" },
];

// Containers, IaC e CI/CD
const platform: Tech[] = [
  { Icon: SiKubernetes, name: "Kubernetes" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiHelm, name: "Helm" },
  { Icon: SiRedhatopenshift, name: "OpenShift" },
  { Icon: SiPodman, name: "Podman" },
  { Icon: SiRancher, name: "Rancher" },
  { Icon: SiTerraform, name: "Terraform" },
  { Icon: SiAnsible, name: "Ansible" },
  { Icon: SiPulumi, name: "Pulumi" },
  { Icon: SiVault, name: "Vault" },
  { Icon: SiJenkins, name: "Jenkins" },
  { Icon: SiGithubactions, name: "GitHub Actions" },
  { Icon: SiGitlab, name: "GitLab CI" },
  { Icon: SiArgo, name: "Argo CD" },
];

// Observabilidade / SRE + base
const observability: Tech[] = [
  { Icon: SiPrometheus, name: "Prometheus" },
  { Icon: SiGrafana, name: "Grafana" },
  { Icon: SiOpentelemetry, name: "OpenTelemetry" },
  { Icon: SiDatadog, name: "Datadog" },
  { Icon: SiElastic, name: "Elastic" },
  { Icon: SiJaeger, name: "Jaeger" },
  { Icon: SiNewrelic, name: "New Relic" },
  { Icon: SiIstio, name: "Istio" },
  { Icon: SiLinkerd, name: "Linkerd" },
  { Icon: SiLinux, name: "Linux" },
  { Icon: SiPython, name: "Python" },
  { Icon: SiGo, name: "Go" },
];

const rowA = [...clouds, ...platform.slice(0, 7)];
const rowB = [...platform.slice(7), ...observability];

function Track({ items, ariaHidden = false }: { items: Tech[]; ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-10 px-5"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map(({ Icon, name }) => (
        <div
          key={name}
          className="group flex items-center gap-2.5 text-ink-muted transition-colors duration-300 hover:text-brand-teal"
        >
          <Icon className="size-6 shrink-0" />
          <span className="font-mono text-sm whitespace-nowrap">{name}</span>
        </div>
      ))}
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration,
}: {
  items: Tech[];
  reverse?: boolean;
  duration: number;
}) {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <Track items={items} />
        <Track items={items} ariaHidden />
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <div className="border-y border-border-subtle bg-bg-surface/30 py-8">
      <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.22em] text-ink-faint">
        Tecnologias que dominamos
      </p>
      <div className="flex flex-col gap-5">
        <MarqueeRow items={rowA} duration={48} />
        <MarqueeRow items={rowB} reverse duration={54} />
      </div>
    </div>
  );
}
