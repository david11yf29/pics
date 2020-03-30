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

    onFormSubmit = (event) => {
        event.preventDefault();

        // TODO: Make sure we call
        // callback from parent
    }

    render() {
        // console.log(this);
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SeachBar;