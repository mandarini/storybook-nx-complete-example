import React from 'react';
import { render } from '@testing-library/react';

import UiReact from './ui-react';

describe('UiReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiReact />);
    expect(baseElement).toBeTruthy();
  });
});
