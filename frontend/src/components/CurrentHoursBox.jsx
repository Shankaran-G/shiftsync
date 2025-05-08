const CurrentHoursBox = ({ darkMode, seconds, isPaused }) => {
  const formatTime = (s) => {
    const hrs = String(Math.floor(s / 3600)).padStart(2, "0");
    const mins = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const secs = String(s % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div
      className="text-white p-4 rounded-lg text-center"
      style={{
        background: darkMode
          ? "linear-gradient(-80deg, #737171, #191932)"
          : "#647DFF",
      }}
    >
      <h3 className="text-sm font-semibold">Current Working Hours</h3>
      <p className="text-2xl font-bold">{formatTime(seconds)}</p>
      {isPaused && (
        <p className="text-xs mt-1 text-gray-200">On Break (Paused)</p>
      )}
    </div>
  );
};

export default CurrentHoursBox;
