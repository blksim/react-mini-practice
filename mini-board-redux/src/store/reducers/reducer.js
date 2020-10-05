import * as actionTypes from '../actions/actionTypes';

const initialState = {
  posts : [
    {
      id: 1,
      title: 'first post',
      body: 'content'
    }
  ]
};

const addPost = (state, action) => {
  const deletedArray = state.posts.filter((post, index) => post.id !== action.id)
  return {
    ...state,
    posts: deletedArray
  }
}

const deletePost = (state, action) => {
  const arr = [...state.posts];
  arr.push({
    id: Math.floor(Math.random()*10000),
    title: action.title,
    body: action.body
  });
  return {
    ...state,
    posts: arr
  }
}

const fetchPosts = (state, action) => {
  return {
    ...state
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST: return addPost(state, action);
    case actionTypes.DELETE_POST: return deletePost(state, action);
    case actionTypes.FETCH_POSTS: return fetchPosts(state, action);
    default: return state;
  }
}

export default reducer;