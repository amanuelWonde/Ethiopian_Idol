import React, { useEffect, useState } from "react";
import VideoComponent from "./Home/VideoComponent";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
import { useVideo } from "../Context/NewVideo";
import { useApi } from "../Context/ApiContext";
import axios from "axios";
import { useParams } from "react-router-dom";
function AllVideoLists() {
  const [allVideos, setAllVideos] = useState([]);
  const video = useVideo();
  const api = useApi();
  // console.log(api);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=PLMAgTa0j90_iF3V36cPtoZ9c1Gs6dBjLy&maxResults=20&key=AIzaSyAXl9SN87qrh0nRpW1Z9HhiPwSV-Tgm2GM`
      )
      .then((response) => {
        console.log(response.data.items);
        setAllVideos(response.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="">
      <div className=" pt-3 mx-3">
        {Object.keys(video).length ? (
          <VideoPlayer
            url={video.url}
            description={video.description}
            name={video.name}
            votes={video.vote}
          />
        ) : (
          ""
        )}
        <div
          className={`
          } grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full`}
        >
          {allVideos.map((video) => (
            <VideoComponent
              key={video.contentDetails.videoId}
              description={video.snippet.description}
              name={"Amanuel Wonde"}
              vote={1025}
              url={`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`}
              img={video.snippet.thumbnails.high.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllVideoLists;
