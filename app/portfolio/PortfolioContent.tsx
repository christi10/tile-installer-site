"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const categories = ["All", "Residential", "Commercial", "Renovation", "Custom"];

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
  {
    title: "Victorian Restoration",
    category: "Renovation",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    slug: "victorian-restoration",
  },
  {
    title: "Mosaic Feature Wall",
    category: "Custom",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    slug: "mosaic-feature-wall",
  },
  {
    title: "Penthouse Bathroom",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    slug: "penthouse-bathroom",
  },
];

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-primary-light overflow-hidden">
        {/* Background image - mobile only */}
        <div className="absolute inset-0 md:hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/90 via-primary-light/80 to-primary-light" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Portfolio"
            title="Our Work Speaks for Itself"
            description="Explore our completed projects across residential, commercial, renovation, and custom categories."
          />
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-sm font-heading font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer rounded-lg ${
                    activeCategory === cat
                      ? "bg-accent text-white"
                      : "bg-surface-dark text-text-muted hover:text-white border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden aspect-[4/3] rounded-lg">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url('${project.image}')`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-heading font-semibold uppercase tracking-wider rounded-md">
                          {project.category}
                        </span>
                      </div>

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
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
