"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you use our contact form, we collect the information you provide: your name, email address, phone number (optional), service type, and project description.",
      "We do not collect any information automatically beyond basic analytics data (page views, device type) through Vercel Analytics, which does not use cookies or track personal data.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information you submit through our contact form solely to respond to your enquiry, provide a quote, and communicate about your potential project.",
      "We do not sell, rent, or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "Contact form submissions are processed through Web3Forms, a form submission service. Your data is transmitted securely and forwarded to our email. Web3Forms does not store your submissions permanently.",
      "Our website is hosted on Vercel. Vercel Analytics collects anonymous, aggregated usage data to help us understand how visitors use our site. No personal data or cookies are involved.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Our website uses only essential cookies required for basic site functionality. We store your cookie consent preference in your browser's local storage.",
      "We do not use tracking cookies, advertising cookies, or any third-party cookies that track your browsing activity across websites.",
    ],
  },
  {
    title: "Your Rights Under GDPR",
    content: [
      "If you are in the UK or EEA, you have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, object to processing of your data, and request data portability.",
      "To exercise any of these rights, please contact us at info@tilecraft.co.uk. We will respond to your request within 30 days.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain contact form submissions and related correspondence for as long as necessary to complete your project enquiry and for up to 12 months afterwards for reference.",
      "You may request deletion of your data at any time by contacting us.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.",
    ],
  },
];

export default function PrivacyContent() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Legal"
            title="Privacy Policy"
            description="How we collect, use, and protect your personal data."
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
                For any questions about this privacy policy, contact us at{" "}
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
