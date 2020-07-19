import React from 'react';
import { shallow } from 'enzyme';

import Display from './Display';

it('renders correctly Display', () => {
  const wrapper = shallow(<Display></Display>);

  expect(wrapper).toMatchSnapshot();
});