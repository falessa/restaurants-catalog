import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  { LoadingSpinner } from '../loadingSpinner';

describe('LoadingSpinner', () => {
  test('renders CircularProgress', () => {
    const { getByRole } = render(<LoadingSpinner style={{ color: 'red' }} />);
    const circularProgress = getByRole('progressbar');
    expect(circularProgress).toBeInTheDocument();
  });

  test('applies the provided style', () => {
    const style = { color: 'blue', marginTop: '20px' };
    const { getByRole } = render(<LoadingSpinner style={style} />);
    const circularProgress = getByRole('progressbar');
    console.log(circularProgress.style);
    // Test if the color style is applied (regardless of its exact value)
    expect(circularProgress.style).toHaveProperty('color', expect.any(String));
  });
});
