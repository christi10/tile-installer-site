"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely incredible work on our bathroom renovation. The attention to detail was second to none. Every tile was placed with precision and care. The team was professional, clean, and finished ahead of schedule. Highly recommend!",
    project: "Bathroom Renovation",
    date: "January 2025",
  },
  {
    name: "James T.",
    rating: 5,
    text: "We hired them for our restaurant floor and couldn't be happier. Professional from start to finish. The team was clean, punctual, and delivered beyond our expectations. The anti-slip tiles they recommended were perfect for our needs.",
    project: "Commercial Floor",
    date: "December 2024",
  },
  {
    name: "Emily R.",
    rating: 5,
    text: "Our kitchen backsplash turned out beautifully. They helped us choose the perfect tile pattern and colour combination. The workmanship is flawless — you can tell they take real pride in what they do.",
    project: "Kitchen Backsplash",
    date: "November 2024",
  },
  {
    name: "David K.",
    rating: 5,
    text: "Had our entire ground floor retiled. The old tiles were removed cleanly, the subfloor was levelled perfectly, and the new tiles look stunning. Great communication throughout the whole process.",
    project: "Floor Renovation",
    date: "October 2024",
  },
  {
    name: "Anna P.",
    rating: 4,
    text: "Very professional team who delivered quality work on our hotel lobby. The large-format tiles were installed perfectly with minimal grout lines. Would definitely hire again for future projects.",
    project: "Hotel Lobby",
    date: "September 2024",
  },
  {
    name: "Mark S.",
    rating: 5,
    text: "The custom mosaic work they did for our feature wall is absolutely stunning. A true work of art. They took our concept and turned it into something even better than we imagined. Outstanding craftsmanship.",
    project: "Custom Mosaic",
    date: "August 2024",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-accent" : "text-secondary"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsContent() {
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="What Our Clients Say"
            description="Real reviews from real clients. We let our work and our reputation speak for themselves."
          />

          {/* Summary Stats */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-accent">
                  {avgRating.toFixed(1)}
                </div>
                <Stars count={Math.round(avgRating)} />
                <p className="text-text-muted text-sm mt-1">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-white">
                  {reviews.length}
                </div>
                <p className="text-text-muted text-sm mt-1">Total Reviews</p>
              </div>
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-white">
                  100%
                </div>
                <p className="text-text-muted text-sm mt-1">Would Recommend</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.08}>
                <div className="bg-surface-dark p-8 border border-white/5 h-full flex flex-col relative rounded-lg">
                  <span className="absolute top-4 right-6 text-accent/20 font-heading text-5xl leading-none">
                    &ldquo;
                  </span>

                  <Stars count={review.rating} />
                  <p className="text-text-light/90 text-sm leading-relaxed mt-4 mb-6 flex-1">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                    <div className="w-10 h-10 bg-accent/20 flex items-center justify-center rounded-lg">
                      <span className="text-accent font-heading font-bold text-sm">
                        {review.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-heading font-semibold text-sm">
                        {review.name}
                      </p>
                      <p className="text-text-muted text-xs">
                        {review.project} &middot; {review.date}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
