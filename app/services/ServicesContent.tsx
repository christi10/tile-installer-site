"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const services = [
  {
    id: "residential",
    title: "Residential Tiling",
    description:
      "Transform your home with stunning tile work. From bathroom renovations to kitchen backsplashes, we handle every detail with care and precision.",
    features: [
      "Bathroom floor & wall tiling",
      "Kitchen backsplash installation",
      "Living room & hallway floors",
      "Shower & wetroom waterproofing",
      "Underfloor heating compatible",
    ],
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  },
  {
    id: "commercial",
    title: "Commercial Projects",
    description:
      "Large-scale tiling solutions designed for durability and style. We work with restaurants, hotels, offices, and retail spaces across the UK.",
    features: [
      "High-traffic floor installations",
      "Restaurant & kitchen tiling",
      "Hotel lobby & bathroom fit-outs",
      "Office reception areas",
      "Anti-slip & safety compliant",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "renovation",
    title: "Renovation",
    description:
      "Breathe new life into tired spaces. We handle complete tile removal, surface preparation, waterproofing, and fresh installation.",
    features: [
      "Complete tile strip-out",
      "Substrate repair & levelling",
      "Waterproofing & tanking",
      "Modern design consultation",
      "Minimal disruption approach",
    ],
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    id: "custom",
    title: "Custom Design",
    description:
      "For those who want something truly unique. We create bespoke mosaic work, intricate patterns, and artistic tile installations.",
    features: [
      "Mosaic art & patterns",
      "Feature wall installations",
      "Mixed material designs",
      "Heritage & restoration work",
      "3D & textured tile layouts",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
];

export default function ServicesContent() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Expert Tiling Solutions"
            description="Whatever the project, whatever the scale — we have the skills, experience, and dedication to deliver outstanding results."
          />
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${i % 2 === 0 ? "bg-primary" : "bg-primary-light"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <ScrollReveal
                direction={i % 2 === 0 ? "left" : "right"}
                className={i % 2 !== 0 ? "lg:order-2" : ""}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-accent/10" />
                </motion.div>
              </ScrollReveal>

              {/* Content */}
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <ScrollReveal
                  direction={i % 2 === 0 ? "right" : "left"}
                >
                  <span className="inline-block text-accent font-heading text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                    0{i + 1}
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-muted text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-text-light/80"
                      >
                        <svg
                          className="w-5 h-5 text-accent shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant="primary">
                    Request a Quote
                  </Button>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
