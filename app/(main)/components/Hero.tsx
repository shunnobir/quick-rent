import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="grid-col-1 grid items-center justify-center gap-5 rounded-xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-blue-400 p-10 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black uppercase leading-[120%] tracking-tight text-white lg:text-6xl">
          Rent Your Dream Car <span className="">Today</span>
        </h1>
        <p className="w-2/3 text-xl text-slate-100">
          Rent Luxury, Sport, and Everyday Vehicles with Ease
        </p>
      </div>
      <Image
        src="https://content.r9cdn.net/rimg/car-images/generic/07_suv-large_white.png?height=500"
        width={500}
        height={250}
        alt="Car"
        className="h-auto w-[500px]"
      />
    </section>
  );
};

export default HeroSection;
