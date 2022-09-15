import React,{useState} from 'react';
import BlogItem from './BlogItem';
import './styles.css';
import {blogList} from '../../../config/data'
import {motion} from 'framer-motion'
import Chip from '../../common/Chip';
const BlogList = () => {
  console.log(blogList)
  const [items, setItems] = useState(blogList)
  const filterItem = (categItem)=>{
    const updatedItems = blogList.filter((curr)=>{
        return curr.cat === categItem
    })
    setItems(updatedItems)
}

  return (
    <div>
      <div className='tabs'>
      <button className='btn' onClick={()=> setItems(blogList)}>All</button>
        <button className='btn' onClick={()=>filterItem('job')}>Job Notifications</button>
        <button className='btn' onClick={()=>filterItem('intern')}>Internships</button>
        <button className='btn'onClick={()=>filterItem('start')}>StartUps</button>
        
      </div>
            <div className='blogList-wrap'>
                  {items.map((elem)=>{
                    const {id,title,category,cat,description,lastDate,cover,link} = elem
                    return(
                      <motion.div className='blogItem-wrap'
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      >
                <img className='blogItem-cover' src={cover} alt='cover' />
                <Chip label={category} />
                <h3>{title}</h3>
                <p className='blogItem-desc'>{description}</p>
                <footer>
                  <div className='blogItem-author'>
                    <div>
                      <p>{lastDate}</p>
                    </div>
                  </div>
                  <a className='apply' href={link} target="blank">
                    Apply
                  </a>
                </footer>
        </motion.div>
              )
            })}
            </div>
    </div>
    
  );
};

export default BlogList;