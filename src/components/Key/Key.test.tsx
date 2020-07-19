import React from 'react';
import { shallow } from 'enzyme';

import Key from './Key';

it('renders correctly Key', () => {
  const wrapper = shallow(<Key>Primary Button</Key>);

  expect(wrapper).toMatchSnapshot();
});