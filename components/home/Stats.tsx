import { Award, Clock3, Shield, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: "10+", label: "Teslim Edilen Proje" },
  { icon: Shield, value: "388+", label: "Teslim Edilen Daire" },
  { icon: Clock3, value: "16+", label: "Yıl Tecrübe" },
  { icon: TrendingUp, value: "Silivri", label: "Güvenli Yatırım Adresi" },
];

export default function Stats() {
  return (
    <section className="grid grid-cols-2 gap-8 bg-white px-7 py-16 md:grid-cols-4">
      {stats.map(({ icon: Icon, value, label }) => (
        <div key={label} className="text-center">
          <Icon className="mx-auto mb-5 text-[#d1ad43]" size={28} />
          <h3 className="font-display text-4xl font-bold text-[#07101c]">{value}</h3>
          <p className="mt-2 text-[#7b715f]">{label}</p>
        </div>
      ))}
    </section>
  );
}
