import React, { useState } from "react";
import Image from "next/image";
import pets from "./data";

const Pets = () => {
  const [petDetails, setPetDetails] = useState(pets[0]);
  const [petIndex, setPetIndex] = useState(0);

  const getPetDetails = (id: number) => {
    const pet = pets.find((pet) => pet.id === id);
    setPetDetails(pet!!);
  };

  return (
    <section className="bg-pets bg-center py-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* pets */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* pet detail */}
          <div className="lg:w-[30%] flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto md:mr-10">
            <div className="text-center text-white">
              {/* category */}
              <div className="text-[32px] capitalize">
                {petDetails?.category}
              </div>
              {/* image */}
              <Image
                src={petDetails?.image}
                alt={petDetails?.category}
                className="rounded-full aspect-square bg-cover w-40 border border-white"
              />
            </div>
          </div>
          {/* pet list */}
          <div className="relative lg:w-[60%] flex-1 flex flex-wrap items-center">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end lg:-mr-6">
              {pets.map((pet, index) => (
                <div
                  onClick={() => {
                    getPetDetails(pet.id);
                    setPetIndex(index);
                  }}
                  className="cursor-pointer relative"
                  key={index}
                >
                  {/* overlay */}
                  <div
                    className={`w-full h-full absolute rounded-full ${
                      petIndex === index
                        ? "border-2 border-white"
                        : "bg-black/40"
                    }`}
                  ></div>
                  <Image
                    src={pet.image}
                    alt={pet.category}
                    className="rounded-full aspect-square bg-cover w-24"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pets;
