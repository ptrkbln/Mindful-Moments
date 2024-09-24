import React from "react";
import "./FeatureHighlight.css";
import ScreenOne from "../../assets/Screen1.png";
import ScreenTwo from "../../assets/Screen2.png";
import ScreenThree from "../../assets/Screen3.png";
import Carousel from "../Carousel/Carousel";

export default function FeatureHighlight() {
  const items = [
    {
      title: "1. Receive daily Gratitude Topics",
      image: ScreenOne,
    },
    {
      title: "2. Reflect and share your thoughts",
      image: ScreenTwo,
    },
    {
      title: "3. Follow your progress",
      image: ScreenThree,
    },
  ];

  return (
    <section className="feature-highlight">
      <h2>Why Use Our Gratitude Journal?</h2>
      <Carousel items={items} />
    </section>
  );
}
