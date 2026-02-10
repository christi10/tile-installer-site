"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

interface ProjectDetailProps {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    gallery: string[];
    details: { label: string; value: string }[];
    beforeImage?: string;
    afterImage?: string;
  };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="pt-20">
      {/* Hero Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <ScrollReveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-accent transition-colors mb-4"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to Portfolio
            </Link>
            <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-heading font-semibold uppercase tracking-wider mb-3">
              {project.category}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white">
              {project.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  About This Project
                </h2>
                <p className="text-text-muted text-lg leading-relaxed">
                  {project.description}
                </p>
              </ScrollReveal>

              {/* Before/After Slider */}
              {project.beforeImage && project.afterImage && (
                <div className="mt-12">
                  <h3 className="font-heading text-xl font-bold text-white mb-6">
                    Before & After
                  </h3>
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    beforeLabel="Before"
                    afterLabel="After"
                  />
                </div>
              )}

              {/* Gallery */}
              <div className="mt-12">
                <h3 className="font-heading text-xl font-bold text-white mb-6">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((img, i) => (
                    <ScrollReveal key={i} delay={i * 0.1}>
                      <button
                        onClick={() => setSelectedImage(img)}
                        className="relative aspect-square overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} gallery image ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </button>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Details Sidebar */}
            <div>
              <ScrollReveal direction="right">
                <div className="bg-surface-dark border border-white/5 p-6 sticky top-28">
                  <h3 className="font-heading text-lg font-bold text-white mb-6">
                    Project Details
                  </h3>
                  <dl className="space-y-4">
                    {project.details.map((detail) => (
                      <div
                        key={detail.label}
                        className="flex justify-between border-b border-white/5 pb-3"
                      >
                        <dt className="text-text-muted text-sm">
                          {detail.label}
                        </dt>
                        <dd className="text-white font-semibold text-sm">
                          {detail.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-8">
                    <Button href="/contact" variant="primary" className="w-full">
                      Start Your Project
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedImage}
                  alt="Project image enlarged"
                  fill
                  className="object-cover"
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white flex items-center justify-center hover:bg-accent transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
