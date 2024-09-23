import { useState, useEffect } from "react";
import "./MyProfile.css";
import ThankYouBanner from "../../assets/bannerthankyou.jpg";

export default function MyProfile() {
  const [daysOfPractice, setDaysOfPractice] = useState(0);
  const [emotionsTracker, setEmotionsTracker] = useState([]);

  useEffect(() => {
    let storageValues = Object.values(localStorage);
    for (let value of storageValues) {
      let parsedValue;

      try {
        parsedValue = JSON.parse(value);
        if (parsedValue?.questionOfDay?.id) {
          console.log(parsedValue);

          setDaysOfPractice(
            (prevValue) => prevValue + 1
          ); /* double-render due to strict-mode, should work normally in production */

          if (parsedValue?.color) {
            setEmotionsTracker((prevValue) => [
              ...prevValue,
              parsedValue.color,
            ]);
          }
        }
      } catch (error) {
        continue; // skip invalid entries in localStorage
      }
    }
  }, []);

  return (
    <section className="my-profile-section">
      <div className="text-wrapper">
        <h2>Your Achievements</h2>
        <p>
          Days cultivating mindfulness through your journal: {daysOfPractice}
        </p>

        <div
          className="emotional-tracker"
          style={{
            background: `linear-gradient(to right, ${emotionsTracker.join(
              ", "
            )})`,
          }}
        ></div>
        <p>
          An abstract visualization of your emotional journey.
          <br />
          Each day is represented by a color, which you previously selected to
          represent your mood.
        </p>
      </div>
      <img src={ThankYouBanner} alt="Thank you Banner" />
    </section>
  );
}
