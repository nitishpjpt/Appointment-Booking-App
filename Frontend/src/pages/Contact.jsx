import contactImg from "../assets/contact_image.png";

const Contact = () => {
  return (
    <>
      <h1 className="text-center pt-8 uppercase text-xl  text-[#6B7280]">
        Contact <span className="text-[#4B5563] font-semibold">Us</span>
      </h1>
      <div className="flex lg:flex-row sm:flex-col  lg:mx-[20rem] p-5 pt-10 gap-6">
        <div className="lg:w-[36vw]">
          <img src={contactImg} alt="img" />
        </div>

        <div className="flex flex-col  gap-4">
          <h1 className="text-[#4B5563] text-xl font-semibold">OUR OFFICE</h1>
          <p className="text-[#6B7280] text-sm">
            00000 Willms Station <br></br>
            Suite 000, Washington, USA
          </p>
          <p className="text-[#6B7280] text-sm">
            Tel: (000) 000-0000 Email: greatstackdev@gmail.com
          </p>
          <h2 className="text-[#4B5563] text-xl font-semibold">
            CAREERS AT PRESCRIPTO
          </h2>
          <p className="text-[#6B7280] text-sm">
            Learn more about our teams and job openings.
          </p>
          <button className="p-4  border hover:bg-black hover:text-white border-slate-800 text-black transition-all duration-300 ease-in-out">
            Explore Jobs
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
