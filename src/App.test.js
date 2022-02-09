import { render, screen } from '@testing-library/react';
import App from './App';

test('home', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
