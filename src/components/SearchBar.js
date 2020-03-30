import React from 'react';

class SeachBar extends React.Component {
    render() {
        console.log(this);
        return (
            <div className="search-bar ui segment">
                <div className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SeachBar;