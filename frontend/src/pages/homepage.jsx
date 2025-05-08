import React, { useState } from "react";
import { motion } from "framer-motion";
import { LoginSignupBox } from "../components/LoginSignupBox";
import "../custom.css";

export function HomePage({ darkMode }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gradient-dark" : "bg-gradient-light"
      } transition-colors duration-200 relative overflow-hidden`}
    >
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <motion.div
          className="pt-60"
          animate={showLogin ? { y: -180 } : { y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="text-[64px] sm:text-[80px] md:text-[96px] lg:text-[128px] font-extrabold font-poppins text-white leading-tight"
            style={{ textShadow: "4px 7px 7.8px rgba(0, 0, 0, 0.25)" }}
          >
            ShiftSync
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-white/90">
            Streamline employee scheduling with ease.
          </p>
        </motion.div>

        <div className="relative h-[350px] w-full flex justify-center items-start">
          {!showLogin ? (
            <motion.button
              className="rounded-md mt-[300px] font-poppins font-semibold text-white transition-colors duration-200 text-[20px] lg:text-[24px]"
              style={{
                width: "265px",
                height: "54px",
                backgroundColor: darkMode ? "#4D4D77" : "#595CFF",
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowLogin(true)}
            >
              Shift
            </motion.button>
          ) : (
            <LoginSignupBox darkMode={darkMode} setShowLogin={setShowLogin} />
          )}
        </div>
      </div>

      <motion.div
        className="absolute rounded-full hidden lg:block z-0"
        transition={{ duration: 1 }}
        style={{
          width: "100vw",
          height: "100vw",
          top: "-51vw",
          left: "0px",
          background: darkMode
            ? "linear-gradient(47deg, #05050A 0%, #777777 70%)"
            : "linear-gradient(47deg, #595CFF 0%, #C6F8FF 70%)",
          boxShadow: "7px 7px 20.9px rgba(0, 0, 0, 0.25)",
        }}
      />

      <motion.div
        className="absolute rounded-full hidden lg:block z-10"
        animate={showLogin ? { y: "-25vh", opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          width: "120vw",
          height: "120vw",
          bottom: "-105vw",
          left: "-10vw",
          backgroundColor: darkMode ? "#BABABA" : "white",
        }}
      />
    </div>
  );
}
