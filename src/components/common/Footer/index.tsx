import Container from "@/components/ui/Container";
import Logo from "./Logo";
import SwitchLanguage from "./SwitchLanguage";
import Social from "./Social";
import Menu, { FooterMenu } from "./Menu";

interface FooterProps {
  helpText: string;
  copyrightText: string;
  social: object;
  footerMenu: FooterMenu[];
}

export default async function Footer({
  helpText,
  copyrightText,
  social,
  footerMenu = [],
}: FooterProps) {
  return (
    <footer className="py-20 relative bg-footer">
      <Container>
        <div className="grid grid-cols-2 gap-8 mb-12">
          <div>
            <Logo />
            <p className="mt-2">{helpText}</p>
            <SwitchLanguage />
            <Social items={social} />
          </div>
          <div>
            <Menu menu={footerMenu} />
          </div>
        </div>
        <div className="mt-4 border-t flex flex-col lg:flex-row justify-between items-center pt-10 border-t-gray-700">
          <p className="text-gray-500 text-sm">{copyrightText}</p>
          <p className="text-gray-500 text-sm">
            Status{" "}
            <span className="text-[#0AFFA7]">
              &bull; All systems are normal
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
