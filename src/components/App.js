import React from 'react';
import youtube from '../apis/youtube';
import SeachBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyAjz4M12fvRfplFfKfiXhXfo6SsUEy2Wgk';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: [],
            selectedVideo: null
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

    onVideoSelect = (video) => {
        // console.log('From the App!', video.snippet)
        this.setState({ selectedVideo: video })
    }

    render() {
        // console.log(this);
        return (
            <div className="ui container">
                <SeachBar onFormSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    }
}

export default App;