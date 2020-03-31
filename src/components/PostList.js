import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsFromC();
    }

    renderList() {
        return this.props.postsFromMSTP.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    };

    render() {
        // console.log(this.props.postsFromMSTP);
        return <div className="ui relaxed divided list">{this.renderList()}</div>
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