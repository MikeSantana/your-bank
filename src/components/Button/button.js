import React from 'react';
import './styled.css';

const UIButton = (props) => {
    return (
        <button className="UIButton" type="submit" style={props.styled}>{props.children}</button>
    );
}

export default UIButton;