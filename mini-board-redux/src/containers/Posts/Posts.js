import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Posts.module.css';
import Post from '../../components/Post/Post';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Posts extends Component {
  state = {
    title: '',
    body: '',
    isValid: false
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
    const posts = this.props.postList.map(post => {
      return <Post
        key={post.id}
        title={post.title}
        body={post.body}
        click={() => this.props.onDelete(post.id)}></Post>
    });

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
    onDelete: (id) => dispatch({ type: 'DELETE', id: id }),
    onAdd: (title, body) => dispatch({ type: 'ADD', title: title, body: body }),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);