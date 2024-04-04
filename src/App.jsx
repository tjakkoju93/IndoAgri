import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Project from './Pages/Project/Project'
import News from './Pages/News/News'
import Shop from './Pages/Shop/Shop'
import Contact from './Pages/Contact/Contact'
import AgriServices from './Pages/AgriServices/AgriServices';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Services" element={<Services />}/>
          <Route path="/Project" element={<Project />}/>
          <Route path="/News" element={<News />}/>
          <Route path="/Shop" element={<Shop />}/>
          <Route path="/Contact" element={<Contact />}/>  
          <Route path='/AgriServices' element={<AgriServices/>}></Route>        
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
    </>
  )
}

export default App
