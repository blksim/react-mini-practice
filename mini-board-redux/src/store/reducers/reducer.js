import * as actionTypes from '../actions/actionTypes';

const initialState = {
  posts : []
};

const addPost = (state, action) => {
  return {
    loading: true
  }
};

const deletePost = (state, action) => {
  const deletedArray = state.posts.filter((post, index) => post.id !== action.id);
  return {
    ...state,
    posts: deletedArray
  }
}

const fetchPosts = (state, action) => {
  return {
    ...state,
    posts: action.posts
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST: return addPost(state, action);
    case actionTypes.DELETE_POST_SUCCESS: return deletePost(state, action);
    case actionTypes.FETCH_POSTS_SUCCESS: return fetchPosts(state, action);
    default: return state;
  }
}

export default reducer;