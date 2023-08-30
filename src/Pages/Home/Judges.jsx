import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import danceThemnail from "../../Images/Category/aditya-ali-SzI4No8rQ14-unsplash.jpg";
import musicThemnail from "../../Images/Category/matt-botsford-OKLqGsCT8qs-unsplash.jpg";
import actingThemnail from "../../Images/Category/jon-tyson-A-obUh61bKw-unsplash.jpg";
import commedyThemnail from "../../Images/Category/michel-grolet-NBRNK4XC1k8-unsplash.jpg";
function Judges() {
  const juges = [danceThemnail, musicThemnail, actingThemnail, commedyThemnail];
  return (
    <div className=" w-full flex justify-center">
      <Carousel autoPlay={true} width={"70%"}>
        {juges.map((judge) => (
          <div>
            <img src={judge} />
            <p className="legend">Legend 1</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Judges;
