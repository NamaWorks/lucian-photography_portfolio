import React from 'react'

const projectsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
  <>
    <div>{children}</div>
    <p className='h-20 bg-black'>choripanes</p>
  </>
  )
}

export default projectsLayout