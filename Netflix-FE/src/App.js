import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

import { Box } from "@mui/material";
import Home from "./Components/Home/Home";
import Popular from "./Components/Popular/Popular";
import User from "./Components/User/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "./Components/Player/Player";
import Recommendation from "./Components/Recommendations/Recommendation";
import Landing from "./Components/Landing/Landing";
function App() {
  const [value, setValue] = useState(30);
  const [isloggedin, setloggedinstatus] = useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [play, setplayback] = useState(false);
  const [videostate, setvideostate] = useState("Play");
  return (
    <BrowserRouter>
      <div className="App">
        {!isloggedin && (
          <>
            <Home />
          </>
        )}
        {isloggedin && (
          <>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/player" element={<Player />}></Route>
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
