"use client";

import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { CalendarContext, NotificationContext } from "../contexts/contexts";
import { CalendarContextInterface, FormDataInterface, NotificationContextInterface } from "../interfaces/interfaces";
import { latoSans, oswald } from "../fonts/fonts";
import { formChecker } from "../functions/checkers/formChecker";

const ReservationProvider = ({ children }: { children: ReactNode }) => {
  const {
    // dates,
    // setDates,
    chosenDate,
    // setChosenDate,
    reservationsOpen,
    setReservationsOpen,
  } = useContext(CalendarContext) as CalendarContextInterface;
  const [timeDate, setTimeDate] = useState<string>("");
  const [ formData, setFormData ] = useState<FormDataInterface>({  date:chosenDate.toLocaleDateString().split('/').reverse().join('-'), hour:'', firstName: '', lastName: '', email: '', telephone: ''})
  const [ screenWidth, setScreenWidth ] = useState<number>(0)
  const { setNotificationOn, setNotificationTexts } = useContext(NotificationContext) as NotificationContextInterface;
  const hours = ["9am", "11am", "3pm", "5pm", "7pm"];

  const reservationDivRef = useRef(null)

  useEffect(() => {
      setReservationsOpen(false);
      setScreenWidth(window.innerWidth)
  }, [setReservationsOpen]);

  return (
    <>
      <div
        ref={reservationDivRef}
        className={`fixed z-99 bg-[#D9D9D9]/75 rounded-[5px] p-3 bottom-3 right-3 min-w-[30svw] flex flex-col gap-5 duration-500 ease-in-out overflow-hidden backdrop-blur-[5px] drop-shadow-2xl`}
        style={{
          transitionDuration: "0.5s",
          transitionBehavior: "cubic-bezier(0.48, 0.01, 0, 0.99)",
          // transitionTimingFunction: "cubic-bezier(0.48, 0.01, 0, 0.99)",
          right: reservationsOpen ? 12 : (-screenWidth),
        }}
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
              setTimeDate('')
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
          <div
            className={`uppercase w-full bg-[#ffffff] p-1 flex items-center justify-between rounded-[2px] ${oswald.className} font-extralight text-[14px]`}
          >
            <label className="hidden" htmlFor="photoshoot-date">
              Select Date
            </label>
            <input
              className="w-full"
              type="date"
              name="photoshoot-date"
              id="photoshoot-date"
              defaultValue={
                chosenDate
                  ? chosenDate
                      .toLocaleDateString()
                      .split("/")
                      .reverse()
                      .join("-")
                  : ""
              }
              placeholder="SELECT DATE"
            />
          </div>
          <div
            className={`uppercase p-1 flex items-center justify-between gap–2`}
          >
            {hours.map((hour) => {
              return (
                
                  <div
                    key={hour}
                    style={{
                      opacity: hour.toUpperCase() == timeDate ? 1 : 0.5,
                    }}
                    className={`uppercase bg-[#ffffff]  p-0.2 pr-3 pl-3 flex items-center  justify-center rounded-[2px] ${oswald.className} font-extralight text-[14px] cursor-pointer transition-all duration-250 ease-in-out border-1 border-transparent hover:border-[#2e3e42] hover:border-1`}
                    onClick={(e) => { handleHourClick(setTimeDate, timeDate, hour, e); setFormData({  date:formData?.date, hour:hour, firstName: formData.firstName, lastName: formData?.lastName, email: formData?.email, telephone: formData?.telephone})}}
                  >
                    <p className="pointer-events-none">{hour}</p>
                  </div>
                
              );
            })}
          </div>
        </div>

        {/* from here the form with the details */}
        <form action="" className="flex flex-col items-end gap-10 mt-[100px]">
          <div className="flex flex-col w-full gap-3">
            <div>
              <label 
                className="absolute pointer-events-none transition-all duration-250 ease-in-out" 
                htmlFor="first-name"
                style={{ opacity: 0.5}}
                >
                  First Name
              </label>
              <input
                onChange={(e)=>{setFormData({  date:formData?.date, hour:formData?.hour, firstName: e.target.value, lastName: formData?.lastName, email: formData?.email, telephone: formData?.telephone})}}
                name="first-name"
                className={`w-full ${latoSans.className} text-[18px] border-solid border-[#000] border-b-1 border-r-0 border-l-0 boder-t-0 focus:border-0`}
                type="text"
                onFocus={(e)=>{handleFocusInput(e.target.parentElement?.querySelector('label') as HTMLLabelElement)}}
                onBlur={(e)=>{if(e.target.value === ''){handleFocusInput(e.target.parentElement?.querySelector('label') as HTMLLabelElement, true)}}}
                required
              />
            </div>
            <div>
              <label 
                className="absolute pointer-events-none transition-all duration-250 ease-in-out" 
                htmlFor="last-name"
                style={{ opacity: 0.5}}
                >
                  Last Name
              </label>
              <input
                onChange={(e)=>{setFormData({  date:formData?.date, hour:formData?.hour, firstName: formData.firstName, lastName: e.target.value, email: formData?.email, telephone: formData?.telephone})}}
                name="last-name"
                className={`w-full ${latoSans.className} text-[18px] border-solid border-[#000] border-b-1 border-r-0 border-l-0 boder-t-0 focus:background-[#000]`}
                type="text"
                onFocus={(e)=>{handleFocusInput(e.target.parentElement?.querySelector('label') as HTMLLabelElement)}}
                onBlur={(e)=>{if(e.target.value === ''){handleFocusInput(e.target.parentElement?.querySelector('label') as HTMLLabelElement, true)}}}
                required
                />
            </div>
            <div>
              <label 
                className="absolute pointer-events-none transition-all duration-250 ease-in-out" 
                htmlFor="email"
                style={{ opacity: 0.5}}
                >
                  Email
              </label>
              <input
                onChange={(e)=>{setFormData({  date:formData?.date, hour:formData?.hour, firstName: formData.firstName, lastName: formData.lastName, email: e.target.value, telephone: formData?.telephone})}}
                name="email"
                className={`w-full ${latoSans.className} text-[18px] border-solid border-[#000] border-b-1 border-r-0 border-l-0 boder-t-0 focus:border-0`}
                type="email"
                onFocus={(e)=>{handleFocusInput(e.target.parentElement?.querySelector('label') as HTMLLabelElement)}}
                onBlur={(e)=>{if(e.target.value === ''){handleFocusInput(e.target.parentElement?.querySelector('label') as HTMLLabelElement, true)}}}
                required
              />
            </div>
            <div>
              <label 
                className="absolute pointer-events-none transition-all duration-250 ease-in-out" 
                htmlFor="telephone"
                style={{ opacity: 0.5}}
                >
                  Telephone
              </label>
              <input
                onChange={(e)=>{setFormData({  date:formData?.date, hour:formData?.hour, firstName: formData.firstName, lastName: formData.lastName, email: formData?.email, telephone: e.target.value})}}
                name="telephone"
                className={`w-full ${latoSans.className} text-[18px] border-solid border-[#000] border-b-1 border-r-0 border-l-0 boder-t-0 focus:border-0`}
                type="tel"
                minLength={8}
                maxLength={14}
                onFocus={(e)=>{handleFocusInput(e.target.parentElement?.querySelector('label') as HTMLLabelElement)}}
                onBlur={(e)=>{if(e.target.value === ''){handleFocusInput(e.target.parentElement?.querySelector('label') as HTMLLabelElement, true)}}}
              />
            </div>
          </div>

          <button
            className="bg-[#ffffff] rounded-[5px] p-3 px-12 justify-self-end w-60 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
                const emptyFields = formChecker(formData)
                if(emptyFields.length>0){
                  setNotificationTexts({ title : `check form fields`, subtitle : `The next fields are missing: ${emptyFields.join('-')}` })
                  setNotificationOn(true)
                } else {
                  setNotificationTexts({ title : `Info correctly sent.`, subtitle : `We will contact you in order to plan the session and get more details.` })
                  setNotificationOn(true)
                  setTimeDate('')
                  setReservationsOpen(false)
                }
            }}
          >
            <p className={`${oswald.className} uppercase font-light`}>
              Book <span className="font-semibold">Now</span>
            </p>
          </button>
        </form>
      </div>
      
      {children}
    </>
  );
};

export default ReservationProvider;


function handleFocusInput(label:HTMLLabelElement, out?: boolean){
  if(out){
    label.style.opacity = '0.5'
  } else {
    label.style.opacity = '0'
  }

}

function  handleHourClick(setTimeDate: React.Dispatch<React.SetStateAction<string>> ,timeDate: string, hour:string , e:React.MouseEvent<HTMLDivElement>
){
if (timeDate == hour.toUpperCase()) {
    setTimeDate("");
  } else {
    setTimeDate(
      (
        (e.target as HTMLDivElement).querySelector(
          "p"
        ) as HTMLParagraphElement
      ).innerText
    );
  }
}