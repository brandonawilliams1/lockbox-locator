import React from 'react';
import '../assets/header.css';

function Header() {
  return (
    <nav className='header'>
      <form action='/'>
        <label htmlFor='Lbox__search'>Address Lookup</label>
        <input type="text" id="address__input" name="search" placeholder='Enter Address' />
        <input type="submit" value="Submit" />
      </form>
    </nav>
  )
}

export default Header;