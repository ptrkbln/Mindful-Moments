import React, { useEffect } from "react";
import { gratitudeQuestions } from "../../data/gratitudeQuestions";
import Timer from "../../components/Timer/Timer";
import { JournalContext } from "../../contexts/JournalContext";
import { useContext } from "react";
import "./MyJournal.css";
import JournalForm from "../../components/JournalForm/JournalForm";

export default function MyJournal() {
  const {
    completedToday,
    setCompletedToday,
    currentDate,
    setQuestionOfDay,
    timer,
  } = useContext(JournalContext);

  // if there is a saved item in localStorage with today's date, then the form stays closed; if not, it opens
  useEffect(() => {
    const entry = localStorage.getItem(currentDate);
    entry ? setCompletedToday(true) : setCompletedToday(false);
    console.log("Checking localStorage on load:", entry); // Check the entry directly
    console.log("Current Date:", currentDate); // Log currentDate
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
        <p>You're all done for today. Come back tomorrow 🔆</p>
      )}
      {timer > 0 && <Timer />}
    </section>
  );
}
