import React from  'react';
import TextBox from './common/textBox';
import Button from './common/button';


const InserDetails = (props) => {
    return(
        <>
            <TextBox labelName="First Name" name="firstName" id="firstName" placeHolder="First Name"/>
            <br/>
            <TextBox labelName="Last Name" name="lastName" id="lastName" placeHolder="Last Name"/>
            <br/>
            <Button buttonName="Submit"/>
        </>
    )
}

export default InserDetails;