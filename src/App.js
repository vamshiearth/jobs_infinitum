import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/Home/Header'
import Navbar from './components/Home/Navbar'
import AnimatedRoutes from './components/Animate'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Header />
        <Navbar />
        <AnimatedRoutes />
        <Contact />
      </Router>
    </div>
  )
}

export default App
