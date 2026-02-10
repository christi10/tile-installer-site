"use client";

import { useState, FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "subscribed">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email) {
      setStatus("subscribed");
      setEmail("");
    }
  }

  if (status === "subscribed") {
    return (
      <p className="text-accent text-sm font-semibold">
        Thanks for subscribing!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
        className="px-4 py-2 bg-surface-dark border border-white/10 text-white text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors w-60"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-accent text-white text-sm font-heading font-semibold uppercase tracking-wide hover:bg-accent-light transition-colors cursor-pointer"
      >
        Subscribe
      </button>
    </form>
  );
}
