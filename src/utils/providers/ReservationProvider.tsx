'use client';

import { ReactNode, useContext, useEffect } from "react";
import { CalendarContext } from "../contexts/contexts";
import { CalendarContextInterface } from "../interfaces/interfaces";
import { Poppins } from "next/font/google";
import BookNowButton from "@/components/ui/BookNowButton/BookNowButton";
import { latoSans, oswald } from "../fonts/fonts";

const ReservationProvider = ({children}: {children: ReactNode}) => {

  const { dates, setDates, chosenDate, setChosenDate, reservationsOpen, setReservationsOpen } = useContext(CalendarContext) as CalendarContextInterface

  const hours = ['9am', '11am', '3pm', '5pm', '7pm']

  useEffect(()=>{
    setReservationsOpen(true)
  },[setReservationsOpen])

  return (
    <>
    {
    reservationsOpen &&
  <div className={`fixed z-99 bg-[#D9D9D9] rounded-[5px] p-3 bottom-3 right-3`}>
    <h3 className={`${oswald.className} font-medium text-[24px] uppercase`}>Book a Photoshooth - 2h</h3>
    <div>


      {/* from here the toggle for dates */}
      <div className={`uppercase w-full bg-[#ffffff] p-3`}>
      {
        chosenDate ?
        <>
            {chosenDate.toString()}
        </>
        :
        <>
          select date
        </>
      }
      </div>

      {/* from here the hours */}
      <div>
        {
          dates.map((date, i)=>{
            return (
              <>
                <div key={date.toString() + i}>{date.toString()}</div>
              </>
            )
          })
        }
      </div>

      <div>
        {
          hours.map((hour)=>{
            return (
              <>
                <div key={hour} className="">
                  <p>{hour}</p>
                </div>
              </>
            )
          })
        }
      </div>

    </div>
    
    {/* from here the form with the details */}
    <form action="" className="flex flex-col items-end gap-3">
      <input className={`w-full ${latoSans.className} text-[18px] border-solid border-[#000] border-b-1 border-r-0 border-l-0 boder-t-0 `} type="text" placeholder="First Name *" required />
      <input className={`w-full ${latoSans.className} text-[18px] border-solid border-[#000] border-b-1 border-r-0 border-l-0 boder-t-0 `} type="text" placeholder="Last Name *" required />
      <input className={`w-full ${latoSans.className} text-[18px] border-solid border-[#000] border-b-1 border-r-0 border-l-0 boder-t-0 `} type="email" placeholder="Email *" required />
      <input className={`w-full ${latoSans.className} text-[18px] border-solid border-[#000] border-b-1 border-r-0 border-l-0 boder-t-0 `} type="tel" placeholder="Phone Number" />
      <button className='bg-[#ffffff] rounded-[5px] p-3 px-12 justify-self-end w-60 cursor-pointer'>
        <p className={`${oswald.className} uppercase font-light`}>Book <span className='font-semibold'>Now</span></p>
      </button>
    </form>

  </div>
}
    {children}
  </>
  )
}

export default ReservationProvider