"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

interface BlogPostDetailProps {
  post: {
    title: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    content: string[];
  };
}

export default function BlogPostDetail({ post }: BlogPostDetailProps) {
  return (
    <main className="pt-20">
      {/* Hero Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <ScrollReveal>
            <Link
              href="/blog"
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
              Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-heading font-semibold uppercase tracking-wider mb-3">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-text-muted text-sm mt-4">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-text-muted rounded-full" />
              <span>{post.readTime}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <p className="text-text-muted text-lg leading-relaxed">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/blog"
                className="text-accent font-heading font-semibold uppercase tracking-wide text-sm hover:gap-2 inline-flex items-center gap-1 transition-all duration-300"
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
                All Articles
              </Link>
              <Button href="/contact" variant="primary">
                Get a Free Quote
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
