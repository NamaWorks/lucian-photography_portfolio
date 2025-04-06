"use client";

import { NotificationContext } from "@/utils/contexts/contexts";
import { NotificationContextInterface } from "@/utils/interfaces/interfaces";
import React, { ReactNode, useContext, useEffect, useRef } from "react";
import { oswald } from "../fonts/fonts";
import { linesTextAnimation } from "../functions/animations/linesTextAnimation";

const NotificationPopUpProvider = ({ children }: { children: ReactNode }) => {
  const { notificationOn, setNotificationOn } = useContext(
    NotificationContext
  ) as NotificationContextInterface;

  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current && notificationOn) {
      const lines = textRef.current.querySelectorAll("span");
      lines.forEach((line)=>{line.style.opacity='0'})
      setTimeout(() => {
        
        if(lines){
          lines.forEach((line, i)=>{
            line.style.opacity = '0';
            line.style.display = 'inline-block'
            setTimeout(() => {
              linesTextAnimation(line)
            }, 160 * i);
          })
        }
      }, 200);
      setTimeout(() => {
        setNotificationOn(false)
        console.log("notification to be deleted");
      }, 8000);
    }
  }, [notificationOn, setNotificationOn]);

  return (
    <>
          <div
            ref={containerRef}
            className={`fixed h-full w-full flex items-start justify-center z-99 pointer-events-none overflow-hidden transition`}
            style={{
              top: notificationOn ? 0 : -200,
              transition: 'all',
              transitionDuration: "0.5s",
              transitionTimingFunction: "cubic-bezier(0.48, 0.01, 0, 0.99)",
            }}
          >
            <div
              className={`bg-[#D9D9D9]/85 rounded-[5px] p-3 backdrop-blur-[5px] drop-shadow-2xl relative top-[4rem] overflow-hidden pointer-events-auto`}
              onClick={()=>{setNotificationOn(false)}}
            >
              <p ref={textRef} className="text-center">
                <span
                  className={`${oswald.className} text-[24px] uppercase font-medium`}
                >
                  Info correctly sent.
                </span>
                <br />
                <span>
                  We will contact you in order to plan the session and get more
                  details.
                </span>
              </p>
            </div>
          </div>
      {children}
    </>
  );
};

export default NotificationPopUpProvider;
