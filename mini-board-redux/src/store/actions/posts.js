import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const addPost = (data) => {
  return dispatch => {
    axios.post('posts.json', data)
      .then((res) => {
        dispatch(fetchPosts());
      })
      .catch((err) => {
        console.log(err);
      })
  }
};

export const deletePost = (id) => {
  return dispatch => {
    axios.delete('posts/' + id + '.json')
      .then(res => {
        dispatch(deletePostSuccess(id));
      })
      .catch(err => {
        console.log(err);
      })
  }
};

export const deletePostSuccess = (id) => {
  return {
    type: actionTypes.DELETE_POST_SUCCESS,
    id: id
  }
};

export const fetchPosts = () => {
  return dispatch => {
    axios('posts.json')
      .then(res => {
        dispatch(fetchPostsSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const fetchPostsSuccess = (posts) => {
  const arr = [];
  const keys = Object.keys(posts);
  for (const key in posts) {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        arr.push({
          ...posts[key],
          id: keys[i]
        })
      }
    }
  }
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    posts: arr
  }
};