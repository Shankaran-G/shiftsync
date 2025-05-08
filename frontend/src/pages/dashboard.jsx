import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../components/navBar";
import Banner from "/src/components/Banner.jsx";
import ShiftStartBox from "../components/ShiftStartBox";
import CurrentHoursBox from "../components/CurrentHoursBox";
import ShiftTable from "../components/ShiftTable";
import BreakControls from "../components/BreakControls";
import { useNavigate } from "react-router-dom";
export default function Dashboard({ darkMode, setDarkMode }) {
  const [isWorking, setIsWorking] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [location, setLocation] = useState({ lat: "", long: "" });
  const [seconds, setSeconds] = useState(0);
  const [shiftData, setShiftData] = useState([]);
  const [endTime, setEndTime] = useState("");
  const [endLocation, setEndLocation] = useState({ lat: "", long: "" });
  const [breakState, setBreakState] = useState({ lunch: false, short: false });
  const navigate = useNavigate();

  const formatTime = (s) => {
    const hrs = String(Math.floor(s / 3600)).padStart(2, "0");
    const mins = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const secs = String(s % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    let interval;
    const onBreak = breakState.lunch || breakState.short;

    if (isWorking && !onBreak) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isWorking, breakState]);

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          history.push("/");
          return;
        }

        const response = await Axios.get("http://localhost:5000/api/shifts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setShiftData(response.data);
      } catch (error) {
        console.error("Error fetching shifts:", error);
        if (error.response && error.response.status === 401) {
          history.push("/");
        }
      }
    };

    fetchShifts();
  }, [history]);

  const handleStartClick = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    setStartTime(timeString);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(6);
        const long = position.coords.longitude.toFixed(6);
        setLocation({ lat, long });
      },
      (error) => {
        console.error("Location error:", error);
        setLocation({ lat: "Unavailable", long: "Unavailable" });
      }
    );

    setIsWorking(true);
  };

  const handleEndClick = async () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    setEndTime(timeString);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const endLat = position.coords.latitude.toFixed(6);
        const endLong = position.coords.longitude.toFixed(6);
        setEndLocation({ lat: endLat, long: endLong });
        const formattedDuration = formatTime(seconds);

        const token = localStorage.getItem("token");
        if (!token) {
          history.push("/");
          return;
        }

        try {
          await Axios.post(
            "http://localhost:5000/api/shifts",
            {
              start: startTime,
              end: timeString,
              duration: formattedDuration,
              startLat: location.lat,
              startLong: location.long,
              endLat,
              endLong,
              date: new Date(),
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const response = await Axios.get("http://localhost:5000/api/shifts", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setShiftData(response.data);

          setIsWorking(false);
          setStartTime("");
          setEndTime("");
          setSeconds(0);
          setLocation({ lat: "", long: "" });
          setEndLocation({ lat: "", long: "" });
          setBreakState({ lunch: false, short: false });
        } catch (error) {
          console.error("Error saving shift:", error);
        }
      },
      (error) => {
        console.error("End location error:", error);
        setEndLocation({ lat: "Unavailable", long: "Unavailable" });
      }
    );
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gradient-dark" : "bg-gradient-light"
      }`}
    >
      <Navbar
        title="ShiftSync"
        navLinks={[]}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        showDarkModeToggle={true}
        showLogout={true}
        onLogout={handleLogout}
      />

      <div className="p-6 pt-36">
        <Banner
          name="Joe"
          darkMode={darkMode}
          isWorking={isWorking}
          onStartClick={isWorking ? handleEndClick : handleStartClick}
        />
        <div className="grid md:grid-cols-3 gap-10 mt-10 mb-10">
          <ShiftStartBox
            darkMode={darkMode}
            startTime={startTime}
            endTime={endTime}
          />
          <CurrentHoursBox
            darkMode={darkMode}
            seconds={seconds}
            isPaused={breakState.lunch || breakState.short}
          />
          <BreakControls
            darkMode={darkMode}
            breakState={breakState}
            setBreakState={setBreakState}
          />
        </div>
        <ShiftTable data={shiftData} darkMode={darkMode} />
      </div>
    </div>
  );
}
