import React from 'react';
import '../assets/header.css';

function Header() {
  return (
    <nav className='header'>
        <ul>
            <li>Home</li>
            <li>Address list</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Header;