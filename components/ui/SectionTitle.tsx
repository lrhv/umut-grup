type SectionTitleProps = {
  eyebrow: string;
  title: string;
  italic: string;
  light?: boolean;
};

export default function SectionTitle({ eyebrow, title, italic, light }: SectionTitleProps) {
  return (
    <div>
      <div className="mb-7 flex items-center gap-4 text-sm font-medium tracking-[7px] text-[#d1ad43]">
        <span className="h-px w-8 bg-[#d1ad43]" />
        {eyebrow}
      </div>
      <h2 className={`font-display text-5xl font-bold leading-[1.05] md:text-6xl ${light ? "text-white" : "text-[#07101c]"}`}>
        {title}
        <br />
        <span className="font-display italic font-normal text-[#d1ad43]">{italic}</span>
      </h2>
    </div>
  );
}
