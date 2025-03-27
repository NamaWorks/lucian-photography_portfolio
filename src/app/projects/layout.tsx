import Footer from '@/components/elements/Footer/Footer';
import React from 'react'

const projectsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
  <>
    <div>{children}</div>
    <Footer/>
  </>
  )
}

export default projectsLayout