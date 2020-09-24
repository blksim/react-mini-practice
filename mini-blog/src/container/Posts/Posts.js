import React, { Component } from 'react';

import classes from './Posts.module.css';
import Post from '../../components/Post/Post';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        this.setState({posts: posts});
      })
      .catch(err => console.log(err));
  }
  
  render () {
    const posts = this.state.posts.map((post => {
      return <Post title={post.title} content={post.body} key={post.id} />
    }))
    return <section className={classes.Posts }>
      {posts}
    </section>;
  };
}

export default Posts;