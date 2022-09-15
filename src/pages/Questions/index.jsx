import React from 'react'
import {useState} from 'react'
import {motion} from 'framer-motion'
import './styles.css'
import {data} from '../../config/questions'

const Questions = () => {

  const [items, setItems] = useState(data)

  const filterItem = (categItem)=>{
      const updatedItems = data.filter((curr)=>{
          return curr.category === categItem
      })
      setItems(updatedItems)
  }


  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className='boxx'
    >
      <h1 className='heading'>Interview Questions</h1>
      <hr />
      <div className='tabs'>
        <button className='btn' onClick={()=>filterItem('web')}>Web</button>
        <button className='btn' onClick={()=>filterItem('java')}>Java</button>
        <button className='btn' onClick={()=>filterItem('python')}>Python</button>
        <button className='btn' onClick={()=>filterItem('dsa')}>DSA</button>
        <button className='btn' onClick={()=> setItems(data)}>All</button>
      </div>

      <div className='data'>
        {items.map((elem)=>{
          const {id,question,category,answer} = elem
          return(
            <motion.div className='qna'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
    >
                <div className='q'>{elem.question}</div>
                <div className='a'>{elem.answer}</div>
            </motion.div>
            
          )
        })}
      </div>
      </motion.div>
  )
}

export default Questions