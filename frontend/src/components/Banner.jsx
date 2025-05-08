import React from "react";

const Banner = ({ name, darkMode, isWorking, onStartClick }) => {
  const handleButtonClick = () => {
    onStartClick();
  };

  return (
    <div
      className="text-white p-6 rounded-xl mb-6 shadow flex items-center justify-between font-poppins"
      style={{
        background: darkMode
          ? "linear-gradient(-80deg, #737171, #191932)"
          : "#647DFF",
      }}
    >
      <h2 className="text-xl font-semibold">
        Welcome Back <span className="font-bold">{name}</span>
      </h2>

      <div className="flex items-center gap-4">
        <span className="font-bold text-lg">{isWorking ? "END" : "START"}</span>
        <button
          onClick={handleButtonClick}
          className={`w-14 h-8 flex items-center rounded-full px-1 transition duration-300 ease-in-out border-2 border-white ${
            isWorking ? "bg-[#5D75FF] justify-end" : "bg-white justify-start"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full transition-all duration-300 ${
              isWorking ? "bg-white" : "bg-[#5D75FF]"
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default Banner;
