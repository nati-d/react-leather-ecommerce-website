import React from "react";

const Categories = () => {
  return (
    <div className="flex flex-col gap-7 py-14 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div
          className="w-full h-[250px] md:h-[500px] bg-white text-black flex flex-col items-center justify-center"
          style={{ background: "#f4f4f4" }}
        >
          <h1 className="font-semibold text-xl md:text-2xl tracking-wider" style={{ fontFamily: "'Anton', sans-serif" }}>
            Opulent Carriage Bags
          </h1>
          <p className="text-gray-500 text-center md:text-left">
            Refined carry with opulent, intricate details
          </p>
        </div>
        <div
          className="w-full h-[250px] md:h-[500px] bg-white text-black flex flex-col items-center justify-center"
          style={{ background: "#f8f8f8" }}
        >
          <h1 className="font-semibold text-xl md:text-2xl tracking-wider" style={{ fontFamily: "'Anton', sans-serif" }}>
            Regal Treasures Wallets
          </h1>
          <p className="text-gray-500 text-center md:text-left">
            Secure essentials in regal, refined style.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        <div
          className="w-full h-[200px] md:h-[400px] bg-white text-black flex flex-col items-center justify-center"
          style={{ background: "#ece8d9" }}
        >
          <h1 className="font-semibold text-xl md:text-2xl tracking-wider" style={{ fontFamily: "'Anton', sans-serif" }}>
            Elysian Stride Shoes
          </h1>
          <p className="text-gray-500 text-center md:text-left">
            Timeless comfort, elegance with each step
          </p>
        </div>
        <div
          className="w-full h-[200px] md:h-[400px] bg-white text-black flex flex-col items-center justify-center"
          style={{ background: "#d9cfc1" }}
        >
          <h1 className="font-semibold text-xl md:text-2xl tracking-wider" style={{ fontFamily: "'Anton', sans-serif" }}>
            Supreme Cinch Belts
          </h1>
          <p className="text-gray-500 text-center md:text-left">
            Define style with supreme, crafted cinch
          </p>
        </div>
        <div
          className="w-full h-[200px] md:h-[400px] bg-white text-black flex flex-col items-center justify-center"
          style={{ background: "#e3e8f0" }}
        >
          <h1 className="font-semibold text-xl md:text-2xl tracking-wider" style={{ fontFamily: "'Anton', sans-serif" }}>
            Noble Drapery Coats
          </h1>
          <p className="text-gray-500 text-center md:text-left">
            Meticulously tailored, noble statement drapery
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
