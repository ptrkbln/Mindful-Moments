import React, { useEffect, useState } from "react";
import { gratitudeQuestions } from "../../data/gratitudeQuestions";
import Timer from "../../components/Timer/Timer";
import { JournalContext } from "../../contexts/JournalContext";
import { useContext } from "react";
import "./MyJournal.css";
import JournalForm from "../../components/JournalForm/JournalForm";
import backgroundMusic from "../../assets/angelic-meditation.mp3";

export default function MyJournal() {
  const {
    completedToday,
    setCompletedToday,
    currentDate,
    setQuestionOfDay,
    timer,
  } = useContext(JournalContext);

  // initializing music as an object
  // initializing music as an object
  const [audio] = useState(new Audio(backgroundMusic));
  const [isPlaying, setIsPlaying] = useState(false);

  // function to gradually increase volume (ease-in effect)
  function fadeIn() {
    audio.volume = 0;
    let volumeStep = 0.001;
    let fadeInInterval = setInterval(() => {
      if (audio.volume < 0.2) {
        // volume up to 0.2
        audio.volume += volumeStep;
      } else {
        clearInterval(fadeInInterval); // stop increasing volume when it reaches 0.5
      }
    }, 100); // volume increase every 0.1 sec
  }

  // function to gradually decrease volume (ease-out effect)
  function fadeOut() {
    let volumeStep = 0.01;
    let fadeOutInterval = setInterval(() => {
      if (audio.volume > 0) {
        audio.volume -= volumeStep;
      } else {
        audio.volume = 0;
        audio.pause();
        clearInterval(fadeOutInterval); // clear the interval once hte volume is 0
        setIsPlaying(false);
      }
    }, 100);
  }

  // playing music based on timer
  useEffect(() => {
    if (timer > 2 && timer < 120 && !isPlaying && audio.paused) {
      audio.play();
      audio.loop = true;
      fadeIn(); // start fade-in when the timer starts
      setIsPlaying(true); // playing state set to true to prevent repeated play
    }
    if (timer < 2 && isPlaying) {
      fadeOut(); // start fade-out when the timer reaches 0
    }

    return () => {
      if (timer === 0 && isPlaying) fadeOut(); // cleanup to pause music when component unmounts/timer stops or resets
    };
  }, [timer]);

  // if there is a saved item in localStorage with today's date, then the form stays closed; if not, it opens
  useEffect(() => {
    const entry = localStorage.getItem(currentDate);
    entry ? setCompletedToday(true) : setCompletedToday(false);
  }, [currentDate]);

  // checking if the journal for today is already complete:  daily selecting a new question from gratitudeQuestions array based on looping through each question and checking if it's saved (together with an answer) in localStorage

  useEffect(() => {
    let allQuestionsAnswered = true;
    let storageValues = Object.values(localStorage);
    for (let question of gratitudeQuestions) {
      let questionAlreadyAnswered = false;

      for (let value of storageValues) {
        let parsedValue;

        try {
          parsedValue = JSON.parse(value);
        } catch (error) {
          continue; // skip invalid entries in localStorage
        }

        if (parsedValue?.questionOfDay?.id === question.id) {
          questionAlreadyAnswered = true;
          break;
        }
      }
      if (!questionAlreadyAnswered) {
        setQuestionOfDay(question);
        allQuestionsAnswered = false;
        break;
      }
    }
    if (allQuestionsAnswered) {
      alert(
        "Congrats! You answered all questions and completed our Gratitude Journal Challenge 👏"
      );
    }
  }, []);

  return (
    <section className="my-journal-wrapper">
      {!completedToday ? (
        <JournalForm />
      ) : (
        <p className="done-for-today-p">
          You're all done for today. Come back tomorrow 🔆
        </p>
      )}
      {!completedToday && timer > 0 && <Timer />}
    </section>
  );
}
