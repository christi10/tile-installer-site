"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto bg-surface-dark border border-white/10 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm leading-relaxed">
              We use essential cookies to ensure our website works properly. No
              tracking or advertising cookies are used.{" "}
              <a
                href="/privacy"
                className="text-accent hover:underline"
              >
                Privacy Policy
              </a>
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-text-muted text-sm hover:text-white transition-colors cursor-pointer"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-accent text-white text-sm font-heading font-semibold uppercase tracking-wide hover:bg-accent-light transition-colors cursor-pointer"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
