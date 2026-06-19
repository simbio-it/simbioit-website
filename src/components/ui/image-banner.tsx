import { cn } from "@/lib/utils";

/**
 * Banner com imagem real + overlay e legenda. Fotos sob licença Unsplash
 * (uso comercial livre). Mantém legibilidade com gradiente sobre a base.
 */
export function ImageBanner({
  src,
  alt,
  eyebrow,
  title,
  className,
  height = "h-56 sm:h-64",
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  className?: string;
  height?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border-subtle",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "w-full object-cover transition-transform duration-700 group-hover:scale-105",
          height,
        )}
      />
      {/* overlay teal + escurecimento na base para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/30 to-transparent" />
      <div className="absolute inset-0 bg-brand-teal/10 mix-blend-overlay" />
      {(eyebrow || title) && (
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {eyebrow && (
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-lime">
              {eyebrow}
            </p>
          )}
          {title && (
            <h3 className="mt-1.5 max-w-md font-display text-xl font-semibold text-ink text-balance">
              {title}
            </h3>
          )}
        </div>
      )}
    </div>
  );
}
