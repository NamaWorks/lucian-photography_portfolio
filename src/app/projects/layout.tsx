import React from 'react'

const projectsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
  <>
    <div>{children}</div>
  </>
  )
}

export default projectsLayout