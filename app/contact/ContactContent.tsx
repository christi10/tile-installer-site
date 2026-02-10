"use client";

import { useState, FormEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "8c2000fa-63e0-46dc-a2e7-4580609a022f";

export default function ContactContent() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Contact Us"
            title="Get in Touch"
            description="Ready to start your project? Send us a message and we'll get back to you with a free quote."
          />
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal direction="left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="hidden"
                  name="access_key"
                  value={WEB3FORMS_KEY}
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Quote Request - TileCraft"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-text-light text-sm font-heading font-semibold mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-surface-dark border border-white/10 text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors rounded-lg"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-text-light text-sm font-heading font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-surface-dark border border-white/10 text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors rounded-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-text-light text-sm font-heading font-semibold mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-surface-dark border border-white/10 text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors rounded-lg"
                      placeholder="+44 123 456 7890"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-text-light text-sm font-heading font-semibold mb-2"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-surface-dark border border-white/10 text-white focus:outline-none focus:border-accent transition-colors rounded-lg"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Tiling</option>
                      <option value="commercial">Commercial Project</option>
                      <option value="renovation">Renovation</option>
                      <option value="custom">Custom Design</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-text-light text-sm font-heading font-semibold mb-2"
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-surface-dark border border-white/10 text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none rounded-lg"
                    placeholder="Describe your project, area size, preferred tile type, timeline..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-heading font-semibold uppercase tracking-wide hover:bg-accent-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer rounded-lg"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "sent" && (
                  <p className="text-green-400 text-sm mt-2">
                    Thank you! We&apos;ll get back to you shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm mt-2">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-6">
                    Contact Information
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0 rounded-lg">
                        <svg
                          className="w-5 h-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          Phone
                        </p>
                        <a href="tel:+441234567890" className="text-text-muted hover:text-accent transition-colors">+44 (0) 123 456 7890</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0 rounded-lg">
                        <svg
                          className="w-5 h-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          Email
                        </p>
                        <a href="mailto:info@tilecraft.co.uk" className="text-text-muted hover:text-accent transition-colors">info@tilecraft.co.uk</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0 rounded-lg">
                        <svg
                          className="w-5 h-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          Service Area
                        </p>
                        <p className="text-text-muted">
                          London & South East England
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-4">
                    Working Hours
                  </h3>
                  <ul className="space-y-2 text-text-muted text-sm">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-white">8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-white">9:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-text-muted">Closed</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg">
                  <h4 className="font-heading font-semibold text-accent mb-2">
                    Free Quotes
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    We offer free, no-obligation quotes for all projects. Get in
                    touch and we&apos;ll visit your site to provide an accurate
                    estimate.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* Map */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold text-white mb-2 text-center">
              Our Service Area
            </h2>
            <p className="text-text-muted text-center mb-8">
              Serving London and the South East of England
            </p>
            <div className="relative aspect-[16/9] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.60647885756!2d-0.43124089999999996!3d51.528308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1700000000000"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TileCraft service area - London and South East England"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
