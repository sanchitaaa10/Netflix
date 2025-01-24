import React from "react";
import "./home.css";
import logo from "../../assets/logo.png";
import tv from "../../assets/tv.png";
import tab from "../../assets/tab.png";
import children from "../../assets/children.png";
import download from "../../assets/download.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div className="main-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="logo">
          {" "}
          <img src={logo} height="100px" width="200px" />
        </div>

        <div className="buttons">
          <select>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <button className="signin">Sign in</button>
        </div>
      </div>
      <div className="banner-text">
        <h1>Unlimited movies, TV shows and more. </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
      </div>
      <div className="banner-inputs">
        <input
          type="text"
          className="email"
          placeholder="Email Address"
        ></input>
        <button className="getstarted">Get Started ></button>
      </div>
      <div className="sub-container">
        <div className="cards-container">
          <div className="cards">
            <img src={tv}></img>
            <h2>Enjoy on your TV.</h2>
            <h3>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h3>
          </div>
          <div className="cards">
            {" "}
            <img src={tab}></img>
            <h2>Watch everywhere.</h2>
            <h3>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h3>
          </div>
          <div className="cards">
            {" "}
            <img src={children}></img>
            <h2>Create profiles for children.</h2>
            <h3>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h3>
          </div>
          <div className="cards">
            {" "}
            <img src={download}></img>
            <h2>Download your shows to watch offline.</h2>
            <h3>
              Save your favourites easily and always have something to watch.
            </h3>
          </div>
        </div>

        <h1>Frequently Asked Questions</h1>
        <Box sx={{ marginLeft: "40px" }}>
          <Accordion
            className="accordion"
            sx={{
              backgroundColor: "rgba(13, 4, 60, 0.853)",
              color: "#fff",
              width: "80vw",
              borderBottom: "2px solid black",
            }}
          >
            <AccordionSummary
              sx={{ height: "100px" }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: "24px" }}>
                What is Netflix?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "24px" }}>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want, without a single ad – all
                for one low monthly price. There's always something new to
                discover, and new TV shows and movies are added every week!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="accordion"
            sx={{
              backgroundColor: "rgba(13, 4, 60, 0.853)",
              color: "#fff",
              width: "80vw",
              borderBottom: "2px solid black",
            }}
          >
            <AccordionSummary
              sx={{ height: "100px" }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: "24px" }}>
                What is Netflix?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "24px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="accordion"
            sx={{
              backgroundColor: "rgba(13, 4, 60, 0.853)",
              color: "#fff",
              width: "80vw",
              borderBottom: "2px solid black",
            }}
          >
            <AccordionSummary
              sx={{ height: "100px" }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: "24px" }}>
                What is Netflix?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "24px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <h2>
          Ready to watch? Enter your email to create or restart your membership.
        </h2>
        <div className="banner-inputs-below">
          <input
            type="text"
            className="email"
            placeholder="Email Address"
          ></input>
          <button className="getstarted">Get Started ></button>
        </div>
      </div>
    </div>
  );
}
