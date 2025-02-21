import { Container } from "@/components/container";
import Link from "next/link";
import React from "react";

const newYear = new Date().getFullYear();

const companyLinks: { href: string; label: string }[] = [
  {
    href: "/",
    label: "About us",
  },
  {
    href: "/",
    label: "Privacy Policy",
  },
  {
    href: "/",
    label: "Terms of Use",
  },
  {
    href: "/",
    label: "Security",
  },
  {
    href: "/",
    label: "Risk Warning",
  },
];

const serviceLinks: { href: string; label: string }[] = [
  {
    href: "/",
    label: "FAQ",
  },
  {
    href: "/",
    label: "Fees",
  },
  {
    href: "/",
    label: "Referrals",
  },
];

const tradeLinks: { href: string; label: string }[] = [
  {
    href: "/",
    label: "BTC / USDT",
  },
  {
    href: "/",
    label: "ETH / USDT",
  },
  {
    href: "/",
    label: "LTC / USDT",
  },
  {
    href: "/",
    label: "BCH / USDT",
  },
];

export default function Footer() {
  return (
    <footer className="border-t-[1px] border-[#a3a3a4] sm:py-20 py-5 max-sm:px-5">
      <Container className="grid lg:grid-cols-4 sm:grid-cols-2 max-lg:gap-6">
        {/* desc start */}
        <div className="text-[#a3a3a4]">
          {/* logo start */}
          <Link
            href={"/"}
            className="uppercase text-white text-xl font-bold flex items-center gap-3"
          >
            <img src="/logo.png" className="h-10" />
            Exnytex
          </Link>
          {/* logo end */}

          <div className="mt-5">
            <img src="/imgs/bestchange.png" alt="" />
          </div>

          <p className="mt-5 text-sm">
            The Transactions offered by this Website can be executed only by
            fully competent adults. Transactions with financial instruments
            offered on the Website involve substantial risk and trading may be
            very risky.
          </p>

          <h5 className="mt-4 text-sm">
            © {newYear}. All rights reserved by Exnytex
          </h5>
        </div>
        {/* desc end */}

        {/* company start */}
        <div className="flex flex-col lg:pl-11">
          <div className="">
            <h2 className="font-bold uppercase">Company</h2>
            <div className="mt-4">
              {companyLinks.map((link) => (
                <div key={link.label} className="flex mb-3 items-center gap-2 [&_div]:hover:w-3 [&_div]:duration-200 [&_div]:transition-all [&_div]:hover:bg-[#7fb210] [&>.text]:hover:text-white [&>.text]:duration-200 [&>.text]:transition-all">
                  <div className="h-1 w-1 rounded bg-[#a3a3a4]"></div>
                  <Link href={link.href} className="text-[#a3a3a4] text">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* company end */}


        {/* services start */}
        <div className="flex flex-col">
          <div className="">
            <h2 className="font-bold uppercase">Service</h2>
            <div className="mt-4">
              {serviceLinks.map((link) => (
                <div key={link.label} className="flex mb-3 items-center gap-2 [&_div]:hover:w-3 [&_div]:duration-200 [&_div]:transition-all [&_div]:hover:bg-[#7fb210] [&>.text]:hover:text-white [&>.text]:duration-200 [&>.text]:transition-all">
                  <div className="h-1 w-1 rounded bg-[#a3a3a4]"></div>
                  <Link href={link.href} className="text-[#a3a3a4] text">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* services end */}


        {/* trade start */}
        <div className="flex flex-col">
          <div className="">
            <h2 className="font-bold uppercase">Trade</h2>
            <div className="mt-4">
              {tradeLinks.map((link) => (
                <div key={link.label} className="flex mb-3 items-center gap-2 [&_div]:hover:w-3 [&_div]:duration-200 [&_div]:transition-all [&_div]:hover:bg-[#7fb210] [&>.text]:hover:text-white [&>.text]:duration-200 [&>.text]:transition-all">
                  <div className="h-1 w-1 rounded bg-[#a3a3a4]"></div>
                  <Link href={link.href} className="text-[#a3a3a4] text">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* trade end */}
      </Container>
    </footer>
  );
}
