import React from  'react';
import { TextBox, Button } from '../index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveUser } from '../../actions/index';

class InserDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userDetails: {
                firstName: '',
                lastName: '',
                age: '',
                addressLine: '',
                addressLine2: '',
                city: '',
                district: '',
                state: '',
                country: '',
                pinCode: '',
            }
        }
    }

    handleChange(evt) {
        const userDetails = this.state.userDetails;
        userDetails[evt.target.name] = evt.target.value;
        this.setState({
            userDetails: userDetails
        });
    }

    submitValue() {
        const userDetails = this.state.userDetails;
        const isValid = this.checkValuesIsNull(userDetails);
        if (isValid) {
            this.props.saveUser(userDetails);
        }
    }

    checkValuesIsNull(userDetails) {
        let valuesArray = Object.values(userDetails); 
        let isValid = true;
        for (let value of valuesArray) {
            if(!value) {
                isValid = false;
            } 
        }
        return isValid;
    }

    render() {
        return(
            <div className="centerDiv">
                <TextBox labelName="First Name" textValue={this.state.userDetails.firstName} name="firstName" id="firstName" change={this.handleChange.bind(this)} placeHolder="First Name"/>
                <br/>
                <TextBox labelName="Last Name" name="lastName" id="lastName" placeHolder="Last Name" textValue={this.state.lastName} change={this.handleChange.bind(this)}/>
                <br/>
                <TextBox labelName="Age" name="age" id="age" placeHolder="Age" textValue={this.state.age} change={this.handleChange.bind(this)}/>
                <br/>
                <TextBox labelName="Address Line" name="addressLine" id="addressLine" placeHolder="Address Line" textValue={this.state.addressLine} change={this.handleChange.bind(this)}/>
                <br/>
                <TextBox labelName="Address Line 2" name="addressLine2" id="addressLine2" placeHolder="Address Line 2" textValue={this.state.addressLine2} change={this.handleChange.bind(this)}/>
                <br/>
                <TextBox labelName="City" name="city" id="city" placeHolder="City" textValue={this.state.city} change={this.handleChange.bind(this)}/>
                <br/>
                <TextBox labelName="District" name="district" id="district" placeHolder="District" textValue={this.state.district} change={this.handleChange.bind(this)}/>
                <br/>
                <TextBox labelName="State" name="state" id="state" placeHolder="State" textValue={this.state.state} change={this.handleChange.bind(this)}/>
                <br/>
                <TextBox labelName="Country" name="country" id="country" placeHolder="Country" textValue={this.state.country} change={this.handleChange.bind(this)}/>
                <br/>
                <TextBox labelName="Pin Code" name="pinCode" id="pinCode" placeHolder="Pin Code" textValue={this.state.pinCode} change={this.handleChange.bind(this)}/>
                <br/>
                <Button buttonName="Submit"  clickHandler={this.submitValue.bind(this)}/>&nbsp;&nbsp;
                <Link to="/home">
                    <Button buttonName="Back"/>
                </Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    saveUser: (userDetails) => dispatch(saveUser(userDetails)),
});

const mapStateToProps = (state) => ({
    userSaved: state.userSaved,
});

export default  connect(mapStateToProps,mapDispatchToProps)(InserDetails);