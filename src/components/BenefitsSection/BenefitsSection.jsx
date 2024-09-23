import React from "react";
import "./BenefitsSection.css";
import SunBgImage from "../../assets/bannersunbg2.jpg";

export default function BenefitsSection() {
  return (
    <section className="benefits">
      <h2>Why Gratitude Matters</h2>
      <img src={SunBgImage} alt="" />

      <div className="container">
        <h3 className="nonanimated-headline">
          It takes 5 minutes a day to feel better
        </h3>
        <h3 className="animated-headline">
          It takes 5 minutes a day <br />
        </h3>
        <h3 className="animated-headline">
          <br />
          to feel better
        </h3>
        <div className="text">
          <div className="inner">
            <div className="text-wrapper">
              <p>
                Practicing gratitude has been shown to significantly improve
                mental health and overall well-being. Research by psychologist{" "}
                <strong>Robert Emmons</strong>, a leading expert on gratitude,
                reveals that people who regularly practice gratitude experience
                higher levels of positive emotions, feel more alive, sleep
                better, and even have stronger immune systems.{" "}
                <em>
                  Gratitude shifts focus from what's lacking to appreciating
                  what one already has
                </em>
                , which fosters resilience and happiness.
              </p>
            </div>
            <div className="text-wrapper">
              <p>
                <strong>Martin Seligman</strong>, often regarded as the father
                of positive psychology, emphasizes the profound impact of
                gratitude on well-being. He found that{" "}
                <em>
                  simple exercises, such as writing letters of gratitude or
                  keeping a gratitude journal, significantly boosted happiness
                  levels and reduced depressive symptoms.
                </em>{" "}
                Seligman's research demonstrates that gratitude strengthens our
                ability to connect with others, increases positive emotions, and
                fosters an overall sense of life satisfaction. He suggests that{" "}
                regularly reflecting on what we are thankful for can rewire the
                brain to focus more on positive experiences, creating lasting
                emotional benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
