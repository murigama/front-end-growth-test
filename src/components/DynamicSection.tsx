import { Section } from "@/types/sections";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { Brands } from "@/components/sections/Brands";
import { CardContentGrid } from "@/components/sections/CardContentGrid";
import { Modules } from "@/components/sections/Modules";
import { CenteredCTA } from "@/components/sections/CenteredCTA";

const componentMap = {
  "sections.hero-video": HeroVideo,
  "sections.brands": Brands,
  "sections.card-content-grid": CardContentGrid,
  "sections.modules": Modules,
  "sections.centered-cta": CenteredCTA,
};

export function DynamicSection({ section }: { section: Section }) {
  const Component =
    componentMap[section.__component as keyof typeof componentMap];

  if (!Component) {
    console.warn(`No component found for ${section.__component}`);
    return null;
  }

  return <Component section={section} />;
}
