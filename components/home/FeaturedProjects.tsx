import { ArrowRight, MapPin } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { featuredProjects } from "@/data/siteData";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-white px-7 py-24">
      <div className="flex items-end justify-between gap-8">
        <SectionTitle eyebrow="SEÇKİN YAŞAM ALANLARI" title="Lüksün Zirvesinde" italic="Bir Yaşam" />
        <a href="#" className="hidden items-center gap-2 border-b border-black pb-2 text-lg md:flex">Tüm Projeleri Gör <ArrowRight size={18} /></a>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-md bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-80 overflow-hidden">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
              <span className="absolute left-4 top-4 rounded-md bg-[#d1ad43] px-5 py-2 text-sm font-semibold text-white">{project.type}</span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white/25 px-7 py-4 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">Detayları İncele</span>
            </div>
            <div className="p-7">
              <p className="mb-4 flex items-center gap-2 text-sm text-[#7b715f]"><MapPin size={16} className="text-[#d1ad43]" />{project.location}</p>
              <h3 className="font-display text-3xl font-bold text-[#07101c]">{project.title}</h3>
              <p className="mt-3 text-[#7b715f]">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
