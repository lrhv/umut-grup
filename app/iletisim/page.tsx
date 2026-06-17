import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { siteInfo } from "@/data/siteData";

export default function ContactPage() {
  return (
    <main className="bg-[#f6f3ed] text-[#101010]">
      <Header />

      <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden">
        <Image
          src="/images/projects/inci/hero.jpg"
          alt="Satış Ofisi"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-4 text-center">
          <div className="mb-6 flex items-center justify-center gap-4 font-body text-sm tracking-[0.45em] text-[#d1ad43]">
            <span className="h-px w-10 bg-[#d1ad43]" />
            BİZE ULAŞIN
          </div>

          <h1 className="font-display text-[clamp(3.5rem,7vw,5.6rem)] font-semibold leading-none text-white">
            Satış Ofisi
          </h1>

          <p className="mt-6 font-display text-xl italic text-white/75">
            Geleceğe Umut&apos;la Bakın — Look to the future with hope.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 lg:px-7">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-4">
          <InfoCard icon={<MessageCircle />} title="WhatsApp" text="0530 417 32 71
" green />
          <InfoCard icon={<Phone />} title="Telefon 1" text="0538 798 34 48
" />
          <InfoCard icon={<Phone />} title="Telefon 2" text="0546 817 14 10" />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-7">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2">
          <div className="rounded-md border border-[#e1d8ca] bg-white p-8 shadow-sm sm:p-12">
            <div className="mb-8 flex items-center gap-4 font-body text-sm tracking-[0.35em] text-[#d1ad43]">
              <span className="h-px w-8 bg-[#d1ad43]" />
              İLETİŞİM FORMU
            </div>

            <h2 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-semibold">
              Mesaj <span className="italic">Gönderin</span>
            </h2>

            <form className="mt-10 space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="AD SOYAD *" placeholder="Adınız Soyadınız" />
                <Field label="TELEFON *" placeholder="05XX XXX XX XX" />
              </div>

              <Field label="E-POSTA" placeholder="email@adresiniz.com" />

              <div>
                <label className="mb-3 block font-body text-sm tracking-[0.12em] text-[#6f6252]">
                  İLGİLENDİĞİNİZ PROJE
                </label>
                <select className="h-[58px] w-full rounded-md border border-[#ded8cc] bg-[#f6f3ed] px-5 font-body text-[17px] outline-none transition focus:border-[#d1ad43]">
                  <option>Proje Bilgi Talebi</option>
                  <option>Projeler Galaxy</option>
                  <option>İnci Konakları</option>
                  <option>Huzur Konakları</option>
                  <option>Gözde Sitesi</option>
                  <option>Mercan Park</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block font-body text-sm tracking-[0.12em] text-[#6f6252]">
                  MESAJINIZ
                </label>
                <textarea
                  placeholder="Merak ettiğiniz konuları buraya yazabilirsiniz..."
                  className="min-h-[135px] w-full resize-none rounded-md border border-[#ded8cc] bg-[#f6f3ed] px-5 py-4 font-body text-[17px] outline-none transition focus:border-[#d1ad43]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#d1ad43] px-8 py-5 font-body text-lg font-semibold text-white transition hover:bg-[#c39f35]"
              >
                <Send size={19} />
                Mesajı Gönder
              </button>

              <p className="text-center font-body text-[#6f6252]">
                veya direkt{" "}
                <a
                  href={siteInfo.whatsappUrl}
                  target="_blank"
                  className="font-semibold text-[#25d366]"
                >
                  WhatsApp&apos;tan yazın →
                </a>
              </p>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-md border border-[#e1d8ca] bg-white p-8 shadow-sm sm:p-10">
              <h2 className="font-display text-3xl font-semibold">
                İletişim Bilgileri
              </h2>

              <div className="mt-8 space-y-7">
                <ContactRow icon={<MapPin />} title="ADRES" text={siteInfo.address} />
                <ContactRow icon={<Phone />} title="TELEFON 1" text="0538 798 34 48
" />
                <ContactRow icon={<Phone />} title="TELEFON 2" text="0546 817 14 10" />
                
                <ContactRow icon={<Clock3 />} title="ÇALIŞMA SAATLERİ" text="Hafta içi: 09:00 – 18:00" />
              </div>
            </div>

            <div className="rounded-md border border-[#e1d8ca] bg-white p-8 shadow-sm">
              <h2 className="font-display text-3xl font-semibold">Sosyal Medya</h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <SocialBox icon={<MessageCircle />} title="WhatsApp" />
              </div>
            </div>

            <div className="rounded-md bg-[#181818] p-8 text-white sm:p-10">
              <p className="font-body text-white/60">En hızlı yanıt için</p>

              <h2 className="mt-3 font-display text-3xl font-semibold">
                WhatsApp&apos;tan Yazın
              </h2>

              <a
                href={siteInfo.whatsappUrl}
                target="_blank"
                className="mt-7 flex items-center justify-between rounded-md bg-[#25d366] px-6 py-5 font-body text-lg font-semibold text-white"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle />
                  0538 798 34 48

                </span>
                <ChevronRight />
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=905468171410"
                target="_blank"
                className="mt-3 flex items-center justify-between rounded-md border border-white/15 px-6 py-5 font-body text-lg font-semibold text-white"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle />
                  0546 817 14 10
                </span>
                <ChevronRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-7">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2">
          <div className="h-[420px] overflow-hidden rounded-md border border-[#e1d8ca] bg-white shadow-sm">
            <iframe
              src="https://www.google.com/maps?q=Yeni%20Mah.%20Mehmet%20Silivri%20Caddesi%20Akta%C5%9F%20Sok.%20No%3A1%20Silivri&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-md bg-[#181818] p-10 text-white">
            <Image
              src="/images/contact-office.jpg"
              alt="Satış Ofisi"
              fill
              className="object-cover opacity-35"
            />

            <div className="relative z-10">
              <h2 className="font-display text-4xl font-semibold text-[#d1ad43]">
                Satış Ofisi
              </h2>

              <div className="mt-8 space-y-5 font-body text-lg">
                <p className="flex gap-3">
                  <MapPin className="text-[#d1ad43]" />
                  Yeni Mah. Mehmet Silivri Caddesi <br />
                  Aktaş Sok. No:1 Silivri
                </p>

                <p className="flex gap-3">
                  <Phone className="text-[#d1ad43]" />
                  0538 798 34 48
 <br />
                  0546 817 14 10
                </p>

                <p className="flex gap-3">
                  instagram: umut_group_insaat
                </p>

                <p className="flex gap-3">
                  <Clock3 className="text-[#d1ad43]" />
                  Hft içi 09:00–18:00 · Cmt 10:00–16:00
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteInfo.whatsappUrl}
                  target="_blank"
                  className="flex items-center justify-center gap-3 rounded-md bg-[#25d366] px-8 py-4 font-body font-semibold text-white"
                >
                  <MessageCircle />
                  WhatsApp
                </a>

                <a
                  href="tel:05318181446"
                  className="flex items-center justify-center gap-3 rounded-md border border-white/25 bg-white/10 px-8 py-4 font-body font-semibold text-white"
                >
                  <Phone />
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function InfoCard({
  icon,
  title,
  text,
  green,
  pink,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  green?: boolean;
  pink?: boolean;
}) {
  return (
    <div className="flex items-center gap-5 rounded-md border border-[#e1d8ca] bg-white p-6">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full ${
          green
            ? "bg-green-100 text-[#25d366]"
            : pink
            ? "bg-pink-100 text-pink-500"
            : "bg-[#f6f3ed] text-[#d1ad43]"
        }`}
      >
        {icon}
      </div>

      <div>
        <p className="font-body text-[#6f6252]">{title}</p>
        <p className="mt-1 font-body text-lg font-semibold">{text}</p>
      </div>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-3 block font-body text-sm tracking-[0.12em] text-[#6f6252]">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="h-[58px] w-full rounded-md border border-[#ded8cc] bg-[#f6f3ed] px-5 font-body text-[17px] outline-none transition focus:border-[#d1ad43]"
      />
    </div>
  );
}

function ContactRow({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f6f3ed] text-[#d1ad43]">
        {icon}
      </div>
      <div>
        <p className="font-body text-sm tracking-[0.12em] text-[#7c6f5d]">
          {title}
        </p>
        <p className="mt-2 font-body text-lg font-medium">{text}</p>
      </div>
    </div>
  );
}

function SocialBox({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <a className="flex min-h-[100px] flex-col items-center justify-center rounded-md border border-[#ded8cc] bg-white text-[#7c6f5d] transition hover:border-[#d1ad43] hover:text-[#d1ad43]">
      <div>{icon}</div>
      <p className="mt-3 font-body">{title}</p>
    </a>
  );
}