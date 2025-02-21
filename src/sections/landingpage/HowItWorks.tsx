import { Container } from "@/components/container";
import React from "react";

const Box = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="relative py-7 px-4 text-center text-white rounded-lg border-2 border-[#a3a3a4]/20">
      <div className="h-[25px] w-[25px] border-0 border-t-2 border-l-2 rounded-tl-lg border-[#7fb210] -top-[2px] -left-[2px] absolute"></div>
      <div className="h-[25px] w-[25px] border-0 border-b-2 border-l-2 rounded-bl-lg border-[#7fb210] -bottom-[2px] -left-[2px] absolute"></div>
      <div className="h-[25px] w-[25px] border-0 border-t-2 border-r-2 rounded-tr-lg border-[#7fb210] -top-[2px] -right-[2px] absolute"></div>
      <div className="h-[25px] w-[25px] border-0 border-b-2 border-r-2 rounded-br-lg border-[#7fb210] -bottom-[2px] -right-[2px] absolute"></div>
      <h3 className="text-base font-bold mb-2 relative z-10">{title}</h3>
      <p className="text-base relative z-10">{description}</p>
    </div>
  );
};

const boxes = [
  {
    title: "Register",
    description:
      "Registration is a very easy process. Follow step by step and sign in.",
  },
  {
    title: "Start trading",
    description: "We support all types of cryptocurrency.",
  },
  {
    title: "Type promo code",
    description: "Use promo code to increase your income.",
  },
  {
    title: "Earn money",
    description: "Earn money on our platform safely and legally.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 max-sm:px-5">
      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold uppercase">
          How It <span className="text-[#7fb210]">Works</span>
        </h2>
      </div>
      <Container>
        <div className="grid sbp:grid-cols-4 md:grid-cols-2 gap-5">
          {boxes.map((box, index) => (
            <Box key={index} title={box.title} description={box.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}
