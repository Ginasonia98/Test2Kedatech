import React from "react";
import Navbar from "../layouts/Navbar";
import Metrics from "../../src/assets/metrics.png";
import waveImg from "../../src/assets/wave.png";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center lg:mt-12 mt-24">
        <h3 className="text-center w-96">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </h3>
      </div>
      <div className="lg:grid grid-rows-2 grid-flow-col justify-between  lg:mt-40 mt-10">
        <div className="justify-self-center text-center mx-10">
          <p>
            <i>"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"</i>
          </p>
        </div>
        <div className="justify-self-center mx-10">
          <img src={Metrics} alt="sectionImg" className="w-64" />
        </div>
        <div className="row-span-2">
          <img src={waveImg} alt="waveImg" className="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
