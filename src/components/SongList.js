import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

    renderList() {
        return this.props.songsFromMSTP.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            onClick={() => this.props.selectsongFromConnect(song)}
                            className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }

    render() {
        // console.log(this);
        // console.log(this.props);
        return (
            <div className="ui divided list">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    // change state to props
    return {
        songsFromMSTP: state.songsFromCR
    };
}

export default connect(mapStateToProps, {
    selectsongFromConnect: selectSong
})(SongList);