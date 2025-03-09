import { imagesScroll } from "@/utils/data/imagesScroll";
import Image from "next/image";
import React from "react";

const ImagesScroll = () => {
  // Esta parte la podemos hacer sin dejar de hacer scroll, haciendo que las imágenes tengan un position sticky

  return (
    <>
      <div className={`flex flex-col mt-[180px]`}>
        {imagesScroll.map((image, i) => {

          return (
            <div key={`image-scroll-${i}`} className={`rounded-2xl overflow-hidden w-full flex sticky h-[100svh] overflow-hidden flex`} style={{top: i*60 + 100}}>
              <Image
                src={image}
                alt="image-scroll"
                className="object-cover object-[0_-400px]"
                layout="responsive"
                width={1000}
                height={200}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImagesScroll;
