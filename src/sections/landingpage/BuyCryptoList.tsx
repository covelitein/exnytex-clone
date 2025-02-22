import { ColoredEdgesBox } from "@/components/colored-edges";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const lists: { src: string; desc: string }[] = [
  {
    src: "/crypto/p1.png",
    desc: "MoonPay offers a fast and simple way to buy and sell cryptocurrencies. Buy crypto with credit card, bank transfers or Apple Pay today.",
  },
  {
    src: "/crypto/p2.png",
    desc: "Transak is a leading Web3 onboarding infrastructure provider. Its API-driven solutions enable web3 platforms to onboard users to 130+ crypto assets from 150+ countries, abstracting away the complexity of user KYC, risk monitoring & compliance, payment methods and customer support.",
  },
  {
    src: "/crypto/p3.png",
    desc: "Simplex by Nuvei is empowering the crypto industry with a full fiat infrastructure. We process crypto-to-credit card payments with a 100% guarantee - in case of a fraud chargeback, the merchant gets paid by us",
  },
  {
    src: "/crypto/p4.png",
    desc: "A custodial wallet with built-in crypto on-ramp functionality. Designed to manage your crypto just like you do with fiat: buy, sell, hold, and spend a wide range of coins.",
  },
  {
    src: "/crypto/p5.png",
    desc: "CoinGate is a Lithuanian-based fintech company founded in 2014. The payment gateway offers cryptocurrency payment processing services for businesses of any sizes",
  },
  {
    src: "/crypto/p6.png",
    desc: "Banxa is the leading global Web3 on and off-ramp solution Crypto Buy. Our mission is to accelerate the world to Web3 and beyond.",
  },
  {
    src: "/crypto/p7.png",
    desc: "Buy crypto with a credit card, debit card, Apple Pay or Google Pay. Delivered quickly to any wallet, no hidden fees or third-party custody. Buy online or in the BitPay app.",
  },
  {
    src: "/crypto/p8.png",
    desc: "Changelly is an ecosystem of products that allows you to exchange, buy, trade, and sell cryptocurrencies and also earn free crypto with our affiliate program.",
  },
  {
    src: "/crypto/p10.png",
    desc: "Ramp is a global financial technology company building solutions that connect the crypto economy with today’s financial infrastructure.",
  },
];

export default function BuyCryptoList() {
  return (
    <section className="py-20">
      <Container className="max-sm:px-5">
        <h2 className="text-4xl font-bold text-[#7fb210] text-shadow-[#7fb210] text-center mb-6">
          Buy Crypto
        </h2>
        <div className="mb-16 text-center">
          <Link href={"/"} className="text-[#a3a3a4] underline">
            Home
          </Link>{" "}
          / <span className="text-[#7fb210]">Buy Crypto</span>
        </div>
        {lists.map((list) => (
          <ColoredEdgesBox className="flex mb-5 items-center max-md:flex-col justify-between gap-5 bg-slate-500/10 border-2">
            <img src={list.src} alt={list.src} />
            <p className="text-[#a3a3a4] max-md:text-center">{list.desc}</p>
            <Button className="bg-slate-500/50">See more</Button>
          </ColoredEdgesBox>
        ))}
      </Container>
    </section>
  );
}
