import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Showcase from './';

test('Showcase: Renders without children', () => {
  render(<Showcase />);
  const paragraphElement = screen.getByText(/nothing to show here.../i);
  expect(paragraphElement).toBeInTheDocument();
});

test('Showcase: Renders with children', () => {
  render(<Showcase><p>foo!</p></Showcase>);
  const paragraphElement = screen.getByText(/foo/i);
  expect(paragraphElement).toBeInTheDocument();
});

test('Showcase: Snapshot test without children', () => {
  const component = renderer.create(<Showcase />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Showcase: Snapshot test with children', () => {
  const component = renderer.create(<Showcase><p>foo!</p></Showcase>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
