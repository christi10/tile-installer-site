"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/ui/Button";

const values = [
  {
    title: "Precision",
    description:
      "Every tile is measured, cut, and placed with meticulous accuracy. We never rush quality.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "We show up on time, communicate clearly, and deliver on our promises. Every single time.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Craftsmanship",
    description:
      "With over 15 years of experience, our skills have been honed through hundreds of projects.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
];

export default function AboutContent() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="About Us"
            title="Built on Skill, Driven by Passion"
            description="We're a team of experienced tile installers dedicated to transforming spaces with precision and artistry."
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="TileCraft team at work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-accent/10" />
                {/* Experience badge */}
                <div className="absolute bottom-6 right-6 bg-accent px-6 py-4 text-center rounded-lg">
                  <span className="block font-heading text-3xl font-bold text-white">
                    <AnimatedCounter target={15} suffix="+" />
                  </span>
                  <span className="block text-white/80 text-xs uppercase tracking-wider">
                    Years
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <span className="inline-block text-accent font-heading text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                From Humble Beginnings to Industry Leaders
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  What started as a one-person operation has grown into a trusted
                  team of skilled tile installers, serving residential and
                  commercial clients across the UK.
                </p>
                <p>
                  Our founder&apos;s passion for precision and quality craftsmanship
                  set the standard from day one. Today, that same dedication
                  drives every project we take on — whether it&apos;s a small
                  bathroom renovation or a large commercial fit-out.
                </p>
                <p>
                  We believe that great tiling isn&apos;t just about placing tiles.
                  It&apos;s about understanding the space, choosing the right
                  materials, and executing with care. That&apos;s what sets us apart.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Work With Us
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            description="The principles that guide every project we undertake."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="bg-surface-dark p-8 border border-white/5 text-center rounded-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent mb-6 rounded-lg">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
