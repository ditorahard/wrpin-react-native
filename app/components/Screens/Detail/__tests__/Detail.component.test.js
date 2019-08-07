import 'react-native';
import React from 'react';
import DetailScreen from '../Detail.component';
import renderer from 'react-test-renderer';

it('Detail renders correctly', () => {
  const tree = renderer.create(
    <DetailScreen />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});