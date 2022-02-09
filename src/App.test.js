import { render, screen } from '@testing-library/react';
import App from './App';

test('search', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/search/i);
  expect(linkElement).toBeInTheDocument();
});
