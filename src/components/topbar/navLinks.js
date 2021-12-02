import React from 'react';
import './navLinks.css';



import { ReactComponent as LoginIcon } from '../../assets/icone-login.svg';

import UIButton from '../Button/button';

const NavLinks = () => {
    return (
        <div className="topbar_nav">
            <div className="asignIn_topbar">
                <div className="Login_topbar">
                    <LoginIcon />
                    <a href="/login">Fazer login</a>
                </div>
                <div className="btn_topbar">
                    <UIButton router={"/register"} styled={{ height: '40px', padding: '3px 10px 3px 10px', fontSize: '1.3rem' }}> Cadastre-se </UIButton>
                </div>

            </div>


            <ul>
                <li ><a className="first_list" href="http://localhost:3000/">Sobre nós</a></li>
                <li><a href="http://localhost:3000/">Para Você</a></li>
                <li><a href="http://localhost:3000/">Para sua Empresa</a></li>
                <li><a href="http://localhost:3000/">Suporte</a></li>
            </ul>
        </div>

    );
}

export default NavLinks;