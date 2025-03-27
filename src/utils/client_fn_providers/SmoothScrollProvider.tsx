"use client";
import React, { ReactNode, useEffect } from 'react'
import { smoothScroll } from '../functions/animations/smoothScroll';

const SmoothScrollProvider = ({children}: {children: ReactNode}) => {

  useEffect(()=>{
    smoothScroll()
  },[])

  return (
    <>
      {children}
    </>
  )
}

export default SmoothScrollProvider