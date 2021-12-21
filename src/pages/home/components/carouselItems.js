import React from 'react';

import './carouselItems.css';

function carouselItems(props) {

    return (
        
            <div className="carouselItems_container">
                <img src={props.icon} alt="benefits icones" />
                <span className='carouselItems_title'>{props.title}</span>
                <span className='carouselItems_resume'>{props.resume}</span>
            </div>
       

    );
}

export default carouselItems;