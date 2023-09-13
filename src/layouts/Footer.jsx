import React from 'react';
import logo from "../assets/logo.png";

const Footer = () => {
  const logoStyles = {
    filter: 'invert(1) hue-rotate(180deg)', // Adjust the filter as needed
    width: '80px', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
    color: 'blue', 
  };

  return (
    <footer className="border border-blue-600 py-8 mt-5">
      <div className="container mx-auto flex flex-wrap text-black">
        <div className="w-full md:w-1/4 text-center md:text-left">
        <img src={logo} alt="Logo" style={logoStyles} className="mx-auto md:mx-0" />
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left mt-4 md:mt-0">
          <h4 className="text-lg font-bold">Sales</h4>
          <ul className="mt-2">
            <li>Enterprise Sales</li>
            <li>Become a Partner</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left mt-4 md:mt-0">
          <h4 className="text-lg font-bold">Support</h4>
          <ul className="mt-2">
            <li>Help Center</li>
            <li>Guidance</li>
            <li>Trust & Safety</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left mt-4 md:mt-0">
          <h4 className="text-lg font-bold">Company</h4>
          <ul className="mt-2">
            <li>About ERP</li>
            <li>Investor Relations</li>
            <li>Our Team</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;