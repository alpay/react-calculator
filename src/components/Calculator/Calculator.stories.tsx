import React from 'react';
import { storiesOf } from '@storybook/react';

import Calculator from './Calculator';

storiesOf('Calculator', module)
  .add('Calculator', () => <Calculator>Primary Button</Calculator>)