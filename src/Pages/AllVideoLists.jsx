import React, { useEffect } from "react";
import CategoryTwo from "./Home/CategoryTwo";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
import { useVideo } from "../Context/NewVideo";
import { useApi } from "../Context/ApiContext";
import axios from "axios";
import { useParams } from "react-router-dom";
function AllVideoLists() {
  const { routeParam } = useParams();
  const video = useVideo();
  const api = useApi();
  console.log(api);
  useEffect(() => {}, [routeParam]);
  return (
    <div className=" grid justify-center">
      <div className=" pt-3">
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
          className={`${
            Object.keys(video).length ? "pl-12" : ""
          } grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8`}
        >
          <CategoryTwo
            id={1}
            description={"Here is an amazing stage Here is an amazing stage"}
            name={"Abel seyoum"}
            vote={100}
            url={"https://youtu.be/IO-bb9RD04U"}
          />
          <CategoryTwo
            id={2}
            description={"Here is an amazing stage performance that ..."}
            name={"Amanuel wonde"}
            vote={1230}
            url={"https://youtu.be/aGHCyzVqfrQ"}
          />
          <CategoryTwo
            id={2}
            description={"Here is an amazing stage performance that ..."}
            name={"Amanuel wonde"}
            vote={1230}
            url={"https://youtu.be/aGHCyzVqfrQ"}
          />
          <CategoryTwo
            id={2}
            description={"Here is an amazing stage performance that ..."}
            name={"Amanuel wonde"}
            vote={1230}
            url={"https://youtu.be/aGHCyzVqfrQ"}
          />
          <CategoryTwo
            id={2}
            description={"Here is an amazing stage performance that ..."}
            name={"Amanuel wonde"}
            vote={1230}
            url={"https://youtu.be/aGHCyzVqfrQ"}
          />
          <CategoryTwo
            id={2}
            description={"Here is an amazing stage performance that ..."}
            name={"Amanuel wonde"}
            vote={1230}
            url={"https://youtu.be/aGHCyzVqfrQ"}
          />
          <CategoryTwo
            id={1}
            description={"Here is an amazing stage performance that ..."}
            name={"Abel seyoum"}
            vote={100}
            url={"https://youtu.be/IO-bb9RD04U"}
          />
        </div>
      </div>
    </div>
  );
}

export default AllVideoLists;
