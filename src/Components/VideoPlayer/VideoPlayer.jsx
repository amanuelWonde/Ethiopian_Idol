import React, { useState } from "react";
import ReactPlayer from "react-player";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
function VideoPlayer({ description, votes, name, url }) {
  const [btnClr, setBtnClr] = useState("");
  const handleLikeButton = () => {
    if (btnClr == "") {
      setBtnClr("blue");
    } else {
      setBtnClr("");
    }
  };
  return (
    <div className="w-full">
      <div className=" rounded-lg ">
        <div className=" relative pt-[56.25%]">
          <ReactPlayer
            className=" absolute top-0 left-0"
            controls
            url={`${url}`}
            width="100%"
            height="100%"
            playing={true}
          />
        </div>
        <div className=" w-full">
          <p className=" text-xl pl-3 text-slate-950 font-bold">
            {description}
          </p>
          <p className=" pl-6 text-slate-700">{name}</p>
          <p className=" pl-6 text-slate-700 text-">
            {votes} votes.{" "}
            <span
              className={` pl-4 text-${btnClr}-800 cursor-pointer`}
              onClick={handleLikeButton}
            >
              <ThumbUpAltIcon />
            </span>
          </p>
          <hr className=" py-4" />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
