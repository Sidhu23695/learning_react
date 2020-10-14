import React from 'react';
import { Button, Table } from '../index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUsers } from '../../actions/index';

class ViewDetails extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return(
            <div className="leftDiv">
                <Link to="/insert">
                    <Button buttonName="Add New"/>
                </Link>
                <br/><br/>
                <Table userDetails={this.props.userDetails}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers()),
});

const mapStateToProps = (state) => ({
    userDetails: state.users,
});

export default connect(mapStateToProps,mapDispatchToProps)(ViewDetails);