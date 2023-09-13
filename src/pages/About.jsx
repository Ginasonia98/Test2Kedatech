import React from "react";
import Navbar from "../layouts/Navbar";

import aboutImg from "../../src/assets/about.svg";
import teamImg from "../../src/assets/team.svg";

function About() {
  return (
    <div>
      <Navbar />
      <h3 className="text-center font-bold text-3xl lg:mt-5 mt-16">ABOUT US</h3>
      <div className="grid lg:grid-cols-2 gap-4 justify-items-center mt-24">
        <div className="mx-10">
          <img src={aboutImg} alt="aboutImg" className="w-auto" />
        </div>
        <div className="mx-10 lg:text-left text-justify">
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
      <div className="grid lg:grid-cols-2 gap-4 justify-items-center mt-24">
        <div className="mx-10 self-center lg:order-1 order-2 lg:text-left text-justify">
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
        <div className="mx-10 lg:order-2 order-1">
          <img src={teamImg} alt="teamImg" className="w-auto" />
        </div>
      </div>
    </div>
  );
}

export default About;
