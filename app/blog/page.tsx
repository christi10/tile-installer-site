import { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, trends, and insights about tile installation, bathroom renovation, and interior design from the TileCraft team.",
};

export default function BlogPage() {
  return <BlogContent />;
}
