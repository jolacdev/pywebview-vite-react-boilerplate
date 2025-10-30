import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

// TODO: Remove file
const Demo = () => <h1>Hello Vitest!</h1>;

describe('Demo Test Component', () => {
  it('renders a greeting', () => {
    render(<Demo />);
    expect(screen.getByText(/hello vitest/i)).toBeInTheDocument();
  });
});
