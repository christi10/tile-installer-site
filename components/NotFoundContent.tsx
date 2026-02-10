"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function NotFoundContent() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      {/* Geometric overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 60px,
            rgba(184,115,51,0.3) 60px,
            rgba(184,115,51,0.3) 61px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 60px,
            rgba(184,115,51,0.3) 60px,
            rgba(184,115,51,0.3) 61px
          )`,
        }}
      />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-heading text-[10rem] md:text-[14rem] font-bold text-accent/20 leading-none block">
            404
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="-mt-12"
        >
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-text-muted text-lg max-w-md mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/" variant="primary" size="lg">
            Go Home
          </Button>
          <Button href="/portfolio" variant="outline" size="lg">
            View Portfolio
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
