import React from "react";
import Navbar from "../layouts/Navbar";
import Contacts from "../../src/assets/contact.png";
import Linkeidn from "../../src/assets/linkeidn.png";
import Email from "../../src/assets/email.png";
import Location from "../../src/assets/location.png";
import Footer from "../layouts/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h3 className="text-center font-bold text-3xl lg:mt-5 mt-16 underline">
        CONTACT
      </h3>
      <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="text-3xl">↓</span> 
      </div>
      <div className="lg:mt-5 mt-10 lg:p-20 p-5 relative">
        <div className="grid lg:grid-cols-1 md:grid-cols-2 lg:gap-6 w-auto text-black lg:p-20 p-10 border border-blue-600">
          <div className="lg:mx-40 md:mx-auto">
            <img src={Contacts} alt="aboutImg" className="w-full" />
          </div>
          <div className="grid lg:grid-rows-3 md:grid-rows-2 gap-6 self-center justify-center lg:mt-0 mt-10">
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
                Tangerang, Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
