import React from "react";
import ProductCard from "./ProductCard";
import { trending } from "../constants";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <div className="pt-10 md:pt-20 w-[90%] m-auto">
      <div className="flex flex-col items-center justify-center w-full mt-5 md:mt-10 gap-3">
        <h3
          className="text-4xl md:text-6xl italic text-gray-300 "
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          HOT!
        </h3>
        <h1
          className="capitalize text-lg md:text-xl tracking-widest text-center"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          Luxury Bags for every occasion
        </h1>
        <h1
          className="text-3xl md:text-5xl text-gray-300 mb-3 md:mb-5"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          Trending Products
        </h1>
      </div>

      <div className="items-center">
        <div className="gap-5 md:gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
          {trending.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductCard item={item} className="mb-4 sm:mb-8" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
