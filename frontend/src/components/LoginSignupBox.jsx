import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export function LoginSignupBox({ darkMode, setShowLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      if (response.status === 200) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("token", response.data.token);

        navigate("/dashboard", { state: { email: response.data.email } });
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <motion.div
      key="login-box"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 30 }}
      transition={{ duration: 0.8 }}
      className="absolute w-[320px] sm:w-[400px] font-poppins rounded-lg shadow-lg p-8 text-white"
      style={{
        backgroundColor: darkMode
          ? "rgba(77, 77, 119, 0.6)"
          : "rgba(89, 92, 255, 0.6)",
      }}
    >
      <motion.div
        className="absolute top-4 left-4 cursor-pointer text-white text-2xl"
        onClick={() => setShowLogin(false)}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        <IoArrowBack />
      </motion.div>

      <form onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">ShiftSync</h2>

        <div className="mb-4">
          <label
            className="block text-white text-left font-bold mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-[30px] bg-white text-[#3C3FEE] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3C3FEE]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-left font-bold mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 rounded-[30px] bg-white text-[#3C3FEE] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3C3FEE]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <div className="text-center text-red-500 text-sm mb-4">{error}</div>
        )}

        <div className="text-center text-sm mb-4 cursor-pointer underline">
          Forgot password?
        </div>

        <button
          className="w-40 p-2 mb-3 rounded-[30px] bg-white text-[#3C3FEE] font-semibold hover:bg-[#3C3FEE] hover:text-white transition-colors duration-200"
          type="submit"
        >
          Login
        </button>
      </form>
    </motion.div>
  );
}
