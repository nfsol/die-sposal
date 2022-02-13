import { React, useState } from "react";
import { Stage, Sprite } from "@inlet/react-pixi";
import Whirlers from "./Whirlers";
import Skull from "./Skull";
import circle from "./img/circle.png";

const StartPrompt = (props) => {
  return (
    <div className="container">

    <div className="prompt">
      <h2>Click Below to Begin</h2>
      <p> Please place the problem die within the circle after we begin. Don't mind the skull, she doesn't bite. After thirty seconds, back away slowly. Do not make eye contact with the skull.</p>
      <button className="button cleanseButton" onClick={props.start}>
        {" "}
        Start Cleanse{" "}
      </button>
    </div>
    </div>
  );
};

const Animation = () => {
  return (
    <Stage
      className="cleanser"
      width={window.innerWidth}
      height={window.innerHeight}
      options={{ backgroundColor: 0xd6cca9 }}
    >
      <Sprite
        image={circle}
        position={[window.innerWidth / 2, window.innerHeight / 2]}
        anchor={0.5}
        scale={1}
      />
      <Skull />
      <Whirlers />
    </Stage>
  );
};

const Cleanse = () => {
  // var {height,width} = useWindowSize();
  const [isAnimating, setAnimating] = useState(false);

  return (
    <>{isAnimating ? <Animation /> : <StartPrompt start={setAnimating} />}</>
  );
};

export default Cleanse;
