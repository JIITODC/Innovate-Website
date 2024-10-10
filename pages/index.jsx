import Head from "next/head";
import AboutUs from "../components/AboutUs/Index";
import TheyTrustedUs from "../components/TheyTrustedUs/Index";
import AboutEvent from "../components/AboutEvent/Index";
import Footer from "../components/Footer/Index";
import Hero from "../components/Hero/Index";
import OurPartners from "../components/OurPartners/Index";
import OurSpeakers from "../components/OurSpeakers/Index";
import Agenda from "../components/Agenda/Index";

export default function Home() {
  return (
    <div className="h-screen w-screen no-scrollbar overflow-y-scroll overflow-x-hidden">
      <Head>
        <title>Innovate 2.0</title>
        <link rel="shortcut icon" href="/qiskit.png" />
      </Head>

      <Hero />
      <main className="font-IBM-Plex">
        <AboutEvent />
        <AboutUs />
        <OurPartners />
        <OurSpeakers/>
        <TheyTrustedUs />
        <Agenda />
      </main> 
      <Footer />
    </div>
  );
}
