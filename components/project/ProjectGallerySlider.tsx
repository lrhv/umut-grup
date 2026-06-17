"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { publicPath } from "@/lib/paths";

type GalleryImage = {
  src: string;
  category: string;
  label: string;
};

export default function ProjectGallerySlider({
  images,
}: {
  images: GalleryImage[];
}) {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  const categories = useMemo(() => {
    return ["Tümü", ...Array.from(new Set(images.map((img) => img.category)))];
  }, [images]);

  const filteredImages =
    activeCategory === "Tümü"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const activeImage = filteredImages[activeIndex] ?? filteredImages[0];

  function changeCategory(category: string) {
    setActiveCategory(category);
    setActiveIndex(0);
  }

  function nextImage() {
    setActiveIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  }

  function prevImage() {
    setActiveIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  }

  useEffect(() => {
    const container = thumbnailsRef.current;
    const activeThumb = container?.children[activeIndex] as HTMLElement;

    if (container && activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex, activeCategory]);

  if (!activeImage) return null;

  return (
    <div className="w-full min-w-0 overflow-hidden">
      <div className="relative h-[320px] overflow-hidden rounded-md sm:h-[520px] lg:h-[620px]">
        <Image
          src={publicPath(activeImage.src)}
          alt={activeImage.label}
          fill
          priority
          className="object-cover"
        />

        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow transition hover:bg-[#d1ad43] hover:text-white sm:left-4 sm:h-12 sm:w-12"
          aria-label="Önceki görsel"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow transition hover:bg-[#d1ad43] hover:text-white sm:right-4 sm:h-12 sm:w-12"
          aria-label="Sonraki görsel"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {filteredImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index
                  ? "w-7 bg-[#d1ad43]"
                  : "w-2 bg-white/70"
              }`}
              aria-label={`Görsel ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 w-full overflow-hidden">
        <div
          ref={thumbnailsRef}
          className="flex gap-3 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredImages.map((img, index) => (
            <button
              key={`${img.src}-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`relative h-[92px] min-w-[145px] shrink-0 overflow-hidden rounded-md border transition sm:h-[120px] sm:min-w-[190px] lg:h-[130px] lg:min-w-[210px] ${
                activeIndex === index
                  ? "border-[#d1ad43] opacity-100"
                  : "border-transparent opacity-55"
              }`}
            >
              <Image
                src={publicPath(img.src)}
                alt={img.label}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 w-full overflow-hidden">
        <div className="flex gap-3 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap md:overflow-visible md:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => changeCategory(category)}
              className={`shrink-0 rounded-md border px-6 py-3 font-body text-[16px] font-medium transition ${
                activeCategory === category
                  ? "border-[#d1ad43] bg-[#d1ad43] text-white"
                  : "border-[#ded8cc] bg-white text-[#6f6252] hover:border-[#d1ad43]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}