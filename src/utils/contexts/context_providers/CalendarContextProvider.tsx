"use client";

import React, { useState } from "react";
import { CalendarContext } from "../contexts";
// import { CalendarContextInterface } from "@/utils/interfaces/interfaces";

const CalendarContextProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [ dates, setDates ] = useState<Date[]>([new Date()])
  const [ chosenDate, setChosenDate ] = useState<Date>(new Date())
  const [ reservationsOpen, setReservationsOpen ] = useState<boolean>(true)

  return (
    <CalendarContext.Provider value={{ dates, setDates, chosenDate, setChosenDate, reservationsOpen, setReservationsOpen }}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;