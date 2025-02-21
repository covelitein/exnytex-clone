"use client";

import { Container } from "@/components/container";

const stats: { stats: string; desc: string }[] = [
  {
    stats: "11+",
    desc: "Over 11 million registered users",
  },
  {
    stats: "170+",
    desc: "Over 170 countries covered",
  },
  {
    stats: "25+",
    desc: "Over $25 billion of trading volume daily",
  },
  {
    stats: "12+",
    desc: "Over 12 assets for staking",
  },
];

export default function OurExperience() {
  return (
    <section className="py-40 max-sm:px-5">
      <div className="grid mf:grid-cols-2">
        <div className="flex items-center flex-col justify-center">
          <div className="">
            <img src="/imgs/f1.png" alt="" />
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold uppercase mb-3">
              Our <span className="text-[#7fb210]">Experience</span>
            </h2>
          </div>
        </div>
        <div className="md:grid-cols-2 grid">
          {stats.map((stat) => (
            <div
              key={stat.stats}
              className="border-[0.0005px] border-transparent bg-[#141a1e] px-6 py-20 text-lg hover:bg-[#7fb210] transition-all duration-300 text-center [&_h3]:hover:text-white flex flex-col justify-center"
            >
              <h3 className="font-bold text-3xl mb-3 text-[#7fb210]">
                {stat.stats}
              </h3>
              <p>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
