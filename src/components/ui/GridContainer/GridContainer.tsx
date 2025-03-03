import React from 'react'

const GridContainer = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <>
      <div className='grid grid-cols-6 gap-3'>
        {children}
      </div>
    </>
  )
}

export default GridContainer