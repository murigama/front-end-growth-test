"use client";

import { useRouter, usePathname } from "next/navigation";

export default function SwitchLanguage() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (event) => {
    const selectedLocale = event.target.value;
    const newPath =
      selectedLocale === "en"
        ? pathname.replace(/^\/(pt)/, "")
        : `/pt${pathname === "/" ? "" : pathname}`;

    router.push(newPath);
  };
  const currentLocale = pathname.startsWith("/pt") ? "pt" : "en";

  return (
    <div className="max-w-[210px] mt-8">
      <label htmlFor="languages" className="sr-only">
        Language:
      </label>
      <select
        value={currentLocale}
        className="bg-white/10 text-white text-sm rounded-lg h-11 block w-full py-2 px-3"
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
}
