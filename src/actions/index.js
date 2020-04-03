import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // dispatch a function
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().postsReducerFromCR, 'userId'));
    console.log(userIds);
    userIds.forEach(id => dispatch(fetchUser(id)));
}

export const fetchPosts = () => {
    return async function(dispatch, getState) {
        const response = await jsonPlaceholder.get('/posts');
        
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    }
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USERS',
        payload: response.data
    })
}

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({
//         type: 'FETCH_USERS',
//         payload: response.data
//     })
// })