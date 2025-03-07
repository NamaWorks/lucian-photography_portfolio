export const getInitialDays = ():Date[] => {
  const initialDays:Date[] = []

  const currentDay = new Date()

  for (let i = 0; i <= 9; i++) {
    const nextDay = new Date(currentDay);
    nextDay.setDate(currentDay.getDate() + i);
  if(!initialDays.includes(nextDay)){
    initialDays?.push(nextDay);
  } else {
    console.log(nextDay)
  }
  }

  console.log(initialDays)

  return initialDays
}