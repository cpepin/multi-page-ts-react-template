import { shallow } from 'enzyme';
import React from 'react';

import { Hello } from './Hello';

describe('hello', () => {
  it('should pass', () => {
    const cmp = shallow(<Hello />);
    expect(true).toBe(true);
  });
});
