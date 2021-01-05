import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('should render successfully with custom text', () => {
    const { getByText } = render(<Button>Hello world</Button>);
    const buttonElement = getByText(/Hello world/i);
    expect(buttonElement).not.toBeNull();
  });
});
