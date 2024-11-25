import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import Link from "next/link";

interface NavigationProps {
  isOpen: boolean;
}

const menuItems = [
  { name: "Modules", url: "#" },
  { name: "Resources", url: "#" },
  { name: "Pricing", url: "#" },
  { name: "Contact", url: "#" },
  { name: "sales", url: "#" },
];

export default function Navigation({ isOpen }: NavigationProps) {
  let classes =
    "absolute lg:static top-[90px] bg-black z-50 flex flex-col lg:flex-row items-start lg:items-center justify-between w-full transition-all duration-300 ease-in-out translate-x-[-100%] lg:translate-x-0";
  isOpen ? (classes += " translate-x-0") : (classes += " translate-x-[-100%]");
  return (
    <nav className={classes}>
      <div className="lg:mx-auto">
        <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                className="text-neutral-600 hover:text-white p-3 text-sm"
                href={item.url}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Button asChild appearance="ghost">
        <Link href="/login">
          Login <Icon name="arrow-right" />
        </Link>
      </Button>
    </nav>
  );
}
