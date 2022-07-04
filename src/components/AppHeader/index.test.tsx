import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AppHeader from './';

test('AppHeader: Renders', () => {
  render(<AppHeader title="Demo Header" />);
  const linkElement = screen.getByText(/demo header/i);
  expect(linkElement).toBeInTheDocument();
});

test('AppHeader: Snapshot', () => {
  const component = renderer.create(<AppHeader title="Demo Header" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
