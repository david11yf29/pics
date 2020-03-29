import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos',{
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 334312b1ace7d83eecd4d66794f99e6a73ffa6ed58b3c0eb23d4620f8c332ad7'
            }
        })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;