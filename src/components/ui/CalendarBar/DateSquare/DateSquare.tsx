import { oswald } from "@/utils/fonts/fonts"

const DateSquare = ({data}: {data: Date}) => {

  const stringDate = data.toDateString()

  const dateNumber = stringDate.split(' ')[2]
  const dateMonth = stringDate.split(' ')[1]
  

  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-[10svw] ">
        <p className={`${oswald.className} font-medium`}>{dateNumber}</p>
        <p className={`${oswald.className} font-thin text-[14px]/1.25`}>{dateMonth}</p>
      </div>
    </>
  )
}

export default DateSquare