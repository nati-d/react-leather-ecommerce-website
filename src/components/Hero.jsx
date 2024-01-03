import { FaLocationDot } from "react-icons/fa6";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa6";

import { Mousewheel, Navigation, Pagination, Keyboard } from "swiper/modules";

const Hero = () => {
  return (
    <div className=" ">
      <div
        className="grid w-full m-auto justify-between h-[700px]"
        style={{ gridTemplateColumns: "40% 58%" }}
      >
        <div
          className="bg-cover w-full h-full rounded-2xl justify-center px-14 flex flex-col gap-6"
          style={{ background: "#5c514f" }}
        >
          <h3
            className="text-3xl text-gray-300"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Kodaas Union
          </h3>
          <h2
            className="text-6xl font-bold"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Elegant full back pack with good price
          </h2>
          <p className="text-gray-300">
            Experience the dynamic world of web development in our latest
            project. The electric blue theme not only reflects modernity but
            also signifies the seamless navigation and innovation embedded in
            the website. Dive into the intricacies of code, design, and user
            experience that make this project a digital masterpiece.
          </p>
          <button className="bn632-hover bn21">Explore More</button>
          <div className="flex gap-3 items-center align-bottom">
            <FaLocationDot />
            <span>Addis Ababa</span>
          </div>
        </div>
        <div className="sm:hidden md:flex bg-cover w-full h-full rounded-2xl overflow-hidden relative">
          <div className="absolute bg-white top-10 right-10 z-10 flex items-center justify-center rounded-full p-4 cursor-pointer">
            <FaArrowRight size={25} className="text-black"/>
          </div>
            
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
            }}
            modules={[Mousewheel, Pagination, Navigation, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="object-cover w-full h-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/12105084/pexels-photo-12105084.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="object-cover w-full h-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/10280614/pexels-photo-10280614.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="object-cover w-full h-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5462562/pexels-photo-5462562.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="object-cover w-full h-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8502484/pexels-photo-8502484.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
