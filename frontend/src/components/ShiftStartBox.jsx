import React from "react";

const ShiftStartBox = ({ darkMode, startTime, endTime }) => (
  <div
    className="text-white p-4 rounded-lg text-center"
    style={{
      background: darkMode
        ? "linear-gradient(-80deg, #737171, #191932)"
        : "#647DFF",
    }}
  >
    <div className="flex justify-between items-center">
      <div className="text-left">
        <h3 className="text-sm font-semibold font-poppins">Start Time</h3>
        <p className="text-xl font-bold font-poppins">{startTime || "00:00"}</p>
      </div>
      <div className="text-right">
        <h3 className="text-sm font-semibold font-poppins">End Time</h3>
        <p className="text-xl font-bold font-poppins">{endTime || "00:00"}</p>
      </div>
    </div>
  </div>
);

export default ShiftStartBox;
