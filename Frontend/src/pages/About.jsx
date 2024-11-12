import aboutImg from '../assets/about-img.png'

const About = () => {
  return (
    <>
      <h1 className="text-center pt-8 text-[#707070] text-2xl uppercase">
        About <span className="text-[#3870c9]">us</span>
      </h1>
      <div className="flex items-center p-10  gap-8 lg:flex-row sm:flex-col lg:ml-[9rem] ">
        {/* left for image */}
        <div className="lg:w-[28vw]">
          <img
            className="rounded-sm"
            src={aboutImg}
            alt="img"
          />
        </div>
        {/* right for text */}
        <div className="flex flex-col gap-4 text-[#707070] text-sm lg:w-1/2">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <h2 className="text-[#374151] font-semibold ">Our Vision</h2>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="mx-[8rem] pb-14 ">
        <h4 className="p-4 text-xl text[#000000]  w-[10rem]">
          WHY <span className="text-[#374151]">CHOOSE US</span>
        </h4>
        <div className="flex lg:flex-row sm:flex-col items-center justify-center ">
          <div className="border w-[30vw] sm:w-[80vw] p-14 hover:bg-[#6070FF] hover:text-white transition-all duration-200 ease-in-out">
            <h1>EFFICIENCY:</h1>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border  w-[30vw] sm:w-[80vw] p-14 hover:bg-[#6070FF] hover:text-white transition-all duration-200 ease-in-out">
            <h1>CONVENIENCE:</h1>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="border  w-[30vw] sm:w-[80vw] p-14 hover:bg-[#6070FF] hover:text-white transition-all duration-200 ease-in-out">
            <h1>PERSONALIZATION:</h1>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
