import { Bot } from "lucide-react";
import { team } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/ui/primitives";

export function Team() {
  return (
    <Section id="equipe">
      <SectionHeading
        eyebrow={team.eyebrow}
        title={team.title}
        highlight="Excelência"
        intro={team.intro}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.members.map((m) => (
          <div
            key={m.name}
            className={cn(
              "card-hover flex flex-col rounded-2xl border bg-bg-surface p-6",
              m.ai ? "border-brand-lime/30" : "border-border-subtle",
            )}
          >
            {m.photo ? (
              <img
                src={m.photo}
                alt={`Foto de ${m.name}`}
                loading="lazy"
                className="size-16 rounded-2xl object-cover ring-1 ring-border-subtle"
              />
            ) : (
              <div className="flex size-16 items-center justify-center rounded-2xl bg-grad-brand text-bg-base">
                <Bot className="size-7" />
              </div>
            )}
            <h3 className="mt-5 font-display text-lg font-semibold">{m.name}</h3>
            <p
              className={cn(
                "mt-0.5 font-mono text-xs uppercase tracking-wider",
                m.ai ? "text-brand-lime" : "text-brand-teal",
              )}
            >
              {m.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{m.bio}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center font-display text-lg text-ink-muted">
        Juntos construímos o futuro —{" "}
        <span className="text-gradient font-semibold">
          paixão, tecnologia e resultados
        </span>
      </p>
    </Section>
  );
}
