import React from 'react';

const Button = (props) => {
    return(
    <button onClick={props.clickHandler}>{props.buttonName}</button>
    )
}

export default Button;