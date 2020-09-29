import React, { Component } from 'react';

import classes from './Posts.module.css';
import Post from '../../components/Post/Post';
import { connect } from 'react-redux';

class Posts extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'title',
        body: 'content'
      },
      {
        id: 2,
        title: 'title',
        body: 'content'
      },
      {
        id: 3,
        title: 'title',
        body: 'content'
  
      }
    ]
  };

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => { 
  //     return response.json()
  //   })
  //   .then(res => {
  //     this.setState({ posts: res })
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // };

  render () {
    const posts = this.props.postList.map(post => {
      return <Post
        key={post.id}
        title={post.title}
        body={post.body}
        click={() => this.props.onDelete(post.id)}></Post>
    });
    return <main className={classes.Posts}>{posts}</main>;
  }
}

const mapStateToProps = state => {
  return {
    postList: state.posts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (id) => dispatch({ type: 'DELETE', id: id })
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);