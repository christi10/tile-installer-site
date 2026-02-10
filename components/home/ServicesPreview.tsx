"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    title: "Residential",
    description:
      "Beautiful tiling for bathrooms, kitchens, and living spaces. We bring your home vision to life with expert craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
    href: "/services#residential",
  },
  {
    title: "Commercial",
    description:
      "Large-scale tiling solutions for offices, retail, restaurants, and hospitality. Built to withstand high traffic.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    href: "/services#commercial",
  },
  {
    title: "Renovation",
    description:
      "Transform outdated spaces with modern tile designs. Complete removal, preparation, and expert re-tiling.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    href: "/services#renovation",
  },
  {
    title: "Custom",
    description:
      "Bespoke mosaic work, intricate patterns, and unique artistic installations tailored to your exact specifications.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    href: "/services#custom",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="Our Services"
          description="From residential bathrooms to commercial spaces, we deliver exceptional tiling solutions for every project."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <Link href={service.href} className="group block">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden bg-surface-dark h-full rounded-lg"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center mt-4 text-accent text-sm font-semibold tracking-wide uppercase group-hover:gap-2 transition-all duration-300">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
