import React, {useRef} from 'react';
import './App.css';

function App() { 
  const inputRef = useRef(null)

  function handleInput(){
    console.warn('functin call');
    inputRef.current.value = '1000';
    inputRef.current.focus();
    inputRef.current.style.color ='red';

  }

  return (
    <div className="App">
      <h1> useRef in React </h1>
      <input type='text' ref = {inputRef}/> 
      <button onClick={handleInput}> Handle Input </button>
    </div>
  );
}

export default App;
