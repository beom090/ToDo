import React, { useState } from "react";
import "./CalendarPage.css";

function MemoForm({ date, onSave }) {
  const [memo, setMemo] = useState("");

  const handleMemoChange = (event) => {
    setMemo(event.target.value);
  };

  const handleSave = () => {
    onSave(date, memo);
    setMemo("");
  };

  return (
    <div>
      <h2>{date.toDateString()}</h2>
      <textarea value={memo} onChange={handleMemoChange} />
      <button onClick={handleSave}>저장</button>
    </div>
  );
}

export default MemoForm;
