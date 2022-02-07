import React from "react";

const OptionBoxes = () => {
  return (
    <>
      <section>
        <div className="optionBoxes">
          <div className="container">
            <div className="box">
              <h2>Free Electro Cleansing</h2>
              <p>
                My gnome companion, who refused to be here for this experiment
                assures me that this is all perfectly safe. And Free!
              </p>
              <h4>$0</h4>
            </div>
          </div>
          <div className="container">
            <div className="box">
              <h2>Dice Disposal</h2>
              <p>
                Just ship that cursed hunk of plastic our way. We'll make sure
                it's safely quarantined. It won't be able to hurt you any more.
                I mean... Probably?
              </p>
            </div>
          </div>
          <div className="container">
            <div className="box">
              <h2>Exorcism</h2>
              <p>
                Sacred unguents, whispered prayers. Robes. It's gonna get real
                weird. No wrong answers. Power tools, candles, probably a vice
                or something.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OptionBoxes;
