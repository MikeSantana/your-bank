import React from 'react';
import { useStat } from 'react';

import './topbar.css';

import Logo from '../../assets/logotipo-svg.png';
import { ReactComponent as LoginIcon } from '../../assets/icone-login.svg';

import UIButton from '../Button/button';



const Topbar = () => {



    return (
        <div className="topbar_container">
            <nav className="topbar_nav">
                <div className="topbar_navigation">
                    <img src={Logo} alt="Logo" />;
                    <ul>
                        <li ><a className="first_list" href="http://localhost:3000/">Sobre nós</a></li>
                        <li><a href="http://localhost:3000/">Para Você</a></li>
                        <li><a href="http://localhost:3000/">Para sua Empresa</a></li>
                        <li><a href="http://localhost:3000/">Suporte</a></li>
                    </ul>
                </div>

                <div className="asignIn_topbar">
                    <div className="Login_topbar">
                        <LoginIcon />
                        <a href="http://localhost:3000/">Fazer login</a>
                    </div>
                    <UIButton className="btn_topbar" styled={{ height: '40px', padding: '3px 10px 3px 10px', fontSize: '1.3rem'}}> Cadastre-se </UIButton>
                </div>
            </nav>
        </div>
    );
}

export default Topbar;