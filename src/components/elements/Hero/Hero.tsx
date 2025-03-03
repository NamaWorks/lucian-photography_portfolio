import GridContainer from "@/components/ui/GridContainer/GridContainer";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="home-section pt-[200px] pr-3 pl-3 ">
        <GridContainer>
          <div className=" flex flex-col justify-between col-span-2">
            <div className="flex flex-col gap-[0] text-[24px] font-bold">
              <p className="text-[24px]/6">Professional lighting.</p>
              <p className="text-[24px]/6">Artistic direction. </p>
              <p className="text-[24px]/6">Striking results.</p>
            </div>

            <div className="flex flex-row justify-between w-65 border-b-1 border-[#1f1d24]">
              <p className="font-medium">Explore Case Studies</p>
              <div className="w-4 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-start-4 col-span-3">
            <h1 className="font-bold text-[40px]/9 ">
              Studio photography that highlights your best angles. Create a
              portfolio that turns heads. Own the moment.
            </h1>
          </div>
        </GridContainer>
      </section>

      <section className="home-section mt-[120px] p-3">
        <div className="flex object-scale-down overflow-hidden rounded-2xl h-120">
          <Image
            className="object-cover object-center"
            layout="responsive"
            width={1000}
            height={200}
            src={"/assets/img/RIBBED GLASS_01_3313-4170.jpg"}
            alt="Lucian Picture"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
