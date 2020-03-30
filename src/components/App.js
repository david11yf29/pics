import React from 'react';
import youtube from '../apis/youtube';
import SeachBar from './SearchBar';

const KEY = 'AIzaSyAjz4M12fvRfplFfKfiXhXfo6SsUEy2Wgk';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: []
        }
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                // type: 'video',
                maxResults: 5,
                key: KEY
            }
        })
        this.setState({ videos: response.data.items });
    }

    render() {
        // console.log(this);
        return (
            <div className="ui container">
                <SeachBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos
            </div>
        )
    }
}

export default App;