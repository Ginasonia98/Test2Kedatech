import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate dari react-router-dom

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleLogin = () => {
    if (!email.includes("@") || !email.includes(".com") || password.length < 6) {
      setErrorMessage("Email atau password salah.");
      navigate("/errorpage"); // Arahkan ke halaman error jika login gagal
    } else {
      setErrorMessage("");
      setSuccessMessage("Welcome in the web!");
      navigate("/"); // Arahkan ke halaman beranda jika berhasil login
    }
  };

  return (
    <div>
      <div
        className="h-screen overflow-hidden flex items-center justify-center"
      >
        <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl border border-gray-300">
          <form className="p-12 md:p-24" action="/">
            <h2 className="text-center font-bold lg:text-4xl text-2xl mb-10">
              LOGIN
            </h2>
            <div className="mt-3 mb-2">
              <label htmlFor="email" className="mr-2">
                Email
              </label>
            </div>
            <input
              type="text"
              id="email"
              className="bg-gray-200 pl-5 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-3 mb-2">
              <label htmlFor="password" className="mr-2">
                Password
              </label>
            </div>
            <input
              type="password"
              id="password"
              className="bg-gray-200 pl-5 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
            <button
              className="font-medium p-2 md:p-4 text-white uppercase w-full mt-4"
              style={{ backgroundColor: "#21BFF7" }}
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
          <p className="text-center">
            Dont have account?{" "}
            <a href="/register" className="text-blue-500">
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

