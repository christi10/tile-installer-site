"use client";

import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const posts = [
  {
    title: "How to Choose the Right Tiles for Your Bathroom",
    slug: "choosing-bathroom-tiles",
    excerpt:
      "From porcelain to natural stone, choosing bathroom tiles can feel overwhelming. Here's our guide to picking the perfect tiles for durability, style, and budget.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    date: "15 January 2026",
    readTime: "5 min read",
    category: "Guides",
  },
  {
    title: "Tile Trends to Watch in 2026",
    slug: "tile-trends-2026",
    excerpt:
      "Large-format tiles, bold patterns, and sustainable materials are leading the way this year. Discover the trends shaping modern tile design.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    date: "28 December 2025",
    readTime: "4 min read",
    category: "Trends",
  },
  {
    title: "The Complete Guide to Underfloor Heating with Tiles",
    slug: "underfloor-heating-tiles",
    excerpt:
      "Underfloor heating and tiles are a perfect match, but installation requires expertise. Learn about the process, costs, and what to expect.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    date: "10 November 2025",
    readTime: "6 min read",
    category: "Guides",
  },
];

export default function BlogContent() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Blog"
            title="Tips & Inspiration"
            description="Expert advice, design trends, and practical guides from the TileCraft team."
          />
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-surface-dark overflow-hidden h-full"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-heading font-semibold uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-text-muted text-xs mb-3">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 bg-text-muted rounded-full" />
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center mt-4 text-accent text-sm font-semibold tracking-wide uppercase group-hover:gap-2 transition-all duration-300">
                        Read More
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
    </main>
  );
}
