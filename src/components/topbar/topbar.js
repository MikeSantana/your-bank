import React from 'react';

import Navigation from './navigation';
import MobileNavigation from './mobileNavigation';

import './navLinks.css';
import './topbar.css';
import Logo from '../../assets/logotipo-svg.png';




const Topbar = () => {
    return (
        <div className="topbar_container">
                <img src={Logo} alt="Logo" />
                 <MobileNavigation />
                <Navigation />
        </div>
    );
}

export default Topbar;