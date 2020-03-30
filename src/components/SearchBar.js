import React from 'react';

class SeachBar extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            term: "Search something dupe"
        }
    }

    onInputChange = (event) => {
        // console.log(this);
        this.setState({ term: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        // TODO: Make sure we call
        this.props.onFormSubmit(this.state.term);
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