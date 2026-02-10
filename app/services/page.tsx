import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional tile installation services: residential, commercial, renovation, and custom designs. Expert craftsmanship for every project.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
