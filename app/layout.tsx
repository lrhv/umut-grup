import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umut Group İnşaat & Gayrimenkul",
  description: "Silivri'de güvenli yatırımın adresi Umut Group.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
