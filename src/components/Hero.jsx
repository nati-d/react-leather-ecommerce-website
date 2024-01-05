import { FaLocationDot } from "react-icons/fa6";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa6";

import { Mousewheel, Navigation, Pagination, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" ">
      <div
        className="md:grid w-full m-auto justify-between md:h-[700px]"
        style={{ gridTemplateColumns: "40% 58%" }}
      >
        <div
          className="hidden md:flex bg-cover w-full h-full rounded-2xl justify-center px:4 md:px-14 flex-col gap-6"
          style={{ background: "#5c514f" }}
        >
          <h3
            className="text-3xl text-gray-300"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Kodaas Union
          </h3>
          <h2
            className="text-5xl md:text-6xl font-bold"
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
          <Link to="/shop">
            <button className="bn632-hover bn21">Explore More</button>
          </Link>
          <div className="flex gap-3 items-center align-bottom">
            <FaLocationDot />
            <span>Addis Ababa</span>
          </div>
        </div>

        <div
          className="md:hidden bg-cover w-full h-[300px] rounded-2xl justify-center p-4"
          style={{ background: "#5c514f" }}
        >
          {/* Adjust styles for smaller screens */}
          <h3
            className="text-2xl text-gray-300"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Kodaas Union
          </h3>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Elegant full back pack with good price
          </h2>
          <button className="bn632-hover bn21 mt-2">Explore More</button>
          <div className="flex gap-3 items-center align-bottom mt-2">
            <FaLocationDot />
            <span>Addis Ababa</span>
          </div>
        </div>
        <div className="hidden md:flex bg-cover w-full h-full rounded-2xl overflow-hidden relative">
          <div className="absolute bg-white top-10 right-10 z-10 flex items-center justify-center rounded-full p-4 cursor-pointer">
            <Link to="/shop">
              <FaArrowRight size={25} className="text-black" />
            </Link>
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
