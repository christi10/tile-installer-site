"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center shadow-md shadow-accent/20 group-hover:shadow-accent/40 transition-shadow duration-300">
                <span className="font-heading font-bold text-white text-lg">
                  T
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="font-heading font-bold text-white text-lg tracking-wide group-hover:text-accent transition-colors duration-300">
                  TileCraft
                </span>
                <span className="block text-text-muted text-[10px] tracking-[0.3em] uppercase">
                  Pro Installation
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? "text-accent bg-accent/10"
                        : "text-text-light/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-5 py-2.5 bg-accent text-white text-sm font-heading font-semibold tracking-wide uppercase rounded-lg hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                Get a Quote
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={
                    isMobileOpen
                      ? { rotate: 45, y: 6 }
                      : { rotate: 0, y: 0 }
                  }
                  className="block w-6 h-0.5 bg-white"
                />
                <motion.span
                  animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-6 h-0.5 bg-white"
                />
                <motion.span
                  animate={
                    isMobileOpen
                      ? { rotate: -45, y: -6 }
                      : { rotate: 0, y: 0 }
                  }
                  className="block w-6 h-0.5 bg-white"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <MobileMenu
            links={navLinks}
            onClose={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
