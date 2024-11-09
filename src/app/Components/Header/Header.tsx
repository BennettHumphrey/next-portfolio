import React from "react";

const Header = () => {
  return (
    <section className="p-6 py-12 overflow-hidden md:max-h-[90vh]">
      <div className="flex flex-col mx-auto relative w-full md:flex-row md:justify-around md:px-[10vw]">
        <div className="flex flex-col items-center justify-between sm:justify-around sm:flex-row md:flex-col md:justify-around">
          <span className="text-4xl text-center font-bold text-text-dark md:text-start">
            Hello,
            <br />
            I&apos;m Ben
          </span>
          <span className="text-2xl text-gray-600 pt-8 pb-12 sm:pt-12">
            Let me help you <br /> build your brand!
          </span>
        </div>

        <div className="w-[80vw] h-[75vw] max-h-[80vh] max-w-[80vh] rounded-[70px] m-auto md:relative relative sm:w-[60vw] sm:h-[55vw] md:w-[50vw] md:h-[45vw] md:rounded-[120px]">
          <img
            src="/profile.webp"
            alt="Ben"
            width={376}
            height={420}
            className="z-10 absolute rounded-[100px] overflow-hidden inset-0 w-[90%] m-auto h-full object-center"
          />
          <img
            src="/splash.webp"
            alt=""
            width={426}
            height={439}
            className="absolute rounded-[100px] overflow-hidden inset-0 w-[90%] m-auto h-full object-center"
          />
        </div>

        <div className="flex flex-col gap-4 items-center justify-center md:items-start mt-12">
          <p> Let&apos;s build<br/>something together!</p>
          <a
            className=" inline relative text-orange-500"
            href="mailto:bennetthumphrey98@gmail.com"
          >
            bennetthumphrey98<br/>@gmail.com
          </a>
          <div className="flex flex-col justify-center items-center w-full sm:flex-row sm:justify-around md:flex-col md:justify-center md:items-start">
            <div className="flex items-center gap-4 mx-auto py-8 md:mx-0">
              <div className="text-4xl font-bold text-text-dark">3</div>
              <div className="text-gray-600">
                <div>Years</div>
                <div>Experience</div>
              </div>
            </div>
            <div className="flex flex-col items-center mx-auto">
              <h3 className="text-xl font-semibold">Current rate</h3>
              <span>$32CAD / $25USD per hour</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
