import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    render() {
        // console.log(this);
        console.log(this.props);
        return (
            <div>Song List</div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    // change state to props
    return {
        songsFromMSTP: state.songsFromCR
    };
}

export default connect(mapStateToProps)(SongList);