import React from 'react';
import { View } from 'react-native';

interface Dimensions {
  width: number;
  height: number;
}

interface GridViewProps {
  containerDims: Dimensions;
  numRows: number;
  numColumns: number;
}

const GridView: React.FC<GridViewProps> = props => {
  const gridDimensions: Dimensions = {
    width: props.containerDims.width / props.numColumns,
    height: props.containerDims.height / props.numRows
  };

  return (
    <View>
    </View>
  );
}


export default GridView;