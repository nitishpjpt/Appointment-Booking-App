import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const SpecialityMenu = () => {
  return (
    <>
      {/* text */}
      <div className="p-6 block justify-center text-center items-center">
        <h2 className="font-semibold text-3xl">Find by Speciality</h2>
        <p className="p-4">
          Simply browse through our extensive list of trusted <br></br> doctors,
          schedule your appointment hassle-free.
        </p>
      </div>
      {/* img */}
      <div
        className="flex justify-center items-center text-center overflow-scroll"
        id="speciality"
      >
        {specialityData.map((data, index) => {
          return (
            <>
              <Link key={index} to={`/doctors/${data.specialityData}`}>
                <div
                  
                  className="flex justify-center items-center text-center p-1 hover:translate-y-[-10px] transition-all duration-500"
                >
                  <div className="block justify-center text-center items-center p-2">
                    <div className="flex items-center justify-center ">
                      <img className="w-20" src={data.image} />
                    </div>
                    <h2 className="text-xs">{data.specialityData}</h2>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SpecialityMenu;
