import { Container } from "@/components/container";
import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20 max-sm:px-5">
      <Container className="sbp:max-w-4xl">
        <div className="">
          <h2 className="text-4xl font-bold text-[#7fb210] text-shadow-[#7fb210] text-center mb-6">
            About
          </h2>
          <div className="mb-16 text-center">
            <Link href={"/"} className="text-[#a3a3a4] underline">
              Home
            </Link>{" "}
            / <span className="text-[#7fb210]">About</span>
          </div>
          <div className="flex sm:justify-center">
            <img src="/imgs/i6.png" alt="" />
          </div>
          <div className="mt-20">
            <p>
              Our company begins its history from June 2018, when it was
              developed. Recognizing the importance of Bitcoin from the onset,
              and understanding that the exchange is the most critical part of
              the cryptocurrency ecosystem, Hank Weizen founded Exnytex to give
              people the means to quickly and securely invest in the space.
              Since then, the company has grown by leaps and bounds with
              hundreds of employees spanning the globe. We’re a diverse group of
              thinkers and doers that are dedicated to making cryptocurrency
              available and accessible to the world and enabling people from all
              walks of life to invest in their independence. We believe that
              everyone should have the freedom to earn, hold, spend, share and
              give their money - no matter who you are or where you come from.
            </p>
          </div>

          {/* what we do */}
          <div className="mt-20">
            <h3 className="font-bold text-3xl uppercase text-center">
              What we do
            </h3>
            <div className="mt-5">
              <h3 className="text-xl font-bold">Empowering investors</h3>
              <p className="mt-5">
                Whether you’re an advanced trader or a crypto-beginner, Exnytex
                gives you the power to chart your own financial course. Our
                exchange has an ever-growing number of cryptocurrency pairs for
                you to invest in and a slew of tools and features for you to
                leverage as you grow your portfolio.
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-xl font-bold">Supporting institutions</h3>
              <p className="mt-5">
                From over-the-counter trading to personalized white-glove
                account management, Exnytex is the premier cryptocurrency
                investing solution for institutions of all sizes. We offer
                exceptional liquidity and competitive pricing for all our
                markets so you can achieve your investment goals quickly and
                confidently.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
