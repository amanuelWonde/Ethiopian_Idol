import React, { useEffect, useState } from "react";
import img1 from "../Images/andras-vas-Bd7gNnWJBkU-unsplash.jpg";
import img2 from "../Images/designecologist-Pmh0UoG1vlE-unsplash.jpg";
import img3 from "../Images/domenico-loia-hGV2TfOh0ns-unsplash.jpg";
import img4 from "../Images/kari-shea-1SAnrIxw5OY-unsplash.jpg";
import danceThemnail from "../Images/Category/aditya-ali-SzI4No8rQ14-unsplash.jpg";
import musicThemnail from "../Images/Category/matt-botsford-OKLqGsCT8qs-unsplash.jpg";
import actingThemnail from "../Images/Category/jon-tyson-A-obUh61bKw-unsplash.jpg";
import commedyThemnail from "../Images/Category/michel-grolet-NBRNK4XC1k8-unsplash.jpg";
import "./CustomCarousel.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function ReactCarousel() {
  const slides = [danceThemnail, musicThemnail, commedyThemnail];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slides]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(slider);
  }, []);

  return (
    <div className="sectionCenter">
      <div className="carousel">
        {slides.map((img, imgIndex) => {
          const position =
            imgIndex === index
              ? "activeSlide"
              : imgIndex === index - 1 ||
                (index === 0 && imgIndex === slides.length - 1)
              ? "lastSlide"
              : "nextSlide";

          return (
            <div key={imgIndex} className={`${position} imgWrapper`}>
              <div
                className="md:h-[410px] h-[200px] bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="indicators ">
        {slides.map((_, imgIndex) => (
          <div
            key={imgIndex}
            className={`transition-all w-2 h-2 rounded-full mx-0.5 ${
              imgIndex === index
                ? " px-3 h-1.5 bg-blue-600 w-14 duration-500 rounded-md"
                : " bg-slate-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ReactCarousel;
