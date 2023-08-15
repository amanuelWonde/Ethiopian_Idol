import React, { useState } from "react";
import Carousel from "../../Components/Carousel";
import Category from "./Category";
import CategoryTwo from "./CategoryTwo";

function Home() {
  return (
    <div className=" w-full">
      <Carousel />
      <div className=" w-full ">
        <div className=" py-10">
          <h1 className=" text-center pb-5 text-3xl font-bold text-slate-600">
            Category
          </h1>
          <hr className=" mx-10 " />
        </div>

        <div className=" flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
            <Category descriptin={"Acting"} />
            <Category descriptin={"Music"} />
            <Category descriptin={"Commedy"} />
            <Category descriptin={"Dance"} />
          </div>
        </div>
      </div>

      <div className=" w-full ">
        <div className=" py-10">
          <h1 className=" text-center pb-5 text-3xl font-bold text-slate-600">
            Most voted
          </h1>
          <hr className=" mx-10 " />
        </div>

        <div className=" flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
            <CategoryTwo
              descriptin={"Amazing stage prformance the made the juges..."}
              name={"Amanuel"}
              vote={"1230 votes"}
            />
            <CategoryTwo
              descriptin={"Amazing stage prformance the made the juges..."}
              name={"Amanuel"}
              vote={"1230 votes"}
            />
            <CategoryTwo
              descriptin={"Amazing stage prformance the made the juges..."}
              name={"Amanuel"}
              vote={"1230 votes"}
            />
            <CategoryTwo />
          </div>
        </div>
      </div>
      <div className=" w-full ">
        <div className=" py-10">
          <h1 className=" text-center pb-5 text-3xl font-bold text-slate-600">
            News
          </h1>
          <hr className=" mx-10 " />
        </div>

        <div className=" flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
            <CategoryTwo
              descriptin={"Amaing opportunity for those who wants..."}
            />
            <CategoryTwo
              descriptin={"Amaing opportunity for those who wants..."}
            />
            <CategoryTwo
              descriptin={"Amaing opportunity for those who wants..."}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
