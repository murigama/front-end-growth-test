"use client";

import { Section } from "@/types/sections";
import Link from "next/link";
import { Button } from "../ui/button";
import Icon from "../ui/Icon";
import Container from "../ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Navigation } from "swiper/modules";
import SliderNavigation from "../app/SliderNavigation";

export function Modules({ section }: { section: Section }) {
  if (!section.cards) return null;

  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 flex items-center justify-between">
          <header>
            {section.preTitle && (
              <p className="text-blue-400 mb-4">{section.preTitle}</p>
            )}
            {section.title && (
              <h2 className="text-4xl mb-6">{section.title}</h2>
            )}
            {section.description && (
              <p className="text-xl text-gray-400 max-w-3xl">
                {section.description}
              </p>
            )}
          </header>
          <SliderNavigation />
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="!overflow-visible lg:!overflow-hidden"
        >
          {section.cards.map((card) => (
            <SwiperSlide key={card.id} className="!h-auto">
              <article className="p-5 rounded-xl bg-[#212121] h-full flex flex-col items-start">
                <header className="mb-5 h-full">
                  <h3 className="text-xl mb-3">{card.title}</h3>
                  <p className="text-gray-400">{card.description}</p>
                </header>
                {card.button && (
                  <Button
                    key={card.button.id}
                    asChild
                    appearance="link"
                    className="text-secondary"
                  >
                    <Link href={card.button.url}>
                      {card.button.text}
                      <Icon name="arrow-up" className="h-6 w-6" />
                    </Link>
                  </Button>
                )}
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
