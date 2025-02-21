"use client";
import { Container } from "@/components/container";

export default function SupportAnyDevice() {
  return (
    <section className="py-20 max-sm:px-5">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold uppercase mb-3">
            Support <span className="text-[#7fb210]">Any Device</span>
          </h2>
          <p className="text-[#a3a3a4]">
            Receive, exchange and trade cryptocurrency conveniently. We support
            any device.
          </p>
        </div>
        <div className="mt-24">
            <img src="/imgs/i2.png" alt="" />
        </div>
      </Container>
    </section>
  );
}
