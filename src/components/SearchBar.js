import React from 'react';

class SeachBar extends React.Component {
    constructor() {
        super();
        this.state ={
            term: "Seach something dupe"
        }
    }

    onInputChange = (event) => {
        console.log(this);
        this.setState({ term: event.target.value })
    }

    render() {
        // console.log(this);
        return (
            <div className="search-bar ui segment">
                <div className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SeachBar;