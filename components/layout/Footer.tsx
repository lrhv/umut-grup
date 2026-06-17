import Link from "next/link";
import { deliveredProjects, featuredProjects, siteInfo } from "@/data/siteData";
import { MapPin, MessageCircle, Phone, TrendingUp } from "lucide-react";

function InstagramSvg({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.75 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-[#847966]">
      <div className="grid gap-14 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-7 lg:py-20">
        <div>
          <Link href="/" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-[#d1ad43] text-[#d1ad43]">
              <TrendingUp size={24} />
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                {siteInfo.brand}
              </h3>
              <p className="text-xs tracking-[4px]">{siteInfo.subtitle}</p>
            </div>
          </Link>

          <p className="mt-8 max-w-xs leading-7">
            Geleceğe umutla bakın. Silivri&apos;de güvenli yatırımın adresi.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="https://www.instagram.com/umut_group_insaat?igsh=bzFwN2dvaXVxNnJk&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-[#d1ad43] transition hover:border-[#d1ad43] hover:bg-[#d1ad43] hover:text-white"
            >
              <InstagramSvg size={18} />
            </a>

            <a
              href={siteInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-[#d1ad43] transition hover:border-[#25d366] hover:bg-[#25d366] hover:text-white"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-8 text-sm font-bold tracking-[3px] text-white">
            PROJELERİMİZ
          </h4>

          <div className="space-y-4">
            {featuredProjects.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="block transition hover:text-[#d1ad43]"
              >
                {p.title}
              </Link>
            ))}

            <Link
              href="/projeler/gozde-sitesi"
              className="block transition hover:text-[#d1ad43]"
            >
              Gözde Sitesi
            </Link>

            <Link
              href="/projeler/mercan-park"
              className="block transition hover:text-[#d1ad43]"
            >
              Mercan Park
            </Link>

            <Link
              href="/projeler/yeni-proje-1"
              className="block transition hover:text-[#d1ad43]"
            >
              Yeni Proje 1
            </Link>

            <Link
              href="/projeler/yeni-proje-2"
              className="block transition hover:text-[#d1ad43]"
            >
              Yeni Proje 2
            </Link>
          </div>
        </div>

        <div>
          <h4 className="mb-8 text-sm font-bold tracking-[3px] text-white">
            TESLİM EDİLEN PROJELER
          </h4>

          <div className="space-y-4">
            {deliveredProjects.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="block transition hover:text-[#d1ad43]"
              >
                {p.title} — {p.detail}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-8 text-sm font-bold tracking-[3px] text-white">
            SATIŞ OFİSİ
          </h4>

          <p className="flex gap-3 leading-7">
            <MapPin className="mt-1 shrink-0 text-[#d1ad43]" size={18} />
            {siteInfo.address}
          </p>

          <a
            href={`tel:${siteInfo.phonePrimary.replaceAll(" ", "")}`}
            className="mt-7 flex items-center gap-3 transition hover:text-[#d1ad43]"
          >
            <Phone size={18} className="text-[#d1ad43]" />
            {siteInfo.phonePrimary}
          </a>

          <a
            href={`tel:${siteInfo.phoneSecondary.replaceAll(" ", "")}`}
            className="mt-3 flex items-center gap-3 transition hover:text-[#d1ad43]"
          >
            <Phone size={18} className="text-[#d1ad43]" />
            {siteInfo.phoneSecondary}
          </a>

          <a
            href="https://www.instagram.com/umut_group_insaat?igsh=bzFwN2dvaXVxNnJk&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 flex items-center gap-3 transition hover:text-[#d1ad43]"
          >
            <InstagramSvg size={18} className="text-[#d1ad43]" />
            {siteInfo.instagram}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-7 text-sm sm:px-6 lg:px-7">
        © Umut Group İnşaat ve Gayrimenkul Danışmanlığı. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}