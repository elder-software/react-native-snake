import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";
import DPad from '../components/DPad';
import { BALL_SIZE } from './constants';
import Snake from '../components/Snake';
import { BallMove } from './systems';

const screenDims = Dimensions.get('window');

const snakeSettings = {
  inertia: 0,
  friction: 0,
  frictionStatic: 0,
  frictionAir: 0,
  restitution: 1
};

export const snake = Matter.Bodies.circle(
  screenDims.width / 2,
  screenDims.width / 2,
  BALL_SIZE / 2,
  {
    ...snakeSettings,
    label: 'ball'
  }
);

export const mouse = Matter.Bodies.circle(
  screenDims.width / 2,
  screenDims.width / 2 + 30,
  BALL_SIZE / 2,
  {
    ...snakeSettings,
    label: 'mouse'
  }
);

// Creates the engine and world using Matter.js
const engine = Matter.Engine.create({ enableSleeping: false });
const world = engine.world;


// Adds all the objects to the world
Matter.World.add(world, [
  snake,
  mouse
]);

const Home: React.FC = () => {
  console.log(screenDims);

  useEffect(() => {
    Matter.Body.setVelocity(snake, { x: 1, y: 0 });

    Matter.Events.on(engine, 'collisionStart', event => {
      const pairs = event.pairs;

      const objA = pairs[0].bodyA.label;
      const objB = pairs[0].bodyB.label;

      if (objA == 'ball' && objB == 'mouse') {
        // Detects collision between the top wall and ball, player 1 scores
        // Increments player 1 score and restarts the ball with start position/velocity
        Matter.Body.setPosition(mouse, {
          x: 30,
          y: 30
        });
      }
    });
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: screenDims.width, height: screenDims.width, backgroundColor: 'lightgrey' }}>
        <GameEngine
          systems={[BallMove]}
          entities={{
            physics: {
              engine: engine,
              world: world
            },
            snake: {
              body: snake,
              size: BALL_SIZE,
              color: '#ffffff',
              renderer: Snake
            },
            mouse: {
              body: mouse,
              size: BALL_SIZE,
              color: '#ffffff',
              renderer: Snake
            },
          }}>

        </GameEngine>
      </View>

      <View style={{ flex: 1 }}>
        <DPad
          onPressLeft={() => Matter.Body.setVelocity(snake, { x: -1, y: 0 })}
          onPressRight={() => Matter.Body.setVelocity(snake, { x: 1, y: 0 })}
          onPressUp={() => Matter.Body.setVelocity(snake, { x: 0, y: -1 })}
          onPressDown={() => Matter.Body.setVelocity(snake, { x: 0, y: 1 })}
        />
      </View>
    </View>
  );
}

export default Home;
