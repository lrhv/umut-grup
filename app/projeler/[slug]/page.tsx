import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getProjectBySlug, projects } from "@/data/projectsData";
import { ChevronLeft, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteInfo } from "@/data/siteData";
import ProjectGallerySlider from "@/components/project/ProjectGallerySlider";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = project.otherProjects
    .map((item) => getProjectBySlug(item))
    .filter(Boolean);

  return (
    <main className="overflow-hidden bg-white text-[#101010]">
      <Header />

      <section className="relative min-h-[520px] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex min-h-[520px] items-end px-4 pb-20 sm:px-6 lg:px-8">
          <div className="w-full max-w-[1440px]">
            <a
              href="/#projects"
              className="mb-8 flex items-center gap-2 font-body text-lg text-white/70 transition hover:text-white"
            >
              <ChevronLeft size={18} />
              Tüm Projeler
            </a>

            <div className="mb-8 flex flex-wrap gap-3">
              <span className="rounded-md bg-[#d1ad43] px-4 py-2 font-body text-sm font-semibold text-white">
                {project.status}
              </span>
              <span className="rounded-md bg-white/25 px-4 py-2 font-body text-sm font-semibold text-white">
                {project.type}
              </span>
              <span className="rounded-md bg-white/25 px-4 py-2 font-body text-sm font-semibold text-white">
                {project.capacity}
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.8rem,13vw,6.5rem)] font-semibold leading-none text-white">
              {project.title}
            </h1>

            <p className="mt-7 flex items-center gap-3 font-body text-lg text-white/70 sm:text-xl">
              <MapPin size={20} className="shrink-0" />
              <span className="break-words">{project.location}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,0.95fr)]">
          <div className="min-w-0">
            <ProjectGallerySlider images={project.gallery} />

            <div className="mt-14 sm:mt-16">
              <div className="mb-6 flex items-center gap-4 font-body text-sm tracking-[0.25em] text-[#c9a84c] sm:tracking-[0.35em]">
                <span className="h-px w-8 bg-[#c9a84c]" />
                PROJE HAKKINDA
              </div>

              <h2 className="font-display text-[clamp(2rem,9vw,3.5rem)] font-semibold">
                Lüksün Zirvesinde Bir Yaşam
              </h2>

              <p className="mt-6 max-w-[980px] font-body text-[17px] leading-8 text-[#6f6252] sm:text-[18px] sm:leading-9">
                {project.description}
              </p>
            </div>
          </div>

          <aside className="min-w-0 space-y-6">
            <div className="rounded-md bg-[#f6f3ed] p-6 sm:p-8">
              <h3 className="font-display text-[2rem] font-semibold sm:text-3xl">
                Proje Bilgileri
              </h3>

              <div className="mt-8 space-y-5 font-body text-[17px]">
                <InfoRow label="Proje" value={project.title} />
                <InfoRow label="Durum" value={project.status} gold />
                <InfoRow label="Tip" value={project.type} />
                <InfoRow label="Kapasite" value={project.capacity} />
                <InfoRow label="Konum" value={project.location} />
              </div>
            </div>

            <div className="rounded-md bg-[#181818] p-6 text-white sm:p-8">
              <h3 className="font-display text-[1.9rem] font-semibold leading-tight sm:text-2xl">
                Bilgi Almak İster misiniz?
              </h3>

              <p className="mt-4 font-body leading-7 text-white/60">
                Satış ekibimiz sorularınızı yanıtlamak için hazır.
              </p>

              <a
                href={siteInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex w-full min-w-0 items-center justify-center gap-3 rounded-md bg-[#25d366] px-4 py-4 text-center font-body font-semibold text-white"
              >
                <MessageCircle size={20} className="shrink-0" />
                <span className="break-words">WhatsApp ile Bilgi Al</span>
              </a>

              <a
                href={`tel:${siteInfo.phonePrimary.replaceAll(" ", "")}`}
                className="mt-4 flex w-full min-w-0 items-center justify-center gap-3 rounded-md border border-white/15 bg-white/10 px-4 py-4 text-center font-body font-semibold text-white"
              >
                <Phone size={20} className="shrink-0" />
                <span className="break-words">{siteInfo.phonePrimary}</span>
              </a>
            </div>

            <div className="rounded-md bg-[#f6f3ed] p-6 sm:p-8">
              <p className="font-body text-sm tracking-[0.2em] text-[#8a7c67]">
                SATIŞ OFİSİ
              </p>

              <p className="mt-5 flex min-w-0 gap-3 font-body text-[17px] leading-7">
                <MapPin size={20} className="mt-1 shrink-0 text-[#d1ad43]" />
                <span className="break-words">{siteInfo.address}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f6f3ed] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex items-center gap-4 sm:mb-14">
            <span className="h-px w-8 bg-[#d1ad43]" />
            <h2 className="font-display text-[clamp(2rem,9vw,3.6rem)] font-semibold">
              Diğer <span className="italic">Projelerimiz</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {otherProjects.map((item) =>
              item ? (
                <a
                  href={`/projeler/${item.slug}`}
                  key={item.slug}
                  className="group relative h-[240px] overflow-hidden rounded-md sm:h-[260px]"
                >
                  <Image
                    src={item.heroImage}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/35" />

                  <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-7 sm:left-7">
                    <p className="font-body text-sm text-[#d1ad43]">
                      {item.capacity}
                    </p>

                    <h3 className="mt-2 font-display text-3xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </a>
              ) : null
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function InfoRow({
  label,
  value,
  gold,
}: {
  label: string;
  value: string;
  gold?: boolean;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-1 border-b border-black/5 pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <span className="text-[#6f6252]">{label}</span>

      <strong
        className={`min-w-0 break-words text-left sm:text-right ${
          gold ? "text-[#d1ad43]" : "text-black"
        }`}
      >
        {value}
      </strong>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}