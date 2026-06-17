import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "gold" | "dark" | "outline" | "green";
  arrow?: boolean;
};

const variants = {
  gold: "bg-[#d1ad43] text-white hover:bg-[#c29c32]",
  dark: "bg-[#171717] text-white hover:bg-black",
  outline: "border border-white/30 bg-black/20 text-white hover:bg-white/10",
  green: "bg-[#25d366] text-white hover:bg-[#1fbd5a]",
};

export default function Button({ children, variant = "gold", arrow, className = "", ...props }: ButtonProps) {
  return (
    <a {...props} className={`inline-flex items-center justify-center gap-3 rounded-md px-9 py-5 text-base font-semibold transition ${variants[variant]} ${className}`}>
      {children}
      {arrow && <ArrowRight size={19} />}
    </a>
  );
}
