import React from 'react';

const Navbar = () => {
  return <nav className='navbar'>
      <div className='navContainer'>
          <div className='logo'>Die-Sposal</div>
        <ul className='navList'>
            <li className='navListItem'>
                <a className='navLink' href='#info'>Info</a>
            </li>
            <li className='navListItem'>
                <a className='navLink' href='#tests'>Testamonials</a>
            </li>
            <li className='navListItem'>
                <a className='navLink' href='#cleanse'>Cleanse</a>
            </li >
        </ul>
      </div>
  </nav>
};

export default Navbar;
