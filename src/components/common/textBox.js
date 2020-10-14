import React from 'react';

const TextBox = (props) => {
    return (
        <div className="textBox">
            <label>{props.labelName} : </label>
            <input type="text" id={props.id} name={props.name} value={props.textValue} placeholder={props.placeHolder} onChange={props.change}/>
        </div>
    )
}

export default TextBox;