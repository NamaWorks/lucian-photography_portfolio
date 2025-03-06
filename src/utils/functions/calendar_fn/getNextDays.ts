export const getNextDays = (dates: Date[]): Date[] => {
  const newDates: Date[] = [...dates.slice(0, dates.length-2)];
  let lastDay:Date  

  if(dates?.length<1){
    lastDay = new Date()
  } else {
    lastDay = dates[dates.length-1];
  }

  console.log(lastDay)

  for (let i = 0; i < 10; i++) {
    const nextDay = new Date(lastDay);
    nextDay.setDate(lastDay.getDate() + i);
  if(!newDates.includes(nextDay)){
    newDates?.push(nextDay);
  }
  }

  console.log(newDates)
  
  return newDates;
};