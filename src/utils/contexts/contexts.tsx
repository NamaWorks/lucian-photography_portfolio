"use client";

import { createContext } from "react";
import { CalendarContextInterface, NotificationContextInterface } from "../interfaces/interfaces";

export const CalendarContext= createContext<CalendarContextInterface | undefined>(undefined)
export const NotificationContext = createContext<NotificationContextInterface | undefined>(undefined)