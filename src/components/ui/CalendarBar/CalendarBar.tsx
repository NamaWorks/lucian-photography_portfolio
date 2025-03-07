"use client";

import { CalendarContext } from "@/utils/contexts/contexts";
import { getInitialDays } from "@/utils/functions/calendar_fn/getInitialDays";
import { getNextDays } from "@/utils/functions/calendar_fn/getNextDays";
import { CalendarContextInterface } from "@/utils/interfaces/interfaces";
import { useContext, useEffect } from "react";
import DateSquare from "./DateSquare/DateSquare";

const CalendarBar = () => {
  const { dates, setDates } = useContext(CalendarContext) as CalendarContextInterface;

  useEffect(() => {
    setDates(getInitialDays());
  }, [setDates]);

  return (
    <>
      <div className="flex justify-between z-1 w-full]">
        <button>
          <div className="bg-gray-200 h-[24px] w-[26px] rounded xs flex items-center justify-center">
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
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
        </button>

        <div className="overflow-hidden">
          <div className="flex flex-row4 p-10">
            {dates.map((date, i) => {
              return <DateSquare key={i} data={date} />;
            })}
          </div>
        </div>

        <button
          onClick={() => {
            setDates(getNextDays(dates));
            console.log(dates);
            // console.log(dates)
          }}
        >
          <div className="bg-gray-200 h-[24px] w-[26px] rounded xs flex items-center justify-center">
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
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export default CalendarBar;
