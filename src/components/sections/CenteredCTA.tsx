import { Section } from "@/types/sections";
import Link from "next/link";
import { Button } from "../ui/button";

export function CenteredCTA({ section }: { section: Section }) {
  return (
    <section className="py-20 bg-[#212121]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {section.title && <h2 className="text-4xl mb-6">{section.title}</h2>}
          {section.description && (
            <p className="text-xl text-gray-400 mb-8">{section.description}</p>
          )}
          {section.buttons && (
            <div className="flex gap-4 justify-center">
              {section.buttons.map((button) => (
                <Button key={button.id} asChild appearance={button.appearance}>
                  <Link
                    href={button.url}
                    target={button.newTab ? "_blank" : "_self"}
                  >
                    {button.text}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
