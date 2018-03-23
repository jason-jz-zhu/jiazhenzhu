import React, { Component } from 'react';
import './Blog.css';
import Abstract from '../../components/Abstract/Abstract';
import Post from '../../components/Post/Post';

class Blog extends Component {
  render() {
    const rightHTML = (
      <div>
        KOWLEDGE
      </div>
    );

    const blogAbstractData = {
      left: 'Blog',
      right: rightHTML,
    };

    const backgroundColor = {
      backgroundColor: 'rgba(245,248,250, 1)',
    };

    return (
      <div>
        <Abstract data={blogAbstractData} color={backgroundColor} />
        <Post />
      </div>
    );
  }
}

export default Blog;
