import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { publicPath } from "@/lib/paths";

export default function About() {
  return (
    <section
      id="about"
      className="grid gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-7 lg:py-28"
    >
      <div className="relative">
        <img
          src={publicPath("/images/projects/inci/hero.jpg")}
          alt="Umut Group İnşaat"
          className="h-[420px] w-full rounded-md object-cover sm:h-[500px] lg:h-[575px]"
        />

        <div className="absolute bottom-5 right-5 rounded-md bg-[#d1ad43] p-6 text-white shadow-2xl sm:bottom-[-25px] sm:right-[-25px] sm:p-8">
          <strong className="font-display text-4xl">16+</strong>

          <p className="mt-2 font-body">Yıllık Tecrübe</p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <SectionTitle
          eyebrow="HAKKIMIZDA"
          title="UMUT GROUP"
          italic="İnşaat ve Gayrimenkul"
        />

        <p className="mt-8 text-lg leading-8 text-[#7b715f]">
          Güven, vizyon ve değer üretme anlayışıyla kurulan UMUT GROUP,
          İstanbul Silivri'de seçkin gayrimenkul yatırımlarına yön veren güçlü
          bir markadır.
        </p>

        <p className="mt-5 text-lg leading-8 text-[#7b715f]">
          Temelleri Alev Kardeşler'in 16 yıllık inşaat tecrübesine dayanan
          firmamız; farklı bölgelerde proje disiplini ve yatırım stratejisi
          konusundaki uzmanlığıyla sektörde fark yaratmaktadır.
        </p>

        <p className="mt-5 text-lg leading-8 text-[#7b715f]">
          Bizim için gayrimenkul yalnızca bir yapı değil, doğru planlanmış ve
          gelecek nesillere değer katacak bir güven mirasıdır.
        </p>

        <Button
          href="/hakkimizda"
          variant="dark"
          arrow
          className="mt-9 w-fit"
        >
          Daha Fazla Öğren
        </Button>
      </div>
    </section>
  );
}