import React from "react";
import Navbar from "../layouts/Navbar";
import Contacts from "../../src/assets/contact.png";
import Linkeidn from "../../src/assets/linkeidn.png";
import Email from "../../src/assets/email.png";
import Location from"../../src/assets/location.png"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h3 className="text-center font-bold text-3xl lg:mt-5 mt-16">CONTACT</h3>
      <div className="lg:mt-24 mt-10 lg:p-20 p-5">
        <div
          className="grid lg:grid-cols-2 justify-center rounded-lg w-auto text-black lg:p-20 p-10 border border-black" 
        >
          <div className="lg:mx-40">
            <img src={Contacts} alt="aboutImg" className="w-auto" />
          </div>
          <div className="grid lg:grid-rows-2 gap-6 self-center justify-center lg:mt-0 mt-10">
            <div className="flex">
              <img src={Linkeidn} alt="linkeidn" className="w-10" />
              <span className="self-center ml-5 text-xl font-bold">
                Gina Sonia Br Tobing
              </span>
            </div>
            <div className="flex">
              <img src={Email} alt="email" className="w-10" />
              <span className="self-center ml-5 text-xl font-bold">
                ginas.tobing@gmail.com
              </span>
            </div>
            <div className="flex">
              <img src={Location} alt="location" className="w-10" />
              <span className="self-center ml-5 text-xl font-bold">
                ginas.tobing@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


