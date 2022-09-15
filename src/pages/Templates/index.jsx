import React from 'react'
import './styles.css'
import {motion} from 'framer-motion'
const Template = () => {
  return (
    <motion.div className='container'
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <div className='list'>
      <div className='item'>
        <img src="https://marketplace.canva.com/EAFEQLyOjns/1/0/1131w/canva-black-white-minimalist-cv-resume-kQoDC3H3Em8.jpg" alt="" />
      </div>
      <div className='item'>
        <img src="https://marketplace.canva.com/EAFEQLyOjns/1/0/1131w/canva-black-white-minimalist-cv-resume-kQoDC3H3Em8.jpg" alt="" />
      </div>
      <div className='item'>
        <img src="https://marketplace.canva.com/EAFEQLyOjns/1/0/1131w/canva-black-white-minimalist-cv-resume-kQoDC3H3Em8.jpg" alt="" />
      </div>
     
    

      </div>
      
      
    </motion.div>
  )
}

export default Template