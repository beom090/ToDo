import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from "axios";
import SignIn from "./SignIn/SignIn";
import CalendarPage from "./main/CalendarPage";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedCursor
          innerSize={25}
          outerSize={8}
          innerScale={0.7}
          color="51, 153, 102"
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        <Route exact path="/" render={() => <Redirect to="/signin" />} />
        <Route path="/signin" render={() => <SignIn />} />
        <Route path="/main" render={() => <CalendarPage />} />
      </div>
    </Router>
  );
}

export default App;
