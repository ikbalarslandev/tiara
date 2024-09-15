import React from "react";

import Image from "next/image";

import pretitleImg from "@/public/img/hero/pretitle-img.svg";

import Header from "./header";

const Hero = () => {
  return (
    <section
      className="bg-cream bg-mobile-hero bg-center bg-cover opacity-90 lg:bg-hero lg:bg-cover
  lg:bg-no-repeat min-h-[400px] lg:min-h-[805px]"
    >
      <Header />
      <div className="container mx-auto flex justify-start items-center min-h-[400px] lg:h-[805px]">
        <div className="lg:max-w-[650px] text-center mx-auto lg:text-left lg:mx-0">
          {/* image */}
          <div className="hidden xl:flex mb-6 ml-5">
            <Image
              src={pretitleImg}
              width={100}
              height={100}
              alt=""
              className="w-full h-auto"
            />
          </div>
          <h1 className="text-5l lg:text-8xl uppercase font-bold -tracking-[0.05em] mb-10 md:text-primary text-slate-500">
            A traveller <br />
            <span className="text-orange font-normal">Petsitter</span> <br />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
