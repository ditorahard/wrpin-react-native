import 'react-native';
import React from 'react';
import Subheader from '../Subheader.component';
import renderer from 'react-test-renderer';

it('Subheader renders correctly', () => {
  const tree = renderer.create(
    <Subheader />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});