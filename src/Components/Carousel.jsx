import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import img1 from "../Images/andras-vas-Bd7gNnWJBkU-unsplash.jpg";
import img2 from "../Images/designecologist-Pmh0UoG1vlE-unsplash.jpg";
import img3 from "../Images/domenico-loia-hGV2TfOh0ns-unsplash.jpg";
import img4 from "../Images/kari-shea-1SAnrIxw5OY-unsplash.jpg";
import img5 from "../Images/tianyi-ma-WiONHd_zYI4-unsplash.jpg";
function Carousel({}) {
  const slides = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const newIndex = currentIndex == 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const newIndex = currentIndex == slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slidesIndex) => {
    setCurrentIndex(slidesIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      // Update the currentIndex to switch to the next slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" pt-5 lg:px-20 md:px-20 px-5 sm:px-10">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className="bg-cover bg-center bg-no-repeat  lg:h-96 md:h-72 h-52 rounded-lg duration-500"
      ></div>
      <div className=" w-full flex items-center justify-between">
        <button
          onClick={prevSlide}
          className="p-1 rounded-full shadow bg-white abs text-gray-800 hover:bg-white -mt-52  md:-mt-96 md:left-20 left-3"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={nextSlide}
          className=" -mt-52 md:-mt-96 p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white md:right-20 right-3"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className=" flex top-4 justify-center py-2">
        {slides.map((slide, slidesIndex) => (
          <div
            className={`text-gray-400 duration-500 ${
              slidesIndex === currentIndex ? " text-green-500" : ""
            }`}
            key={slidesIndex}
            onClick={() => goToSlide(slidesIndex)}
          >
            <FiberManualRecordIcon fontSize="small" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
