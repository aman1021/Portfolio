import React from 'react'
import { useState } from 'react'
import './Header.css'
import Web from './web/Web'
import Mobile from './mobile/Mobile'

function Header() {
    const[isOpen, setIsOpen] = useState(false);
    const mobileMenuHandler = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className='header'>
        <div className='logo'>
            Aman Chandel
        </div>

        <div className='menu'>
            <div className='web-menu'> <Web/> </div>

            <div className='mobile-menu'>
                <div onClick={mobileMenuHandler}>
                <i class="fi fi-rr-apps menu-icon"></i>
                </div>

                {isOpen&&<Mobile isOpen={isOpen}  setIsOpen={setIsOpen}/>}
            </div>

        </div>
    </div>
  )
}

export default Header