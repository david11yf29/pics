import React from 'react';
import SeachBar from './SearchBar';

class App extends React.Component {
    render() {
        console.log(this);
        return (
            <div>
                <SeachBar />
            </div>
        )
    }
}

export default App;