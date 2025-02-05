import React, { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AxiosHandler } from "../config/axios.config.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const data = {
    email,
    password,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await AxiosHandler.post("/api/v1/auth/login", data);
      toast.success("Admin login successfully");
      navigate('/')
      console.log(response.data);
    } catch (error) {
      console.log(error, "user does not register");
      toast.error(error.response.data.message || "Admin does not login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            {/* <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              className="w-32 mx-auto"
              alt="Logo"
            /> */}
            <h1 className="text-2xl font-extrabold text-[#667EEA]">
              Prescription
            </h1>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Login in</h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <FaGoogle className="w-4 text-blue-500" />
                  </div>
                  <span className="ml-4">Login in with Google</span>
                </button>

                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                  <div className="bg-white p-1 rounded-full">
                    <FaGithub className="w-6 text-black" />
                  </div>
                  <span className="ml-4">Login in with GitHub</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or Login in with e-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <form onSubmit={submitHandler}>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-3">Login in</span>
                  </button>
                </form>
                <p className="mt-6 text-10px text-gray-600 text-center">
                  Does not have an account then?
                  <Link to="/Register">
                    <span className="text-[#667EEA]">Register</span>
                  </Link>
                </p>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by prescription
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    {" "}
                    Terms of Service{" "}
                  </a>
                  and its
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            {" "}
            <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
