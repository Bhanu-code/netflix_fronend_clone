import React from 'react'
import Home from './components/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.scss'
import Header from './components/Header.jsx'

function App() {
  return (
    <div className="App">
    <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
