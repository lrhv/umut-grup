import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <section id="about" className="grid gap-20 px-7 py-28 lg:grid-cols-2">
      <div className="relative">
        <img src="/images/inci/hero.jpg" alt="Umut Group İnşaat" className="h-[575px] w-full rounded-md object-cover" />
        <div className="absolute bottom-[-25px] right-[-25px] rounded-md bg-[#d1ad43] p-8 text-white shadow-2xl max-md:right-5">
          <strong className="font-display text-4xl">16+</strong>
          <p className="mt-2">Yıllık Tecrübe</p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <SectionTitle eyebrow="HAKKIMIZDA" title="UMUT GROUP" italic="İnşaat ve Gayrimenkul" />
        <p className="mt-8 text-lg leading-8 text-[#7b715f]">Güven, vizyon ve değer üretme anlayışıyla kurulan UMUT GROUP, İstanbul Silivri&apos;de seçkin gayrimenkul yatırımlarına yön veren güçlü bir markadır.</p>
        <p className="mt-5 text-lg leading-8 text-[#7b715f]">Temelleri Alev Kardeşler&apos;in 16 yıllık inşaat tecrübesine dayanan firmamız; farklı bölgelerde proje disiplini ve yatırım stratejisi konusundaki uzmanlığıyla sektörde fark yaratmaktadır.</p>
        <p className="mt-5 text-lg leading-8 text-[#7b715f]">Bizim için gayrimenkul yalnızca bir yapı değil, doğru planlanmış ve modeller birbiriyle değer bulacak bir güven mirasıdır.</p>
        <Button href="#" variant="dark" arrow className="mt-9 w-fit">Daha Fazla Öğren</Button>
      </div>
    </section>
  );
}
