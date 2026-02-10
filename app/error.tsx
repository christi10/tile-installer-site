"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
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
          <svg
            className="w-20 h-20 text-accent mx-auto mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Something Went Wrong
          </h1>
          <p className="text-text-muted text-lg max-w-md mx-auto mb-8">
            An unexpected error occurred. Please try again or contact us if the
            problem persists.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={reset}
            className="px-8 py-4 bg-accent text-white font-heading font-semibold uppercase tracking-wide hover:bg-accent-light transition-all duration-300 cursor-pointer"
          >
            Try Again
          </button>
          <Button href="/" variant="outline" size="lg">
            Go Home
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
