"use client";

import { Container } from "@/components/container";

const achievements: { title: string; description: string }[] = [
  {
    title: "24/7 customer service",
    description: "Online chat with support staff is available 24/7",
  },
  {
    title: "International coverage",
    description: "Availability in 160+ countries",
  },
  {
    title: "Reliable security infrastructure",
    description: "Fast trading engine and no server downtime",
  },
  {
    title: "Trading",
    description: "The most advanced automatic trading tools",
  },
  {
    title: "Earnings system",
    description: "Invest and make money on coin staking",
  },
  {
    title: "The big community",
    description: "Gathered a large community of traders",
  },
];

export default function Achievements() {
  return (
    <section className="py-20 max-sm:px-3">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold uppercase mb-3">
            Our <span className="text-[#7fb210]">Achievements</span>
          </h2>
        </div>
        {/* list */}
        <div className="mt-20">
          <ul className="grid md:grid-cols-2 gap-3 sbp:grid-cols-3">
            {achievements.map((achievement) => (
              <li
                key={achievement.title}
                className="border-[0.0005px] border-black/40 px-6 py-20 rounded-lg text-lg hover:bg-[#7fb210] hover:translate-y-[-5px] transition-all duration-300"
              >
                <h3 className="font-bold mb-3">{achievement.title}</h3>
                <p>{achievement.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
