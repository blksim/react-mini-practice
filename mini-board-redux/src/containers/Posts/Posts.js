import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Posts.module.css';
import Post from '../../components/Post/Post';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import * as postActions from '../../store/actions/index';

class Posts extends Component {
  state = {
    isValid: false
  };

  componentDidMount() {
    this.props.onLoad();
  };

  titleChangeHandler = event => { 
    this.setState({
      ...this.state,
      title: event.target.value,
      isValid: this.validate(event.target.value)
    });
   }
  
  bodyChangeHandler = event => {
    this.setState({
      ...this.state,
      body: event.target.value,
      isValid: this.validate(event.target.value)
    });
  }

  validate(value) {
    return value ? true : false;
  }

  render () {
    let posts = null;
    if (!this.props.postList) {
      posts = <p>No post in here!</p>
    } else {
      posts = this.props.postList.map(post => {
        return <Post
          key={post.id}
          title={post.title}
          body={post.body}
          click={() => this.props.onDelete(post.id)}></Post>
      });
    }

    return (<main className={classes.Posts}>
      <Input 
        inputType="text" 
        change={(event) => this.titleChangeHandler(event)} />
      <Input 
        inputType="textarea" 
        change={(event) => this.bodyChangeHandler(event)} />
      <Button 
        value="Add a new post"
        click={() => this.props.onAdd(this.state.title, this.state.body)} 
        disabled={!this.state.isValid}/>
      {posts}
      </main>);
  }
}

const mapStateToProps = state => {
  return {
    postList: state.posts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (id) => dispatch(postActions.deletePost(id)),
    onAdd: (title, body) => dispatch(postActions.addPost({title: title, body: body})),
    onLoad: () => dispatch(postActions.fetchPosts())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);