import React, { useState } from "react";
import ProfilePic from "../../Images/profile-pic/profile-pic.jpg";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import { useUser, useUserDispatch } from "../../Context/UserContext";
import PaymentIcon from "@material-ui/icons/Payment";
import {
  Settings,
  Dashboard,
  ExitToApp,
  AccountCircle,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
function Profile() {
  const [openProfile, setOpenProfile] = useState("hidden");
  const user = useUser();
  const dispatch = useUserDispatch();
  const handleProfile = () => {
    if (openProfile == "hidden") setOpenProfile("block");
    else setOpenProfile("hidden");
  };
  const deleteUser = () => {
    dispatch({
      type: "deleteUser",
    });
  };
  return (
    <div className="relative space-y-2" onClick={handleProfile}>
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
          <div className="flex items-center">
            <AccountCircle className="w-6 h-6 mr-2" />
            <div>{user.name}</div>
          </div>
          <div className="font-medium truncate">{user.email}</div>
          <div className="flex items-center mt-2">
            <AccountBalanceWalletIcon className="text-indigo-500 w-6 h-6 mr-2" />
            <span className="font-medium text-indigo-500">
              {user.wallet} ETB
            </span>
          </div>

          <button className="ml-4 flex items-center text-indigo-500 hover:text-indigo-600 focus:outline-none">
            <Link to="/checkout">
              <PaymentIcon className="w-5 h-5" />
              <span className="ml-1">Fill Wallet</span>
            </Link>
          </button>
          <hr className="mt-2 border-gray-300" />
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
              <Settings className="inline-block w-5 h-5 mr-2" />
              Setting
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <Dashboard className="inline-block w-5 h-5 mr-2" />
              Dashboard
            </a>
          </li>
          <li onClick={deleteUser}>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500 dark:hover:text-white"
            >
              <ExitToApp className="inline-block w-5 h-5 mr-2" />
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
