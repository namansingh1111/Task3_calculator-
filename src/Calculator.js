import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const operators = ['+', '-', '*', '/'];

  const handleClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const calculate = () => {
    try {
      // Use eval() to perform the calculation (not recommended for production apps)
      // In a real app, consider using a safer math library or parsing the expression yourself.
      setDisplay(eval(display));
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('');
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{display}</div>
      <div className="calculator-buttons">
        <div className="calculator-row">
          {operators.map((operator) => (
            <button key={operator} onClick={() => handleClick(operator)}>
              {operator}
            </button>
          ))}
        </div>
        <div className="calculator-row">
          {[7, 8, 9].map((number) => (
            <button key={number} onClick={() => handleClick(number)}>
              {number}
            </button>
          ))}
        </div>
        <div className="calculator-row">
          {[4, 5, 6].map((number) => (
            <button key={number} onClick={() => handleClick(number)}>
              {number}
            </button>
          ))}
        </div>
        <div className="calculator-row">
          {[1, 2, 3].map((number) => (
            <button key={number} onClick={() => handleClick(number)}>
              {number}
            </button>
          ))}
        </div>
        <div className="calculator-row">
          <button onClick={clear}>C</button>
          <button onClick={() => handleClick(0)}>0</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
