import React, { useState } from "react";
import Carousel from "../../Components/Carousel";
import Category from "./Category";

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
            <Category img_h={"85%"} des={"Acting"} />
            <Category img_h={"85%"} des={"Music"} />
            <Category img_h={"85%"} des={"Commedy"} />
            <Category img_h={"85%"} des={"Dance"} />
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
            <Category
              img_h={"75%"}
              des={"Amazing stage performance that made the juges amazed.."}
              name={"Amanuel"}
              vote={"1230 votes"}
            />
            <Category
              img_h={"75%"}
              name={"Amanuel"}
              vote={"1230 votes"}
              des={"Amazing stage performance that made the juges amazed.."}
            />
            <Category
              img_h={"75%"}
              des={"Amazing stage performance that made the juges amazed.."}
              name={"Amanuel"}
              vote={"1230 votes"}
            />
            <Category
              img_h={"75%"}
              des={"Amazing stage performance that made the juges amazed.."}
              name={"Amanuel"}
              vote={"1230 votes"}
            />
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
            <Category
              img_h={"80%"}
              des={"Amazing opportunity who wants to compte ..."}
            />
            <Category
              img_h={"80%"}
              des={"Amazing opportunity who wants to compte ..."}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
