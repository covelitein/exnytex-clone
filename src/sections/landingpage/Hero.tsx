"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { sliderData } from "@/constants";

export default function Hero() {
  return (
    <div className="pb-40 pt-5 max-sm:px-3">
      <Container>
        <Swiper
          effect={"fade"}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 5000,
          }}
          fadeEffect={{ crossFade: true }}
          draggable={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="mySwiper"
        >
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.title} className="max-sbp:pt-10 pt-10 pb-20">
              <div className="grid sbp:grid-cols-2 md:grid-cols-3 gap-5 sbp:py-10 pt-32 pb-60 bg-[#0d1114] ">
                <div className="flex items-center z-10 max-sbp:col-span-2">
                  <div className="">
                    <h1 className="mf:text-6xl text-3xl font-[900] uppercase max-sm:text-center">
                      {slide.title}
                    </h1>
                    <p className="mt-3 font-bold text-[1.1rem] text-[#a3a3a4] max-sm:text-center">
                      {" "}
                      {slide.description}{" "}
                    </p>
                    <div className="mt-4 max-sm:text-center">
                      <Button className="uppercase font-bold bg-[#7fb210] px-9 py-6 sm:text-lg">
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="lg:pl-5 h-fit flex items-center justify-center max-sbp:max-w-[400px] max-sbp:absolute right-0 max-md:left-0 sm:top-20 top-0 mx-auto max-sm:w-full max-sbp:opacity-40">
                  <img src={slide.img} loading="lazy" alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
