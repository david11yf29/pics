import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

class UserHeader extends React.Component {

    componentDidMount() {
        this.props.fetchUserFromC(this.props.userId);
    }

    render() {
        return (
            <div>User Header</div>
        )
    }
}

export default connect(null, {
    fetchUserFromC: fetchUser
})(UserHeader);