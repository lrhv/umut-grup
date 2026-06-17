import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { deliveredProjects } from "@/data/siteData";

export default function DeliveredProjects() {
  return (
    <section id="delivered" className="px-4 py-20 sm:px-6 lg:px-7 lg:py-24">
      <SectionTitle
        eyebrow="PORTFÖYÜMÜZ"
        title="Teslim Edilen"
        italic="Projeler"
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {deliveredProjects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className={`group relative flex min-h-24 items-center justify-between overflow-hidden rounded-md border bg-white px-6 py-6 shadow-sm transition hover:border-[#d1ad43] hover:shadow-lg sm:px-8 ${
              project.active
                ? "border-[#d1ad43] shadow-lg"
                : "border-[#ded8cc]"
            }`}
          >
            <span className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-[#d1ad43] transition-all duration-500 group-hover:w-full" />
            <span className="absolute left-0 top-0 h-0 w-[2px] bg-[#d1ad43] transition-all delay-150 duration-300 group-hover:h-full" />
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#d1ad43] transition-all delay-150 duration-300 group-hover:h-full" />
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d1ad43] transition-all delay-300 duration-300 group-hover:w-1/2" />
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#d1ad43] transition-all delay-300 duration-300 group-hover:w-1/2" />

            <div className="relative z-10 flex items-center gap-5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#d1ad43]" />

              <div>
                <h3
                  className={`text-lg font-semibold ${
                    project.active ? "text-[#d1ad43]" : "text-[#111]"
                  }`}
                >
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-[#7b715f]">
                  {project.detail}
                </p>
              </div>
            </div>

            <ArrowRight
              size={19}
              className={`relative z-10 shrink-0 transition group-hover:translate-x-1 group-hover:text-[#d1ad43] ${
                project.active ? "text-[#d1ad43]" : "text-[#7b715f]"
              }`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}