import React from "react";
// import img from "../../Images/andras-vas-Bd7gNnWJBkU-unsplash.jpg";
import { useApi, useApiDispatch } from "../../Context/ApiContext";
import { Link } from "react-router-dom";
import TruncatedParagraph from "../../Components/TruncatedParagraph";
function Category({ title, api, subTit, route, img }) {
  const dispatch = useApiDispatch();
  const dispatchApi = () => {
    dispatch({
      type: "api",
      api: api,
    });
  };
  return (
    <div className="sm:h-64 h-72 sm:w-72 w-full cursor-pointer rounded-md  bg-white hover:shadow-xl duration-700 hover:scale-105">
      <Link to={`/videos/${route}`}>
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="bg-no-repeat bg-center bg-cover rounded h-[70%] w-full"
        ></div>
        <div className="px-2 pt-2">
          <p className="text-base text-gray-600 opacity-60 font-semibold">
            {subTit}
          </p>
          <TruncatedParagraph description={title} characterLimit={56} />
        </div>
      </Link>
    </div>
  );
}

export default Category;
