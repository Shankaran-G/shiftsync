import React from "react";
const ShiftTable = ({ data, darkMode }) => {
  const reversedData = [...data].reverse();
  return (
    <div
      className="rounded-lg mt-6 text-white p-4"
      style={{
        background: darkMode
          ? "linear-gradient(-80deg, #737171, #191932)"
          : "#647DFF",
        height: "400px",
      }}
    >
      <div className="overflow-y-scroll h-full scrollbar-hide">
        <table className="min-w-full text-sm text-left">
          <thead
            className="uppercase text-xs font-bold border-b border-white/20 sticky top-0 z-10"
            style={{
              background: darkMode
                ? "linear-gradient(-80deg, #737171, #191932)"
                : "#647DFF",
            }}
          >
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Date</th>
              <th className="p-3">Start Time</th>
              <th className="p-3">End Time</th>
              <th className="p-3">Working Time</th>
              <th className="p-3">Start Longitude</th>
              <th className="p-3">Start Latitude</th>
              <th className="p-3">End Longitude</th>
              <th className="p-3">End Latitude</th>
            </tr>
          </thead>
          <tbody>
            {reversedData.map((shift, index) => (
              <tr key={index} className="border-t border-white/10">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{shift.date}</td>
                <td className="p-3">{shift.start}</td>
                <td className="p-3">{shift.end}</td>
                <td className="p-3">{shift.duration}</td>
                <td className="p-3">{shift.startLong}</td>
                <td className="p-3">{shift.startLat}</td>
                <td className="p-3">{shift.endLong}</td>
                <td className="p-3">{shift.endLat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ShiftTable;
