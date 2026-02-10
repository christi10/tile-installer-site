import { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using TileCraft's services and website.",
};

export default function TermsPage() {
  return <TermsContent />;
}
