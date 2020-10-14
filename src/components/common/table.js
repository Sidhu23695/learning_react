import React from 'react';
import Button from './button';

function renderTableData(userDetails) {
    if (userDetails.length > 0) {
        return userDetails.map((student, index) => {
        const { 
            userId, 
            firstName, 
            lastName, 
            age, 
            addressLine, 
            addressLine2, 
            city,
            district,
            state,
            country,
            pinCode 
        } = student //destructuring
        return (
            <tr key={index}>
                <td>{userId}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
                <td>{addressLine}</td>
                <td>{addressLine2}</td>
                <td>{city}</td>
                <td>{district}</td>
                <td>{state}</td>
                <td>{country}</td>
                <td>{pinCode}</td>
                <td><Button buttonName="Edit"/></td>
                <td><Button buttonName="Delete"/></td>
            </tr>
        )
        })
    }
}

function renderTableHeader(userDetails) {
    if (userDetails.length > 0) {
        let header = Object.keys(userDetails[0]);
        header.shift();
        header.push("edit", "delete");
        return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
        })
    }
 }

const Table = (props) => {
    return(
        <table border="2">
            <thead>
                <tr>
                    {renderTableHeader(props.userDetails)}
                </tr>
            </thead>
            <tbody>
                {renderTableData(props.userDetails)}
            </tbody>
        </table>
    )
}

export default Table;