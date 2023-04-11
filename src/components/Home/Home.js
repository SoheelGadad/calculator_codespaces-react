import React, { useState } from 'react';
import './style.css';

const App = () => {
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
        setDisplayValue(prev + current);
        break;
      case '-':
        setDisplayValue(prev - current);
        break;
      case '*':
        setDisplayValue(prev * current);
        break;
      case '/':
        setDisplayValue(prev / current);
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
        <button className="button operator-button" onClick={() => handleOperatorClick('+')}>
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
        <button className="button operator-button" onClick={() => handleOperatorClick('-')}>
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
        <button className="button operator-button" onClick={() => handleOperatorClick('*')}>
          *
        </button>
        <button className="button clear-button" onClick={() => handleClearClick()}>
          C
        </button>
        <button className="button number-button" onClick={() => handleButtonClick('0')}>
          0
        </button>
        <button className="button decimal-button" onClick={() => handleDecimalClick()}>
          .
        </button>
        <button className="button operator-button" onClick={() => handleOperatorClick('/')}>
          /
        </button>
        <button className="button equal-button" onClick={() => handleEqualClick()}>
          =
        </button></div>
        {/* History */}
        <div className="history">
        <h3>History</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="button clear-history-button" onClick={() => handleClearHistoryClick()}>
          Clear History
        </button>
      </div>
    </div>
  );
};

export default App;

