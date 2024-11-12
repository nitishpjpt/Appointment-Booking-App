const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid md:grid-cols-[3fr_1fr_1fr] sm:grid-cols-1 md:place-items-center sm:place-items-center gap-4 lg:mx-[10rem] p-10">
        <div className="p-4">
          <img
            className="w-[4vw]"
            src="https://cdn-icons-png.flaticon.com/256/6686/6686950.png"
          />
          <h2 className="text-2xl font-bold text-[#000B6D]">Prescription</h2>
          <div>
            <p className="w-full md:w-2/3 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        {/* //middle side */}
        <div className="text-center">
          <h3 className="text-xl font-bold ">Home</h3>
          <ul className="text-sm">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* //last side */}
        <div className="text-center">
          <h3 className="text-xl font-bold ">GET IN TOUCH</h3>
          <ul className="text-sm">
            <li>+9999178575</li>
            <li>nitishpjpt97@gmail.com</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* copyRight footer */}
      <div className="text-center border-t border-t-[#ADADAD]  p-5">
        <p>Copyright 2024 @Nitish Prajapati- All Right Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
