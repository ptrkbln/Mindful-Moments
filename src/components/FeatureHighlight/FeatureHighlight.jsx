import React from "react";
import "./FeatureHighlight.css";
import ScreenOne from "../../assets/Screen1.png";
import ScreenTwo from "../../assets/Screen2.png";
import ScreenThree from "../../assets/Screen3.png";
import Carousel from "../Carousel/Carousel";

export default function FeatureHighlight() {
  const items = [
    {
      title: "Item 1",
      image: ScreenOne,
    },
    {
      title: "Item 2",
      image: ScreenTwo,
    },
    {
      title: "Item 3",
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
