import Booking from "@/components/elements/Booking/Booking";
import Footer from "@/components/elements/Footer/Footer";
import Hero from "@/components/elements/homeSections/Hero/Hero";
import ImagesScroll from "@/components/elements/homeSections/ImagesScroll/ImagesScroll";
import Projects from "@/components/elements/homeSections/Projects/Projects";
import CalendarContextProvider from "@/utils/contexts/context_providers/CalendarContextProvider";
import NotificationContextProvider from "@/utils/contexts/context_providers/NotificationContextProvider";
import NotificationPopUpProvider from "@/utils/providers/NotificationPopUpProvider";
import ReservationProvider from "@/utils/providers/ReservationProvider";


export default function Home() {


  return (
    <>
    <NotificationContextProvider>
    <CalendarContextProvider>
    <ReservationProvider>
    <NotificationPopUpProvider>
      <Hero />
      <Projects/>
      <Booking/>
      <ImagesScroll/>
      <Footer/>
    </NotificationPopUpProvider>
    </ReservationProvider>
    </CalendarContextProvider>
    </NotificationContextProvider>
    </>
  );
}