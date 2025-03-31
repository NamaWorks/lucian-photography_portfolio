'use client';

import { ReactNode, useContext, useEffect, useState } from "react";
import { CalendarContext } from "../contexts/contexts";
import { CalendarContextInterface } from "../interfaces/interfaces";
import { latoSans, oswald } from "../fonts/fonts";

const ReservationProvider = ({children}: {children: ReactNode}) => {

  const { dates, setDates, chosenDate, setChosenDate, reservationsOpen, setReservationsOpen } = useContext(CalendarContext) as CalendarContextInterface
  const [ timeDate, setTimeDate ] = useState<string>('')

  const hours = ['9am', '11am', '3pm', '5pm', '7pm']

  useEffect(()=>{
    setReservationsOpen(false)
  },[setReservationsOpen])


  return (
    <>
      {/* {reservationsOpen===true &&  */}
      (
        <div
          className={`fixed z-99 bg-[#D9D9D9] rounded-[5px] p-3 bottom-3 right-3 min-w-[30svw] flex flex-col gap-5 duration-500 ease-in-out overflow-hidden`}
          style={
            {
              // transition: 'height',
              transitionDuration: '0.5s',
              right: reservationsOpen ? 12 :  -window.innerWidth/10*5,
              transitionBehavior: 'cubic-bezier(0.48, 0.01, 0, 0.99)',
              // height: reservationsOpen ? '75svh' : '0svh'
            }
          }
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x-icon lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {/* from here the toggle for dates */}
            <div className={`uppercase w-full bg-[#ffffff] p-1 flex items-center justify-between rounded-[2px] ${oswald.className} font-extralight text-[14px]`}>
              <label className="hidden" htmlFor="photoshoot-date">Select Date</label>
              <input className="w-full" type="date" name="photoshoot-date" id="photoshoot-date" defaultValue={chosenDate ? chosenDate.toLocaleDateString().split('/').reverse().join('-') : ''} placeholder="SELECT DATE"/>
            </div>
            <div className={`uppercase p-1 flex items-center justify-between gap–2`}>
              {hours.map((hour) => {
                return (
                  <>
                    <div
                      key={hour}
                      className={`uppercase bg-[#ffffff]  p-0.2 pr-3 pl-3 flex items-center opacity-[${hour.toUpperCase() === timeDate  ? 1 : 0.5}] hover:opacity-[1] justify-center rounded-[2px] ${oswald.className} font-extralight text-[14px] cursor-pointer transition-opacity duration-250 ease-in-out`}
                      onClick={(e) => {
                          // (e.target as HTMLDivElement).style.opacity = "1";
                          if(timeDate===hour.toUpperCase()){
                            setTimeDate('')
                          } else {
                            setTimeDate(((e.target as HTMLDivElement).querySelector('p') as HTMLParagraphElement).innerText)
                          }
                        }
                      }
                      // onMouseLeave={(e) => { (e.target as HTMLDivElement).style.opacity='0.5'}}
                    >
                      <p className="pointer-events-none">{hour}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {/* from here the form with the details */}
          <form action="" className="flex flex-col items-end gap-10 mt-[100px]">
            <div className="flex flex-col w-full gap-3">

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
              minLength={8}
              maxLength={14}
              placeholder="Phone Number"
              />
              </div>
            <button className="bg-[#ffffff] rounded-[5px] p-3 px-12 justify-self-end w-60 cursor-pointer" onClick={()=>{setReservationsOpen(true)}}>
              <p className={`${oswald.className} uppercase font-light`}>
                Book <span className="font-semibold">Now</span>
              </p>
            </button>
          </form>
        </div>
      )
      // }
      {children}
    </>
  );
}

export default ReservationProvider