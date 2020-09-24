import React, { Component } from 'react';

import classes from './About.module.css';
import Profile from '../../components/Profile/Profile';
import Description from '../../components/Description/Description';

class About extends Component {
  state = {
    src: './duck.jpg',
    title: '',
    content: ''
  };

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        const desc = { title: json.title, content: json.body };
        this.setState(desc);
      })
  };

  render () {
    return (
      <section className={classes.About}>
        <Profile src={this.state.src}/>
        <Description title={this.state.title} content={this.state.content}/>
      </section>
    )
  };
}

export default About;