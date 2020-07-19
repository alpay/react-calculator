import React, { FC } from 'react';
import cx from 'classnames';

import './Display.scss';

type Props = JSX.IntrinsicElements['div'] & {
  value: String;
};

const Display: FC<Props> = ({ value, className, children, onClick }) => {
  const classNames = cx(
    'Display',
    className
  );

  return (
    <div className={classNames}>
      <p>
        {value}
      </p>
    </div>
  );
};

export default Display;
