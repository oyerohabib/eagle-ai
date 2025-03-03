"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { NavItemProps } from "../types";
import Logo from "@/app/assets/logo.svg";
import LogoIcon from "@/app/assets/logo-icon.svg";
import HamburgerIcon from "@/app/assets/menu.svg";
import { useState, useEffect } from "react";

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

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-navbar">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-evenly">
        <Link href="/" className="mr-auto">
          <Image
            src={isLargeScreen ? Logo : LogoIcon}
            alt="Eagle AI Logo"
            width={isLargeScreen ? 120 : 40}
            height={32}
            className="hidden xl:block"
          />
          <Image
            src={LogoIcon}
            alt="Eagle AI Logo"
            width={40}
            height={32}
            className="xl:hidden"
          />
        </Link>

        <div className="xl:hidden">
          <Image
            src={HamburgerIcon}
            alt="Menu"
            width={30}
            height={30}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>

        <div className="hidden xl:flex items-center justify-between gap-14">
          {navItems.map((item) => (
            <NavItem
              key={item.title}
              title={item.title}
              href={item.href}
              active={item.active}
            />
          ))}
          <Button text="Launch App" href="/" />
        </div>

        <div
          className={`absolute top-16 left-0 w-full z-10 bg-navbar p-2 xl:hidden flex flex-col gap-4 transition-all duration-300 ease-in-out transform ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <NavItem
                key={item.title}
                title={item.title}
                href={item.href}
                active={item.active}
              />
            ))}
            <Button text="Launch App" href="/" className="w-full" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
