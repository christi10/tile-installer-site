import { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio | TileCraft - Our Work",
  description:
    "Browse our portfolio of completed tile installation projects across residential, commercial, renovation, and custom categories.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
