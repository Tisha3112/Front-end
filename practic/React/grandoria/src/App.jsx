import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './website/pages/Home';

function App() {
     useEffect(() => {
      if (window.AOS) {
        window.AOS.init();
      }
    }, []);
  return (
    <BrowserRouter>
    <div>
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route> */}
      </Routes>
      <Home />
    </div>
    </BrowserRouter>
  )
}


export default App