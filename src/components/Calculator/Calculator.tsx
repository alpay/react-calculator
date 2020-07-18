import React, { FC } from 'react';
import cx from 'classnames';

import './Calculator.scss';

type Props = JSX.IntrinsicElements['button'] & {
};

const Calculator: FC<Props> = ({ className, children, onClick }) => {
  const classNames = cx(
    'Calculator',
    className,
  );

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Calculator;
