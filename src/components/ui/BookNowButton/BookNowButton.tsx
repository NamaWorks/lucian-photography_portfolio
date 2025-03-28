"use client";
import { oswald } from '@/utils/fonts/fonts'
import React from 'react'

const BookNowButton = () => {
  return (
      <button className='bg-[#dfdfdf] rounded-[5px] p-3 px-12 justify-self-end col-start-6 w-full cursor-pointer'>
        <p className={`${oswald.className} uppercase font-light`}>Book <span className='font-semibold'>Now</span></p>
      </button>
  )
}

export default BookNowButton