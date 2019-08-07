import 'react-native';
import React from 'react';
import NewsCard from '../NewsCard.component';
import renderer from 'react-test-renderer';

it('News renders correctly', () => {
  const tree = renderer.create(
    <NewsCard />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});