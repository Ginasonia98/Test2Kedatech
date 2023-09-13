import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Tambahkan state untuk username
  const [status, setStatus] = useState("mahasiswa"); // Tambahkan state untuk status
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (
      !email.includes("@") ||
      !email.includes(".com") ||
      password.length < 6 ||
      !/^[a-zA-Z\s]*$/.test(username) // Validasi hanya menerima teks untuk username
    ) {
      setErrorMessage("Email, password, atau username salah.");
      navigate("/errorpage");
    } else {
      setErrorMessage("");
      setSuccessMessage("Successful register");
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="h-screen overflow-hidden flex items-center justify-center">
        <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl border border-gray-300">
          <form className="p-12 md:p-24" action="/">
            <h2 className="text-center font-bold lg:text-4xl text-2xl mb-10">
              REGISTER
            </h2>
            <div className="mt-3 mb-2">
              <label htmlFor="username" className="mr-2">
                Username
              </label>
            </div>
            <input
              type="text"
              id="username"
              className="bg-gray-200 pl-5 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <div className="mt-3 mb-2">
              <label htmlFor="status" className="mr-2">
                Status
              </label>
            </div>
            <select
              id="status"
              className="bg-gray-200 pl-2 py-2 md:py-4 focus:outline-none w-full"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="mahasiswa">Mahasiswa</option>
              <option value="pelajar">Pelajar</option>
              <option value="pekerja">Pekerja</option>
            </select>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
            <button
              className="font-medium p-2 md:p-4 text-white uppercase w-full mt-4"
              style={{ backgroundColor: "#21BFF7" }}
              onClick={handleRegister}
            >
              Register
            </button>
          </form>
          <p className="text-center">
            Have an account?{" "}
            <a href="/login" className="text-blue-500">
              Login Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

