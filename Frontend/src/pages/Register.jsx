import { useState } from "react";
import { Link } from "react-router-dom";
import { AxiosHandler } from "../config/axios.config.js";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    name,
    email,
    password,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await AxiosHandler.post("/api/v1/auth/register", data);
      toast.success("Admin register successfully");
      console.log(response.data);
    } catch (error) {
      console.log(error, "user does not register");
      toast.error(error.response.data.message || "User does not register");
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
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Register Here
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <form onSubmit={submitHandler}>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-3">Register</span>
                  </button>
                </form>
                <p className="mt-6 text-10px text-gray-600 text-center">
                  If you have an account then ?
                  <Link to="/Login">
                    <span className="text-[#667EEA]">Login</span>
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
