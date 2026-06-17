import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/projectsData";
import { ArrowRight, MapPin } from "lucide-react";
import { publicPath } from "@/lib/paths";

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#101010]">
      <Header />

      <section className="relative flex min-h-[430px] items-end overflow-hidden px-4 pb-20 sm:px-6 lg:px-7">
        <Image
          src={publicPath("/images/about-hero.jpg")}
          alt="Umut Group Projeler"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-4 font-body text-sm tracking-[0.35em] text-[#d1ad43]">
            <span className="h-px w-10 bg-[#d1ad43]" />
            UMUT GROUP
          </div>

          <h1 className="font-display text-[clamp(3.2rem,8vw,6.5rem)] font-semibold leading-none text-white">
            Tüm <span className="italic text-[#d1ad43]">Projelerimiz</span>
          </h1>

          <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-white/75">
            Silivri’de güvenli yatırım, kaliteli yaşam ve değer kazanan
            projeler.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-7 lg:py-28">
        <div className="mb-14 flex items-end justify-between gap-8">
          <SectionTitle
            eyebrow="PROJELER"
            title="Seçkin Yaşam"
            italic="Alanları"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projeler/${project.slug}`}
              className="group overflow-hidden rounded-md bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={publicPath(project.heroImage)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />

                <span className="absolute left-4 top-4 rounded-md bg-[#d1ad43] px-5 py-2 text-sm font-semibold text-white">
                  {project.status}
                </span>

                <span className="absolute right-4 top-4 rounded-md bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                  {project.type}
                </span>

                <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-md bg-white/25 px-7 py-4 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  Detayları İncele <ArrowRight size={18} />
                </span>
              </div>

              <div className="p-7">
                <p className="mb-4 flex items-center gap-2 text-sm text-[#7b715f]">
                  <MapPin size={16} className="shrink-0 text-[#d1ad43]" />
                  {project.location}
                </p>

                <h2 className="font-display text-3xl font-bold text-[#07101c]">
                  {project.title}
                </h2>

                <p className="mt-3 text-[#7b715f]">{project.capacity}</p>

                <p className="mt-4 line-clamp-3 leading-7 text-[#7b715f]">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}