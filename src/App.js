//import logo from './logo.svg';
//import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import React, { useState } from 'react'
//import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
return(
  <>
<Navbar mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
 <TextForm heading="Enter the text"  mode={mode}/>
{/*<About/>*/}
</div>
</>
);
}

export default App;
