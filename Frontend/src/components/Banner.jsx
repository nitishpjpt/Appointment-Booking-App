import { FaArrowRightLong } from "react-icons/fa6";
import appointment_img from "../assets/assets_frontend/appointment_img.png"
import { useNavigate } from "react-router-dom";



const Banner = () => {
 
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center m-[5rem] mb-10">
        <div className=" rounded-lg bg-[#5F6FFF]  px-10 pt-4 ">
          <div className="flex flex-col flex-wrap justify-around  items-start float-left  gap-5">
            <h1 className="md:text-5xl text-3xl text-white font-bold pt-[6rem]">
              Book Appointment <br></br>
              With 100+ Trusted <br></br> Doctors
            </h1>

            <button onClick={() => navigate('/Login')} className="bg-[#ffffff] text-black p-4 rounded-full text-xs flex gap-1 items-center">
              <h2>Create account</h2>
              <FaArrowRightLong />
            </button>
          </div>

          <div className="flex float-right w-[33vw]  ">
            <img className="" src={appointment_img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
