import React, { useState } from "react";
import Navbar from "../src/components/navBar";
import { HomePage } from "./pages/homepage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const links = [{ name: "HOME", to: "/" }];

  return (
    <>
      <Navbar
        title="Shiftsync"
        navLinks={links}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        showDarkModeToggle={true}
      />
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} />} />
        <Route path="/start" element={<HomePage darkMode={darkMode} />} />
        <Route
          path="/dashboard"
          element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
      </Routes>
    </>
  );
}

export default App;
