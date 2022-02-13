
import  {Sprite, useTick, Container } from '@inlet/react-pixi';
import { useState } from 'react';
import skull100 from './img/skull100.png';

let i = 0;

const Skull = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);

  useTick(delta => {
    i += 0.05 * delta;

    setX(Math.sin(i) * 100);
    setY(Math.sin(i/1.5) * 100);
    setRotation(-10 + Math.sin(i/10 + Math.PI * 2) * 10);
  });

  return (
    <Container
          pivot={50}
          position={[window.innerWidth / 2, window.innerHeight / 2]}
        >
    <Sprite
      image={skull100}
      anchor={1}
      x={x}
      y={y}
      rotation={rotation}
    />
    </Container>
  );
};

export default Skull