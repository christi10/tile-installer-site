import { Metadata } from "next";
import ReviewsContent from "./ReviewsContent";

export const metadata: Metadata = {
  title: "Reviews | TileCraft - Client Testimonials",
  description:
    "Read what our clients have to say about our tile installation services. 5-star reviews from homeowners and businesses.",
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}
