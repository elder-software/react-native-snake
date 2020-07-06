import Matter from 'matter-js';
import {
  BALL_SIZE,
} from './constants';

/**
 * all the objects that are used by Matter.js for the game engine
 */

// isStatic sets the mass and inertia to infinity
const plankSettings = {
  isStatic: true
};

const ballSettings = {
  inertia: 0,
  friction: 0,
  frictionStatic: 0,
  frictionAir: 0,
  restitution: 1
};


export const ball = (ballStartX: number, ballStartY: number) => {
  return (
    Matter.Bodies.circle(
      ballStartX,
      ballStartY,
      BALL_SIZE / 2,
      {
        ...ballSettings,
        label: 'ball'
      }
    )
  );
}

