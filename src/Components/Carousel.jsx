import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import img1 from "../Images/andras-vas-Bd7gNnWJBkU-unsplash.jpg";
import img2 from "../Images/designecologist-Pmh0UoG1vlE-unsplash.jpg";
import img3 from "../Images/domenico-loia-hGV2TfOh0ns-unsplash.jpg";
import img4 from "../Images/kari-shea-1SAnrIxw5OY-unsplash.jpg";
import img5 from "../Images/tianyi-ma-WiONHd_zYI4-unsplash.jpg";
function Carousel({ children: slides }) {
  // const slides = [img1, img2, img3, img4];
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
    <div className=" overflow-hidden relative py-4">
      <div
        className=" flex transition-transform ease-out duration-500 justify-center w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides}
      </div>
      <div className=" absolute inset-0 flex items-center justify-between p-4 ">
        <button
          className=" p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft size={30} />
        </button>
        <button
          className="  p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          onClick={nextSlide}
        >
          <ChevronRight size={30} />
        </button>
      </div>

      <div className="bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2 mt-3">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 rounded-full ${
                currentIndex === i
                  ? "bg-blue-600"
                  : "bg-slate-600 hover:bg-blue-600"
              }`}
              style={{
                width: currentIndex === i ? "10px" : "3px",
                transitionDuration: "500ms",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
