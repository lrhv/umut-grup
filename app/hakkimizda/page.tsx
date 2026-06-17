import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { siteInfo } from "@/data/siteData";

export default function AboutPage() {
  return (
    <main className="bg-[#f6f3ed] text-[#101010]">
      <Header />

      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden pt-0">
        <Image
          src="/images/about-hero.jpg"
          alt="Hakkımızda"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center">
          <div className="mb-7 flex items-center justify-center gap-4 font-body text-sm tracking-[0.45em] text-[#c9a84c]">
            <span className="h-px w-10 bg-[#c9a84c]" />
            KURUMSAL
          </div>

          <h1 className="font-display text-[clamp(3.5rem,7vw,5.6rem)] font-semibold leading-none text-white">
            Hakkımızda
          </h1>
        </div>
      </section>

      <section className="bg-white px-6 py-28 lg:px-8">
  <div className="mx-auto grid max-w-[1440px] items-start gap-20 lg:grid-cols-2">
    <div className="relative">
      <div className="relative min-h-[680px] overflow-hidden rounded-md bg-[#2e332e]">
        <Image
          src="/images/about.jpg"
          alt="Umut Group"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-[-34px] right-[-20px] rounded-md bg-[#d1ad43] px-10 py-8 text-white shadow-2xl">
        <div className="font-display text-5xl font-semibold">16+</div>
        <p className="mt-3 font-body text-base">Yıllık Tecrübe</p>
      </div>
    </div>

    <div className="pt-4">
      <div className="mb-7 flex items-center gap-4 font-body text-sm tracking-[0.45em] text-[#c9a84c]">
        <span className="h-px w-10 bg-[#c9a84c]" />
        UMUT GROUP
      </div>

      <h2 className="font-display text-[clamp(3rem,5vw,5rem)] font-semibold leading-[1.02]">
        İnşaat ve Gayrimenkul
        <br />
        <span className="italic">Danışmanlığı</span>
      </h2>

      <div className="mt-9 space-y-5 font-body text-[18px] leading-8 text-[#3d3d3d]">
        <p>
          Güven, vizyon ve değer üretme anlayışıyla kurulan UMUT GROUP,
          İstanbul Silivri&apos;de seçkin gayrimenkul yatırımlarına yön veren
          güçlü bir markadır.
        </p>

        <p>
          Temelleri Alev Kardeşler&apos;in 16 yıllık inşaat tecrübesine
          dayanan firmamız; farklı bölgelerde, proje disiplini ve yatırım
          stratejisi konusundaki uzmanlığıyla sektörde fark yaratmaktadır.
        </p>

        <p>
          Bizim için gayrimenkul yalnızca bir yapı değil, doğru planlanmış ve
          modeller birbiriyle değer bulacak bir değer ve güven mirasıdır.
        </p>

        <p>
          Silivri&apos;nin hali gelişen ve stratejik potansiyeli taşıyan
          bölgelerinde:
        </p>
      </div>

      <div className="mt-7 space-y-4 font-body text-[18px]">
        {[
          "Değer odaklı arsa yatırımları",
          "Mimari ve estetik konut projeleri",
          "Seçkin yatırım danışmanlığı",
          "Ön satış ve proje geliştirme projeleri",
        ].map((item) => (
          <div key={item} className="flex items-center gap-4">
            <CheckCircle2 size={20} className="shrink-0 text-[#d1ad43]" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-5 font-body text-[18px] leading-8 text-[#3d3d3d]">
        <p>
          Sürekli yatırımcılarımızı doğru lokasyon, doğru zaman ve doğru proje
          ile buluşturuyoruz.
        </p>

        <p>
          Her projede; estetik, kalite ve sürdürülebilir kazanç ilkelerini esas
          alıyoruz. Sürecin ilk adımından teslim aşamasına kadar tüm detayları
          profesyonel bir titizlikle yönetiyoruz.
        </p>

        <p>
          UMUT GROUP olarak amacımız yalnızca satış yapmak değil,
          yatırımcılarımıza değer kazandırarak güçlü bir gelecek inşa etmektir.
        </p>

        <p>
          Eğer siz de güvenilir, prestijli ve kazançlı bir yatırım arıyorsanız;
          doğru yerdesiniz.
        </p>

        <p className="font-display text-xl italic text-[#c9a84c]">
          Geleceğe umutla, güvenle ve sağlam adımlarla ilerleyin. UMUT GROUP
          yanınızdır.
        </p>
      </div>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <a
          href="/#projects"
          className="flex items-center justify-center gap-3 rounded-md bg-[#d1ad43] px-8 py-4 font-body font-semibold text-white transition hover:bg-[#c39f35]"
        >
          Projelerimizi Gör
          <ArrowRight size={20} />
        </a>

        <a
          href={siteInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-md bg-[#25d366] px-8 py-4 font-body font-semibold text-white transition hover:brightness-95"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>

      <section className="bg-[#181818] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1440px] gap-10 text-center md:grid-cols-4">
          {[
            ["16+", "Yıllık Tecrübe"],
            ["6", "Teslim Edilen Proje"],
            ["288+", "Teslim Edilen Daire"],
            ["Silivri", "Güvenli Yatırım"],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="font-display text-5xl font-semibold text-[#d1ad43]">
                {num}
              </div>
              <p className="mt-3 font-body text-lg text-white/60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center">
            <div className="mb-7 flex items-center justify-center gap-4 font-body text-sm tracking-[0.45em] text-[#c9a84c]">
              <span className="h-px w-10 bg-[#c9a84c]" />
              SİLİVRİ&apos;DE NEDEN YATIRIM?
              <span className="h-px w-10 bg-[#c9a84c]" />
            </div>

            <h2 className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-semibold leading-tight">
              Silivri&apos;nin Stratejik
              <br />
              <span className="italic text-[#c9a84c]">Geleceği</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              [
                "Değer Odaklı Arsa",
                "Silivri'nin gelişen bölgelerinde konumlanan arsalarımız yatırımcılarına yüksek değer artışı sunuyor.",
              ],
              [
                "Mimari Estetik",
                "Her projemiz; modern mimari anlayışı, kaliteli malzeme ve işçilikle hayata geçiriliyor.",
              ],
              [
                "Seçkin Danışmanlık",
                "16 yıllık tecrübemizle yatırımcılarımıza doğru lokasyon, doğru zaman ve doğru proje rehberliği yapıyoruz.",
              ],
            ].map(([title, text], i) => (
              <div
                key={title}
                className={`rounded-md border bg-white px-10 py-10 shadow-sm ${
                  i === 1 ? "border-[#d1ad43] shadow-lg" : "border-[#e5ded3]"
                }`}
              >
                <span className="mb-8 block h-px w-12 bg-[#d1ad43]" />
                <h3 className="font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-5 font-body text-[17px] leading-8 text-[#6f6252]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}