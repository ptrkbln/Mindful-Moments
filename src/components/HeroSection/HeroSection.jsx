import React from "react";
import "./HeroSection.css";
import cloudOne from "../../../src/assets/cloudOne.png";
import cloudTwo from "../../../src/assets/cloudTwo.png";
import cloudThree from "../../../src/assets/cloudThree.png";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <img src={cloudOne} className="cloud cloud-1" alt="Cloud 1" />
      <img src={cloudTwo} className="cloud cloud-2" alt="Cloud 2" />
      <img src={cloudThree} className="cloud cloud-3" alt="Cloud 3" />
      <img src={cloudOne} className="cloud cloud-4" alt="Cloud 4" />
      <img src={cloudThree} className="cloud cloud-5" alt="Cloud 5" />

      <h1>Cultivating happiness through gratitude</h1>
      <h2>A daily practice to reflect, feel good and improve well-being</h2>
      <button className="cta-button" onClick={() => navigate("/journal")}>
        START YOUR JOURNEY
      </button>
    </section>
  );
}
