import React from 'react';
import { shallow } from 'enzyme';

import Calculator from './Calculator';

it('renders correctly calculator', () => {
  const wrapper = shallow(<Calculator primary>Primary Button</Calculator>);

  expect(wrapper).toMatchSnapshot();
});