"use client";

import { createContext } from "react";
import { CalendarContextInterface } from "../interfaces/interfaces";

export const CalendarContext= createContext<CalendarContextInterface | undefined>(undefined)