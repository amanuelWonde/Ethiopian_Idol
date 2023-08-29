import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "react-feather";

function DropdownButton() {
  const [dropList, setDropList] = useState("hidden");
  const dropDown = () => {
    setDropList("block");
  };
  const dropDownClose = () => {
    setDropList("hidden");
  };
  return (
    <div>
      <div
        className={`flex space-x-3 sm:inline-block`}
        onMouseOver={dropDown}
        onMouseOut={dropDownClose}
      >
        <div className="flex cursor-pointer ">
          <p className="">Categories</p>{" "}
          <div className=" ">
            <ChevronDown style={{ fontSize: "3px", marginTop: "4px" }} />
          </div>
        </div>

        <div className=" pt-4">
          <div
            id="dropdown"
            className={`z-10 pt-2 ${dropList} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <Link
                  to={"/videos/music"}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  to={"/videos/dance"}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dance
                </Link>
              </li>
              <li>
                <Link
                  to={"/videos/acting"}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Acting
                </Link>
              </li>
              <li>
                <Link
                  to={"/videos/comedy"}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Comedy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownButton;
