import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='fixed top-0 w-full flex flex-row items-center justify-between px-4 py-2 border-b-1 border-[#1f1d24] bg-[#FBFBFB] z-98'>

        <div>
          <Link href={'/'}>
            <Image src={"/assets/brand/logo.png"} width={150} height={100} alt={`Lucian Carrel Logo`}/>
          </Link>
        </div>

        <div>
          <Link href={'/#'} className='font-base text-xl'>
            {`(Book a Photoshoot)`}
          </Link>
        </div>

      </nav>
    </>
  )
}

export default Navbar;