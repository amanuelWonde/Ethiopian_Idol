import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import DropdownButton from "./DropdownButton";
import logo from "../../Images/logos/ethiopian_idol_logo2.png";

import { useVideo, useVideoDispatch } from "../../Context/NewVideo";
import Profile from "./Profile";
import MenuList from "./Menu";
import { useUser } from "../../Context/UserContext";
function Nav() {
  const [openMenu, setOpenMenu] = useState("hidden");
  const user = useUser();
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
    <div>
      <div className=" h-16 bg-yellow-500  pr-2 sm:pr-4 md:pr-6 w-full">
        <div className="w-full h-full flex justify-between">
          <div
            onClick={deleteVideo}
            className=" text-4xl cursor-pointer font-bold text-slate-50"
          >
            <Link to={"/Ethiopian_Idol"}>
              <img
                src={logo}
                className=" h-16 font-extrabold grid justify-center"
                alt=" logo"
              />
            </Link>
          </div>

          <div className=" flex justify-between pt-3">
            <div className=" hidden sm:block">
              <ul className=" flex ">
                <Link to={"/register"}>
                  <li className=" mr-6 text-white text-lg font-bold cursor-pointer hover:text-yellow-800 duration-700">
                    Compete
                  </li>
                </Link>
                <Link to={"/news"}>
                  <li className=" mr-6 text-white text-lg font-bold cursor-pointer hover:text-yellow-800 duration-700">
                    News
                  </li>
                </Link>

                <Link to={"/contacts"}>
                  <li className=" mr-6 text-white text-lg font-bold cursor-pointer hover:text-yellow-800 duration-700">
                    Contact
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className=" mr-6 text-white text-lg font-bold cursor-pointer hover:text-yellow-800 duration-700">
                    About
                  </li>
                </Link>
                <li className=" sm:mr-6 sm:text-white sm:text-lg sm:font-bold cursor-pointer duration-700 sm:hover:text-yellow-800 ">
                  <DropdownButton />
                </li>
              </ul>
            </div>

            <div className=" flex space-x-4">
              <div className="">
                {Object.keys(user).length ? (
                  <Profile />
                ) : (
                  <button class=" text-white bg-green-700 hover:bg-green-800  focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 max-h-10">
                    <Link to={"/login"}>Login</Link>
                  </button>
                )}
              </div>

              <div
                className=" text-xl font-bold text-slate-100 cursor-pointer duration-700 sm:hidden"
                onClick={handleMenu}
              >
                <MenuIcon fontSize="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full  md:w-auto ${openMenu} duration-700`}>
        <MenuList handleMenu={handleMenu} />
      </div>
    </div>
  );
}

export default Nav;
