import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

class UserHeader extends React.Component {

    componentDidMount() {
        this.props.fetchUserFromC(this.props.userId);
    }

    render() {

        const user = this.props.usersFromMSTP.find((user) => {
            return user.id === this.props.userId
        })

        if (!user) {
            return null
        }

        return (
            <div>{user.name}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersFromMSTP: state.usersReducerFromCR
    }
}

export default connect(mapStateToProps, {
    fetchUserFromC: fetchUser
})(UserHeader);