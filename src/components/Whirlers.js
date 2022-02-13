
import React from 'react'
import {Container, Sprite, withPixiApp } from '@inlet/react-pixi'
import flare from './img/flare_0.png'
import flareOuter from './img/flare_01_0.png'


const width = window.innerWidth;
const height = window.innerHeight;


const Whirlers = withPixiApp(
  class extends React.Component {
    i = 0;

    state = {
      x: 0,
      rotate: 0,
      scale: 1
    };

    componentDidMount() {
      this.props.app.ticker.add(this.tick);
    }

    componentWillUnmount() {
      this.props.app.ticker.remove(this.tick);
    }

    tick = (delta) => {
      this.i += 0.02 * delta;
      this.setState((state) => ({
        x: Math.sin(this.i) * (width / 10),
        rotate: (Math.cos(this.i) * width) / 100,
        scale: 1 + Math.sin(this.i) * 0.5
      }));
    };

    render() {
      const {rotate, scale} = this.state;
      return (
        <Container
          rotation={rotate}
          pivot={50}
          position={[width / 2, height / 2]}
          scale={scale}
        >
          <Sprite anchor={0.5} image={flareOuter} x={0} y={25} />
          <Sprite anchor={0.5} image={flare} x={this.state.x} y={50} />
          <Sprite anchor={0.5} image={flareOuter} x={100} y={this.state.x} />
        </Container>
      );
    }
  }
);

export default Whirlers;

