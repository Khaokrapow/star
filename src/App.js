import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [pattern, setPattern] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //กด submit
  const handleSubmit = () => {
    const number = parseInt(inputValue);
    let result = '';

    // เพิ่มดาว
    for (let i = 1; i <= number; i++) {
      result += '*'.repeat(i) + '\n';
    }
    // ลดดาว
    for (let i = number - 1; i >= 1; i--) {
      result += '*'.repeat(i) + '\n';
    }

    setPattern(result);
  };

  return (
    <div className="Input">
      <div>
        <label>Input : </label>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Submit</button>
        <pre>{pattern}</pre>
      </div>
    </div>
  );
}

export default App;
