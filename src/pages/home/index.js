import React from 'react';
import './styled.css';

import Topbar from '../../components/topbar/topbar';
import Woman from '../../assets/woman.png';


function Home() {
    return (
        <div className="Home">
            <Topbar></Topbar>
            <div className="Header_Container">
                <div className="Header_wrapper">
                    <div className="Header_text">
                        <span className="Header_title">Com YouBank Faça seu dinheiro render mais</span>
                        <br/>
                        <span className="Header_paragraph">Use seu dinheiro a hora que quiser e sem perder o lucro. O dinheiro rende 150% do CDI.</span>
                    </div>
                    <img src={Woman} alt="woman" />
                </div>
            </div>
            <div className="Home_Container2">

            </div>
        </div>
    );
}

export default Home;