import { latoSans } from '@/utils/fonts/fonts';
import { ProjectDataInterface } from '@/utils/interfaces/interfaces'
import Image from 'next/image'
import React from 'react'

const ProjectAltLayout = ({project} : {project: ProjectDataInterface}) => {
    return (
      <>
        {project?.images.map((image, i) => {
          console.log(image);
          if (i < 2) {
            return (
              <div
                key={`project-image-${i}`}
                className="col-span-6 lg:col-span-2 overflwo-hidden flex"
              >
                <Image
                  className='rounded-[10px]'
                  src={
                    "/assets/img/projects-imgs/" + `${image.split("/").slice(-1)}`
                  }
                  alt={`${image.split("/").slice(-1)}`}
                  width={1200}
                  height={800}
                  />
              </div>
            );
          }
        })}
  
        <div className=" col-span-6 lg:col-span-4 flex flex-col justify-center">
          <div className="w-full">
            <p className={`pr-[25%] lg:pr-[75%] ${latoSans.className} font-bold text-[24px]`}>{project?.texts.textB}</p>
          </div>
  
          <div className="w-full">
            <p className={`pl-[15%] w-[100%] lg:pl-[25%] lg:w-[75%] ${latoSans.className} text-[18px]`}>{project?.texts.textC}</p>
          </div>
        </div>
  
        {project?.images.map((image, i) => {
          console.log(image);
          if (i >= 2) {
            return (
              <div
              key={`project-image-${i}`}
              className="col-span-6 lg:col-span-2 overflwo-hidden flex"
              >
                <Image
                  className='rounded-[10px]'
                  src={
                    "/assets/img/projects-imgs/" + `${image.split("/").slice(-1)}`
                  }
                  alt={`${image.split("/").slice(-1)}`}
                  width={1200}
                  height={800}
                />
              </div>
            );
          }
        })}
      </>
    );
}

export default ProjectAltLayout