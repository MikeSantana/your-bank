import React from 'react';


import './background.css'

function Background({children}) {
    return (
        <div className="background_img">
            {children}
        </div>
    );
}

export default Background;