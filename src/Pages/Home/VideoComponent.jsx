import React from "react";
import { useVideoDispatch } from "../../Context/NewVideo";
import TruncatedParagraph from "../../Components/TruncatedParagraph";
import { Link } from "react-router-dom";
function CategoryTwo({ vote, name, description, id, url, img, route }) {
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      key={id}
      onClick={dispatchVideo}
      className="sm:w-72 sm:h-64 h-80 hover:scale-105 border-gray-300 cursor-pointer rounded-md bg-white hover:shadow-xl duration-700"
    >
      <Link to={route}>
        <div
          style={{ backgroundImage: `url(${img})` }}
          className={`bg-no-repeat bg-center bg-cover rounded h-[65%] w-full`}
        ></div>
        <div className=" px-2 pt-2">
          <TruncatedParagraph description={description} characterLimit={56} />
          <p className=" opacity-60">
            {" "}
            {name}{" "}
            <span className=" font-bold text-slate-950 opacity-100">
              {vote} votes.
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CategoryTwo;
