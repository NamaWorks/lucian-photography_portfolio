export const getNextDays = (dates: Date[]): Date[] => {
  const newDates: Date[] = [...dates];
  let today:Date  

  if(dates?.length<1){
    console.log('theres date')
    today = dates[dates.length-1];
  } else {
    console.log('no date')
    today = new Date()
  }

  for (let i = 0; i < 10; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    newDates?.push(nextDay);
  }
  
  return newDates;
};