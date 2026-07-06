import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AITryOnBanner from "@/components/home/AITryOnBanner";

export default function Home() {
  return (
    <main>
  <Navbar />
  <Hero />
  <Features />
  <Categories />
  <FeaturedProducts />
  <AITryOnBanner />
</main>
  );
}