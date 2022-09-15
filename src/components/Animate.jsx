import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import About from '../pages/About'
import Template from '../pages/Templates'
import Questions from '../pages/Questions'
import Contact from '../components/Contact'

import {AnimatePresence} from 'framer-motion'


const Animate = () => {

    const location = useLocation();
  return (

    <AnimatePresence>
            <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/template' element={<Template />} />
          <Route exact path='/questions' element={<Questions />} />
          <Route exact path='#section' element={<Contact />} />
        </Routes>
    </AnimatePresence>
    
  )
}

export default Animate