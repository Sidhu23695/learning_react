import React from 'react';

const TextBox = (props) => {
    return (
        <div className="textBox">
            <label>{props.labelName} : </label>
            <input type="text" id={props.id} name={props.name} placeholder={props.placeHolder}/>
        </div>
    )
}

export default TextBox;