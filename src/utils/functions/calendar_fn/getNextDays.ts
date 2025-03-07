export const getNextDays = (dates: Date[]): Date[] => {
  const newDates: Date[] = [...dates.slice(0, dates.length-2)];
  let lastDay:Date  

  if(dates?.length<1){
    lastDay = new Date()
  } else {
    lastDay = dates[dates.length-1];
  }



  for (let i = 0; i <= 11; i++) {
    const nextDay = new Date(lastDay);
    nextDay.setDate(lastDay.getDate() + i);
  if(!newDates.includes(nextDay)){
    newDates?.push(nextDay);
  } else {
    console.log(nextDay)
  }
  }
  
  return newDates;
};