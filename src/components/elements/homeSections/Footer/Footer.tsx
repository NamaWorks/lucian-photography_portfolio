import { chathura, oswald } from '@/app/layout'
import GridContainer from '@/components/ui/GridContainer/GridContainer'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='bg-[#2F3E42] pr-3 pl-3 p-[120px]'>
        <GridContainer>
          <div className='flex flex-col text-[white] text-[40px]/[0.5] col-start-5 col-end-6'>
            <p className={`${oswald.className} font-medium text-[47px]`}>
              <span className={`${oswald.className} font-extralight`}>( </span>
              202
              <span className={`${chathura.className} text-[93px]`}>5</span>
              <span className={`${oswald.className} font-extralight`}> )</span>
            </p>
            <p className={`${chathura.className} text-[70px] relative left-[45px] flex justify-start items-baseline gap-2`}>booking<span className='uppercase text-[52px] font-bold'>now</span></p>
          </div>

          <div className={`col-start-1 col-end-7 text-[128px]/[128px] ${oswald.className} font-medium text-white uppercase mt-[85px]`}>
            <div className='flex justify-between'>
              <p>Photography</p>
              <p>By</p>
            </div>
            <p>Lucian Carrel</p>
          </div>
        </GridContainer>
      </footer>
    </>
  )
}

export default Footer