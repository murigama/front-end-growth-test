import Link from "next/link";

export interface FooterMenu {
  id: number;
  title: string;
  link: string | null;
  openNewWindow: boolean;
  dropdown: {
    id: number;
    title: string;
    link: string;
    openNewWindow: boolean;
  }[];
}
interface MenuProps {
  menu: FooterMenu[];
}

export default function Menu({ menu }: MenuProps) {
  return (
    <nav>
      <ul className="grid grid-cols-1 lg:grid-cols-3">
        {menu.map((item) => (
          <li key={`menu-${item.id}`}>
            <h3 className="uppercase tracking-widest opacity-40 mb-5">
              {item.title}
            </h3>
            {item.dropdown.length > 0 && (
              <ul className="flex flex-col gap-4">
                {item.dropdown.map((subitem) => (
                  <li key={subitem.id} className="">
                    <Link
                      href={`submenu-${subitem.link}`}
                      target={subitem.openNewWindow ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-white opacity-60 hover:opacity-100"
                    >
                      {subitem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
