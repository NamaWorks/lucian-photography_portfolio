import { oswald } from "@/utils/fonts/fonts"
import { useState } from "react"

const DateSquare = ({data}: {data: Date}) => {

  const [ stringDate, setStringDate ] = useState<string>(data.toDateString())

  const dateNumber = stringDate.split(' ')[2]
  const dateMonth = stringDate.split(' ')[1]
  

  return (
    <>
      <div className="flex flex-col items-center justify-center w-[10svw] ">

        <p className={`${oswald.className} font-medium`}>{dateNumber}</p>
        <p className={`${oswald.className} font-thin text-[14px]/1.25`}>{dateMonth}</p>

      </div>
    </>
  )
}

export default DateSquare