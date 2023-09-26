import React, { useState } from 'react';
import InputForm from './InputForm';
import OutputDisplay from './OutputDisplay';

function App() {
  const [result, setResult] = useState(null);

  const handleMultiply = async (num1, num2) => {
    const response = await fetch('/multiply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ num1, num2 }),
    });

    if (response.ok) {
      const data = await response.json();
      setResult(data.result);
    } else {
      console.error('Error multiplying numbers');
    }
  };

  return (
    <div className="App">
      {/* <h1>Multiplication Program</h1> */}
      <InputForm onMultiply={handleMultiply} />
      <OutputDisplay result={result} />
    </div>
  );
}

export default App;
