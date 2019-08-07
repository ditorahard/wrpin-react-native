import 'react-native';
import React from 'react';
import Searchbar from '../Searchbar.component';
import renderer from 'react-test-renderer';

it('Searchbar renders correctly', () => {
  const tree = renderer.create(
    <Searchbar />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});