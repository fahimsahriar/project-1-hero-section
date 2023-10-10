import React from "react";
import '../App.css';

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="buttons">
            <button>Shop Now</button>
            <button className="Category-btn">Category</button>
        </div>
        <div className="available">
            <p>Also Available On</p>
            <div className="available-platform">
                <img src="../../public/image/amazon.png" alt="" />
                <img src="../../public/image/flipkart.png" alt="" />
            </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="../../public/image/shoe_image.png" alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
