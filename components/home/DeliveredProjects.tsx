import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { deliveredProjects } from "@/data/siteData";

export default function DeliveredProjects() {
  return (
    <section id="delivered" className="px-7 py-24">
      <SectionTitle eyebrow="PORTFÖYÜMÜZ" title="Teslim Edilen" italic="Projeler" />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {deliveredProjects.map((project) => (
          <article key={project.title} className={`flex min-h-24 items-center justify-between rounded-md border bg-white px-8 py-6 shadow-sm transition hover:border-[#d1ad43] hover:shadow-lg ${project.active ? "border-[#d1ad43] shadow-lg" : "border-[#ded8cc]"}`}>
            <div className="flex items-center gap-5">
              <span className="h-2 w-2 rounded-full bg-[#d1ad43]" />
              <div>
                <h3 className={`text-lg font-semibold ${project.active ? "text-[#d1ad43]" : "text-[#111]"}`}>{project.title}</h3>
                <p className="mt-1 text-sm text-[#7b715f]">{project.detail}</p>
              </div>
            </div>
            {project.active && <ArrowRight size={19} className="text-[#d1ad43]" />}
          </article>
        ))}
      </div>
    </section>
  );
}
