import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = () => {
    if (!email.includes("@") || !email.includes(".com")) {
      setErrorMessage("Silahkan input ulang email dengan format yang benar.");
    } else if (password.length < 6) {
      setErrorMessage(
        "Silahkan input ulang password dengan minimal 6 karakter."
      );
    } else if (!email || !password) {
      setErrorMessage("Silahkan cek kembali input Anda.");
    } else {
      setSuccessMessage("Welcome in the web!");
    }
  };

  return (
    <div>
      <div
        className="h-screen overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: "#21BFF7" }}
      >
        <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl">
          <form className="p-12 md:p-24" action="/">
            <h2 className="text-center font-bold lg:text-4xl text-2xl mb-10">
              Registrasi
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
            Belum memiliki akun?{" "}
            <a href="/login" className="text-blue-500">
              Silahkan login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;