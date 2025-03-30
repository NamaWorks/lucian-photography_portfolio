'use client';

import { ReactNode, useContext, useEffect } from "react";
import { CalendarContext } from "../contexts/contexts";
import { CalendarContextInterface } from "../interfaces/interfaces";
import { latoSans, oswald } from "../fonts/fonts";

const ReservationProvider = ({children}: {children: ReactNode}) => {

  const { dates, setDates, chosenDate, setChosenDate, reservationsOpen, setReservationsOpen } = useContext(CalendarContext) as CalendarContextInterface

  const hours = ['9am', '11am', '3pm', '5pm', '7pm']

  useEffect(()=>{
    setReservationsOpen(true)
  },[setReservationsOpen])

  return (
    <>
      {reservationsOpen && (
        <div
          className={`fixed z-99 bg-[#D9D9D9] rounded-[5px] p-3 bottom-3 right-3 min-w-[30svw] flex flex-col gap-3`}
        >
          <div className="flex items-center justify-between">
            <h3
              className={`${oswald.className} font-medium text-[24px] uppercase`}
            >
              Book a Photoshooth - 2h
            </h3>

            <div
              className="cursor-pointer"
              onClick={() => {
                setReservationsOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-x-icon lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {/* from here the toggle for dates */}
            <div className={`uppercase w-full bg-[#ffffff] p-1 flex items-center justify-between rounded-[2px] ${oswald.className} font-extralight text-[14px]`}>
              <label className="hidden" htmlFor="photoshoot-date">Select Date</label>
              <input className="w-full" type="date" name="photoshoot-date" id="photoshoot-date" value={chosenDate ? chosenDate.toLocaleDateString().split('/').reverse().join('-') : ''} placeholder="SELECT DATE"/>
            </div>
            <div className={`uppercase p-1 flex items-center justify-between gap–2`}>
              {hours.map((hour) => {
                return (
                  <>
                    <div
                      key={hour}
                      className={`uppercase bg-[#ffffff] p-1 pr-3 pl-3 flex items-center opacity-[0.5] justify-center rounded-[2px] ${oswald.className} font-extralight text-[14px]`}
                      onMouseEnter={(e) => {(e.target as HTMLDivElement).style.opacity = "1";}}
                      onMouseLeave={(e) => { (e.target as HTMLDivElement).style.opacity='0.5'}}
                    >
                      <p>{hour}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {/* from here the form with the details */}
          <form action="" className="flex flex-col items-end gap-3 mt-[100px]">
            <input
              className={`w-full ${latoSans.className} text-[18px] border-solid border-[#000] border-b-1 border-r-0 border-l-0 boder-t-0 `}
              type="text"
              placeholder="First Name *"
              required
            />
            <input
              className={`w-full ${latoSans.className} text-[18px] border-solid border-[#000] border-b-1 border-r-0 border-l-0 boder-t-0 `}
              type="text"
              placeholder="Last Name *"
              required
            />
            <input
              className={`w-full ${latoSans.className} text-[18px] border-solid border-[#000] border-b-1 border-r-0 border-l-0 boder-t-0 `}
              type="email"
              placeholder="Email *"
              required
            />
            <input
              className={`w-full ${latoSans.className} text-[18px] border-solid border-[#000] border-b-1 border-r-0 border-l-0 boder-t-0 `}
              type="tel"
              placeholder="Phone Number"
            />
            <button className="bg-[#ffffff] rounded-[5px] p-3 px-12 justify-self-end w-60 cursor-pointer">
              <p className={`${oswald.className} uppercase font-light`}>
                Book <span className="font-semibold">Now</span>
              </p>
            </button>
          </form>
        </div>
      )}
      {children}
    </>
  );
}

export default ReservationProvider