import { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how TileCraft collects, uses, and protects your personal data. GDPR compliant privacy policy.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
