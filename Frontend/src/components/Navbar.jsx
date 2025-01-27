import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiMenu5Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[80vw] flex items-center font-bold justify-between p-4 border-b border-b-gray-400">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <img
                className="w-10 h-10"
                src="https://cdn-icons-png.flaticon.com/256/6686/6686950.png"
                alt="Logo"
              />
              <NavLink to="/" className="text-2xl text-[#000B6D]">
                Prescription
              </NavLink>
            </div>

            {/* Menu Button for Small Screens */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenu(!menu)}
                className="text-black text-2xl"
              >
                {menu ? <RiCloseFill /> : <RiMenu5Fill />}
              </button>
            </div>

            {/* Navigation Links */}
            <div
              className={`absolute lg:static top-16 left-0 w-full lg:w-auto lg:flex  lg:text-[#5F6FFF] transition-all duration-300 ease-in-out ${
                menu ? "block" : "hidden"
              }`}
            >
              <nav className="flex text-[#5F6FFF] bg-white flex-col lg:flex-row list-none gap-4 lg:gap-8 p-4 lg:p-0">
                <NavLink to="/" className=" hover:text-gray-300">
                  Home
                </NavLink>
                <NavLink
                  to="/doctors"
                  className=" hover:text-gray-300"
                >
                  All Doctor
                </NavLink>
                <NavLink to="/About" className=" hover:text-gray-300">
                  About
                </NavLink>
                <NavLink
                  to="/Contact"
                  className=" hover:text-gray-300"
                >
                  Contact
                </NavLink>
              </nav>
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="border p-3 rounded-full">Admin Panel</button>
              {login ? (
                <div></div>
              ) : (
                <button
                  onClick={() => navigate("/Login")}
                  className="bg-[#5F6FFF] text-white p-3 rounded-full text-xs"
                >
                  Create account
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;
