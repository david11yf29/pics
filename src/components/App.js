import React from 'react';
import youtube from '../apis/youtube';
import SeachBar from './SearchBar';

const KEY = 'AIzaSyAjz4M12fvRfplFfKfiXhXfo6SsUEy2Wgk';

class App extends React.Component {

    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                // type: 'video',
                maxResults: 5,
                key: KEY
            }
        })
    }

    render() {
        // console.log(this);
        return (
            <div className="ui container">
                <SeachBar onFormSubmit={this.onTermSubmit} />
            </div>
        )
    }
}

export default App;