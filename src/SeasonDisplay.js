import React from "react";
import "./SeasonDisplay.css";

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[season]; // { text, iconName}
  return (
    <div className={`season-display ${season}`}>
      <i className={` icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={` icon-right massive ${iconName} icon`} />
    </div>
  );
};

const SeasonConfig = {
  summer: {
    text: "Let's hit the beach!!",
    iconName: "sun",
  },
  winter: {
    text: "Burr it is cold! ",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export default SeasonDisplay;
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
