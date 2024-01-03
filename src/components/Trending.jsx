import React from "react";
import ProductCard from "./ProductCard";
import { trending } from "../constants";

const Trending = () => {
  return (
    <div className="pt-20">
      <div className="flex flex-col items-center justify-center w-full mt-10 gap-3">
        <h3
          className="text-6xl italic text-gray-300 "
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          HOT!
        </h3>
        <h1
          className="capitalize text-xl tracking-widest text-center"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          Luxury Bags for every occassion
        </h1>
        <h1
            className="text-5xl text-gray-300 mb-5"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Trending Products
          </h1>
      </div>

      <div className=" items-center  ">
        <div className="gap-10 grid grid-cols-4 items-center justify-center">
          {trending.map((item) => (
            <ProductCard item= {item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
