import React, { FC } from 'react';
import cx from 'classnames';

import './Key.scss';

export enum KeyType {
  Operand,
  Number,
  Special
}

type Props = JSX.IntrinsicElements['button'] & {
  keyType: KeyType;
  column?: number;
};

const Key: FC<Props> = ({ keyType, column = 1, className, children, onClick }) => {
  const classNames = cx(
    'Key',
    {
      'Key-operand': keyType === KeyType.Operand,
      'Key-number': keyType === KeyType.Number,
      'Key-special': keyType === KeyType.Special
    },
    `Column-${column}`
  );

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Key;
