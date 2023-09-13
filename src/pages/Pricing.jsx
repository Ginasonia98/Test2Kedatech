import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../layouts/Navbar';
import Card from '../components/Card';
import productImg from '../../src/assets/product.svg';

function Pricing() {
  const pricingData = useSelector((state) => state.pricing.pricingData);

  return (
    <div>
      <Navbar />
      <h3 class="text-center font-bold text-3xl lg:mt-5 mt-16 mx-10">
        PRICING
      </h3>
      <p className="text-center mt-5 mx-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div class="grid lg:grid-cols-3 gap-4 justify-items-center mt-24">
        {pricingData.map((card, index) => (
          <div key={index}>
            <Card title={card.title} list={card} />
          </div>
        ))}
      </div>
      <div
        class="grid lg:grid-cols-2 gap-4 justify-items-center mt-24 py-20"
        style={{ backgroundColor: "#21BFF7" }}
      >
        <div className="mx-10">
          <img src={productImg} alt="aboutImg" className="w-auto" />
        </div>
        <div className="mx-10 lg:text-left text-justify self-center text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            veritatis aperiam quibusdam neque exercitationem? Modi eligendi
            aliquam, ex dicta facilis at officiis quia quidem doloribus
            pariatur, similique explicabo illo ut.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            veritatis aperiam quibusdam neque exercitationem? Modi eligendi
            aliquam, ex dicta facilis at officiis quia quidem doloribus
            pariatur, similique explicabo illo ut.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            veritatis aperiam quibusdam neque exercitationem? Modi eligendi
            aliquam, ex dicta facilis at officiis quia quidem doloribus
            pariatur, similique explicabo illo ut.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            veritatis aperiam quibusdam neque exercitationem? Modi eligendi
            aliquam, ex dicta facilis at officiis quia quidem doloribus
            pariatur, similique explicabo illo ut.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
