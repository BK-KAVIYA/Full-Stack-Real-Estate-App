import React from "react";
import './Companies.css'
const Companies = () => {
  return (
    <section className="c-wrapper">
        <div className="textAlignCenter r-head">
        <span className="orangeText">See Who With Us</span>
          <span className="primaryText">OUR SUBSIDIARIES</span>
        </div>
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./clogo1.png" alt="" />
        <img src="./clogo2.png" alt="" />
        <img src="./clogo3.webp" alt="" />
        <img src="./clogo5.png" alt="" />
        <img src="./clogo4.png" alt="" />
      </div>
    </section>
  );
};

export default Companies;
