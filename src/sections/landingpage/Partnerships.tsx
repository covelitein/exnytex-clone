"use client";

import { Container } from "@/components/container";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const logos: { name: string; src: string }[] = [
  { name: "Bitcoin", src: "/logos/Bitcoin.svg" },
  { name: "Business Insider", src: "/logos/BusinessInsider.svg" },
  { name: "Coindesk", src: "/logos/Coindesk.svg" },
  { name: "Coin Edition", src: "/logos/CoinEdition.svg" },
  { name: "Crypto Daily", src: "/logos/CryptoDaily.svg" },
  { name: "CT", src: "/logos/CT.svg" },
  { name: "Finance Magnates", src: "/logos/FinanceMagnates.svg" },
  { name: "Kasobu", src: "/logos/Kasobu.svg" },
  { name: "TET", src: "/logos/TET.svg" },
  { name: "TIA", src: "/logos/TIA.svg" },
];

export default function Partnerships() {
  return (
    <section className="py-20 pb-32 max-sm:px-5">
      <Container>
        <Swiper
          slidesPerView={6}
          breakpoints={{
            1200: {
              slidesPerView: 6,
            },
            1049: {
              slidesPerView: 5,
            },
            900: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={25}
          loop={true}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 5000,
          }}
          draggable={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.name} className="px-2 py-2">
              <div className="py-5 group flex items-center justify-center border-[1px] border-[#a3a3a4]/20 relative transition-all duration-300 [&_div]:opacity-0">
                <div className="h-[25px] group-hover:opacity-100 w-[25px] border-0 border-t-[1px] border-l-[1px] border-[#7fb210] -top-[2px] -left-[2px] absolute"></div>
                <div className="h-[25px] group-hover:opacity-100 w-[25px] border-0 border-b-[1px] border-l-[1px] border-[#7fb210] -bottom-[2px] -left-[2px] absolute"></div>
                <div className="h-[25px] group-hover:opacity-100 w-[25px] border-0 border-t-[1px] border-r-[1px] border-[#7fb210] -top-[2px] -right-[2px] absolute"></div>
                <div className="h-[25px] group-hover:opacity-100 w-[25px] border-0 border-b-[1px] border-r-[1px] border-[#7fb210] -bottom-[2px] -right-[2px] absolute"></div>
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="aspect-3/2 h-[40px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
