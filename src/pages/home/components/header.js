import React from 'react';
import Woman from '../../../assets/woman.png';

import './header.css';

const Header = () => {
    return (
        <div className="header_background">
            <div className="header_container">
                <div className="container_text">
                    <span className="text_one">Com YouBank Faça seu dinheiro render mais</span>
                    <br />
                    <span className="text_two">Use seu dinheiro a hora que quiser e sem perder o lucro. O dinheiro rende 150% do CDI.</span>
                </div>
                <img src={Woman} alt="woman" />
            </div>
        </div>

    );
}

export default Header;