import React from 'react';

import Background from '../../../components/background/background'; //
import Carousel from './carousel';
import Card from './card';

import '../../../components/text/text.css';
import './section.css';


const Section = () => {


    return (
        <div>
            
            <Background >
                <div className="section_container">
                    <div id="asingIn_wrapper">
                        <span className="asignIn_title font">Nós somos a Youbank</span>
                        <br></br>
                        <span className="asignIn_subtitle  font">Um banco 100% digital, sem taxas e com rendimento maior do que a poupança!</span>
                        <br></br>
                        <span className="asignIn_paragraph font">Aqui você faz saques e transferências gratuitas e ilimitados, tem segurança ao investir o seu dinheiro e ainda ganha mimos exclusivos.</span>
                    </div>
                    <Carousel>
                    </Carousel>
                    <Card>
                    </Card>
                </div>
            </Background>
        </div>
    );
}


export default Section;