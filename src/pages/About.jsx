import React from "react";
import Navbar from "../layouts/Navbar";

import History from "../assets/history.png";
import Journey from "../../src/assets/journey.png";

function About() {
  return (
    <div>
      <Navbar />
      <h3 className="text-center font-bold text-3xl lg:mt-5 mt-8 underline">History</h3>
      <div className="grid lg:grid-cols-2 gap-4 justify-items-center mt-24">
        <div className="mx-10">
          <img src={History} alt="history" className="w-auto" />
        </div>
        <div className="mx-10 lg:text-left text-justify">
          <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <h3 className="text-center font-bold text-3xl lg:mt-5 mt-16 underline">Journey</h3>
      <div className="grid lg:grid-cols-2 gap-4 justify-items-center mt-8">
        <div className="mx-10 self-center lg:order-1 order-2 lg:text-left text-justify">
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
          The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
        </div>
        <div className="mx-10 lg:order-2 order-1">
          <img src={Journey} alt="journey" className="w-auto" />
        </div>
      </div>
    </div>
  );
}

export default About;
