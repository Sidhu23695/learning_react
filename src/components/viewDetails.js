import React from 'react';
import Table from './common/table';

const ViewDetails = (props) => {
    return(
        <Table userDetails={props.userDetails}/>
    )
}

export default ViewDetails;