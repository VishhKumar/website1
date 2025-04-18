import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';

import './styles/App.scss';
import './styles/header.scss';
import Home from './components/Home';
import "./styles/home.scss";

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes> 
    </Router>
  )
}

export default App
