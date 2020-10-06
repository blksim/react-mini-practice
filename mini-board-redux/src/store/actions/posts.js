import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const addPostStart = () => {
  return {
    type: actionTypes.ADD_POST_START
  }
};

export const addPost = (title, body) => {
  const post = JSON.stringify({
    id: Math.floor(Math.random()*10000),
    title: title,
    body: body
  })
  return dispatch => {
    axios.post('posts.json', post)
  }
};

export const addPostSuccess = () => {
  return {
    type: actionTypes.ADD_POST_SUCCESS
  }
};

export const addPostFail = () => {
  return {
    type: actionTypes.ADD_POST_FAIL
  }
};

export const deletePostStart = () => {
  return {
    type: actionTypes.DELETE_POST_START
  }
}

export const deletePost = (id) => {
  return dispatch => {
    dispatch(deletePostStart());
    axios.delete('posts.json', id)
      .then(res => {
        dispatch(deletePostSuccess());
      })
      .catch(err => {
        dispatch(deletePostFail());
      })
  }
};

export const deletePostSuccess = () => {
  return {
    type: actionTypes.DELETE_POST_SUCCESS
  }
}

export const deletePostFail = () => {
  return {
    type: actionTypes.DELETE_POST_FAIL
  }
}

export const fetchPostsStart = () => {
  return {
    type: actionTypes.FETCH_POSTS_START,
  }
}

export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostsStart());
    axios('posts.json')
      .then(res => {
        console.log(res);
        dispatch(fetchPostsSuccess(res.data))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const fetchPostsSuccess = (posts) => {
  const arr = [];
  for (const key in posts) {
    arr.push(posts[key]);    
  }
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    posts: arr
  }
}

export const fetchPostsFail = (err) => {
  return {
    type: actionTypes.FETCH_POSTS_FAIL
  }
}