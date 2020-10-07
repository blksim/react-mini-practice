import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const addPost = (data) => {
  return dispatch => {
    axios.post('posts.json', data)
      .then((response) => {
        dispatch(addPostSuccess(response.data.name, data));
      })
      .catch((error) => {
        dispatch(addPostFail());
      })
  }
};

export const addPostSuccess = (key, data) => {
  console.log(key, data);
  return {
    type: actionTypes.ADD_POST_SUCCESS,
    post: {
      id: key,
      title: data.title,
      body: data.body
    }
  }
};

export const addPostFail = () => {
  return {
    type: actionTypes.ADD_POST_FAIL
  }
}

export const deletePost = (id) => {
  return dispatch => {
    axios.delete('posts/' + id, { mode: 'cors'})
      .then(res => {
      })
      .catch(err => {
        console.log(err);
      })
  }
};

export const fetchPosts = () => {
  return dispatch => {
    axios('posts.json')
    .then(res => {
      dispatch(fetchPostsSuccess(res.data));
      })
    .catch(err => {
      dispatch(fetchPostsFail());
    })
  }
}

export const fetchPostsSuccess = (posts) => {
  const arr = [];
  const keys = Object.keys(posts);
  console.log(keys);
  for (const key in posts) {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        arr.push({ ...posts[key], id: keys[i] })
      } 
    }
  }
  console.log(arr);
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    posts: arr
  }
};

export const fetchPostsFail = (posts) => {
  return {
    type: actionTypes.FETCH_POSTS_FAIL
  }
}