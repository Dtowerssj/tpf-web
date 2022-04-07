import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo2.png'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={logo} className='logo' alt="logo" />
        </div>
        <div className='navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#academia'>Academia</a></p>
          <p><a href='#señales'>Señales</a></p>
          <p><a href='#bots'>Bots</a></p>
          <p><a href='#about'>¿Quiénes somos?</a></p>
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Iniciar sesión</p>
        <button type='button'>Registrarse</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => {setToggleMenu(false)}} /> 
          : <RiMenu3Line color='#fff' size={27} onClick={() => {setToggleMenu(true)}} />
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale up center'>
            <div className='navbar-menu_container-links'>
              <p><a href='#home'>Home</a></p>
              <p><a href='#academia'>Academia</a></p>
              <p><a href='#señales'>Señales</a></p>
              <p><a href='#bots'>Bots</a></p>
              <p><a href='#about'>¿Quiénes somos?</a></p>
            </div>
            <div className='navbar-menu_container-links-sign'>
              <p>Iniciar sesión</p>
              <button type='button'>Registrarse</button>  
            </div>
          </div>
        )

        }
      </div> 
    </div>
  )
}

export default Navbar