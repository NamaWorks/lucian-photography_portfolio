// 'use client';

import GridContainer from '@/components/ui/GridContainer/GridContainer'
import { projectsData } from '@/utils/data/projectsData';
import ProjectCard from './ProjectCard/ProjectCard';
import { getRandomInt } from '@/utils/functions/math/math';

const Projects = () => {

  return (
    <>
      <section className='pr-3 pl-3'>
        <GridContainer>
          {
            projectsData.map((project)=>{
              if(getRandomInt(10) > 3){
                return (
                <div key={`${project.projectId}-projects-section`} className='grid grid-cols-4 col-span-4'>
                  <div className='col-span-1'></div>
                  <div className='col-span-2'>
                    <ProjectCard data={project}/>
                  </div>
                </div>
                )
              } else {
                return (
                <div key={`${project.projectId}-projects-section`} className='col-span-2'>
                  <ProjectCard data={project}/>
                </div>
                )
              }
            })
          }
          {
            projectsData.map((project)=>{
              if(getRandomInt(10) > 3){
                return (
                <div key={`${project.projectId}-projects-section`} className='grid grid-cols-4 col-span-4'>
                  <div className='col-span-1'></div>
                  <div className='col-span-2'>
                    <ProjectCard data={project}/>
                  </div>
                </div>
                )
              } else {
                return (
                <div key={`${project.projectId}-projects-section`} className='col-span-2'>
                  <ProjectCard data={project}/>
                </div>
                )
              }
            })
          }
          {
            projectsData.map((project)=>{
              if(getRandomInt(10) > 3){
                return (
                <div key={`${project.projectId}-projects-section`} className='grid grid-cols-4 col-span-4'>
                  <div className='col-span-1'></div>
                  <div className='col-span-2'>
                    <ProjectCard data={project}/>
                  </div>
                </div>
                )
              } else {
                return (
                <div key={`${project.projectId}-projects-section`} className='col-span-2'>
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