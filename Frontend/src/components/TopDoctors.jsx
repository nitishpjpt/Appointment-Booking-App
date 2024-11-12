// import { doctors } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();

  const {doctors} = useContext(AppContext)

  return (
    <div>
      <>
        <div>
          <div className="mb-7">
            {/* text */}
            <div className="text-center pt-[5rem]">
              <h2 className="text-3xl font-bold">Top Doctors to Book</h2>
              <p className="p-4">
                Simply browse through our extensive list of trusted <br></br>{" "}
                doctors.
              </p>
            </div>
            {/* image grid */}
            <div className="grid sm:grid-cols-auto lg:grid-cols-4 md:grid-cols-3 place-items-center mx-[4rem] gap-5">
              {doctors.slice(0,8).map((item, index) => {
                return (
                  <>
                    <div
                      key={index} onClick={() => {navigate(`/appointment/${item._id}`);scrollTo(0,0)}}
                      className="place-content-center p-2  border rounded-2xl"
                    >
                      <div className="bg-[#EAEFFF] rounded-2xl overflow-hidden">
                        <img
                          className="hover:scale-125 ease-in-out transition-all duration-500"
                          src={item.image}
                        ></img>
                      </div>
                      <div className="bg-transparent  p-2">
                        <div className="flex items-center gap-2">
                          {" "}
                          <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                          <p className="text-[#22C55E] font-semibold">
                            Available
                          </p>
                        </div>
                        <h1 className="font-semibold text-xl">{item.name}</h1>
                        <p className="text-sm">{item.speciality}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-5">
          <button
            onClick={() => {navigate("/doctors");scrollTo(0,0)}}
            className="bg-[#EAEFFF] w-[8rem]  text-black p-3 rounded-full"
          >
            more
          </button>
        </div>
      </>
    </div>
  );
};

export default TopDoctors;
