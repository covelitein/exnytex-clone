"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navlinks: { href: string; label: string }[] = [
  { href: "/", label: "Trade" },
  { href: "/", label: "Buy Crypto" },
  { href: "/", label: "Markets" },
  { href: "/about", label: "About" },
  { href: "/terms", label: "Terms Of Use" },
  { href: "/privacy", label: "Privacy" },
];

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  const gotoRegister = () => {
    router.push("/register");
  };

  return (
    <header className="max-sm:px-5">
      <Container className="flex items-center lg:justify-between max-mf:justify-between max-xl:gap-8 py-10">
        {/* Logo */}
        <Link
          href="/"
          className="uppercase text-white text-xl font-bold flex items-center gap-3"
        >
          <img src="/logo.png" className="h-10" />
          Exnytex
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 max-mf:hidden">
          {navlinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#a3a3a4] uppercase font-bold text-center text-[15px]"
            >
              {link.label}
            </Link>
          ))}
          <Button
            onClick={gotoRegister}
            className="font-bold bg-[#7fb210] -skew-x-6 lg:text-[1rem] hover:bg-[#444]"
          >
            Sign UP / IN
          </Button>
        </ul>

        {/* Hamburger Menu (Two Bars) */}
        <div
          className="mf:hidden flex flex-col gap-1.5 items-center justify-center px-4 py-4 cursor-pointer z-[9999999]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`w-7 h-[3px] bg-[#a3a3a4] transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          ></div>
          <div
            className={`w-7 h-[3px] bg-[#a3a3a4] transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[0.5px]" : ""
            }`}
          ></div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed h-full w-full top-0 bg-[#212529] z-[999999] transition-all duration-300 ${
            menuOpen ? "right-0" : "-right-[100%]"
          }`}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-8 text-white text-xl">
            {navlinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={gotoRegister}
              className="font-bold bg-[#7fb210] -skew-x-6 lg:text-[1rem] hover:bg-[#444]"
            >
              Sign UP / IN
            </Button>
          </ul>
        </div>
      </Container>
    </header>
  );
}
