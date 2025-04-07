"use client";

import GridContainer from "@/components/ui/GridContainer/GridContainer";
import { oswald } from "@/utils/fonts/fonts";
import { linesTextAnimation } from "@/utils/functions/animations/linesTextAnimation";
import { splitTextIntoLines } from "@/utils/functions/ui_fn/splitTextIntoLines";
import Image from "next/image";
import { useEffect, useRef, useState} from "react";

const Hero = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null)
  const casesRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const secondSectionRef = useRef<HTMLElement>(null)

  const [ sectionMb, setSectionMb ] = useState<number>(0)

  const lineAnimationTime = 80

  useEffect(()=>{setSectionMb(window.innerWidth)},[setSectionMb])

  
  useEffect(() => {

    if(headerRef.current){
      splitTextIntoLines(headerRef.current);
    }

    setTimeout(() => {
      setTimeout(() => {
        if(valuesRef.current){
          valuesRef.current.querySelectorAll('p').forEach((p, i)=>{setTimeout(() => {linesTextAnimation(p)}, i*lineAnimationTime);})
        }
  
        setTimeout(() => {
          if (headerRef.current){
            headerRef.current.style.opacity = '1'
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
        // }, 480);
        }, 480);
        
        setTimeout(() => {
          if(casesRef){
            linesTextAnimation(casesRef.current as HTMLElement)
          }
        }, 360);
        
      }, 500);
    }, 200);


    }, []);

    useEffect(() => {
      if (sectionRef.current ) {
        setTimeout(() => {
          if(secondSectionRef.current){
            secondSectionRef.current.style.opacity = '1'
          }
          setSectionMb(0); // Delayed update to trigger the animation
        }, 200); // Adjust the delay as needed
      }
    }, []);


  return (
    <>
      <section
        className={`home-section pt-[200px] pr-3 pl-3`}
        ref={sectionRef}
        style={{
          marginBottom: `${sectionMb}px`,
          transition: "margin-bottom 3s cubic-bezier(0, 0.82, 0.27, 0.96)",
        }}
      >
        <GridContainer>
          <div className=" flex flex-col justify-between col-span-2">
            <div
              ref={valuesRef}
              className="flex flex-col gap-[0] text-[24px] font-bold"
            >
              <p className=" opacity-0 text-[24px]/6">Professional lighting.</p>
              <p className=" opacity-0 text-[24px]/6">Artistic direction. </p>
              <p className=" opacity-0 text-[24px]/6">Striking results.</p>
            </div>

            <div
              ref={casesRef}
              className="opacity-0 flex flex-row justify-between w-65 border-b-1 border-[#1f1d24] items-center cursor-pointer"
              onClick={handleCasesClick}
            >
              <p className="font-medium">Explore Case Studies</p>
              <div className="w-4 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-down-icon lucide-arrow-down"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-start-4 col-span-3">
            <h1 ref={headerRef} className="opacity-0 font-bold text-[40px]/9 ">
              Photography Studio that highlights your best angles. Create a
              portfolio that turns heads. Own the moment.
            </h1>
          </div>
        </GridContainer>
      </section>

      <section className="home-section mt-[120px] pt-3 pb-3 relative opacity-0 duration-400" ref={secondSectionRef}>
        <div className="flex object-scale-down overflow-hidden rounded-2xl h-180">
          <Image
            className="object-cover object-center"
            layout="responsive"
            width={1000}
            height={200}
            src={"/assets/img/RIBBED GLASS_01_3313-4170.jpg"}
            alt="Lucian Picture"
          />
        </div>
        <p
          className={`flex flex-row justify-between text-[300px] font-black absolute text-white top-[150] w-full ${oswald.className}`}
        >
          <span>LUCI</span>
          <span>AN</span>
        </p>
      </section>

      <style jsx>{`
        .animate-section {
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default Hero;

function handleCasesClick(){
  const projects = document.querySelector('#projects-section') 
  const projectsPosY = (projects as HTMLDivElement).offsetTop-(projects as HTMLDivElement).scrollTop

  window.scrollTo({
    top: projectsPosY-200,
    behavior: "smooth",
  });
}