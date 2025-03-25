"use client";

import GridContainer from '@/components/ui/GridContainer/GridContainer'
import { projectsData } from '@/utils/data/projectsData'
import { headerTextAnimation } from '@/utils/functions/animations/headerTextAnimation';
import { splitTextIntoLines } from '@/utils/functions/ui_fn/splitTextIntoLines';
import { 
  ProjectDataInterface, 
  ProjectParams, 
  ProjectParamsInterior 
} from '@/utils/interfaces/interfaces';
import Image from 'next/image';
import {
   Usable,
   use, 
   useEffect, 
   useRef, 
   useState 
  } from 'react';


const Project = ({params}:ProjectParams) => {

  const { id } = use(params as unknown as Usable<ProjectParamsInterior>)
  // const { id } = params
  const [ project, setProject ] = useState<null | undefined | ProjectDataInterface>(null)
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
            headerTextAnimation(line)
          // }, lineAnimationTime * i);
          }, lineAnimationTime * i);
        })
      }
    }
  })

  return (
    <>
    <main>
    {/* <section id={`project-page-${params.id}`} className='project-section pt-[175px] pr-3 pl-3 '> */}
    <section id={`project-page-${id}`} className='project-section pt-[175px] pr-3 pl-3'>
      <GridContainer>
        <div className='col-start-2 col-end-5 mb-[120px]'>
          <p ref={headerRef} className='font-bold text-[32px]/9 opacity-0'>{project?.texts.textA}</p>
        </div>
          <p className='col-start-1'>{project?.projectId.replaceAll('p', '').replaceAll('00', '00_')}</p>
          <p className='col-start-2'>{project?.date}</p>
          <p className='col-start-6 text-right'>{project?.modelName}</p>

        <div className='col-start-1 col-end-7'>
          {
            project?.images.map((image, i)=>{
              console.log(image)
              return (
              <div key={`project-image-${i}`}>
                <Image
                  // src={`${image.split('/').slice(-1)}`}
                  src={`../../../../public/assets/img/projects-imgs/${image.split('/').slice(-1)}`}
                  alt={`${image.split('/').slice(-1)}`}
                  width={400}
                  height={400}
                >
                </Image>

              </div>
            )
            })
          }
        </div>
      </GridContainer>
    </section>
    </main>
    </>
  )
}

export default Project
