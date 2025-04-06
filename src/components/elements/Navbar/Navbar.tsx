"use client";

import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';



const Navbar = () => {

  const [ visibleNav, setVisibleNav ] = useState<boolean>(false)

  useEffect(()=>{
    setTimeout(() => {
      setVisibleNav(true)
    }, 400);
  })

  return (
    <>
      <nav 
        className='fixed top-0 w-full flex flex-row items-center justify-between px-4 py-2 border-b-1 border-[#1f1d24] bg-[#FBFBFB] z-98 duration-400 ease-in-out'
        style={{opacity:visibleNav ? '1' : '0'}}
      >

        <div>
          <Link href={'/'}>
            <Image src={"/assets/brand/logo.png"} width={150} height={100} alt={`Lucian Carrel Logo`}/>
          </Link>
        </div>

        <div>
          <p className='font-base text-xl cursor-pointer' onClick={handleBookAPhotoshootClick}>
            {`(Book a Photoshoot)`}
          </p>
        </div>

      </nav>
    </>
  )
}

export default Navbar;

function handleBookAPhotoshootClick(){
  const bookings = document.querySelector('#bookings')
if(bookings){
  const bookingsPosY = (bookings as HTMLDivElement).offsetTop-(bookings as HTMLDivElement).scrollTop
  window.scrollTo({
    top: bookingsPosY,
    behavior: "smooth",
  });
} else {
  redirect('/#bookings')
}

}