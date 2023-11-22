import React from "react";
import "./CalendarPage.css";

function Navbar({ onLogout }) {
  return (
    <div className="navbar-container">
      <button className="logOut" onClick={onLogout}>
        로그아웃
      </button>
    </div>
  );
}

export default Navbar;
