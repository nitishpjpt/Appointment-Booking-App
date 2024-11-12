import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="min-h-80vh flex flex-col items-center pt-10"
      >
        <div className="flex flex-col gap-3 m-auto items-center p-8 sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg ">
          <p className="text-2xl font-semibold ">Create Account</p>
          <p>Please to book an appointment</p>
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="w-full">
            <p>Email</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="w-full">
            <p>Password</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="bg-[#5F6FFF] text-white w-full py-2 rounded-md text-base">
            Create Account
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-[#5F6FFF] font-semibold">
              Login Here
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
