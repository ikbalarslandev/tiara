"use client";

import React, { useRef } from "react";
import Pets from "@/components/pets";
import Hero from "../components/hero";
import Services from "../components/services";
import About from "../components/about";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";

const Home = () => {
  // const servicesRef = useRef(null);

  // const scrollToServices = () => {
  //   if (servicesRef.current) {
  //     servicesRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden ">
      <Hero />
      <Pets />
      <About />
      <Services />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
