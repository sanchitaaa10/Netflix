import React, { useState } from "react";
import ReactPlayer from "react-player";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import "./popular.css";
import interstellar from "../../assets/interstellar.jpeg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import sample from "../../assets/sample.mov";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "25%",
  transform: "translate(-50%, -50%)",
  width: 500,

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Popular() {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [ishidden, sethidden] = useState("none");
  const [play, setplayback] = useState(false);
  const [videostate, setvideostate] = useState("Play");
  const [open, setOpen] = React.useState(false);
  const [val, setVal] = useState();
  const handleClose = () => {
    setOpen(false);
    sethidden("none");
    setplayback(false);
  };
  const arr = [10, 12, 13, 4, 2, 1, 2, 4, 1, 4, 1, 34, 5, 23];
  const navigateLeft = () => {
    const width = document.getElementById("user-cards").innerWidth;
    document.getElementById("user-cards").scrollLeft -= width / 5;
  };
  const navigateRight = () => {
    document.getElementById("user-cards").scrollLeft += 100;
  };
  const handleHover = () => {
    setplayback(true);
    sethidden("block");
  };

  return (
    <div>
      <div className="user-cards-container">
        <div className="user-cards" id="user-cards">
          {arr.map((elem) => {
            return (
              <>
                <Link to="player">
                  {" "}
                  <div
                    className="user-card"
                    onMouseOver={handleHover}
                    onMouseOut={handleClose}
                  >
                    <ReactPlayer
                      width="300px"
                      height="200px"
                      url={sample}
                      volume={value / 100}
                      playing={play}
                      controls={true}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    ></ReactPlayer>
                    <button style={{ display: ishidden }}>Watch now</button>
                  </div>
                </Link>
              </>
            );
          })}

          <div className="overlay-button-left" onClick={navigateLeft}>
            <ArrowBackIosIcon style={{ fontSize: "40px", cursor: "pointer" }} />{" "}
          </div>
          <div className="overlay-button-right" onClick={navigateRight}>
            <ArrowForwardIosIcon
              style={{ fontSize: "40px", cursor: "pointer" }}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
