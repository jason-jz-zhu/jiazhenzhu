import React, { Component } from 'react';
import './IconBar.css';

class IconBar extends Component {
  render() {
    return (
      <div className="iconWrapper">
        <div className="icon">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jiazhen-zhu-78a46632/">
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>
        </div>

        <div className="icon">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/jason-jz-zhu">
            <i className="fa fa-github" aria-hidden="true" />
          </a>
        </div>
        <div className="icon">
          <a href="mailto:jason.jz.zhu@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>
        </div>
        <div className="icon">
          <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/jiazhenzhu16/">
            <i className="fa fa-pinterest-p" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }
}

export default IconBar;
