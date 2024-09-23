import { useContext, useState } from "react";
import { JournalContext } from "../../contexts/JournalContext";
import "./JournalForm.css";

export default function JournalForm() {
  const [showMore, setShowMore] = useState(false);

  const {
    handleSubmit,
    input,
    setInput,
    questionOfDay,
    color,
    setColor,
    timer,
  } = useContext(JournalContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <label>
        {/* Optional chaining (?.) in the JournalForm component ensures that even if questionOfDay is undefined for some reason, it won't throw an error when rendering. */}
        <p className="topic">{questionOfDay?.topic}</p>
        <p className="question-of-day">{questionOfDay?.question}</p>
        {/* Type button so it doesnt act as submit */}
        {timer <= 0 && (
          <button
            type="button"
            className="show-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {!showMore ? "Show more" : "Show less"}
          </button>
        )}
        <div className={showMore ? "followups" : "followup-hidden"}>
          {questionOfDay?.followUps.map((question, i) => {
            return (
              <p key={i} className="followup">
                {question}
              </p>
            );
          })}
        </div>
      </label>
      {!timer && (
        <>
          <textarea
            rows="5"
            cols="33"
            value={input}
            required
            onChange={(e) => setInput(e.target.value)}
          />
          <label className="color-label">
            Which color resonates with your feelings today?
          </label>
          <input
            className="color-input"
            type="color"
            value={color}
            required
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="submit-btn">Submit Today's Thoughts</button>
        </>
      )}
    </form>
  );
}
