'use client';

import { ReactNode, useContext, useEffect } from "react";
import { CalendarContext } from "../contexts/contexts";
import { CalendarContextInterface } from "../interfaces/interfaces";

const ReservationProvider = ({children}: {children: ReactNode}) => {

  const { dates, setDates, chosenDate, setChosenDate, reservationsOpen, setReservationsOpen } = useContext(CalendarContext) as CalendarContextInterface

  useEffect(()=>{
    setReservationsOpen(false)
  },[setReservationsOpen])

  return (
    <>
    {
    reservationsOpen &&
  <div className="fixed z-99 bg-[#D9D9D9] rounded-[5px] p-3 top-[50%] right-3">
    <h3>Book a Photoshooth - 2h</h3>
    <div>
      {
        chosenDate &&
        <>
          <div>
            {chosenDate.toString()}
          </div>
        </>
      }
      <div>
        {
          dates.map((date, i)=>{
            return (
              <>
                <div>{date.toString()}</div>
              </>
            )
          })
        }
      </div>
    </div>
  </div>
}
    {children}
  </>
  )
}

export default ReservationProvider