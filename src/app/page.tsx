import Booking from "@/components/elements/Booking/Booking";
import Footer from "@/components/elements/Footer/Footer";
import Hero from "@/components/elements/Hero/Hero";
import Projects from "@/components/elements/Projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects/>
      <Booking/>
      <Footer/>
    </>
  );
}