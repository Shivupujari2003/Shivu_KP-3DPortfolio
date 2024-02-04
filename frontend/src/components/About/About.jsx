import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {

  if (!about) {
    console.error("About object is undefined or null");
    return <div>Loading...</div>; // or any fallback UI
  }

  // Check if 'quote' property exists in 'about'
  if (!about.quote) {
    console.error("Quote property is undefined in 'about'", about);
    return <div>No quote available</div>; // or any fallback UI
  }

  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{about.quote || "none"}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
        {about.avatar && about.avatar.url && (
  <img src={about.avatar.url} alt="Shivu" className="aboutAvatar" />
)}

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {about.name}
          </Typography>

          <Typography>{about.title}</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            {about.subtitle}
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            {about.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
