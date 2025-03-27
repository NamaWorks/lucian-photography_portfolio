"use client";

import GridContainer from "@/components/ui/GridContainer/GridContainer";
import { oswald } from "@/utils/fonts/fonts";
import { linesTextAnimation } from "@/utils/functions/animations/linesTextAnimation";
import { splitTextIntoLines } from "@/utils/functions/ui_fn/splitTextIntoLines";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null)
  const casesRef = useRef<HTMLDivElement>(null)

  const lineAnimationTime = 80

  useEffect(() => {

    if(valuesRef.current){
      valuesRef.current.querySelectorAll('p').forEach((p, i)=>{setTimeout(() => {linesTextAnimation(p)}, i*lineAnimationTime);})
    }

    setTimeout(() => {
        if (headerRef.current){
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
      }, 480);

    setTimeout(() => {
      if(casesRef){
        linesTextAnimation(casesRef.current as HTMLElement)
      }
    }, 360);

  }, []);

  return (
    <>
      <section className="home-section pt-[200px] pr-3 pl-3 ">
        <GridContainer>
          <div className=" flex flex-col justify-between col-span-2">
            <div ref={valuesRef} className="flex flex-col gap-[0] text-[24px] font-bold">
              <p className=" opacity-0 text-[24px]/6">Professional lighting.</p>
              <p className=" opacity-0 text-[24px]/6">Artistic direction. </p>
              <p className=" opacity-0 text-[24px]/6">Striking results.</p>
            </div>

            <div ref={casesRef} className="opacity-0 flex flex-row justify-between w-65 border-b-1 border-[#1f1d24]">
              <p className="font-medium">Explore Case Studies</p>
              <div className="w-4 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
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

      <section className="home-section mt-[120px] pt-3 pb-3 relative">
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
        <p className={`flex flex-row justify-between text-[300px] font-black absolute text-white top-[150] w-full ${oswald.className}`}>
          <span>LUCI</span><span>AN</span>
        </p>
      </section>
    </>
  );
};

export default Hero;