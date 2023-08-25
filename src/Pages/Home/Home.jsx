import React, { useEffect, useState } from "react";
import Carousel from "../../Components/Carousel";
import Category from "./Category";
import VideoComponent from "./VideoComponent";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import danceThemnail from "../../Images/Category/aditya-ali-SzI4No8rQ14-unsplash.jpg";
import musicThemnail from "../../Images/Category/matt-botsford-OKLqGsCT8qs-unsplash.jpg";
import actingThemnail from "../../Images/Category/jon-tyson-A-obUh61bKw-unsplash.jpg";
import commedyThemnail from "../../Images/Category/michel-grolet-NBRNK4XC1k8-unsplash.jpg";
import ReactCarousel from "../../Components/ReactCarousel";
import API from "../../Context/ApiContext";
import axios from "axios";
import HomepageSectionTitle from "../../Components/HomepageSectionTitle";
function Home() {
  const category = [
    {
      title: "Acting",
      api: "https://amanuel.com",
      subTit: "Compete | Enjoy | Win",
      route: "music",
      img: actingThemnail,
    },
    {
      title: "Music",
      api: "https://amanuel.com",
      subTit: "Compete | Enjoy | Win",
      route: "music",
      img: musicThemnail,
    },
    {
      title: "Comedy",
      api: "https://amanuel.com",
      subTit: "Compete | Enjoy | Win",
      route: "comedy",
      img: commedyThemnail,
    },
    {
      title: "Dance",
      api: "https://amanuel.com",
      subTit: "Compete | Enjoy | Win",
      route: "dance",
      img: danceThemnail,
    },
  ];
  const [mostVoted, setMostVoted] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLMAgTa0j90_iF3V36cPtoZ9c1Gs6dBjLy&maxResults=7&key=AIzaSyAXl9SN87qrh0nRpW1Z9HhiPwSV-Tgm2GM`
      )
      .then((response) => {
        console.log(response.data.items);
        const allVideos = response.data.items;
        setMostVoted(allVideos.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" w-full grid justify-center px-3">
      <div className=" w-full flex justify-center">
        <ReactCarousel />
      </div>

      <div className=" categories">
        <HomepageSectionTitle title={"Category"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5 w-full justify-center">
          {category.map((category) => (
            <Category
              title={category.title}
              subTit={category.subTit}
              api={API}
              route={category.route}
              img={category.img}
            />
          ))}
        </div>
      </div>

      <div className="  most_voted">
        <HomepageSectionTitle title={"Most Voted"} />
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
          {mostVoted.map((video) => (
            <VideoComponent
              description={video.snippet.description}
              name={"Amanuel Wonde"}
              vote={"1230"}
              img={video.snippet.thumbnails.high.url}
              url={`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`}
              route={"videos/music"}
            />
          ))}
        </div>
      </div>

      <div className=" new">
        <HomepageSectionTitle title={"News"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
          <Category
            title={"Amazing opportunity for those who wants..."}
            img={commedyThemnail}
          />
          <Category
            title={"Amazing opportunity for those who wants..."}
            img={commedyThemnail}
          />
          <Category
            title={"Amazing opportunity for those who wants..."}
            img={commedyThemnail}
          />

          <div className="font-bold text-2xl text-blue-700 align-text-bottom cursor-pointer md:pt-64 hover:text-blue-900">
            <p className=" ">
              See more news{" "}
              <span>
                <ArrowRightAltIcon />
              </span>
            </p>
            <hr className=" w-52" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
