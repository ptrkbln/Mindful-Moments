import React from "react";
import "./Timer.css";
import { useState, useEffect } from "react";
import { JournalContext } from "../../contexts/JournalContext";
import { useContext } from "react";

export default function Timer() {
  const [timeInterval, setTimeInterval] = useState(0);

  const { timer, setTimer } = useContext(JournalContext);

  // cleanup timer on unmount
  useEffect(() => {
    return () => clearInterval(timeInterval);
  }, [timeInterval]);

  // function to start timer
  function startTimer() {
    if (!timeInterval) {
      //setInterval to update the timer every 1000ms (1s)
      setTimeInterval(
        setInterval(() => {
          setTimer((prev) => {
            if (prev > 0) {
              return prev - 1;
            } else {
              clearInterval(timeInterval);
              return 0;
            }
          });
        }, 1000)
      );
    }
  }

  // function to reset the timer
  function resetTimer() {
    setTimer(120);
    clearInterval(timeInterval); // clear the running interval to stop the timer
    setTimeInterval(0);
  }

  // convert timer to mins and secs
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className="timer-wrapper">
      {timer > 0 && (
        <p>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}{" "}
        </p>
      )}

      {timer >= 120 && (
        <div className="btn-start-wrapper">
          <button onClick={startTimer}>Take a Moment to Reflect</button>
        </div>
      )}
      {timer < 120 && timer > 0 && (
        <div className="btn-reset-wrapper">
          <button onClick={resetTimer}>Reset Timer</button>
        </div>
      )}
    </div>
  );
}
