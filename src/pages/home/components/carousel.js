import React from 'react';

import CarouselItems from './carouselItems';

import IconCard from '../../../assets/icone-cartao.svg';
import IconMoney from '../../../assets/icone-money.svg';
import IconHours from '../../../assets/icone-24horas.svg';

import './carousel.css';

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';


function Carousel() {

    return (
        <div className='carousel_container'>
            <FaChevronLeft  className='FaChevron'/>
            <div>
            <div className='carousel_items'>
                <CarouselItems icon={IconCard} title="Conta e cartão gratuitos" resume="Ter uma conta não custa nada. A conta é digital e sem tarifa de manutenção" />
                <CarouselItems icon={IconMoney} title="Taxa zero para investir" resume="Invista em renda fixa e variável sem taxa de corretagem e custódia" />
                <CarouselItems icon={IconHours} title="Atendimento 24h" resume="Ter uma conta não custa nada. A conta é digital e sem tarifa de manutenção" />
            </div>
            </div>
           <FaChevronRight className='FaChevron' />
        </div>
    );
}


export default Carousel;