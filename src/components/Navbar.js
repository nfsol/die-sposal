import React from 'react';
import D20 from "./D20";

const Navbar = () => {
  return <nav className='navbar'>
      <div className='navContainer'>
          
          <div className='logo'>Die<D20 />Sposal</div>
        <ul className='navList'>
            <li className='navListItem'>
                <a className='navLink' href='#info'>Info</a>
            </li>
            <li className='navListItem'>
                <a className='navLink' href='#reviews'>Reviews</a>
            </li>
            <li className='navListItem'>
                <a className='navLink' href='#cleanse'>Cleanse Me</a>
            </li >
        </ul>
      </div>
  </nav>
};

export default Navbar;
