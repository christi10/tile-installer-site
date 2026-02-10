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
};

// Default project for slugs without specific data
const defaultProject = {
  title: "Project Detail",
  category: "Residential",
  description:
    "A beautifully crafted tile installation showcasing our commitment to quality and precision. Every project is unique, and we work closely with our clients to deliver results that exceed expectations.",
  image:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
  ],
  details: [
    { label: "Tile Type", value: "Ceramic" },
    { label: "Area", value: "25 sqm" },
    { label: "Duration", value: "1 week" },
    { label: "Location", value: "South East England" },
  ],
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug] || { ...defaultProject, title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) };

  return <ProjectDetail project={project} />;
}
