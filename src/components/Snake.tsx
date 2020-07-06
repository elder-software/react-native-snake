import React from 'react';
import { View } from 'react-native';

/**
 * Used to draw circles within the react native game engine and matter.js
 * Created using a simple View component
 * @param props used to set component props from the calling class
 */

interface SnakeProps {
  body: { position: { x: number, y: number } },
  color: any,
  size: number
}

const Snake: React.FC<SnakeProps> = ({ body, color, size }) => {
  const { position } = body;

  const x = position.x - size / 2;
  const y = position.y - size / 2;

  return (
    <View style={{
      position: 'absolute',
      width: size,
      height: size,
      left: x,
      top: y,
      backgroundColor: color,
      borderRadius: size
    }} />
  );
};



export default Snake;
