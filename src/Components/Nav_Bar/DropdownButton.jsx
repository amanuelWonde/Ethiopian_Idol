import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      {" "}
      <div
        className={` mr-6 flex sm:inline-block `}
        onMouseOver={dropDown}
        onMouseOut={dropDownClose}
      >
        <div className=" mr-6 block sm:py-2 py-0 pl-3 pr-4 text-gray-900 sm:text-lg sm:font-bold sm:text-white rounded hover:text-yellow-600  md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer">
          Categories
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
