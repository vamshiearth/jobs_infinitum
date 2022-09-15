import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='home-header'>
    
    <h1>
      <span>“</span> <Link className='link' to='/'>
         Jobs Infinitum
      </Link> <span>”</span>
    </h1>
    <p>
      Awesome place to make oneself and<br /> productive through
      daily updates.
    </p>
  </header>
);

export default Header;