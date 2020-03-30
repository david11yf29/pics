import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({songFromMSTP}) => {
    // console.log(songFromMSTP);
    if (!songFromMSTP) {
        return <div>Please select a song</div>
    }
    return (
        <div>
            <h3>Detail for:</h3>
            <p>
                Title: {songFromMSTP.title}
                <br />
                Duration: {songFromMSTP.duration}
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
         songFromMSTP: state.selectedSongFromCR
    }
}

export default connect(mapStateToProps)(SongDetail);