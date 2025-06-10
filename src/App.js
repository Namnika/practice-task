
import { useEffect, useState } from 'react';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
// import './App.css';

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

  // make good ui

  let namnikaAge  = 25
  


  return (
      <div>
    <div className="App flex items-center flex-col justify-center w-full my-24 gap-4">
      {/* Task 1: Build a Counter App */}

      <h2 className='text-[25px] font-semibold'>Task 1: Build a Counter App</h2>


      <h4 className='font-medium text-lg divide-x-4 divide-gray-400'>Counter: <span className='text-2xl px-4'>{count}</span></h4>
      <div className='grid grid-cols-3 gap-4'>
       
        <button className='bg-[#f8fafc] border-solid border-2 border-sky-500 rounded-lg py-1.5 px-3 font-medium shadow-lg text-sky-500' onClick={() => setCount(count - 1)}>decrement</button>
        <button className='bg-[#f8fafc] border-solid border-2 border-sky-500 rounded-lg py-1.5 px-3 font-medium shadow-lg text-sky-500' onClick={() => setCount(0)}>reset</button>
      </div>

      {/* Task 2: Build a Timer App */}
      <h2 className='text-[25px] font-semibold'>Task 2: Build a Timer App</h2>

      <h3 className='font-medium text-lg'>Timer: <span className='text-2xl px-4'>{sec}</span> sec</h3>

      {/* Task 3: Show/Hide Text */}
      <h2 className='text-[25px] font-semibold'>Task 3: Show/Hide Text</h2>

      {show && <h3 className='font-medium text-lg underline'>This text can be hide or show</h3>}

      <button className='bg-[#f8fafc] border-solid border-2 border-sky-500 rounded-lg py-1.5 px-3 font-medium shadow-lg text-sky-500 ' onClick={() => setShow(!show)}>show/hide</button>

    </div>
  
      <Page1 count={count} setCount={setCount} />
      <Page2  age={namnikaAge +5}/>
    </div>
  
  );
}

export default App;
