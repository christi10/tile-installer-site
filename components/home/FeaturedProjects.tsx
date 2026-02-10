"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const projects = [
  {
    title: "Modern Bathroom Suite",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    slug: "modern-bathroom-suite",
  },
  {
    title: "Restaurant Floor Design",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
    slug: "restaurant-floor",
  },
  {
    title: "Kitchen Backsplash",
    category: "Renovation",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    slug: "kitchen-backsplash",
  },
  {
    title: "Luxury Spa Tiling",
    category: "Custom",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    slug: "luxury-spa",
  },
  {
    title: "Outdoor Terrace",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
    slug: "outdoor-terrace",
  },
  {
    title: "Hotel Lobby",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
    slug: "hotel-lobby",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Work"
          title="Featured Projects"
          description="Browse our latest tile installations across residential and commercial spaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.08}>
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden aspect-[4/3] rounded-lg"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Category tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-heading font-semibold uppercase tracking-wider rounded-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center mt-2 text-text-muted text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      View Project
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

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-accent font-heading font-semibold uppercase tracking-wide hover:gap-3 transition-all duration-300"
            >
              View All Projects
              <svg
                className="w-5 h-5"
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
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
