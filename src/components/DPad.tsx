import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

interface DPadProps {
  onPressLeft: Function,
  onPressRight: Function,
  onPressUp: Function,
  onPressDown: Function,
}

const DPad: React.FC<DPadProps> = ({
  onPressLeft,
  onPressRight,
  onPressUp,
  onPressDown
}) => {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white'
    }}>
      {/* Left arrow */}
      <TouchableHighlight
        onPress={() => onPressLeft()}
        style={{
          flex: 1,
          justifyContent: 'center'
        }}>
        <FontAwesome
          name="arrow-left"
          size={50}
          color="#900"
          style={{ alignSelf: 'flex-end' }}
        />
      </TouchableHighlight>


      {/* Middle up/down arrows */}
      <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>
        {/* Up arrow */}
        <TouchableHighlight
          onPress={() => onPressUp()}
          style={{
            flex: 1,
            justifyContent: 'center'
          }}>
          <FontAwesome
            name="arrow-up"
            size={50}
            color="#900"
            style={{ alignSelf: 'center' }}
          />
        </TouchableHighlight>

        {/* Down arrow */}
        <TouchableHighlight
          onPress={() => onPressDown()}
          style={{
            flex: 1,
            justifyContent: 'center'
          }}>
          <FontAwesome
            name="arrow-down"
            size={50}
            color="#900"
            style={{ alignSelf: 'center' }}
          />
        </TouchableHighlight>
      </View>


      {/* Right arrow */}
      <TouchableHighlight
        onPress={() => onPressRight()}
        style={{
          flex: 1,
          justifyContent: 'center'
        }}>
        <FontAwesome
          name="arrow-right"
          size={50}
          color="#900"
          style={{ alignSelf: 'flex-start' }}
        />
      </TouchableHighlight>
    </View>
  );
}

export default DPad;