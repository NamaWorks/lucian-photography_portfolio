'use client';

import { oswald } from '@/utils/fonts/fonts'
import { ProjectDataInterface } from '@/utils/interfaces/interfaces'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const ProjectCard = ({data}:{data:ProjectDataInterface}) => {

  const nextRouter = useRouter()

    return (
      <>
      <div className='grid col-span-3 grid-cols-2 gap-3'>
        <div className='flex overflow-hidden rounded-[10px] object-cover h-[18svw] w-[full]' >
          <Image 
          className='object-cover object-center'
          src={
            "/assets/img/projects-imgs/" + `${data.images[0].split("/").slice(-1)}`
            } 
            alt='image-project' width={700} height={700} />
        </div>
        <div className='flex flex-col items-start justify-end gap-3' onClick={()=>{nextRouter.push(`projects/${data.projectId}`)}}>
          <p className={`${oswald.className} cursor-pointer`}>( {data.projectId.replace('p', "").replace('00', '00_')} )</p>
          <p className='leading-[1] cursor-pointer'>{data.date} <br/> {data.modelName} </p>
        </div>
      </div>
      </>
    )
}

export default ProjectCard