import React from  'react';
import { TextBox, Button } from '../index';
import { Link } from 'react-router-dom';

const InserDetails = (props) => {
    return(
        <div className="centerDiv">
            <TextBox labelName="First Name" name="firstName" id="firstName" placeHolder="First Name"/>
            <br/>
            <TextBox labelName="Last Name" name="lastName" id="lastName" placeHolder="Last Name"/>
            <br/>
            <Button buttonName="Submit"/>&nbsp;&nbsp;
            <Link to="/home">
                <Button buttonName="Back"/>
            </Link>
        </div>
    )
}

export default InserDetails;