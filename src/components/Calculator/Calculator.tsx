import React, { FC, useState } from 'react';
import cx from 'classnames';

import './Calculator.scss';
import Key from '../Key';
import { KeyType } from '../Key/Key';
import Display from '../Display';
import { CalculatorOperations } from '../../utils/Utils';

type Props = JSX.IntrinsicElements['div'] & {
};

const Calculator: FC<Props> = ({ className, onClick }) => {

  const [value, setValue] = useState<null | number>(null);
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<null | string>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clearAll = () => {
    setValue(null);
    setDisplayValue('0');
    setOperator(null);
    setWaitingForOperand(false);
  }

  const clearDisplay = () => {
    setDisplayValue('0');
  }

  // const clearLastChar = () => {
  //   setDisplayValue(displayValue.substring(0, displayValue.length - 1) || '0');
  // }

  const inputDot = () => {
    // if it doesn't contain any dot
    if (!(/\./).test(displayValue)) {
      setDisplayValue(displayValue + '.');
      setWaitingForOperand(false);
    }
  }

  const inputDigit = (digit: number) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    }
    else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit)
    }
  }

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(displayValue);

    if (value == null) {
      setValue(inputValue);
    }
    else if (operator) {
      const currentValue = value || 0;
      const newValue = CalculatorOperations(operator, currentValue, inputValue);
      setValue(newValue);
      setDisplayValue(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  }

  const inputPercent = () => {
    const currentValue = parseFloat(displayValue)

    if (currentValue === 0)
      return

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
    const newValue = currentValue / 100

    setDisplayValue(String(newValue.toFixed(fixedDigits.length + 2)));
  }

  const toggleSign = () => {
    setDisplayValue(String(parseFloat(displayValue) * -1));
  }

  const classNames = cx('Calculator', className);

  const isDisplayZero = displayValue !== '0';

  return (
    <div className={classNames} onClick={onClick}>
      <div className="display">
        <Display value={displayValue} />
      </div>
      <div className="keypad">
        <Key keyType={KeyType.Special} onClick={() => isDisplayZero ? clearDisplay() : clearAll()}>{isDisplayZero ? 'C' : 'AC'}</Key>
        <Key keyType={KeyType.Special} onClick={() => toggleSign()}>+/-</Key>
        <Key keyType={KeyType.Special} onClick={() => inputPercent()}>%</Key>
        <Key keyType={KeyType.Operand} onClick={() => performOperation('/')}>÷</Key>
        <Key keyType={KeyType.Number} onClick={() => inputDigit(7)}>7</Key>
        <Key keyType={KeyType.Number} onClick={() => inputDigit(8)}>8</Key>
        <Key keyType={KeyType.Number} onClick={() => inputDigit(9)}>9</Key>
        <Key keyType={KeyType.Operand} onClick={() => performOperation('*')}>x</Key>
        <Key keyType={KeyType.Number} onClick={() => inputDigit(4)}>4</Key>
        <Key keyType={KeyType.Number} onClick={() => inputDigit(5)}>5</Key>
        <Key keyType={KeyType.Number} onClick={() => inputDigit(6)}>6</Key>
        <Key keyType={KeyType.Operand} onClick={() => performOperation('-')}>-</Key>
        <Key keyType={KeyType.Number} onClick={() => inputDigit(1)}>1</Key>
        <Key keyType={KeyType.Number} onClick={() => inputDigit(2)}>2</Key>
        <Key keyType={KeyType.Number} onClick={() => inputDigit(3)}>3</Key>
        <Key keyType={KeyType.Operand} onClick={() => performOperation('+')}>+</Key>
        <Key keyType={KeyType.Number} column={2} onClick={() => inputDigit(0)}>0</Key>
        <Key keyType={KeyType.Number} onClick={() => inputDot()}>.</Key>
        <Key keyType={KeyType.Operand} onClick={() => performOperation('=')}>=</Key>
      </div>
    </div >
  );
};

export default Calculator;
