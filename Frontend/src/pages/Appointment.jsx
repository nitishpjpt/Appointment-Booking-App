import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import verified_Logo from "../assets/verified_logo.svg";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const daysofWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  // function to find the doctor by userID
  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  // arrow function to calculate avilable slot

  const getAvailableSlots = async () => {
    setDocSlots([]);

    // getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        // to set the minutes
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      // variable to store slots
      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        //add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  console.log(setSlotTime)

  return (
    docInfo && (
      <div className="lg:grid lg:grid-cols-2 lg:w-1/2  md:grid sm:grid sm:grid-cols-1 justify-center pt-5  lg:mx-[10rem] sm:mx-[2rem] sm:gap-4">
        {/* {left side for image} */}
        <div className="bg-[#5F6FFF]  rounded-lg ">
          <img className="" src={docInfo.image} alt="img" />
        </div>
        {/* {right side for text} */}

        <div className="grid border rounded-lg p-4 lg:w-[50vw] ">
          <h1 className="text-3xl flex items-center gap-2">
            {docInfo.name}
            <img className="w-7" src={verified_Logo} />
          </h1>
          {/* {expericence or degree side for text} */}
          <div className="flex text-center gap-2 text-[#4B5563]">
            <p>MBBS - {docInfo.degree}</p>{" "}
            <p className="border text-xs px-4 text-center rounded-full  h-[4vh]">
              {docInfo.experience}
            </p>
          </div>
          {/* {doctor about side for text} */}
          <div className="">
            <h1 className="semi-bold">About</h1>
            <h4 className="text-[#4B5563]">{docInfo.about}</h4>
          </div>

          {/* {Fees side for text} */}

          <p className="font-semibold">Appointment fee: ${docInfo.fees}</p>
        </div>

        {/* booking slots */}

        <div className="lg:ml-72 pl-10 p-10 font-medium text-gray-700 lg:w-[50vw]">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                 onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 sm:min-w-14 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-[#5F6FFF] text-white"
                      : "border border-gray-200"
                  }`}
                  key={index}
                >
                  <p className="lg:p-4 ">
                    {item[0] && daysofWeek[item[0].datetime.getDay()]}
                  </p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          {/* doctor slot lenght */}
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-[#5F6FFF] text-white"
                      : "text-gray-400 border border-gray-200"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="bg-[#5F6FFF] text-white text-sm font-light px-14 py-3 rounded-full my-6">
            Book an appointment
          </button>
          {/* related doctors section    */}
        </div>
        <div>
          <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
      </div>
    )
  );
};

export default Appointment;
