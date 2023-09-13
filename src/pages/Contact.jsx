import React from "react";
import Navbar from "../layouts/Navbar";

import contactImg from "../../src/assets/contact.svg";
import waIcon from "../../src/assets/wa-icon.png";
import locIcon from "../../src/assets/loc-icon.png";

function Contact() {
  return (
    <div>
      <Navbar />
      <h3 className="text-center font-bold text-3xl lg:mt-5 mt-16">CONTACT</h3>
      <div class="lg:mt-24 mt-10 lg:p-20 p-5">
        <div
          className="grid lg:grid-cols-2 justify-center rounded-lg w-auto text-white lg:p-20 p-10"
          style={{ backgroundColor: "#21BFF7" }}
        >
          <div className="lg:mx-40">
            <img src={contactImg} alt="aboutImg" className="w-auto" />
          </div>
          <div class="grid lg:grid-rows-2 gap-6 self-center justify-center lg:mt-0 mt-10">
            <div className="flex">
              <img src={waIcon} alt="wa-icon" className="w-10" />
              <span className="self-center ml-5 text-xl font-bold">
                0822XXXXXX
              </span>
            </div>
            <div className="flex">
              <img src={locIcon} alt="loc-icon" className="w-10" />
              <span className="self-center ml-5 text-xl font-bold">
                Jln. XXXX
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
