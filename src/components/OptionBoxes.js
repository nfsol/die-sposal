import React from "react";

const OptionBoxes = () => {
  return (
    <>
        <div className="optionBoxes">
          <div className="box">
            <h2>Discreet Dice Disposal</h2>
            <div className="innerBox">
              <p>
                Just ship those cursed knuckle bones our way. We'll make sure
                they're safely quarantined. They probably can't hurt you anymore.
                </p>
              <button className="button fillButton" disabled>
                {" "}
                Coming Soon
              </button>
            </div>
          </div>

          <div id='cleanse' className="box">
            <h2>Free Electro Cleansing</h2>
            <div className="innerBox">
              <p>
                My gnome companion, who refused to be here for this experiment
                assures me that this is all perfectly safe. <br />
                And Free!
              </p>

              <button className="button cleanseButton"> Begin</button>
            </div>
          </div>

          <div className="box">
            <h2>Exorcism</h2>
            <div className="innerBox">
              <p>
                Sacred unguents, whispered prayers. Robes. It's gonna get real
                weird. No wrong answers. Power tools, candles, probably a vice
                or something.
              </p>

              <button className="button fillButton" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default OptionBoxes;
