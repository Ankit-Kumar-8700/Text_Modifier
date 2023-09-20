import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useState} from 'react'

function App() {
  const [mode,setMode]=useState("White");
  const toggleMode=()=>{
    if(mode==="White"){
      setMode("Black");
      document.body.style.backgroundColor="#0e0e0f";
    } else {
      setMode("White");
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar heading="Text Formatting" mode={mode} toggleMode={toggleMode}/>}>
          <Route index element={<Home mode={mode}/>} />
          <Route path="about" element={<About mode={mode}/>} />
          <Route path="contact" element={<Contact mode={mode}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
