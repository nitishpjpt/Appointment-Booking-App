import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <form className="min-h-80vh flex flex-col items-center pt-10">
        <div className="flex flex-col gap-3 m-auto items-center p-8 sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg ">
          <p className="text-2xl font-semibold ">Login Account</p>
          <p>Please to book an appointment</p>

          <div className="w-full">
            <p>Email</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="email"
            />
          </div>
          <div className="w-full">
            <p>Password</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="password"
            />
          </div>
          <button className="bg-[#5F6FFF] text-white w-full py-2 rounded-md text-base">
            Login
          </button>
          <p>
            Does not have an account?{" "}
            <Link to="/register" className="text-[#5F6FFF] font-semibold">
              Register Here
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
