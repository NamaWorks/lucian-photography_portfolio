import Booking from "@/components/elements/Booking/Booking";
import Footer from "@/components/elements/Footer/Footer";
import Hero from "@/components/elements/homeSections/Hero/Hero";
import ImagesScroll from "@/components/elements/homeSections/ImagesScroll/ImagesScroll";
import Projects from "@/components/elements/homeSections/Projects/Projects";
import CalendarContextProvider from "@/utils/contexts/context_providers/CalendarContextProvider";
import ReservationProvider from "@/utils/providers/ReservationProvider";


export default function Home() {


  return (
    <>
    <CalendarContextProvider>
    <ReservationProvider>
      <Hero />
      <Projects/>
      <Booking/>
      <ImagesScroll/>
      <Footer/>
    </ReservationProvider>
    </CalendarContextProvider>
    </>
  );
}