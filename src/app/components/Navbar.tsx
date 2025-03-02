import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { NavItemProps } from "../types";
import Logo from "@/app/assets/logo.svg";

const NavItem: React.FC<NavItemProps> = ({ title, href, active }) => {
  return (
    <Link
      href={href}
      className={`text-sm font-medium hover:text-blue-400 transition-colors ${
        active ? "text-white" : "text-gray-300"
      }`}
    >
      {title}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const navItems = [
    { title: "Products", href: "/products" },
    { title: "Partnerships", href: "/partnerships" },
    { title: "Sponsorships", href: "/sponsorships" },
    { title: "Education", href: "/education" },
    { title: "Docs", href: "/docs" },
    { title: "Team", href: "/team" },
    { title: "Trade Dividends", href: "/trade-dividends", active: true },
  ];

  return (
    <div className="bg-navbar">
      <nav className="container mx-auto px-6 py-4 flex items-center">
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="mr-10">
            <Image src={Logo} alt="Eagle AI Logo" width={120} height={32} />
          </Link>

          <div className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <NavItem
                key={item.title}
                title={item.title}
                href={item.href}
                active={item.active}
              />
            ))}
          </div>
          <Button text="Launch App" href="/" className="ml-4" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
