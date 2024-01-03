import React from "react";

const About = () => {
  return (
    <div className="grid-cols-1 m-10 px-20 grid md:grid-cols-2 gap-8 " style={{gridTemplateColumns:"40% 55%"}}>
      <div className="px-20 gap-14 flex flex-col justify-center">
        <h1
          className="text-6xl font-bold"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          ABOUT US
        </h1>
        <p className="text-justify text-gray-300">
          Welcome to Kodaas, a haven where the artistry of leather craftsmanship
          converges with contemporary style. In our exclusive leather bag shop,
          every piece is meticulously handcrafted to embody timeless elegance
          and deliver unparalleled quality. With a commitment to sustainability,
          our curated collection is a conscious choice for those who appreciate
          enduring beauty and ethical practices. As you explore Kodaas, each bag
          invites you to join us on a journey where craftsmanship, style, and
          purpose intersect, telling a unique story with every stitch.
        </p>
        <p className="text-justify text-gray-300">
          At Kodaas, we go beyond fashion; we offer a lifestyle that seamlessly
          blends sophistication and functionality. Elevate your everyday style
          with our exclusive leather creations, crafted to stand the test of
          time. Thank you for choosing Kodaas — where each purchase is not just
          a fashion statement but a commitment to a mindful and stylish way of
          living.
        </p>
      </div>
      <div className="flex items-center justify-center h-[700px] relative">
        <img
          src="https://images.pexels.com/photos/18703865/pexels-photo-18703865/free-photo-of-woman-in-jacket-and-scarf-leaving-vintage-train-wagon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className=" w-[80%] h-full rounded-2xl"
        />
        <div className="absolute w-[300px] h-[200px]  bottom-10 left-5 -z-10 rounded-xl" style={{background:"#FEAB78"}}></div>
        <div className="absolute w-[300px] h-[200px] top-10 right-5 -z-10 rounded-xl" style={{background:"#FEAB78"}}></div>
      </div>
    </div>
  );
};

export default About;
