import { Section } from "@/types/sections";
import Container from "../ui/Container";
import Icon from "../ui/Icon";

export function CardContentGrid({ section }: { section: Section }) {
  if (!section.cards) return null;

  return (
    <section className="py-20">
      <Container>
        <header className="text-center mb-16">
          {section.preTitle && (
            <p className="text-secondary text-sm mb-4">{section.preTitle}</p>
          )}
          {section.title && (
            <h2 className="text-4xl text-[32px] mb-6">{section.title}</h2>
          )}
          {section.description && (
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {section.description}
            </p>
          )}
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {section.cards.map((card) => {
            return (
              <article key={card.id}>
                <div className="mb-6">
                  <Icon name={card.icon} className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-[#858585]">{card.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
