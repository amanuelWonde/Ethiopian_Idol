import React from "react";
import img from "../../Images/andras-vas-Bd7gNnWJBkU-unsplash.jpg";
function Category() {
  return (
    <div className="h-80 w-64 shadow-lg cursor-pointer rounded-md bg-slate-100 max-h-80">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className=" bg-no-repeat bg-center bg-cover rounded h-[75%] w-full"
      ></div>
      <div className=" px-2 pt-2">
        <p className=" text-base font-bold text-slate-600">Dancing</p>
        <p className=" opacity-60">
          {" "}
          Amanuel wonde. <strong className="">1360 votes</strong>
        </p>
      </div>
    </div>
  );
}

export default Category;
