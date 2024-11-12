import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";


const Doctor = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();

  const [filterDoc, setFilterDoc] = useState([]);

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <>
      <div className="flex justify-around pt-10 lg:mx-[8rem]">
        <div className="p-5 text-[#565F6C] text-start text-sm font-mono w-[30vw]">
          <h1 className="text-base p-2">
            Browse through the doctors specialist.
          </h1>
          <div className="grid gap-3">
            <p
              onClick={() =>
                speciality === "General Physician"
                  ? navigate("/doctors")
                  : navigate("/doctors/General Physician")
              }
              className="border p-1 cursor-pointer hover:bg-[#EAEFFF] transition-all duration-300"
            >
              General physician
            </p>
            <p
              onClick={() =>
                speciality === "Gynecologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gynecologist")
              }
              className="border p-1 cursor-pointer hover:bg-[#EAEFFF] transition-all duration-300"
            >
              Gynecologist
            </p>
            <p
              onClick={() =>
                speciality === "Dermatologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Dermatologist")
              }
              className="border p-1 cursor-pointer hover:bg-[#EAEFFF] transition-all duration-300"
            >
              Dermatologist
            </p>
            <p
              onClick={() =>
                speciality === "Pediatricians"
                  ? navigate("/doctors")
                  : navigate("/doctors/Pediatricians")
              }
              className="border p-1 cursor-pointer hover:bg-[#EAEFFF] transition-all duration-300"
            >
              Pediatricians
            </p>
            <p
              onClick={() =>
                speciality === "Neurologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Neurologist")
              }
              className="border p-1 cursor-pointer hover:bg-[#EAEFFF] transition-all duration-300"
            >
              Neurologist
            </p>
            <p
              onClick={() =>
                speciality === "Gastroenterologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gastroenterologist")
              }
              className="border p-1 cursor-pointer hover:bg-[#EAEFFF] transition-all duration-300"
            >
              Gastroenterologist
            </p>
          </div>
        </div>

        {/* img */}

        <div className="">
          <div className="grid sm:grid-cols-auto  lg:grid-cols-3 md:grid-cols-2 place-items-center mx-[4rem] gap-5">
            {filterDoc.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    onClick={() => navigate(`/appointment/${item._id}`)}
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
    
    </>
  );
};

export default Doctor;
