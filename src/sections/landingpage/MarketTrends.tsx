"use client";

import { Container } from "@/components/container";

export default function MarketTrends() {
  return (
    <section className="py-20 max-sm:px-5">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold uppercase mb-3">
            Market <span className="text-[#7fb210]">Trends</span>
          </h2>
          <p className="text-[#a3a3a4]">
            Monitor your favorite trading pairs in real time and invest to build
            your own portfolio on <br />
            the fastest trading engine.
          </p>
        </div>
      </Container>
    </section>
  );
}
