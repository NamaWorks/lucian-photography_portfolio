"use client";

import ProjectAltLayout from '@/components/elements/projectLayouts/ProjectAltLayout';
import ProjectLayout from '@/components/elements/projectLayouts/ProjectLayout';
import GridContainer from '@/components/ui/GridContainer/GridContainer'
import { projectsData } from '@/utils/data/projectsData'
import { oswald } from '@/utils/fonts/fonts';
import { linesTextAnimation } from '@/utils/functions/animations/linesTextAnimation';
import { splitTextIntoLines } from '@/utils/functions/ui_fn/splitTextIntoLines';
import { 
  ProjectDataInterface, 
  // ProjectParams, 
  ProjectParamsInterior 
} from '@/utils/interfaces/interfaces';
import {
   Usable,
   use, 
   useEffect, 
   useRef, 
   useState 
  } from 'react';
// import { PageProps } from '../../../../.next/types/app/page';



const Project = ({ params }: { params: ProjectParamsInterior }) => {

  const { id } = use(params as unknown as Usable<ProjectParamsInterior>)
  // const { id } = params
  const [ project, setProject ] = useState<null | undefined | ProjectDataInterface>(null)
  const [ altLayout, setAltLayout ] = useState<boolean>(false)
  const headerRef = useRef<HTMLHeadingElement>(null)
  const lineAnimationTime = 80


  useEffect(()=>{
    setProject(projectsData.find((project)=>project.projectId==id))
  },[setProject, id])

  useEffect(()=>{
    if(headerRef.current){
      headerRef.current.style.opacity = '1'
      splitTextIntoLines(headerRef.current);
      const lines = headerRef.current.querySelectorAll('span')
      if(lines){
        lines.forEach((line, i)=>{
          line.style.opacity = '0';
          line.style.display = 'inline-block'
          setTimeout(() => {
            linesTextAnimation(line)
          }, lineAnimationTime * i);
        })
      }
    }
  })

  useEffect(()=>{
    if(project?.images){
      if(project?.images.length >= 6)
        setAltLayout(false)
    } else {setAltLayout(true)}
  },[project])

  return (
    <>
    <main className='pb-3'>
    <section id={`project-page-${id}`} className='project-section pt-[175px] pr-3 pl-3'>
      <GridContainer>
        <div className='col-start-2 col-end-5 mb-[120px]'>
          <p ref={headerRef} className='font-bold text-[32px]/9 opacity-0'>{project?.texts.textA}</p>
        </div>
          <p className={`col-start-1 ${oswald.className}`}>{`( ${project?.projectId.replaceAll('p', '').replaceAll('00', '00_')} )`}</p>
          <p className='col-start-2'>{project?.date}</p>
          <p className='col-start-6 text-right'>{project?.modelName}</p>

        <div className='col-start-1 col-end-7'>
        <GridContainer>
          {altLayout ? <ProjectAltLayout project={project as ProjectDataInterface}/> : <ProjectLayout project={project as ProjectDataInterface} />}
        </GridContainer>

        </div>
      </GridContainer>
    </section>
    </main>
    </>
  )
}

export default Project
