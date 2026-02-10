import type { Metadata } from "next";
import ProjectDetail from "./ProjectDetail";

// Placeholder project data — will be replaced with Sanity CMS data
const projects: Record<
  string,
  {
    title: string;
    category: string;
    description: string;
    image: string;
    gallery: string[];
    details: { label: string; value: string }[];
    beforeImage?: string;
    afterImage?: string;
  }
> = {
  "modern-bathroom-suite": {
    title: "Modern Bathroom Suite",
    category: "Residential",
    description:
      "A complete bathroom transformation featuring large-format porcelain tiles in a contemporary grey palette. The client wanted a spa-like feel with clean lines and a seamless look throughout.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    details: [
      { label: "Tile Type", value: "Large-format porcelain" },
      { label: "Area", value: "18 sqm" },
      { label: "Duration", value: "5 days" },
      { label: "Location", value: "London" },
    ],
    beforeImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  },
  "restaurant-floor": {
    title: "Restaurant Floor Design",
    category: "Commercial",
    description:
      "A high-traffic commercial floor installation for a modern restaurant. We used durable, anti-slip porcelain tiles with a polished concrete look to match the industrial interior design.",
    image:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
    ],
    details: [
      { label: "Tile Type", value: "Anti-slip porcelain" },
      { label: "Area", value: "120 sqm" },
      { label: "Duration", value: "2 weeks" },
      { label: "Location", value: "Central London" },
    ],
  },
  "kitchen-backsplash": {
    title: "Kitchen Backsplash",
    category: "Renovation",
    description:
      "A stunning kitchen backsplash renovation featuring handmade ceramic subway tiles laid in a herringbone pattern. The warm, neutral tones complement the oak cabinetry while the textured glaze adds depth and character to the space.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    ],
    details: [
      { label: "Tile Type", value: "Handmade ceramic subway" },
      { label: "Area", value: "8 sqm" },
      { label: "Duration", value: "3 days" },
      { label: "Location", value: "Richmond, London" },
    ],
    beforeImage:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  "luxury-spa": {
    title: "Luxury Spa Tiling",
    category: "Custom",
    description:
      "A bespoke spa environment with floor-to-ceiling Calacatta marble tiling. This project included steam room waterproofing, underfloor heating integration, and precision-cut slabs to create a seamless, luxurious retreat.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    details: [
      { label: "Tile Type", value: "Calacatta marble" },
      { label: "Area", value: "45 sqm" },
      { label: "Duration", value: "2 weeks" },
      { label: "Location", value: "Mayfair, London" },
    ],
  },
  "outdoor-terrace": {
    title: "Outdoor Terrace",
    category: "Residential",
    description:
      "A weather-resistant terrace installation using frost-proof textured porcelain tiles with integrated drainage. The non-slip surface ensures year-round safety while the natural stone effect blends seamlessly with the garden landscape.",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    ],
    details: [
      { label: "Tile Type", value: "Frost-resistant porcelain" },
      { label: "Area", value: "35 sqm" },
      { label: "Duration", value: "1 week" },
      { label: "Location", value: "Surrey" },
    ],
  },
  "hotel-lobby": {
    title: "Hotel Lobby",
    category: "Commercial",
    description:
      "A grand hotel entrance featuring polished marble flooring with geometric pattern borders. Designed for heavy foot traffic while maintaining an elegant first impression, this installation required precision alignment across the 200 sqm space.",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    details: [
      { label: "Tile Type", value: "Polished marble" },
      { label: "Area", value: "200 sqm" },
      { label: "Duration", value: "3 weeks" },
      { label: "Location", value: "Kensington, London" },
    ],
  },
  "victorian-restoration": {
    title: "Victorian Restoration",
    category: "Renovation",
    description:
      "A period-accurate encaustic tile restoration in a heritage-listed hallway. We sourced matching geometric patterns and carefully blended original salvaged tiles with new reproductions to preserve the property's Victorian character.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    ],
    details: [
      { label: "Tile Type", value: "Encaustic cement" },
      { label: "Area", value: "12 sqm" },
      { label: "Duration", value: "10 days" },
      { label: "Location", value: "Bath" },
    ],
    beforeImage:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  "mosaic-feature-wall": {
    title: "Mosaic Feature Wall",
    category: "Custom",
    description:
      "A bespoke hand-cut glass mosaic creating a striking artistic feature wall. Each piece was individually placed to form a flowing abstract design with custom colour blending that transitions from deep navy to copper gold.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    ],
    details: [
      { label: "Tile Type", value: "Hand-cut glass mosaic" },
      { label: "Area", value: "6 sqm" },
      { label: "Duration", value: "2 weeks" },
      { label: "Location", value: "Shoreditch, London" },
    ],
  },
  "penthouse-bathroom": {
    title: "Penthouse Bathroom",
    category: "Residential",
    description:
      "A luxury penthouse master bathroom featuring book-matched Statuario marble slabs for a dramatic veined effect. The installation includes a walk-in rain shower with flush floor drainage and a freestanding bath surround.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    details: [
      { label: "Tile Type", value: "Book-matched Statuario marble" },
      { label: "Area", value: "22 sqm" },
      { label: "Duration", value: "10 days" },
      { label: "Location", value: "Chelsea, London" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        { url: project.image, width: 1200, height: 630, alt: project.title },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    const { notFound } = await import("next/navigation");
    notFound();
  }

  return <ProjectDetail project={project} />;
}
