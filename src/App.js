import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  return (
    
     
        
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>{count}</h1>

      <button onClick={()=>{setCount(count + 1)}}>tambah 1</button>
      <button onClick={()=>{setCount(count - 1 )}}>kurang 1</button>

      </header>
      
    
    </div>
  );
}

export default App;
