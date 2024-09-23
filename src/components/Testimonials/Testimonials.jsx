import React from "react";
import "./Testimonials.css";
import personOne from "../../assets/ai-person-1.jpeg";
import personTwo from "../../assets/ai-person-2.jpeg";
import personThree from "../../assets/ai-person-3.jpeg";
import personFour from "../../assets/ai-person-4.jpeg";
import personFive from "../../assets/ai-person-5.jpeg";
import personSix from "../../assets/ai-person-6.jpeg";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-cards-flex-wrapper">
        <div className="testimonial-cards-grid-wrapper">
          <figure className="snip1192">
            <blockquote>
              Using the gratitude journal has transformed my mornings. I start
              each day with a positive mindset, and it's made a huge difference
              in how I approach challenges.
            </blockquote>
            <div className="author">
              <img src={personOne} alt="sq-sample1" />
              <h5>
                Anne E. <span> Hamburg</span>
              </h5>
            </div>
          </figure>
          <figure className="snip1192">
            <blockquote>
              Writing down my thoughts daily has helped me realize how much I
              have to be thankful for. It's such a simple tool, but it brings so
              much clarity and peace.
            </blockquote>
            <div className="author">
              <img src={personTwo} alt="sq-sample24" />
              <h5>
                John D.<span> Amsterdam</span>
              </h5>
            </div>
          </figure>
          <figure className="snip1192 to-be-hidden">
            <blockquote>
              The gratitude journal helped me focus on the good, even on tough
              days. It's become a daily habit that grounds me and reduces my
              stress.
            </blockquote>
            <div className="author">
              <img src={personThree} alt="sq-sample29" />
              <h5>
                Sophia L.<span> London</span>
              </h5>
            </div>
          </figure>
          <figure className="snip1192">
            <blockquote>
              I never realized how much I was overlooking in my life until I
              started using this journal. It’s been a great way to reflect and
              boost my mood.
            </blockquote>
            <div className="author">
              <img src={personFour} alt="sq-sample29" />
              <h5>
                Hans G.<span> Münich</span>
              </h5>
            </div>
          </figure>
          <figure className="snip1192 to-be-hidden">
            <blockquote>
              This journal has helped me become more mindful and appreciative of
              the small things. It's amazing how much my perspective on life has
              shifted!
            </blockquote>
            <div className="author">
              <img src={personFive} alt="sq-sample29" />
              <h5>
                Alicia P.<span> Toronto</span>
              </h5>
            </div>
          </figure>
          <figure className="snip1192 to-be-hidden">
            <blockquote>
              Keeping a gratitude journal has changed my outlook on life. I feel
              more content, present, and in control of my emotions.
            </blockquote>
            <div className="author">
              <img src={personSix} alt="sq-sample29" />
              <h5>
                Juanita E.<span> Madrid</span>
              </h5>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
