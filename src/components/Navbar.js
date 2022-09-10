import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

  const [ openMenu, setOpenMenu ] = useState( false )

  // To toggle the active link
  const { pathname } = useLocation()


  // @COMPONENT MARKUP   
  return (
    <header>
        <nav className='navbar'>
            {/* LOGO */}
            <a href='/' className='logo'>
                <img src='/res/official/LogoIcon.svg' alt='Error Sensei Logo'/>
                <span>Error Sensei</span>
            </a>

            {/* NAV COMPONENTS */}
            <div className='nav-components'>   
                {/* NAV LINKS */}
                <a href='/#' 
                className={pathname === '/#' ? 'nav-link active' : 'nav-link'}>
                    Categories
                </a>
                
                {/* SUBSCRIBE */}
                <button id='subscribe' className='btn-prm'>
                    Subscribe
                </button>
            </div>

            {/* MENU BUTTON */}
            <button id='menu' className='icon-btn'
                onClick={ () => setOpenMenu( true ) }>
                <img src='/res/buttons/menu.svg' alt='Menu Icon' />
            </button>
        </nav>

        {/* MOB NAVBAR */}
        <nav className={ openMenu ? 'navbar mob-navbar' : 'navbar mob-navbar hide' }>
            <div className='mob-navbar-header'>
                {/* LOGO */}
                <a href='/' className='logo'>
                    <img src='/res/official/LogoIcon.svg' alt='Error Sensei Logo'/>
                    <span>Error Sensei</span>
                </a>

                {/* CLOSE ICON */}
                <button id='close' className='icon-btn'
                    onClick={ () => setOpenMenu( false ) }>
                    <img src='/res/buttons/close.svg' alt='Menu Icon' />
                </button>
            </div>

            {/* MOB NAVBAR LINKS */}
            <a href='/' 
            className={ pathname === '/' ? 'mob-navbar-link active' 
            : 'mob-navbar-link' }>
                Home
            </a>
            <a href='/categories' 
            className={ pathname === '/categories' ? 'mob-navbar-link active' 
            : 'mob-navbar-link' }>
                Categories
            </a>

            {/* SUBSCRIBE */}
            <button className='btn-prm'>
                Subscribe
            </button>
        </nav>
    </header>
  )
}

export default Navbar