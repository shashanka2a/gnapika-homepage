import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ParallaxDivider } from "@/components/ParallaxDivider";
import { CraftStories } from "@/components/CraftStories";
import { TopSelling } from "@/components/TopSelling";
import { StoryProcess } from "@/components/StoryProcess";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      <Navigation />
      <Hero />
      <ProductShowcase />
      <ParallaxDivider />
      <CraftStories />
      <TopSelling />
      <ParallaxDivider />
      <StoryProcess />
      <Footer />
    </div>
  );
}