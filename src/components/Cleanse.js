import React from "react";
import { Stage, Sprite } from "@inlet/react-pixi";
import Whirlers from "./Whirlers";
import Skull from "./Skull";
import circle from "./img/circle.png";

const Cleanse = () => {
  return (
    <div id='cleanseBox'className="container">
      <Stage
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
    </div>
  );
};

export default Cleanse;
