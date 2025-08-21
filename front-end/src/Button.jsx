import React, { useState } from 'react';
import './Button.css'


 
const Button = () => {
  const [count, setCount] = useState(0);

  let message = "";
  if (count === 10) {
    message = "Can't increment more than 10";
  } else if (count <= 0) {
    message = "Can't decrement less than 0";
  }

  return (
    <div>
      <button 
        onClick={() => setCount(count == 10? count : count+1)}
      >
        Increment Here
      </button>

      <button 
        onClick={() => setCount(count <= 0? count: count-1)}
      >
        Decrement Here
      </button>

      <h1>{count}</h1>
      <h2>{message}</h2>
    </div>
  );
};

export default Button;
