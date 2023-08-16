import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu } from "@material-ui/core";
import { Link } from "react-router-dom";
import DropdownButton from "./DropdownButton";
import { useVideo, useVideoDispatch } from "../../Context/NewVideo";
function Nav() {
  const [openMenu, setOpenMenu] = useState("hidden");

  const handleMenu = () => {
    if (openMenu == "hidden") setOpenMenu("block");
    else setOpenMenu("hidden");
  };
  const dispatch = useVideoDispatch();
  const deleteVideo = () => {
    dispatch({
      type: "deleteVideo",
    });
  };
  return (
    <div className="">
      <div className=" h-10 bg-white md:hidden  px-3 sm:px-6 md:px-10">
        <div className=" flex justify-between px-2 py-1 ">
          <Link to={"/"}>
            <div
              className=" text-xl font-bold text-black-100 cursor-pointer"
              onClick={deleteVideo}
            >
              Logo
            </div>
          </Link>
          <h2 className=" text-xl font-bold text-black-100">MSS</h2>
        </div>
      </div>

      <div className=" h-16 bg-red-900  px-3 sm:px-6 md:px-10">
        <div className=" md:hidden">
          <div className=" flex justify-between pt-3">
            <div
              className=" text-xl font-bold text-slate-200 cursor-pointer duration-700"
              onClick={handleMenu}
            >
              <MenuIcon />
            </div>

            <div className=" flex justify-between">
              <DropdownButton />
              <Link to={"/login"}>
                <button class=" text-white bg-green-700 hover:bg-green-800  focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 max-h-10">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className=" hidden md:block">
          <div className=" flex justify-between ">
            <div className="">
              <Link to={"/"}>
                <div
                  onClick={deleteVideo}
                  className=" text-4xl cursor-pointer font-bold text-slate-50"
                >
                  Logo
                </div>
              </Link>
            </div>

            <div className=" flex justify-between pt-3">
              <ul className=" flex pr-12">
                <Link to={"/apply"}>
                  <li className=" mr-6 text-white text-lg font-bold cursor-pointer hover:text-blue-600 duration-700">
                    Apply
                  </li>
                </Link>
                <Link to={"/news"}>
                  <li className=" mr-6 text-white text-lg font-bold cursor-pointer hover:text-blue-600 duration-700">
                    News
                  </li>
                </Link>

                <Link to={"/contacts"}>
                  <li className=" mr-6 text-white text-lg font-bold cursor-pointer hover:text-blue-600 duration-700">
                    Contact
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className=" mr-6 text-white text-lg font-bold cursor-pointer hover:text-blue-600 duration-700">
                    About
                  </li>
                </Link>
              </ul>

              <div className=" flex">
                <DropdownButton />
                <Link to={"/login"}>
                  <button class=" text-white bg-green-700 hover:bg-green-800  focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 max-h-10">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full  md:w-auto ${openMenu} duration-700`}>
        <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link
              to={"/apply"}
              onClick={handleMenu}
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Apply
            </Link>
          </li>
          <li>
            <Link
              to={"news"}
              onClick={handleMenu}
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to={"/contacts"}
              onClick={handleMenu}
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              onClick={handleMenu}
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
