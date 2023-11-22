import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import MemoForm from "./MemoForm";
import Navbar from "./Navbar";
import "./CalendarPage.css";

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [memos, setMemos] = useState({});

  const onDateChange = (newDate) => {
    setDate(newDate);
  };

  const onSaveMemo = (date, memo) => {
    setMemos((prevMemos) => ({
      ...prevMemos,
      [date.toDateString()]: memo,
    }));
  };

  const handleLogout = () => {
    // 로그아웃 처리 로직을 구현하세요.
  };

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <div className="calendar-container">
        <Calendar
          className="custom-calendar"
          value={date}
          onChange={onDateChange}
        />
      </div>

      <MemoForm date={date} onSave={onSaveMemo} />
      {memos[date.toDateString()] && (
        <div>
          <h2>메모:</h2>
          <p>{memos[date.toDateString()]}</p>
        </div>
      )}
    </div>
  );
}

export default CalendarPage;
