import { DynamicSection } from "@/components/DynamicSection";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function Page({ params: { locale } }) {
  const data = await fetch(`http://127.0.0.1:4000/pages?locale=${locale}`);
  const pages = await data.json();
  const homepage = pages[0];
  const sections = homepage.contentSections;

  return (
    <main className="flex flex-col gap-12">
      {sections.map((section: any) => (
        <DynamicSection key={section.id} section={section} />
      ))}
    </main>
  );
}
