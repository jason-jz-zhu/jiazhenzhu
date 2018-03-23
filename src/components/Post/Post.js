import React, { Component } from 'react';
import './Post.css';
import Logo from '../D3/Logo/Logo';

class Post extends Component {
  render() {
    return (
      <article className="post">
        <header>
          <h2 className="post-title">
            <a href="">How can we do the data pipeline based on python?</a>
          </h2>
        </header>
        <section className="post-abstract">
          <p>
            Which programming style we should to use when implement a
             data pipeline: functional programming or object oriented programming?
            <a href="">»</a>
          </p>
        </section>
        <footer className="post-footer">
          <Logo />
          <a href="">Jiazhen</a>
          <time className="post-date" dateTime="2018-03-22">22 March 2018</time>
        </footer>
      </article>
    );
  }
}

export default Post;
