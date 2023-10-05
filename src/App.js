import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [fullname, setFullname] = useState('');
  
  const handleButtonClick = (buttonValue) => {
    if (buttonValue === '=') {
      try {
        const result = eval(equation);
        setDisplay(result.toString());
        setEquation('');
      } catch (error) {
        setDisplay('Error');
        setEquation('');
      }
    } else if (buttonValue === 'C') {
      setDisplay('0');
      setEquation('');
    } else {
      setDisplay((prevDisplay) =>
        prevDisplay === '0' ? buttonValue : prevDisplay + buttonValue
      );
      setEquation((prevEquation) => prevEquation + buttonValue);
    }
  };

  const handleSurnameClick = () => {
    setDisplay('Aldwin S. Española'); 
  };
  
  return (
    
    <div className='CalcContainer'>
      <h3>Calculator of Aldwin S. Española - IT3A</h3>
      <div className='CalcDisplay'>{display}</div>
      <div className='ButtonContainer'>
        <button  onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className='button-plus'onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className='button-minus'onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className='button-multiply'onClick={() => handleButtonClick('*')}>*</button>
        <button className='button-clear'onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button className='button-equal'onClick={() => handleButtonClick('=')}>=</button>
        <button className='button-divide'onClick={() => handleButtonClick('/')}>&#247;</button>
      </div>
      <div className='SurnameButtonContainer'>
        <button onClick={handleSurnameClick}>ESPAÑOLA</button>

      </div>
    </div>
  );
}

export default App;
