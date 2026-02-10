import { Metadata } from "next";
import FAQContent from "./FAQContent";

const faqs = [
  {
    question: "How much does tile installation cost?",
    answer:
      "Costs vary depending on the tile type, area size, and complexity of the project. As a guide, residential projects typically range from £40-£80 per square metre for labour, with premium materials and complex patterns at the higher end. We provide free, detailed quotes after assessing your project.",
  },
  {
    question: "How long does a typical tiling project take?",
    answer:
      "A standard bathroom takes 3-5 days, a kitchen backsplash 1-2 days, and larger commercial projects 1-3 weeks. Timelines depend on the area size, tile type, substrate preparation needed, and complexity of the pattern or layout.",
  },
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes, we offer free, no-obligation quotes for all projects. We'll visit your site, assess the work required, discuss your preferences, and provide a detailed written estimate. Contact us to book a site visit.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve London and the South East of England, including Surrey, Kent, Essex, Hertfordshire, and Berkshire. For larger commercial projects, we can travel further afield — just get in touch to discuss.",
  },
  {
    question: "Can you help me choose the right tiles?",
    answer:
      "Absolutely. While we don't sell tiles directly, we can advise on tile types, sizes, colours, and patterns that will work best for your space. We also have relationships with trusted suppliers and can recommend where to source specific materials.",
  },
  {
    question: "Do you remove old tiles?",
    answer:
      "Yes, we handle complete tile removal, disposal, and substrate preparation as part of our renovation service. We'll assess the condition of the surface underneath and carry out any levelling, waterproofing, or repairs before installing new tiles.",
  },
  {
    question: "Are your installations guaranteed?",
    answer:
      "We provide a 12-month workmanship guarantee on all installations. This covers any defects in our installation work. We also follow manufacturer guidelines for all materials to ensure any product warranties remain valid.",
  },
  {
    question: "Do you install underfloor heating?",
    answer:
      "Yes, we are experienced in installing tiles over underfloor heating systems. We work with electric mat systems and can coordinate with heating engineers for wet systems. Proper installation is critical to avoid cracking, and we follow all manufacturer specifications.",
  },
  {
    question: "What tile types can you work with?",
    answer:
      "We work with all tile types including porcelain, ceramic, natural stone (marble, travertine, slate, granite), mosaic, glass, encaustic cement tiles, and large-format panels. Each material has specific installation requirements that we're fully trained in.",
  },
  {
    question: "Do I need to be home during the installation?",
    answer:
      "You don't need to be present throughout. After the initial walkthrough, many clients provide access and we work independently. We keep you updated with progress photos and will contact you if any decisions are needed.",
  },
  {
    question: "How do I prepare for a tiling project?",
    answer:
      "Clear the work area of personal items, furniture, and fixtures where possible. For bathroom projects, ensure plumbing work is completed beforehand. We handle all surface preparation, but having a clear workspace helps us work efficiently.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfer and cash. For larger projects, we typically agree a payment schedule: a deposit to secure the booking, a stage payment mid-project, and the final balance upon completion and your satisfaction.",
  },
];

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about TileCraft's tile installation services, pricing, timelines, and more.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQContent faqs={faqs} />
    </>
  );
}
