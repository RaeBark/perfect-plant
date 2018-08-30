import React from 'react';
import {
  Link
} from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
  let nav = props.user ? 
    <div className="NavBar">
      <Link to='/' className='NavBar-link NavBar-Title' ><img src="http://www.barborenovables.es/images/plant12.png" alt="logo" style={{height: 40, width: 40}}></img>Perfect Plant</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>welcome, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/saved_plants' className='NavBar-link'>saved plants</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/cart' className='NavBar-link'>cart</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout} >log out</Link>
    </div>
    :
    <div className="NavBar">

      <Link to='/' className='NavBar-link NavBar-Title' ><img src="http://www.barborenovables.es/images/plant12.png" alt="logo" style={{height: 40, width: 40}}></img>Perfect Plant</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/login' className='NavBar-link'>log in</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>sign up</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;