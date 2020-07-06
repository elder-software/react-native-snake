import Matter from 'matter-js';


const BallMove = (entities, { time }) => {
  let engine = entities['physics'].engine;
  engine.world.gravity.y = 0;
  Matter.Engine.update(engine, time.delta);

  let mouse = entities.mouse;
  console.log(mouse);

  return { ...entities, engine: engine };
};

export { BallMove };
