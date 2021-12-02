import React from 'react';
import NavLinks from './navLinks';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdClose} from'react-icons/md';
import {useState} from 'react';

import './topbar.css';

const MobileNavigation = () => {

    const [open, setOpen ] = useState(false);

    const hamburgerIcon = <GiHamburgerMenu className="hamburgerMenu"   onClick={() => setOpen(!open)}  size='40px' color="white" />

    const closerIcon = <MdClose className="hamburgerMenu"   onClick={() => setOpen(!open)}  size='40px' color="white" />
    
    return (
        <div className="mobileNavigation">
            
            {open ? closerIcon : hamburgerIcon}
            {open && <NavLinks />}  
        </div>
    );
}

export default MobileNavigation; 
