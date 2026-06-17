import { MapPin, MessageCircle, Phone } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { siteInfo } from "@/data/siteData";

export default function Office() {
  return (
    <section id="office" className="grid gap-16 px-7 py-24 lg:grid-cols-2">
      <div>
        <SectionTitle eyebrow="SATIŞ OFİSİ" title="Hayalinizdeki Evi" italic="Birlikte Bulalım" />
        <p className="mt-8 text-lg text-[#7b715f]">{siteInfo.address}</p>
        <div className="mt-8 space-y-4 text-lg">
          <p className="flex items-center gap-4"><Phone className="text-[#d1ad43]" />{siteInfo.phonePrimary}</p>
          <p className="flex items-center gap-4"><Phone className="text-[#d1ad43]" />{siteInfo.phoneSecondary}</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={siteInfo.whatsappUrl} variant="green"><MessageCircle size={20} /> WhatsApp ile Bilgi Al</Button>
          <Button href="https://maps.google.com/?q=Silivri" variant="dark"><MapPin size={20} /> Konumu Gör</Button>
        </div>
      </div>
      <div className="h-[400px] overflow-hidden rounded-md bg-white shadow">
        <iframe src="https://www.google.com/maps?q=Silivri&output=embed" className="h-full w-full" loading="lazy" title="Umut Group Konum" />
      </div>
    </section>
  );
}
