import * as actionTypes from '../actions/actionTypes';

const initialState = {
  posts : [
    // {
    //   id: 1,
    //   title: 'first post',
    //   body: 'content'
    // }
  ]
};

const addPost = (state, action) => {
  const arr = [...state.posts];
  arr.push({
    id: action.id,
    title: action.title,
    body: action.body
  });
  return {
    ...state,
    posts: arr
  }
}

const deletePost = (state, action) => {
  const deletedArray = state.posts.filter((post, index) => post.id !== action.id)
  return {
    ...state,
    posts: deletedArray
  }
};

const fetchPostsStart = (state, action) => {
  return {
    loading: true
  }
}

const fetchPosts = (state, action) => {
  return { 
    ...state,
    loading: true
  }
};

const fetchPostsSuccess = (state, action) => {
  console.log(action.posts);
  return {
    ...state,
    posts: action.posts,
    loading: false
  }
};

const fetchPostsFail = (state, action) => {
  return {
    ...state,
    loading: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST: return addPost(state, action);
    case actionTypes.DELETE_POST: return deletePost(state, action);
    case actionTypes.FETCH_POSTS: return fetchPosts(state, action);
    case actionTypes.FETCH_POSTS: return fetchPostsStart(state, action);
    case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state, action);
    case actionTypes.FETCH_POSTS_FAIL: return fetchPostsFail(state, action);
    default: return state;
  }
}

export default reducer;