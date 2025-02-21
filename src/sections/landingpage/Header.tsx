"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Tally2 } from "lucide-react";
import Link from "next/link";

const navlinks: { href: string; label: string }[] = [
  {
    href: "/",
    label: "Trade",
  },
  {
    href: "/",
    label: "Buy Crypto",
  },
  {
    href: "/",
    label: "Markets",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/terms",
    label: "Terms Of Use",
  },
  {
    href: "/privacy",
    label: "Privacy",
  },
];

export default function Header() {
  return (
    <header className="max-sm:px-5">
      <Container className="flex items-center lg:justify-between max-mf:justify-between max-xl:gap-8 py-10">
        {/* logo start */}
        <Link
          href={"/"}
          className="uppercase text-white text-xl font-bold flex items-center gap-3"
        >
          <img src="/logo.png" className="h-10" />
          Exnytex
        </Link>
        {/* logo end */}

        {/* links start */}
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
          <Button className="font-bold bg-[#7fb210] -skew-x-6 lg:text-[1rem]">
            Sign UP / IN
          </Button>
        </ul>
        {/* links end */}

        {/* menu */}
        <Button className="mf:hidden [&_svg]:size-9 bg-transparent flex items-center justify-center px-4 py-4">
          <Tally2 className="rotate-[90deg]" />
        </Button>

        {/* mobile menu */}
      </Container>
    </header>
  );
}
