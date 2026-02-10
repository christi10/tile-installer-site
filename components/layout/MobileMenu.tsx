"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  links: { href: string; label: string }[];
  onClose: () => void;
}

export default function MobileMenu({ links, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 z-40 bg-primary/98 backdrop-blur-lg lg:hidden"
    >
      <div className="flex flex-col items-center justify-center h-full gap-8">
        {links.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="text-white text-2xl font-heading font-semibold tracking-wide hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="mt-4 inline-flex items-center px-8 py-4 bg-accent text-white font-heading font-semibold tracking-wide uppercase rounded-lg hover:bg-accent-light transition-all duration-300"
          >
            Get a Quote
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
