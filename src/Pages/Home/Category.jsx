import React from "react";
import img from "../../Images/andras-vas-Bd7gNnWJBkU-unsplash.jpg";
import { useApi, useApiDispatch } from "../../Context/ApiContext";
import { Link } from "react-router-dom";
function Category({ descriptin, api, subTit, route }) {
  const dispatch = useApiDispatch();
  const dispatchApi = () => {
    dispatch({
      type: "api",
      api: api,
    });
  };
  return (
    <div
      className="h-80 w-64 shadow-lg cursor-pointer rounded-md bg-slate-100 max-h-80"
      onClick={dispatchApi}
    >
      <Link to={`/videos/${route}`}>
        <div
          style={{ backgroundImage: `url(${img})` }}
          className={`bg-no-repeat bg-center bg-cover rounded h-[80%] w-full`}
        ></div>
        <div className=" px-2 pt-2">
          <p className=" text-base  text-slate-600 opacity-60">{subTit}</p>
          <p className=" text-base font-bold text-slate-600">{descriptin}</p>
        </div>
      </Link>
    </div>
  );
}

export default Category;
