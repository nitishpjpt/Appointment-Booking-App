import { FaArrowRightLong } from "react-icons/fa6";
import profileImg from "../assets/assets_frontend/header_img.png";
import grpLogo from "../assets/assets_frontend/group_profiles.png";

const Header = () => {

  return (
    <>
      <div className="flex justify-center items-center pt-5 md:mx-14 sm:mx-2">
        <div className="rounded-lg bg-[#5F6FFF] overflow-hidden  sm:overflow px-10 pt-[5rem]">
          <div className="flex flex-col flex-wrap justify-around  items-start float-left sm:pt-0  gap-5">
            <h1 className="md:text-5xl text-3xl  text-white font-bold">
              Book Appointment <br></br>
              With Trusted <br></br> Doctors
            </h1>
            <div className="flex sm:block gap-4">
              <img className="w-28 sm:w-13" src={grpLogo} />
              <p className="text-white">
                Simply browse through our extensive list of trusted <br />{" "}
                doctors, schedule your appointment hassle-free.
              </p>
            </div>
            <button className="bg-[#ffffff] text-black p-3 rounded-full text-xs flex gap-1 items-center">
              <a href="#speciality">Book appointment</a>
              <FaArrowRightLong />
            </button>
          </div>

          <div className="float-right  lg:w-[33rem] md:w-[30rem] sm:w-[20rem]">
            <img className="" src={profileImg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
