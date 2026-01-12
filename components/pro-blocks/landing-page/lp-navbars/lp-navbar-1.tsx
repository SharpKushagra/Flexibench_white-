"use client";

import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme-toggle";

const MENU_ITEMS = [
  { 
    label: "Platform", 
    href: "#platform",
    dropdown: [
      { label: "Overview", href: "/platform" },
      { label: "Feature Modules", href: "/#platform" },
      { label: "Internal Tools", href: "/internal-tools" },
    ]
  },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Resources", href: "/resources" },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <NavigationMenu className={`${className ?? ""}`}>
    <NavigationMenuList className="flex flex-col gap-1 md:flex-row">
      <NavigationMenuItem>
        <Link href="/">
          <Button variant="ghost" className="w-full md:w-auto">
            Home
          </Button>
        </Link>
      </NavigationMenuItem>
      {MENU_ITEMS.map((item) => {
        if (item.dropdown) {
          return (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuTrigger className="w-full md:w-auto">
                {item.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex flex-col gap-1 p-2 w-56">
                  {item.dropdown.map((dropdownItem) => (
                    <NavigationMenuLink key={dropdownItem.label} asChild>
                      <Link href={dropdownItem.href}>
                        <Button variant="ghost" className="w-full justify-start">
                          {dropdownItem.label}
                        </Button>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        }
        return (
          <NavigationMenuItem key={item.label}>
            <Link href={item.href}>
              <Button variant="ghost" className="w-full md:w-auto">
                {item.label}
              </Button>
            </Link>
          </NavigationMenuItem>
        );
      })}
    </NavigationMenuList>
  </NavigationMenu>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-3 md:flex md:items-center">
          <NavMenuItems />
          <ThemeToggle />
          <Link href="/contact">
            <Button>Get Started</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems />
            <div className="flex items-center gap-3">
              <div className="flex-1" />
              <ThemeToggle />
            </div>
            <Link href="/contact">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
