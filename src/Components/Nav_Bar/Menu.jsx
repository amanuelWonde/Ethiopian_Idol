import React from "react";
import { Link } from "react-router-dom";
import DropdownButton from "./DropdownButton";

function Menu({ handleMenu }) {
  return (
    <div className="">
      <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:hover:text-yellow-800 dark:border-gray-700">
        <li className="">
          <DropdownButton />
        </li>
        <li>
          <Link
            to={"/register"}
            onClick={handleMenu}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-800 md:p-0 dark:text-white md:dark:hover:text-yellow-800 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Compete
          </Link>
        </li>

        <li>
          <Link
            to={"news"}
            onClick={handleMenu}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            News
          </Link>
        </li>
        <li>
          <Link
            to={"/contacts"}
            onClick={handleMenu}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
  );
}

export default Menu;
