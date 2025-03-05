import Booking from "@/components/elements/homeSections/Booking/Booking";
import Footer from "@/components/elements/homeSections/Footer/Footer";
import Hero from "@/components/elements/homeSections/Hero/Hero";
import Projects from "@/components/elements/homeSections/Projects/Projects";
import CalendarContextProvider from "@/utils/contexts/context_providers/CalendarContextProvider";

export default function Home() {
  return (
    <>
    <CalendarContextProvider>
      <Hero />
      <Projects/>
      <Booking/>
      <Footer/>
    </CalendarContextProvider>
    </>
  );
}