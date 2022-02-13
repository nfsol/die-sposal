import React from "react";
import OptionBoxes from "./OptionBoxes";
import D20 from "./D20";
const Services = () => {
  return (
    <div className="container">
      <div className="infoContainer">
        <div className="headerText">
          <span className="headerLogo">
            Die
            <D20 className="d20" />
            Sposal
          </span>
          <h1>Peruse Our Services</h1>
          <p>
            Tempted? Convinced? Fooled? We're not picky! Hopefully you're
            feeling the same.
          </p>
        </div>
      </div>

      <OptionBoxes />
    </div>
  );
};

export default Services;
