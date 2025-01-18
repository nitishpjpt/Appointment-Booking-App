import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState(false);
  const [menu,setMenu] = useState(false);


  return (
    <div>
      <>
        <div className="flex justify-center items-center bg-red-500">
          <div className="w-[80vw] flex items-center font-bold justify-around border-b border-b-gray-400">
            <div className="flex justify-around items-center p-5">
              <img
                className="w-[4vw]"
                src="https://cdn-icons-png.flaticon.com/256/6686/6686950.png"
              />
              <NavLink to="/">
                {" "}
                <h2 className="text-2xl text-[#000B6D]">Prescription</h2>
              </NavLink>
            </div>
            <div>
              <nav className="flex list-none gap-8">
                <NavLink to="/">
                  <li>Home</li>
                  <hr className="border-none outline-none h-0.5 bg-purple-500 w-3/5 m-auto hidden"></hr>
                </NavLink>
                <NavLink to="/doctors">
                  <li>All Doctor</li>
                  <hr className="border-none outline-none h-0.5 bg-purple-500 w-3/5 m-auto hidden"></hr>
                </NavLink>
                <NavLink to="/About">
                  <li>About</li>
                  <hr className="border-none outline-none h-0.5 bg-purple-500 w-3/5 m-auto hidden"></hr>
                </NavLink>
                <NavLink to="/Contact">
                  <li>Contact</li>
                  <hr className="border-none outline-none h-0.5 bg-purple-500 w-3/5 m-auto hidden"></hr>
                </NavLink>
              </nav>
              
            </div>
            <div className="flex justify-around items-center gap-4">
              
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
