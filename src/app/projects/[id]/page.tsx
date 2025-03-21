import GridContainer from '@/components/ui/GridContainer/GridContainer'
import React from 'react'

const Project = ({params}:{params:{id: string}}) => {



  return (
    <>
    <main>
    <section id={`project-page-${params.id}`} className='project-section pt-[175px] pr-3 pl-3 '>
      <GridContainer>
        <h1>{params.id}</h1>
      </GridContainer>
    </section>
    </main>
    </>
  )
}

export default Project
