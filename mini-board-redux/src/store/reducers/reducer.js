import * as actionTypes from '../actions/actionTypes';

const initialState = {
  posts : []
};

const addPost = (state, action) => {
  const arr = [...state.posts];
  arr.push({
    id: action.id,
    title: action.title,
    body: action.body
  });
  console.log(arr);
  return {
    ...state,
    posts: arr
  }
}

const addPostSuccess = (state, action) => {
  return {
    loading: false
  }
};

const addPostFail = (state, action) => {
  return {
    loading: false
  }
};

const deletePost = (state, action) => {
  const deletedArray = state.posts.filter((post, index) => post.id !== action.id)
  return {
    ...state,
    posts: deletedArray
  }
};

const fetchPosts = (state, action) => {
  return {
    ...state,
    posts: action.posts,
    loading: true
  }
};

const fetchPostsSuccess = (state, action) => {
  return {
    loading: false,
    posts: action.posts
  }
}

const fetchPostsFail = (state, action) => {
  return {
    loading: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST: return addPost(state, action);
    case actionTypes.ADD_POST_SUCCESS: return addPostSuccess(state, action);
    case actionTypes.ADD_POST_FAIL: return addPostFail(state, action);
    case actionTypes.DELETE_POST: return deletePost(state, action);
    case actionTypes.FETCH_POSTS: return fetchPosts(state, action);
    case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state, action);
    case actionTypes.FETCH_POSTS_FAIL: return fetchPostsFail(state, action);
    default: return state;
  }
}

export default reducer;