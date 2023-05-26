import { useState } from 'react';
import './App.css';

function App() {
  // let count = 0
  // count - переменная
  // setCount - функция, которая меняет переменную count
  const [count, setCount] = useState(0)

  function handleClickMinus() {
    setCount(count - 1) 
  }
  function handleClickPlus() {
    setCount(count + 1) 
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
        <div>
        <button onClick={handleClickMinus}>-</button> {"  "}
        <span>{count}</span> {"  "}
        <button onClick={handleClickPlus}>+</button>
        </div>
        <input value={0}/>
      </header>
    </div>
  );
}

export default App;