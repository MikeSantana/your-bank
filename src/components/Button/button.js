import React from 'react';
import './styled.css';

const UIButton = (props) => {
    return (
        <button className="UIButton" type="submit">{props.children}</button>
    );
}

export default UIButton;