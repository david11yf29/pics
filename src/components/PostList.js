import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsFromC();
    }

    render() {
        console.log(this.props.postsFromMSTP);
        return <div>Post List</div>
    }
}

const mapStateToProps = (state) => {
    return {
        postsFromMSTP: state.postsReducerFromCR
    }
}

export default connect(mapStateToProps, {
    fetchPostsFromC: fetchPosts
})(PostList);