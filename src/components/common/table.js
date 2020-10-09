import React from 'react';
import Button from './button';

function renderTableData(userDetails) {
    return userDetails.map((student, index) => {
       const { firstName, age } = student //destructuring
       return (
          <tr key={index}>
             <td>{firstName}</td>
             <td>{age}</td>
             <td><Button buttonName="Edit"/></td>
             <td><Button buttonName="Delete"/></td>
          </tr>
       )
    })
}

function renderTableHeader(userDetails) {
    let header = Object.keys(userDetails[0]);
    header.push("edit", "delete");
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
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