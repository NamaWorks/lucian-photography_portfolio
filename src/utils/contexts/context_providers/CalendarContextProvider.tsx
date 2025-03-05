"use client";

import React, { useState } from "react";
import { CalendarContext } from "../contexts";
// import { CalendarContextInterface } from "@/utils/interfaces/interfaces";

const CalendarContextProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [ dates, setDates ] = useState<Date[]>([new Date()])

  return (
    <CalendarContext.Provider value={{ dates, setDates }}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;