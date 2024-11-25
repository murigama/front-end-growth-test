import { Section } from "@/app/types/sections";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import Icon from "../ui/Icon";
import DemoPlayer from "../app/DemoPlayer";

export function HeroVideo({ section }: { section: Section }) {
  return (
    <section className="relative bg-black min-h-[700px] max-h-full py-10 flex items-center justify-center">
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center">
          <header className="max-w-[530px] text-center">
            {section.preTitle && (
              <p className="text-lg mb-4 text-secondary">{section.preTitle}</p>
            )}
            {section.title && (
              <h1 className="text-5xl mb-6">{section.title}</h1>
            )}
            {section.description && (
              <p className="text-lg mb-8 text-gray-300">
                {section.description}
              </p>
            )}
          </header>
          {section.demo && <DemoPlayer audioUrl={section.demo.url} />}
          {section.buttons && (
            <div className="flex gap-4 justify-center">
              {section.buttons.map((button) => (
                <Button key={button.id} asChild appearance={button.appearance}>
                  <Link
                    href={button.url}
                    target={button.newTab ? "_blank" : "_self"}
                  >
                    {button.text}
                    {button.endIcon && (
                      <Icon name={button.endIcon} className="h-6 w-6" />
                    )}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
      {section.background && (
        <div className="absolute inset-0 z-0">
          <Image
            src={section.background.url}
            alt={section.background.alternativeText || ""}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </section>
  );
}
