import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-block text-accent font-heading text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Ready to Transform Your Space?
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Let&apos;s Bring Your
            <br />
            <span className="text-accent">Vision to Life</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-10">
            Get in touch for a free consultation and quote. We&apos;ll help you
            choose the perfect tiles and design for your project.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              Browse Our Work
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
