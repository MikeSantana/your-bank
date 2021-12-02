import React from 'react';
import './styled.css';

const UIButton = (props) => {
    return (
        <a className="UIButton" href={props.router}  style={props.styled}>{props.children}</a>
    );
}

export default UIButton;