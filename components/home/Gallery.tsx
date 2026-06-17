import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { galleryItems } from "@/data/siteData";
import { publicPath } from "@/lib/paths";

export default function Gallery() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-7 lg:py-28">
      <div className="flex items-end justify-between gap-8">
        <SectionTitle
          eyebrow="GALAXY İÇ MEKANLAR"
          title="Galeri"
          italic="Görünümleri"
        />

        <Link
          href="/projeler/galaxy"
          className="hidden items-center gap-2 border-b border-black pb-2 text-lg md:flex"
        >
          Galeriyi Keşfet
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryItems.map((item) => (
          <article
            key={item.title}
            className="group relative h-[320px] overflow-hidden rounded-md sm:h-[420px] lg:h-[430px]"
          >
            <Image
              src={publicPath(item.image)}
              alt={item.title}
              fill
              sizes="(max-width:768px) 100vw, 25vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/40" />

            <h3 className="absolute bottom-6 left-5 font-display text-xl font-bold text-white">
              {item.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}