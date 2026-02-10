import { Metadata } from "next";
import ReviewsContent from "./ReviewsContent";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Read what our clients have to say about our tile installation services. 5-star reviews from homeowners and businesses.",
};

const aggregateRatingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TileCraft",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    ratingCount: "6",
    reviewCount: "6",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingJsonLd),
        }}
      />
      <ReviewsContent />
    </>
  );
}
