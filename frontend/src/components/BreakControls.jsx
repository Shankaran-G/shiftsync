import React, { useState } from "react";

const BreakControls = ({ darkMode, breakState, setBreakState }) => {
  const [toggles, setToggles] = useState({
    lunch: false,
    short: false,
  });

  const toggleSwitch = (type) => {
    setBreakState((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="flex flex-col gap-4 font-poppins">
      {[
        { label: "Lunch Shift Break", key: "lunch" },
        { label: "Short Shift Break", key: "short" },
      ].map(({ label, key }) => (
        <div
          key={key}
          className="flex justify-between items-center text-white p-3 rounded-lg"
          style={{
            background: darkMode
              ? "linear-gradient(-80deg, #737171, #191932)"
              : "#6A83FF",
          }}
        >
          <span>{label}</span>
          <div className="flex items-center gap-2">
            <span className="font-bold">
              {breakState[key] ? "RESUME" : "PAUSE"}
            </span>
            <button
              onClick={() => toggleSwitch(key)}
              className={`w-14 h-8 flex items-center rounded-full px-1 transition duration-300 ease-in-out border-2 border-white
                ${
                  breakState[key]
                    ? "bg-[#5D75FF] justify-end"
                    : "bg-white justify-start"
                }`}
            >
              <div
                className={`w-6 h-6 rounded-full transition-all duration-300 
                  ${breakState[key] ? "bg-white" : "bg-[#5D75FF]"}`}
              ></div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BreakControls;
