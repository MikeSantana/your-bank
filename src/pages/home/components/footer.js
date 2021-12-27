import React from 'react';

import FooterLogo from './assets/logotipo.png';
import IconFacebook from './assets/icone-facebook.svg';
import IconInstagram from './assets/icone-instagram.svg';
import IconTwitter from './assets/icone-twitter.png';

import './footer.css';

const Footer = () => {

    return (
        <footer>

            <div className="Icones_footer">
                <img src={FooterLogo}></img>
                <div className="social_Icones">
                    <a href="#"> <img src={IconFacebook}></img> </a>
                    <a href="#"> <img src={IconInstagram}></img> </a>
                    <a href="#"> <img src={IconTwitter}></img> </a>
                </div>
                
            </div>

            <div className="links_footer">
                <span>Institucional</span>
                <a href="#">Quem somos</a>
                <a href="#">Como funciona</a>
                <a href="#">Asessoria YouBank</a>
                <a href="#">Seja YouBank</a>
                <a href="#">Blog</a>
            </div>

            <div className="links_footer">
                <span>Produtos</span>
                <a href="#">Pix</a>
                <a href="#">Renda Fixa</a>
                <a href="#">Tesouro Direto</a>
                <a href="#">Fundo de Investimentos</a>
                <a href="#">Previdencia Privada</a>
            </div>

            <div className="links_footer">
                <span>Análises</span>
                <a href="#">Análises de ações</a>
                <a href="#">Área do Trader</a>
                <a href="#">Economia e Política</a>
                <br></br>
                <span>Suporte</span>
                <a href="#">SAC</a>
                <a href="#">Ouvidoria</a>
            </div>

        </footer>
    )
}

export default Footer; 