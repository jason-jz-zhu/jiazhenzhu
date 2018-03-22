import React, { Component } from 'react';
import './Blog.css';
import Abstract from '../../components/Abstract/Abstract';

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
      backgroundColor: 'rgba(144,191,219,0.8)',
    };

    return (
      <div>
        <Abstract data={blogAbstractData} color={backgroundColor} />
      </div>
    );
  }
}

export default Blog;
