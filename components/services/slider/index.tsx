import React from "react";
import services from "./data";

const ServiceSlider = () => {
  return (
    <></>
    // <Swiper
    //   slidesPerView={1}
    //   spaceBetween={30}
    //   navigation={true}
    //   modules={[Navigation]}
    //   breakpoints={{
    //     768: {
    //       slidesPerView: 2,
    //     },
    //   }}
    //   className="serviceSlider min-h-[680px]"
    // >
    //   {services.map((service, index) => {
    //     return (
    //       <>
    //         <SwiperSlide
    //           className="border border-primary/20 bg-cream  rounded-[66px] py-12 px-8"
    //           key={index}
    //         >
    //           <div className="flex items-center"> {service.icon}</div>

    //           <div className="text-[26px] font-medium mb-4">{service.name}</div>
    //           <div className="text-[20px]  max-h-80 overflow-hidden overflow-y-auto">
    //             {service.description}
    //           </div>
    //         </SwiperSlide>
    //       </>
    //     );
    //   })}
    // </Swiper>
  );
};

export default ServiceSlider;
