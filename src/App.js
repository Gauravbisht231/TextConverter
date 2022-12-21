import './App.css';
// import About from './comonents/About';
import Navbar from './comonents/Navbar';
import Textform from './comonents/Textform';
import React, {useState} from 'react';
import Alert from './comonents/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
const togglemode=()=>{
  if(mode==='light'){
  setMode('dark') 
  document.body.style.backgroundColor='gray';
  document.title='TextConverter- DarkMode'
  }
  else {
    setMode('light')
    document.body.style.backgroundColor='white';
    document.title='TextConverter Home'
  }
}
  return (
    <>
      {/* importing navbar from other file, so that main file, i.e. App.js is always  clean */}
        {/* <Router> */}
      <Navbar title="TextConverter" company="About us" mode={mode} togglemode={togglemode} />
      {/* <Navbar/>   for default prop of Navbar */}
      <Alert/>
      <div className="container my-3 " >
            {/* <Routes> */}
        <Textform heading="Type Here!" mode ={mode} />
        {/* <About /> */}
              {/* <Route exact path="/" element={<Textform/>}/>
              <Route exact path="/about" element={<About/>}/> */}
            {/* </Routes> */}
      </div>
  {/* </Router> */}

    </>
  );
}

export default App;
