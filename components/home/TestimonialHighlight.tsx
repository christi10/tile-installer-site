"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Absolutely incredible work on our bathroom renovation. The attention to detail was second to none. Every tile was placed with precision and care. Highly recommend!",
    rating: 5,
    project: "Bathroom Renovation",
  },
  {
    name: "James T.",
    text: "We hired them for our restaurant floor and couldn't be happier. Professional from start to finish. The team was clean, punctual, and delivered beyond our expectations.",
    rating: 5,
    project: "Commercial Floor",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < count ? "text-accent" : "text-secondary"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialHighlight() {
  return (
    <section className="py-24 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from homeowners and businesses who trust our work."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.15}>
              <div className="bg-surface-dark p-8 border border-white/5 relative">
                {/* Quote mark */}
                <span className="absolute top-4 right-6 text-accent/20 font-heading text-6xl leading-none">
                  &ldquo;
                </span>

                <Stars count={testimonial.rating} />
                <p className="text-text-light/90 text-base leading-relaxed mt-4 mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-heading font-bold text-sm">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-heading font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-text-muted text-xs">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
