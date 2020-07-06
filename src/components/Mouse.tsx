import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';


interface MouseProps {
  body: { position: { x: number, y: number } },
  color: any,
  size: number
}

const Mouse: React.FC<MouseProps> = ({ body, color, size }) => {
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
}


export default Mouse;
