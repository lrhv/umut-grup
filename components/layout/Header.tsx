import Image from "next/image";
import { navLinks, siteInfo } from "@/data/siteData";
import { Menu, MessageCircle, Phone } from "lucide-react";
import { publicPath } from "@/lib/paths";
function InstagramSvg({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
    </svg>
  );
}

export default function Header() {
  return (
    <>
      <div className="hidden bg-[#181818] px-4 py-2 font-body text-xs text-[#d1ad43] md:block lg:px-7 lg:text-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-4 lg:gap-8">
            <span className="flex items-center gap-2">
              <Phone size={14} />
              {siteInfo.phonePrimary}
            </span>
            <span className="hidden items-center gap-2 sm:flex">
              <Phone size={14} />
              {siteInfo.phoneSecondary}
            </span>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <span className="text-[#9b907c]">{siteInfo.address}</span>
            <span className="flex items-center gap-2 font-medium">
              <InstagramSvg />
              {siteInfo.instagram}
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
        <div className="flex h-[72px] items-center justify-between px-4 sm:h-[78px] lg:h-[88px] lg:px-7">
          <a href="/" className="flex items-center">
            <Image
              src={publicPath("/images/logo.png")}
              alt="Umut Group"
              width={220}
              height={80}
              priority
              className="h-[52px] w-auto object-contain sm:h-[58px] lg:h-[68px]"
            />
          </a>

          <nav className="hidden items-center gap-5 text-[14px] xl:flex 2xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-body font-medium transition hover:text-[#d1ad43] ${
                  link.featured ? "text-[#d1ad43]" : "text-[#111]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={siteInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-md bg-[#d1ad43] px-5 py-3 font-body text-sm font-medium text-white transition hover:bg-[#c39f35] sm:flex"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#dcd4c8] xl:hidden"
              aria-label="Menüyü Aç"
            >
              <Menu size={23} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}