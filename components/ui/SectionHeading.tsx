import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-12 ${alignClass}`}>
      {label && (
        <ScrollReveal>
          <span className="inline-block text-accent font-heading text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            {label}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
            light ? "text-text-dark" : "text-white"
          }`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p
            className={`mt-4 text-lg leading-relaxed ${
              light ? "text-secondary" : "text-text-muted"
            }`}
          >
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
