import React from "react";

export interface ProjectDataInterface {
  title: string,
  projectId: string,
  date: string,
  modelName: string,
  texts: {
    textA: string,
    textB: string,
    textC: string,
},
images: string[],
}

export interface CalendarContextInterface {
  dates: Date[],
  setDates: React.Dispatch<React.SetStateAction<Date[]>>,
}

export interface ProjectParams {
  params: ProjectParamsInterior
}

export interface ProjectParamsInterior {
  id:string,
}