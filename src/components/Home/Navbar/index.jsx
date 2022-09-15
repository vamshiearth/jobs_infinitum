import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import {Link as Lib} from 'react-scroll'
import Contact from '../../Contact'

const Navbar = () => {
return (
	<>
	<ul className='navbar'>
  	<li><Link className='link' to='/'>
        <span>Home</span>
      </Link>
	</li>
  	<li><Link className='link' to='/template'>
         <span>CV Templates</span>
      </Link>
	</li>
  	<li><Link className='link' to='/questions'>
         <span>Interview Q/A</span>
      </Link>
	</li>
	<li><Link className='link' to={'/about'}>
        <span>About us</span>
      </Link>
	</li>
	<li><Lib className='link' to='contact' smooth={true} duration={1000}>
        <span>Contact Us</span>
      </Lib>
	</li>  
</ul>




	
	
	</>
);
};

export default Navbar;
