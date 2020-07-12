import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";
import DPad from '../components/DPad';
import { SNAKE_SIZE } from './constants';
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
  SNAKE_SIZE / 2,
  {
    ...snakeSettings,
    label: 'snake'
  }
);

export const mouse = Matter.Bodies.circle(
  screenDims.width / 2,
  screenDims.width / 2 + 30,
  SNAKE_SIZE / 2,
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
  const [score, setScore] = React.useState<number>(0);

  useEffect(() => {
    Matter.Body.setVelocity(snake, { x: 1, y: 0 });

    Matter.Events.on(engine, 'collisionStart', event => {
      const pairs = event.pairs;

      const objA = pairs[0].bodyA.label;
      const objB = pairs[0].bodyB.label;

      if (objA == 'snake' && objB == 'mouse') {
        // Detects collision between snake and mouse
        Matter.Body.setPosition(mouse, {
          x: Math.floor(Math.random() * screenDims.width),
          y: Math.floor(Math.random() * screenDims.width)
        });
      }
    });
  }, []);

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
              size: SNAKE_SIZE,
              color: '#ffffff',
              renderer: Snake
            },
            mouse: {
              body: mouse,
              size: SNAKE_SIZE,
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
