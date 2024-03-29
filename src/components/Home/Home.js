import React, { useState } from 'react';
import './style.css';

const Home = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState(null);
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    if (displayValue === '0') {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handlePercentageClick = () => {
    try {
      const result = parseFloat(displayValue) / 100;
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleOperatorClick = (operatorValue) => {
    setOperator(operatorValue);
    setPrevValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqualClick = () => {
    const prev = parseFloat(prevValue);
    const current = parseFloat(displayValue);
    let result = null;
    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        break;
    }

    setOperator(null);
    setPrevValue(null);
    setDisplayValue(result.toString());

    // Add the calculation to history
    setHistory([...history, `${prev} ${operator} ${current} = ${result}`]);
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setOperator(null);
    setPrevValue(null);
  };

  const handleClearHistoryClick = () => {
    setHistory([]);
  };

  return (
    <div className="calculator">
      <div className='title'><h1>Calculator</h1></div>
      <div className="display">{prevValue} {operator} {displayValue}</div>
      <div className="buttons">
        <button className="button number-button" onClick={() => handleButtonClick('7')}>
          7
        </button>
        <button className="button number-button" onClick={() => handleButtonClick('8')}>
          8
        </button>
        <button className="button number-button" onClick={() => handleButtonClick('9')}>
          9
        </button>
        <button className="button f operator-button" onClick={() => handleOperatorClick('+')}>
          +
        </button>
        <button className="button number-button" onClick={() => handleButtonClick('4')}>
          4
        </button>
        <button className="button number-button" onClick={() => handleButtonClick('5')}>
          5
        </button>
        <button className="button number-button" onClick={() => handleButtonClick('6')}>
          6
        </button>
        <button className="button f operator-button" onClick={() => handleOperatorClick('-')}>
          -
        </button>
        <button className="button number-button" onClick={() => handleButtonClick('1')}>
          1
        </button>
        <button className="button number-button" onClick={() => handleButtonClick('2')}>
          2
        </button>
        <button className="button number-button" onClick={() => handleButtonClick('3')}>
          3
        </button>
        <button className="button f operator-button" onClick={() => handleOperatorClick('*')}>
          *
        </button>
        
        <button className="button number-button" onClick={() => handleButtonClick('00')}>
          00
        </button>
        <button className="button number-button" onClick={() => handleButtonClick('0')}>
          0
        </button>
       
        <button className="button decimal-button" onClick={() => handleDecimalClick()}>
          .
        </button>
        <button className="button f operator-button" onClick={() => handleOperatorClick('/')}>
          /
        </button>
        <button className="button clear-button" onClick={() => handleClearClick()}>
          C
        </button>
        <button className="button equal-button" onClick={() => handleEqualClick()}>
          =   
        </button>
        <button className="button clear-history-button" onClick={() => handleClearHistoryClick()}>
          Clear History
        </button>
        <button className="button f operator-button" onClick={() => handlePercentageClick()}>
            %
        </button>
  </div>
  <div className="history">
    <h2>History:</h2>
    {history.map((calculation, index) => (
      <p key={index}>{calculation}</p>
    ))}
  </div>
  <div className="copyright">
          Copyright (c) 2023 Soheel Gadad
        </div>
 </div>
);
};
export default Home;