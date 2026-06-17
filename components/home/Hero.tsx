import { ArrowRight, MessageCircle } from "lucide-react";
import { siteInfo } from "@/data/siteData";
import { publicPath } from "@/lib/paths";

function InstagramSvg({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={publicPath("/videos/hero-video.mp4")} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-[105vh] items-center m-5 px-4 py-28 sm:px-6 sm:py-32 lg:px-7">
        <div className="max-w-[820px]">
          <div className="mb-7 flex items-center gap-4 font-body text-[12px] tracking-[0.25em] text-[#c9a84c] sm:text-[14px] sm:tracking-[0.45em]">
            <span className="h-px w-9 bg-[#c9a84c] sm:w-11" />
            İNŞAAT VE GAYRİMENKUL DANIŞMANLIĞI
          </div>

          <p className="font-display text-[clamp(1rem,3vw,1.4rem)] font-normal tracking-[0.1em] text-white">
            UMUT GROUP
          </p>

          <h1 className="mt-5 font-display text-[clamp(2.8rem,7vw,5.5rem)] font-medium leading-[0.95] text-white">
            Geleceğe
            <br />
            <span className="italic text-[#c9a84c]">Umut&apos;la</span>{" "}
            Bakın
          </h1>

          <p className="mt-7 font-body text-[18px] tracking-[0.05em] text-white/70">
            Look to the future with hope.
          </p>

          <p className="mt-4 max-w-[760px] font-body text-[18px] leading-8 text-white/70 sm:text-[20px] sm:leading-9">
            Silivri&apos;de güvenli yatırımın adresi. Güven, vizyon ve değer
            üretme anlayışıyla seçkin gayrimenkul yatırımlarına yön veriyoruz.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-3 rounded-md bg-[#d1ad43] px-7 py-4 font-body text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#c39f35] sm:px-9 sm:py-5"
            >
              Projeleri İncele
              <ArrowRight size={20} />
            </a>

            <a
              href={siteInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md border border-white/25 bg-black/10 px-7 py-4 font-body text-[14px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black sm:px-9 sm:py-5"
            >
              <MessageCircle size={22} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-4 grid overflow-hidden rounded-md shadow-lg sm:mx-6 md:grid-cols-4 lg:mx-7">
        <a
          href="https://api.whatsapp.com/send?phone=905304173271&text=Merhaba%20Ben%20F%C4%B1rat%20nas%C4%B1l%20yard%C4%B1mc%C4%B1%20olabilirim"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25d366] px-5 py-3 text-center font-body text-sm font-semibold text-white transition-all duration-300 hover:brightness-95"
        >
          <p className="flex items-center justify-center gap-2">
            <MessageCircle size={20} />
            WhatsApp
          </p>
        </a>

        <a
          href="https://umutgroupgayrimenkul.sahibinden.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ffd400] px-5 py-3 text-center font-body text-sm font-semibold text-black transition-all duration-300 hover:brightness-95"
        >
          SAHİBİNDEN İLANLAR
        </a>

        <a
          href="https://umutgroupinsaat.lovable.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#213f75] px-5 py-3 text-center font-body text-sm font-semibold text-white transition-all duration-300 hover:brightness-95"
        >
          UMUT EMLAK İLANLAR
        </a>

        <a
          href="https://www.instagram.com/umut_group_insaat?igsh=bzFwN2dvaXVxNnJk&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-5 py-3 text-center font-body text-sm font-semibold text-white transition-all duration-300 hover:brightness-95"
        >
          <p className="flex items-center justify-center gap-2">
            <InstagramSvg />
            TAKİP ET
          </p>
        </a>
      </div>
    </section>
  );
}