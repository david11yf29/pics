import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {

    state = {
        resource: []
    }

    async componentDidMount() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

        // console.log(response.data);

        this.setState({ resource: response.data });
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.resource !== this.props.resource) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

            this.setState({ resource: response.data });
        }
        // console.log(this.props);

       
    }

    render() {
        return (
            <div>{this.state.resource.length}</div>
        )
    }
}

export default ResourceList;