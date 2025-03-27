'use client';

import { oswald } from '@/utils/fonts/fonts'
import { projectImageAnimation } from '@/utils/functions/animations/projectImageAnimation';
import { ProjectDataInterface } from '@/utils/interfaces/interfaces'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

const ProjectCard = ({data}:{data:ProjectDataInterface}) => {

  const nextRouter = useRouter()

  const imageContainerRef = useRef<HTMLDivElement | null>(null)
  const textsContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(()=>{
    if(imageContainerRef.current){
      textsContainerRef.current?.addEventListener('mouseenter', ()=>{projectImageAnimation(imageContainerRef.current as HTMLDivElement)})
      textsContainerRef.current?.addEventListener('mouseout', ()=>{projectImageAnimation(imageContainerRef.current as HTMLDivElement, true)})
    }
  },[])

    return (
      <>
      <div className='grid col-span-3 grid-cols-2 gap-3'>
        <div 
          className='flex overflow-hidden rounded-[10px] object-cover h-[18svw] w-[full]' 
          // style={{opacity: 0}} 
          ref={imageContainerRef}>
            <Image className='object-cover object-center' src={"/assets/img/projects-imgs/" + `${data.images[0].split("/").slice(-1)}`} alt='image-project' width={700} height={700} />
        </div>
        <div className='flex flex-col items-start justify-end gap-3 cursor-pointer' onClick={()=>{nextRouter.push(`projects/${data.projectId}`)}} ref={textsContainerRef}>
          <p className={`${oswald.className} cursor-pointer pointer-events-none`}>( {data.projectId.replace('p', "").replace('00', '00_')} )</p>
          <p className='leading-[1] cursor-pointer pointer-events-none'>{data.date} <br/> {data.modelName} </p>
        </div>
      </div>
      </>
    )
}

export default ProjectCard