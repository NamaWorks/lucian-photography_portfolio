"use client";

import GridContainer from '@/components/ui/GridContainer/GridContainer'
import { chathura, oswald } from '@/utils/fonts/fonts'
import { linesTextAnimation } from '@/utils/functions/animations/linesTextAnimation';
import React, { useRef, useState } from 'react'

const Footer = () => {

  const footerTextRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLElement>(null)

  const [ footerAnimated, setFooterAnimated ] = useState<boolean>(false)

  if(typeof window !== "undefined"){
    window.onscroll = () => {
      if (footerRef.current) {
        if (
          footerAnimated === false &&
          footerTextRef.current &&
          footerRef.current?.getBoundingClientRect().top < 200
        ) {
          const ps = footerTextRef.current.querySelectorAll("p");
          ps.forEach((p, i) => {
            p.style.opacity = "0";
            setTimeout(() => {
              linesTextAnimation(p);
            }, 60 * i);
          });
          setFooterAnimated(true);
        }
      }
    };
  }
    
  return (
    <>
      <footer className='bg-[#2F3E42] pr-3 pl-3 p-[120px] h-[100svh]' ref={footerRef}>
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

          <div className={`col-start-1 col-end-7 text-[128px]/[128px] ${oswald.className} font-medium text-white uppercase mt-[85px]`} ref={footerTextRef}>
            <div className='flex justify-between'>
              <p className='opacity-[0]'>Photography</p>
              <p className='opacity-[0]'>By</p>
            </div>
            <p className='opacity-[0]'>Lucian Carrel</p>
          </div>
        </GridContainer>
      </footer>
    </>
  )
}

export default Footer