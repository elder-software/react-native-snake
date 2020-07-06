// import 'react-native';
import React from 'react';
import Home from '../src/screens/Home';
import DPad from '../src/components/DPad';
import Mouse from '../src/components/Mouse';
import Snake from '../src/components/Snake';

import renderer from 'react-test-renderer';

// test('Home Snapshot', () => {
//   const tree = renderer.create(<Home />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

test('DPad Snapshot', () => {
  const tree = renderer.create(<DPad />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Mouse Snapshot', () => {
  const position = [100, 100];

  const tree = renderer.create(
    <Mouse
      body={{ position }}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Snake Snapshot', () => {
  const position = [100, 100];

  const tree = renderer.create(
    <Snake
      body={{ position }}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});