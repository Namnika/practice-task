
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [sec, setSec] = useState(0)

  const [show, setShow] = useState(true); // show/hide text


  useEffect(() => {
    const timer = setInterval(() => {
      setSec((s) => s + 1)
    }, 1000)

    return () => clearInterval(timer); // cleanup timer 

  }, [])




  return (
    <div className="App">
      {/* Task 1: Build a Counter App */}
      <h2>Task 1: Build a Counter App</h2>

      <h4>Counter: {count}</h4>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>

      {/* Task 2: Build a Timer App */}
      <h2>Task 2: Build a Timer App</h2>

      <h3>Timer: {sec} sec</h3>

      {/* Task 3: Show/Hide Text */}
      <h2>Task 3: Show/Hide Text</h2>

      {show && <h3>this text can be hide or show</h3>}

      <button onClick={() => setShow(!show)}>show/hide</button>

    </div>
  );
}

export default App;
