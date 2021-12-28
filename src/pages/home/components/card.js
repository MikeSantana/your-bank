import React from 'react';

import IconVisa from './assets/icone-visa.svg';

import './card.css'

function Card() {

    return (
        <div className="Container_card">
            <div className="text_card">
                <span className="title_text" >Solicite Agora seu cartão</span>
                <span className="paragraph_text">É totalmente gratis e sem anuidade, livre de taxas e burocracias</span>
            </div>
            <div className="card_card">
                <span className="title_text card_title" >YouBank</span>
                <span className="title_text card_password">****     **** ****  ****</span>
                <div className="card_cliente">
                    <span className="card_name">Seu nome aqui</span>
                    <span className="card_name">05/2021</span>
                    <img src={IconVisa}></img>
                </div>
            </div>
        </div>
    );
}

export default Card;