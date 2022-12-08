import { render, screen } from '@testing-library/react';
import Domino from './Domino';

test('renders learn react link', () => {
  render(<Domino />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
