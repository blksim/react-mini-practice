import * as actionTypes from './actionTypes';

export const addPost = (title, body) => {
  return dispatch => {
    fetch('https://redux-posts-1.firebaseio.com/posts.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        type: actionTypes.ADD_POST,
        title: title,
        body: body
      })
    })
  }
};

export const deletePost = (id) => {
  return {
    type: actionTypes.DELETE_POST,
    id: id
  };
};

export const fetchPosts = () => {
  return dispatch => {
    fetch('https://redux-posts-1.firebaseio.com/posts.json')
      .then(res => {
        res.json();
      })
      .then(json => {
        const fetchedPosts = [];
        fetchedPosts.push(json);
        this.setState({ posts: fetchedPosts });
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const fetchPostsSuccess = (posts) => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    postList: posts
  }
}