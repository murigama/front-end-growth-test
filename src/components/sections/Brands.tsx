"use client";
import { Section } from "@/types/sections";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
export function Brands({ section }: { section: Section }) {
  if (!section.brands) return null;

  return (
    <section className="relative pb-10">
      <span className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent"></span>
      <span className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent"></span>
      <Swiper
        slidesPerView={12}
        spaceBetween={24}
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[FreeMode]}
      >
        {section.brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="relative h-12 w-full">
              <Image
                src={brand.url}
                alt={brand.title}
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
