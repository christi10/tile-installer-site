import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TileCraft — our story, experience, and commitment to delivering exceptional tile installation for every project.",
};

export default function AboutPage() {
  return <AboutContent />;
}
