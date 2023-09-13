import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../layouts/Navbar";
import Card from "../components/Card";
import Footer from "../layouts/Footer";

const Pricing = () => {
  const pricingData = useSelector((state) => state.pricing.pricingData);

  return (
    <div>
      <Navbar />
      <h3 class="text-center font-bold text-3xl lg:mt-5 mt-16 mx-10 underline">
        PRICING
      </h3>
      <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="text-3xl">↓</span>
      </div>
      <div class="grid lg:grid-cols-3 gap-4 justify-items-center mt-24">
        {pricingData.map((card, index) => (
          <div key={index}>
            <Card title={card.title} list={card} />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Pricing;
