import React from "react";
import img from "../../Images/andras-vas-Bd7gNnWJBkU-unsplash.jpg";
import { useVideoDispatch } from "../../Context/NewVideo";

function CategoryTwo({ vote, name, description, id, url }) {
  const dispatch = useVideoDispatch();
  const dispatchVideo = () => {
    dispatch({
      type: "video",
      id: id,
      url: url,
      name: name,
      description: description,
      vote: vote,
    });
  };
  return (
    <div onClick={dispatchVideo}>
      <div className="h-80 w-64 shadow-lg cursor-pointer rounded-md bg-slate-100 max-h-80">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className={`bg-no-repeat bg-center bg-cover rounded h-[70%] w-full`}
        ></div>
        <div className=" px-2 pt-2">
          <p className=" text-base font-bold text-slate-600">{description}</p>
          <p className=" opacity-60">
            {" "}
            {name}{" "}
            <span className=" font-bold text-slate-950 opacity-100">
              {vote} votes.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoryTwo;
