import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import DeliveredProjects from "@/components/home/DeliveredProjects";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import About from "@/components/home/About";
import Gallery from "@/components/home/Gallery";
import Office from "@/components/home/Office";

export default function HomePage() {
  return (
    <main className="bg-[#f5f1eb] text-[#111]">
      <Header />
      <Hero />
      <Stats />
      <DeliveredProjects />
      <FeaturedProjects />
      <About />
      <Gallery />
      <Office />
      <Footer />
    </main>
  );
}
