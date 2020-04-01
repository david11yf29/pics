import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    postsReducerFromCR: postsReducer,
    usersReducerFromCR: usersReducer
});