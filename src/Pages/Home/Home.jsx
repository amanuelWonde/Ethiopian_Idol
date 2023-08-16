import React, { useState } from "react";
import Carousel from "../../Components/Carousel";
import Category from "./Category";
import CategoryTwo from "./CategoryTwo";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
function Home() {
  return (
    <div className=" w-full ">
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
            <Category
              descriptin={"Acting"}
              subTit={"Compete | Enjoy | Win"}
              api={"https://amanuel.com"}
              route={"acting"}
            />
            <Category
              descriptin={"Music"}
              subTit={"Compete | Enjoy | Win"}
              api={"https://abel.com"}
              route={"music"}
            />
            <Category
              descriptin={"Commedy"}
              subTit={"Compete | Enjoy | Win"}
              api={"https://jash.com"}
              route={"commedy"}
            />
            <Category
              descriptin={"Dance"}
              subTit={"Compete | Enjoy | Win"}
              api={"https://seyoum.com"}
              route={"dance"}
            />
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
              vote={"1230"}
            />
            <CategoryTwo
              descriptin={"Amazing stage prformance the made the juges..."}
              name={"Amanuel"}
              vote={"1230"}
            />
            <CategoryTwo
              descriptin={"Amazing stage prformance the made the juges..."}
              name={"Amanuel"}
              vote={"1230"}
            />
            <CategoryTwo
              descriptin={"Amazing stage prformance the made the juges..."}
              name={"Amanuel"}
              vote={"1230"}
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
              descriptin={"Amaing opportunity for those who wants..."}
            />
            <Category
              descriptin={"Amaing opportunity for those who wants..."}
            />
            <Category
              descriptin={"Amaing opportunity for those who wants..."}
            />

            <div className="font-bold text-2xl text-blue-700 align-text-bottom cursor-pointer md:pt-64 hover:text-blue-900">
              <p className=" ">
                See more news{" "}
                <span>
                  <ArrowRightAltIcon />
                </span>
              </p>
              <hr className=" w-52" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
