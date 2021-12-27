import {React, useRef} from 'react';

import CarouselItems from './carouselItems';

import IconCard from '../../../assets/icone-cartao.svg';
import IconMoney from '../../../assets/icone-money.svg';
import IconHours from '../../../assets/icone-24horas.svg';

import './carousel.css';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


function Carousel() {

    const carousel_items = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();

        carousel_items.current.scrollLeft -= carousel_items.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();

        carousel_items.current.scrollLeft += carousel_items.current.offsetWidth;
    }


    return (
        <div className='carousel_container'>
            <FaChevronLeft   className='FaChevron'  onClick={handleLeftClick}/>
            <div>
                <div className='carousel_items' ref={carousel_items}>
                    <CarouselItems icon={IconCard} title="Conta e cartão gratuitos" resume="Ter uma conta não custa nada. A conta é digital e sem tarifa de manutenção" />
                    <CarouselItems icon={IconMoney} title="Taxa zero para investir" resume="Invista em renda fixa e variável sem taxa de corretagem e custódia" />
                    <CarouselItems icon={IconHours} title="Atendimento 24h" resume="Ter uma conta não custa nada. A conta é digital e sem tarifa de manutenção" />


                    <CarouselItems icon={IconCard} title="Conta e cartão gratuitos" resume="Ter uma conta não custa nada. A conta é digital e sem tarifa de manutenção" />
                    <CarouselItems icon={IconMoney} title="Taxa zero para investir" resume="Invista em renda fixa e variável sem taxa de corretagem e custódia" />
                    <CarouselItems icon={IconHours} title="Atendimento 24h" resume="Ter uma conta não custa nada. A conta é digital e sem tarifa de manutenção" />
                   

                </div>
            </div>
            <FaChevronRight className='FaChevron'  onClick={handleRightClick} />
        </div>
    );
}


export default Carousel;