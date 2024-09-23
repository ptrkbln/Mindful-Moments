import { createContext, useState, useEffect } from "react";
import { gratitudeQuestions } from "../data/gratitudeQuestions";

export const JournalContext = createContext();

export default function JournalContextProvider({ children }) {
  const [input, setInput] = useState("");
  const [completedToday, setCompletedToday] = useState(false);
  const [questionOfDay, setQuestionOfDay] = useState(
    gratitudeQuestions[0] || {}
  );
  const [color, setColor] = useState("#fff");
  const [timer, setTimer] = useState(120);
  const [currentDate, setCurrentDate] = useState("");

  // setting the current date (key for localStorage entries)

  useEffect(() => {
    const fullDate = new Date();
    const day = fullDate.getDate();
    const month = fullDate.getMonth() + 1;
    const year = fullDate.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  }, []);

  // When submitting the answer, it gets saved in localStorage and closes the form for today
  function handleSubmit() {
    localStorage.setItem(
      currentDate,
      JSON.stringify({ questionOfDay, input, color })
    ); // variables automatically converted into strings when used as keys in localStorage, the rest needs to convert to JSON; the value (object) however needs to be stringified
    setCompletedToday(true);
    setInput("");
  }

  return (
    <JournalContext.Provider
      value={{
        input,
        setInput,
        completedToday,
        setCompletedToday,
        questionOfDay,
        setQuestionOfDay,
        color,
        setColor,
        timer,
        setTimer,
        handleSubmit,
        currentDate,
      }}
    >
      {children}
    </JournalContext.Provider>
  );
}
