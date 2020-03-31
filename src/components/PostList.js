import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsFC();
    }

    render() {
        return <div>Post List</div>
    }
}

export default connect(null, {
    fetchPostsFromC: fetchPosts
})(PostList);