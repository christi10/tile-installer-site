import type { Metadata } from "next";
import BlogPostDetail from "./BlogPostDetail";

const posts: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    content: string[];
  }
> = {
  "choosing-bathroom-tiles": {
    title: "How to Choose the Right Tiles for Your Bathroom",
    category: "Guides",
    date: "15 January 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    content: [
      "Choosing bathroom tiles is one of the most important decisions in any bathroom renovation. The right tiles set the tone for the entire space — from a serene spa retreat to a bold, contemporary statement. But with so many materials, sizes, and finishes available, it's easy to feel overwhelmed.",
      "The first decision is material. Porcelain tiles are the most popular choice for bathrooms thanks to their low water absorption rate (under 0.5%), making them ideal for wet areas. They come in an incredible range of finishes — from marble-look to concrete-effect — and are highly durable. Ceramic tiles are a more budget-friendly option, perfect for wall applications where water exposure is less intense.",
      "Natural stone tiles like marble, travertine, and slate bring unmatched character and luxury. However, they require sealing to prevent staining and are generally more expensive to both purchase and install. If you love the natural stone look but want easier maintenance, porcelain tiles that mimic stone are an excellent compromise.",
      "Size matters more than you might think. Large-format tiles (600x600mm and above) create a seamless, spacious feel with fewer grout lines. They work particularly well in larger bathrooms. For smaller spaces, medium-format tiles (300x600mm) offer a good balance. Mosaic tiles are perfect for feature areas, niches, and shower floors where smaller tiles can follow the gradient for drainage.",
      "For bathroom floors, always choose tiles with adequate slip resistance. Look for R10 or R11 ratings for residential bathrooms, and R12-R13 for walk-in showers and wetrooms. Matt and textured finishes naturally provide better grip than polished surfaces.",
      "Colour and tone set the mood. Light colours make small bathrooms feel larger, while darker tones create drama and sophistication. Neutral palettes (whites, greys, warm beiges) are timeless and easy to accessorise. If you want to add personality, consider a feature wall behind the vanity or in the shower niche with a contrasting tile.",
      "Finally, don't forget about the practical details. Budget for 10% extra tiles to account for cuts and potential future repairs. Consider the grout colour — it can dramatically change the look. And always check that your chosen tiles are suitable for your specific application, especially in wet areas with underfloor heating.",
      "At TileCraft, we help clients navigate these decisions every day. We're happy to advise on tile selection, provide samples, and recommend trusted suppliers. Get in touch for a free consultation.",
    ],
  },
  "tile-trends-2026": {
    title: "Tile Trends to Watch in 2026",
    category: "Trends",
    date: "28 December 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    content: [
      "The tile industry continues to evolve, with 2026 bringing fresh perspectives on colour, texture, and application. Whether you're planning a renovation or building from scratch, these trends can inspire your next project.",
      "Large-format tiles continue to dominate. Slabs measuring 1200x2400mm and even larger are becoming more accessible, allowing for dramatic, near-seamless walls and floors. These panels reduce grout lines, simplify cleaning, and create a sophisticated, minimalist aesthetic. They're particularly popular for bathroom walls and kitchen splashbacks.",
      "Sustainability is no longer optional — it's expected. Recycled-content tiles, locally manufactured products, and tiles made from natural materials like clay and stone are in high demand. Look for manufacturers with transparent environmental certifications and production processes.",
      "Bold, geometric patterns are making a comeback. Encaustic-style cement tiles with intricate Moroccan, Mediterranean, and Art Deco patterns are being used as feature floors and walls. These hand-crafted tiles add personality and artisanal charm to otherwise minimal spaces.",
      "Textured surfaces are gaining ground. Three-dimensional wall tiles with wave, ripple, and faceted designs add depth and visual interest without the need for additional decoration. These work beautifully as feature walls in bathrooms, living rooms, and commercial spaces.",
      "The colour palette for 2026 leans towards warm, earthy tones. Terracotta, warm grey, olive green, and sandy beige are replacing the cool greys that dominated the past decade. These organic colours create welcoming, grounded spaces that connect with nature.",
      "Finally, mixed-material installations are trending. Combining different tile types — such as marble with terrazzo, or porcelain with brass inlays — creates unique, bespoke designs that reflect individual style. This approach requires skilled installation but delivers truly one-of-a-kind results.",
      "At TileCraft, we stay ahead of industry trends to bring the latest design possibilities to our clients. Whether you want a cutting-edge contemporary look or a timeless classic, we can help you achieve it.",
    ],
  },
  "underfloor-heating-tiles": {
    title: "The Complete Guide to Underfloor Heating with Tiles",
    category: "Guides",
    date: "10 November 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    content: [
      "Underfloor heating (UFH) and tiles are a match made in heaven. Tiles are excellent conductors of heat, which means they warm up quickly and distribute heat evenly across the floor surface. The result is a comfortable, radiator-free room with consistent warmth underfoot.",
      "There are two main types of underfloor heating: electric (dry) and water-based (wet). Electric systems use thin heating mats or cables installed directly beneath the tiles. They're ideal for single rooms, renovations, and retrofit projects because they add minimal height to the floor. Water-based systems circulate warm water through pipes embedded in the screed and are typically used in new builds or whole-house installations.",
      "For tile installations, electric mat systems are the most common choice. The mats are laid over a primed, level substrate, and tiles are fixed directly on top using a flexible adhesive. The entire system adds only 3-4mm of height, making it compatible with existing door thresholds and transitions.",
      "Tile selection is important when using underfloor heating. Porcelain and ceramic tiles are ideal because they conduct heat efficiently and can handle temperature changes without cracking. Natural stone works well too, though some softer stones may require specific adhesives. Avoid tiles with very low thermal conductivity, and always check the manufacturer's guidance.",
      "Flexible adhesive is essential. Standard rigid adhesives can crack as the floor expands and contracts with heating cycles. We use S1 or S2 rated flexible adhesives that accommodate thermal movement. Similarly, flexible grout is recommended to prevent cracking along grout lines.",
      "Before tiling, the heating system must be tested and commissioned. We always run a full system check — verifying resistance readings and ensuring even heat distribution — before laying any tiles. This ensures any faults are identified and fixed while the system is still accessible.",
      "Once tiled, the system needs a gradual warm-up period. Adhesive and grout typically need 7-14 days to fully cure before the heating is switched on. After that, the temperature should be increased gradually over several days, starting at 20°C and increasing by 5°C per day until reaching the operating temperature.",
      "The running costs of underfloor heating with tiles are generally lower than traditional radiators because UFH operates at lower temperatures while providing the same level of comfort. Tiles retain heat well, meaning the system doesn't need to work as hard to maintain temperature.",
      "At TileCraft, we have extensive experience installing tiles over underfloor heating systems. We work with leading UFH manufacturers and follow all technical specifications to ensure a perfect, long-lasting result. Contact us to discuss your project.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.content[0].slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.content[0].slice(0, 160),
      images: [
        { url: post.image, width: 1200, height: 630, alt: post.title },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.content[0].slice(0, 160),
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    const { notFound } = await import("next/navigation");
    notFound();
  }

  return <BlogPostDetail post={post} />;
}
