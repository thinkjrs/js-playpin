import React from 'react';
import { render, screen } from './test-utils';
import Home from '../pages/index';

describe('Home', () => {
  it('should render and not crash', () => {
    render(<Home />);

    expect(screen.getByText(/Welcome /i)).toBeInTheDocument();

    // check the exact role
    expect(
      screen.getByRole('heading', { name: 'Welcome to Next.js!' })
    ).toBeInTheDocument();
  });
});
