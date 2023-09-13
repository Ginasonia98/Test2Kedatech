import React from "react";

function Login() {
  return (
    <div>
      <div
        className="h-screen overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: "#21BFF7" }}
      >
        <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl">
          <form className="p-12 md:p-24" action="/">
            <h2 className="text-center font-bold lg:text-4xl text-2xl mb-10">
              LOGIN
            </h2>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <input
                type="text"
                id="username"
                className="bg-gray-200 pl-5 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Username"
              />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <input
                type="password"
                id="password"
                className="bg-gray-200 pl-5 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Password"
              />
            </div>
            <button
              className=" font-medium p-2 md:p-4 text-white uppercase w-full"
              style={{ backgroundColor: "#21BFF7" }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
