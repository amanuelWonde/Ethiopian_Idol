import React, { useState } from "react";
import ProfilePic from "../../Images/profile-pic/profile-pic.jpg";

function Profile() {
  const [openProfile, setOpenProfile] = useState("hidden");
  const handleProfile = () => {
    if (openProfile == "hidden") setOpenProfile("block");
    else setOpenProfile("hidden");
  };
  return (
    <div className="relative space-y-4" onClick={handleProfile}>
      <img
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-10 h-10 rounded-full cursor-pointer"
        src={ProfilePic}
        alt="User dropdown"
      />

      <div
        id="userDropdown"
        className={`z-10 absolute ${openProfile} bg-white divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600 right-0`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Amanule Wonde</div>
          <div className="font-medium truncate ">amanuelwt@gmail.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Wallet
            </a>
          </li>
        </ul>
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
