import React, { useState } from "react";
import { useUserDispatch } from "../../../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useUserDispatch();
  const handleLogin = () => {
    dispatch({
      type: "user",
      name: "Amanuel wonde",
      email: email,
      password: password,
      wallet: "100",
    });
    navigate("/");
  };
  return (
    <div>
      <div className="relative flex  text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="relative py-3 sm:w-96 mx-auto text-center">
          <span className="text-2xl font-light ">Login to your account</span>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left">
            <div className="h-2 bg-yellow-400 rounded-t-md"></div>
            <div className="px-8 py-6 ">
              <label className="block font-semibold">Email </label>
              <input
                type="text"
                placeholder="Email"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-yellow-500 focus:ring-1 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="block mt-3 font-semibold"> Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-yellow-500 focus:ring-1 rounded-md"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex justify-between items-baseline">
                <button
                  className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 "
                  onClick={handleLogin}
                >
                  Login
                </button>
                <a href="#" className="text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
              <p className="text-sm text-center pt-4 font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to={"/register"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-indigo-400"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
