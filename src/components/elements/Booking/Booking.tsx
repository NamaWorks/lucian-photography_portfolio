import BookNowButton from "@/components/ui/BookNowButton/BookNowButton";
import CalendarBar from "@/components/ui/CalendarBar/CalendarBar";
import GridContainer from "@/components/ui/GridContainer/GridContainer";
import { chathura, oswald } from "@/utils/fonts/fonts";

import React from "react";

const Booking = () => {
  return (
    <>
      <section className="pr-3 pl-3" id="bookings">
        <GridContainer>
          <p
            className={`
             col-start-3 col-span-2  md:col-start-5 md:col-span-1 flex flex-col justify-center w-full ${oswald.className} text-[20px] uppercase font-medium gap-2
            `}
          >
            <span className="flex flex-row justify-between gap-2">
              <span className="flex flex-row justify-between">monthly </span>
              <span>booking</span>
            </span>
            <span className="self-center">jan — apr</span>
          </p>

          <p
            className={`col-start-1 col-span-2 md:col-start-1 md:col-span-1 lg:col-start-5 flex flex-col justify-center w-full ${oswald.className} text-[20px] uppercase font-medium mt-[50px]`}
          >
            <span className="flex flex-row justify-between gap-2">
              photography <span>by</span>
            </span>
            <span>Lucian Carrell</span>
          </p>

          <div className="flex flex-col text-[#1F1D24] text-[250px]/[220px] col-start-1 col-end-6 pointer-events-none mb-[0] xl:mb-[135px]">
            <p 
              className={
              `
              ${oswald.className} font-medium text-[45px] md:text-[90px]
              xl:text-[250px]
              `}>
              <span className={`${oswald.className} font-extralight`}>( </span>
              202
              <span className={`
                ${chathura.className} text-[90px] md:text-[185px]
                xl:text-[490px]
              `}>5</span>
              <span className={`${oswald.className} font-extralight`}> )</span>
            </p>
            <p
              className={`
                ${chathura.className} text-[100px] md:text-[185px] relative flex justify-start items-baseline gap-2 left-[80px] md:left-[120px] top-[-160px] md:top-[-120px] h-[120px]
                xl:text-[363px] xl:left-[450px] xl:top-0 xl:h-full
              `}
            >
              booking
            </p>
          </div>

          <div className="col-start-1 col-end-7 hidden 2xl:flex">
            <CalendarBar/>
          </div>

          <BookNowButton/>

        </GridContainer>
      </section>
    </>
  );
};

export default Booking;
