'use client';

import GridContainer from '@/components/ui/GridContainer/GridContainer'
import { projectsData } from '@/utils/data/projectsData';
import ProjectCard from './ProjectCard/ProjectCard';
import { useEffect, useRef, useState } from 'react';
import { parallaxEffectOnScroll } from '@/utils/functions/animations/parallaxEffectOnScroll';

const Projects = () => {

  const projectsRef = useRef<null | HTMLElement>(null)
  const freeSpaces = [0, 0, 2, 2, 0, 1, 0, 0, 0, 0]
  const [ windowWidth, setWindowWidth ] = useState<number>(0)

  useEffect(()=>{

    window.addEventListener('resize', ()=>{setWindowWidth(window.innerWidth)})
    window.addEventListener('load', ()=>{setWindowWidth(window.innerWidth)})

    if(projectsRef.current){
      projectsRef.current.style.top = '0'
      parallaxEffectOnScroll(projectsRef.current, 150)
    }

    return ()=>{
      window.removeEventListener('resize', ()=>{setWindowWidth(window.innerWidth)})
      window.removeEventListener('load', ()=>{setWindowWidth(window.innerWidth)})
    }

  },[])

  return (
    <>
      <section className={`pr-3 pl-3 relative`} ref={projectsRef} id='projects-section'>
        <GridContainer>

          {
            projectsData.map((project, i)=>{
                const newFreeSpaces = [ ...freeSpaces, ...freeSpaces, ...freeSpaces ]

                if(windowWidth>1000){                  
                  if(i===0){
                    return (
                      <div key={`${project.projectId}-projects-section-${i}`} className={`grid grid-cols-6 col-span-6`}>
                        <div className={`col-span-2`}></div>
                        <div className='col-span-2'>
                          <ProjectCard data={project}/>
                        </div>
                        <div className={`col-span-2`}></div>
                      </div>
                      )
                  } else if(newFreeSpaces[i]===1){
                    return (
                      <div key={`${project.projectId}-projects-section-${i}`} className={`grid grid-cols-4 col-span-4`}>
                        <div className={`col-span-1`}></div>
                        <div className='col-span-2'>
                          <ProjectCard data={project}/>
                        </div>
                      </div>
                      )
                  } else if(newFreeSpaces[i]>0){
                    return (
                      <div key={`${project.projectId}-projects-section-${i}`} className={`grid grid-cols-${newFreeSpaces[i]*2} col-span-${newFreeSpaces[i]*2}`}>
                        <div className={`col-span-${newFreeSpaces[i]}`}></div>
                        <div className='col-span-2'>
                          <ProjectCard data={project}/>
                        </div>
                      </div>
                      )
                  } else {
                    return (
                      <div key={`${project.projectId}-projects-section-${i}`} className='col-span-2'>
                        <ProjectCard data={project}/>
                      </div>
                      )
                  }
                } else {
                  return (
                    <div key={`${project.projectId}-projects-section-${i}`} className='col-span-6'>
                      <ProjectCard data={project}/>
                    </div>
                    )
                }

            })
          }
        </GridContainer>
      </section>
    </>
  )
}

export default Projects