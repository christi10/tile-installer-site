import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch for a free tile installation quote. We serve London and South East England for residential and commercial projects.",
};

export default function ContactPage() {
  return <ContactContent />;
}
