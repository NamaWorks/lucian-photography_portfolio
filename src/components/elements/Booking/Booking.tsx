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
            className={`col-start-5 flex flex-col justify-center w-full ${oswald.className} text-[20px] uppercase font-medium`}
          >
            <span className="flex flex-row justify-between">
              <span className="flex flex-row justify-between">monthly</span>
              <span>booking</span>
            </span>
            <span className="self-center">jan — apr</span>
          </p>

          <p
            className={`col-start-5 flex flex-col justify-center w-full ${oswald.className} text-[20px] uppercase font-medium mt-[50px]`}
          >
            <span className="flex flex-row justify-between">
              photography <span>by</span>
            </span>
            <span>Lucian Carrell</span>
          </p>

          <div className="flex flex-col text-[#1F1D24] text-[250px]/[220px] col-start-1 col-end-5 pointer-events-none mb-[135px]">
            <p className={`${oswald.className} font-medium text-[250px]`}>
              <span className={`${oswald.className} font-extralight`}>( </span>
              202
              <span className={`${chathura.className} text-[490px]`}>5</span>
              <span className={`${oswald.className} font-extralight`}> )</span>
            </p>
            <p
              className={`${chathura.className} text-[363px] relative left-[450px] flex justify-start items-baseline gap-2`}
            >
              booking
            </p>
          </div>

          <div className="col-start-1 col-end-7">
            <CalendarBar/>
          </div>

          <BookNowButton/>

        </GridContainer>
      </section>
    </>
  );
};

export default Booking;
