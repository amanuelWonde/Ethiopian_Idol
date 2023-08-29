import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserDispatch } from "../../../Context/UserContext";

function Signup() {
  const dispatch = useUserDispatch();
  const navigate = useNavigate();
  const [userType, setUserType] = useState("contestant");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleUserTypeChange = (newUserType) => {
    setUserType(newUserType);
  };
  const handleSignup = () => {
    dispatch({
      type: "user",
      name: name,
      email: email,
      password: password,
    });
    navigate("/");
  };
  return (
    <div>
      <body className="bg-gray-100">
        <div className="container mx-auto py-6">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Registration Form
          </h1>
          <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
            <div className="mb-4">
              <button
                className={`mr-2 px-4 py-2 rounded-md ${
                  userType === "contestant"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
                onClick={() => handleUserTypeChange("contestant")}
              >
                Contestant
              </button>

              <button
                className={`px-4 py-2 rounded-md ${
                  userType === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
                onClick={() => handleUserTypeChange("user")}
              >
                User
              </button>
            </div>
            {userType === "contestant" && (
              <div className="">
                <label
                  for="countries"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Select category
                </label>
                <select
                  id="categories"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a category</option>
                  <option value="Singing">Singing</option>
                  <option value="Dancing">Dancing</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Magic">Magic</option>
                  <option value="Acting">Acting</option>
                  <option value="Poetry">Poetry</option>
                  <option value="Instrument">Instrument</option>
                  <option value="Juggling">Juggling</option>
                  <option value="Acrobatics">Acrobatics</option>
                  <option value="Painting">Painting</option>
                  <option value="Fashion show">Fashion show</option>
                </select>
              </div>
            )}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="name"
              >
                Full Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                type="text"
                id="name"
                name="name"
                placeholder="Amanuel Wonde"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                type="email"
                id="email"
                name="email"
                placeholder="amanuelwt@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                type="password"
                id="password"
                name="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="confirm-password"
              >
                Phone number
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
                type="tel"
                id="phone-number"
                name="phone-number"
                placeholder="0967292497"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-yellow-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
              onClick={handleSignup}
            >
              Register
            </button>
            <p className="text-center pt-4 text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-indigo-400 font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </body>
    </div>
  );
}

export default Signup;
