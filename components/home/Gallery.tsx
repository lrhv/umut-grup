import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { galleryItems } from "@/data/siteData";

export default function Gallery() {
  return (
    <section className="bg-white px-7 py-28">
      <div className="flex items-end justify-between gap-8">
        <SectionTitle eyebrow="GALAXY İÇ MEKANLAR" title="Galeri" italic="Görünümleri" />
        <a href="#" className="hidden items-center gap-2 border-b border-black pb-2 text-lg md:flex">Galeriyi Keşfet <ArrowRight size={18} /></a>
      </div>
      <div className="mt-16 grid gap-4 md:grid-cols-4">
        {galleryItems.map((item) => (
          <article key={item.title} className="group relative h-[430px] overflow-hidden rounded-md">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/25" />
            <h3 className="absolute bottom-6 left-5 font-display text-xl font-bold text-white">{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
