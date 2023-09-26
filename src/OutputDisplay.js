import React from 'react';

const OutputDisplay = ({ result }) => {
  return <div>{result !== null && `Result: ${result}`}</div>;
};

export default OutputDisplay;
