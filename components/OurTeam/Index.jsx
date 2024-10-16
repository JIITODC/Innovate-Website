import { useRef } from "react";
import YellowButton from "../shared/YellowButton";
import Image from "next/image";
import RightArrow from "../../images/sectionsAssets/rightArrow.png";
import LeftArrow from "../../images/sectionsAssets/leftArrow.png";
import Maqam from "../../images/shapes/GDGAlgiers.png";
import globe from "../../images/shapes/globe.png";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";
import SectionTitle from "../../components/shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { speakers } from "./data";

const OurSpeakers = () => {
  const swiperRef = useRef(null);

  return (
    <section id="team" className="relative bg-qiskit-black/95 px-4 lg:px-11 2xl:px-16">
      <div className="mb-12 lg:mb-0">
        <SectionTitle title={"Our Team"} /> 
      </div>

      <div className="visible absolute sm:bottom-0 sm:right-0 sm:w-[45px] md:top-0 md:right-0 md:w-[55px] md:h-[55px] lg:right-[50px] lg:top-[50px] lg:w-[100px] 2xl:w-[150px] 2xl:h-[120px] z-25 ">
        <Image src={Maqam} alt="maqam" layout="fill" />
      </div>

      <div className="absolute sm:w-[40px] sm:h-[2rem] md:top-1/4 md:w-[55px] md:h-[55px] lg:left-[10px] lg:top-1/4 lg:w-[82px] lg:h-[82px] z-25  ">
        <Image src={globe} alt="globetop" layout="fill" />
      </div>

      <div className="absolute right-1/4 sm:bottom-0 sm:w-[10px] sm:h-[12px] md:w-[55px] md:h-[55px] lg:w-[82px] lg:h-[82px] lg:right-0 lg:bottom-0 z-25 ">
        <Image src={globe} alt="globebottom" layout="fill" />
      </div>

      <div className="hidden lg:block absolute  lg:w-[40px] bottom-[2rem] right-0 lg:bottom-0 lg:right-1/2">
        <Image src={computer} alt="computer" />
      </div>

      <div className="absolute sm:bottom-0 sm:right-0 sm:w-[45px] md:right-1/2 lg:w-[40px] top-[2rem] right-0 lg:bottom-0 lg:right-1/2">
        <Image src={atom} alt="atomtop" />
      </div>

      <div className="hidden lg:block absolute bottom-[4rem] left-0 lg:bottom-10 lg:right-1/4 lg:w-[80px] 2xl:w-[150px]">
        <Image src={atom} alt="atombotton" />
      </div>

<div className="flex items-center space-x-8 mt-[100px]">
  <Swiper
    ref={swiperRef}
    spaceBetween={10}
    slidesPerView={3}
    centeredSlides={false}
  >
    {speakers.map((spk, idx) => {
      return (
        <SwiperSlide key={idx}>
          {({ isActive, isNext, isPrev }) => (
            <div
              className={`${
                isActive
                  ? "scale-75"
                  : isPrev || isNext
                  ? "scale-100"
                  : "scale-75"
              } `}
            >
              <div className="lg:mt-[50px]">
                <div className="relative border-qiskit-white border-4">
                  <Image src={spk.image} alt={spk.name} layout="responsive" />
                </div>

                <div className="relative w-4/5 mx-auto z-10 -mt-20 text-qiskit-white">
                  <YellowButton title={spk.name} />
                </div>

                <div className="mx-auto text-qiskit-white/90 flex justify-center text-[25px] font-semibold">
                  <p>{spk.profession}</p>
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
      );
    })}
  </Swiper>
</div>

    </section>
  );
};

export default OurSpeakers;
