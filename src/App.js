import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const handleSurnameButtonClick = () => {
    
    setInput('ESPAÑOLA');
  };

  return (
    <div className="calculator">
      <h3>Calculator of Española, Aldwin, S. -IT3A</h3>
      <div className="display">
        <div className="output">{result || input || '0'}</div>
        <div className="input">{input || '0'}</div>
      </div>
      <div className="container-button">
        <div className="button">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button className='button-plus' onClick={() => handleButtonClick('+')} >+</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button className='button-minus' onClick={() => handleButtonClick('-')} >-</button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button className='button-multiply' onClick={() => handleButtonClick('*')} >*</button>
          <button className='button-clear' onClick={() => handleButtonClick('C')}>C</button>
          <button onClick={() => handleButtonClick('0')} >0</button>
          <button className='button-equal' onClick={() => handleButtonClick('=')} >=</button>
          <button className='button-divide' onClick={() => handleButtonClick('/')} >÷</button>
        </div>
      </div>

      <div className="SurnameButtonContainer">
        <div className="SurnameButton">
          <button onClick={() => handleSurnameButtonClick('ESPAÑOLA')}>ESPAÑOLA</button>
        </div>
      </div>
    </div>
  );
}

export default App;
