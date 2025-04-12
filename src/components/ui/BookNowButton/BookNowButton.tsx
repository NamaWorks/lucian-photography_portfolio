"use client";
import { CalendarContext } from '@/utils/contexts/contexts';
import { oswald } from '@/utils/fonts/fonts'
import { CalendarContextInterface } from '@/utils/interfaces/interfaces';
import React, { useContext } from 'react'

const BookNowButton = () => {

  const { setReservationsOpen } = useContext(CalendarContext) as CalendarContextInterface

  return (
      <button className='bg-[#dfdfdf] rounded-[5px] p-3 px-12 justify-self-end col-start-5 col-span-2  w-full cursor-pointer ms:col-span-2 2xl:col-start-6 2xl:col-span-1' onClick={()=>{setReservationsOpen(true)}}>
        <p className={`${oswald.className} uppercase font-light`}>Book <span className='font-semibold'>Now</span></p>
      </button>
  )
}

export default BookNowButton