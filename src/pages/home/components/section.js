import React from 'react';

import Background from '../../../components/background/background'; //

import '../../../components/text/text.css';

const Section = () => {
    return (
        <div>
            <Background>
                <div id="asingIn_wrapper">
                    <span className="asignIn_title font">Com a YouBank</span>
                    <br></br>
                    <span className="asignIn_subtitle  font">Você tem taxa zero para investir</span>
                    <br></br>
                    <span className="asignIn_paragraph font">Invista em renda fixa e variável sem taxa de corretagem e custódia</span>
                </div>

            </Background>
        </div>
    );
}


export default Section;