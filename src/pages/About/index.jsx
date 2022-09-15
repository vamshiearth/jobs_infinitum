import React from 'react'
import {motion} from 'framer-motion'
import './styles.css'
const Mock = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="about"
    >

      <h1>This is our story...</h1>
      <p>
      Hello, Dear friends, Welcome to jobsinfinitum also, we are happy you want to know something more about our site. Our first wish is to provide you with a better solution to get job notifications easily.<br></br> There are millions of websites created every day, also, there is much fake content spread on the internet
    So, Our main goal is to provide you with 100% Original and Safe content that provides you a great and better experience on the world wide web.<br></br>
    We jobsInfinitum are taking a step forward to make the process simple to gather information for jobs, internships, and startups.<br></br> We are mainly focused on the job notifications, internships available, startups, and cv templates category so, our main priority is to search for new content and present it in front of you to learn something new. We mainly focus on our service so and improving it regularly to provide a better user experience to all users and strive to help our users grab valuable information.
    
     If you want to associate with us do not hesitate to contact us through email at jobsinfinitum@gmail.com
     <br></br>
             If you want to contact us then you can email us at <strong>jobsinfinitum@gmail.com </strong>also, you can contact us by our contact us form.<br></br> Thanks for visiting our About Us Page
      </p>
      
  
      </motion.div>
  )
}

export default Mock