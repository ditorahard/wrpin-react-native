import 'react-native';
import React from 'react';
import HomeScreen from '../Home.component';
import renderer from 'react-test-renderer';

it('Home renders correctly', () => {
  const tree = renderer.create(
    <HomeScreen />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});