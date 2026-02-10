"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const sections = [
  {
    title: "Use of This Website",
    content: [
      "This website is operated by TileCraft. By accessing and using this website, you agree to these terms and conditions.",
      "You may use this website for your personal, non-commercial purposes to learn about our services, view our portfolio, and contact us for quotes.",
      "You must not misuse this website by knowingly introducing viruses, trojans, or other malicious material, or by attempting to gain unauthorised access to the server on which this website is stored.",
    ],
  },
  {
    title: "Our Services",
    content: [
      "We provide professional tile installation services including residential tiling, commercial projects, renovations, and custom design work across London and the South East of England.",
      "All quotes provided are estimates based on the information available at the time. Final pricing may vary following a site visit and detailed assessment of the project requirements.",
      "Project timelines are estimates and may be affected by factors including material availability, site conditions, and scope changes.",
    ],
  },
  {
    title: "Quotes & Pricing",
    content: [
      "All quotes are valid for 30 days from the date of issue unless otherwise stated.",
      "A deposit may be required before work commences. Payment terms will be agreed in writing before the start of any project.",
      "Additional work outside the agreed scope will be quoted separately and requires client approval before proceeding.",
    ],
  },
  {
    title: "Warranties & Guarantees",
    content: [
      "We guarantee our workmanship for a period of 12 months from the date of project completion.",
      "This warranty covers defects in installation only and does not extend to tile materials, substrate issues pre-existing before our work, or damage caused by misuse, impact, or structural movement.",
      "Claims under warranty must be reported to us in writing within the warranty period.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "While we take every care to provide accurate information on this website, we do not guarantee that the content is error-free or up to date.",
      "Images shown in our portfolio are representative of our work. Results may vary depending on materials selected, site conditions, and project specifications.",
      "Our total liability for any claim shall not exceed the total amount paid for the specific services giving rise to the claim.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content on this website, including text, images, design, and logos, is the property of TileCraft or its content suppliers and is protected by copyright laws.",
      "You may not reproduce, distribute, or use any content from this website without our prior written consent.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These terms and conditions are governed by and construed in accordance with the laws of England and Wales.",
      "Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
    ],
  },
];

export default function TermsContent() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Legal"
            title="Terms of Service"
            description="Please read these terms carefully before using our website or services."
          />
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-text-muted text-sm mb-12">
              Last updated: February 2026
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 0.05}>
                <div>
                  <h2 className="font-heading text-xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-text-muted leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-text-muted text-sm">
                For any questions about these terms, contact us at{" "}
                <a
                  href="mailto:info@tilecraft.co.uk"
                  className="text-accent hover:underline"
                >
                  info@tilecraft.co.uk
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
