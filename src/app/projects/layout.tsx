import SmoothScrollProvider from '@/utils/client_fn_providers/SmoothScrollProvider';
import React from 'react'

const projectsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
  <>
  <SmoothScrollProvider>
    <div>{children}</div>
  </SmoothScrollProvider>
  </>
  )
}

export default projectsLayout