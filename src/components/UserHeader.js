import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

class UserHeader extends React.Component {

    componentDidMount() {
        this.props.fetchUserFromC(this.props.userId);
    }

    render() {
        // console.log(this.props);
        // const user = this.props.usersFromMSTP.find((user) => {
        //     return user.id === this.props.userId
        // })

        const { userFromMSTP } = this.props;

        if (!userFromMSTP) {
            return null
        }

        return (
            <div className="header">{userFromMSTP.name}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userFromMSTP: state.usersReducerFromCR.find(user => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps, {
    fetchUserFromC: fetchUser
})(UserHeader);