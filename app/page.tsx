import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import StatsCounter from "@/components/home/StatsCounter";
import TestimonialHighlight from "@/components/home/TestimonialHighlight";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <StatsCounter />
      <TestimonialHighlight />
      <CTABanner />
    </main>
  );
}
