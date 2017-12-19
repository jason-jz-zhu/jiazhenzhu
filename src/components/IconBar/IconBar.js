import React, { Component } from 'react';
import './IconBar.css';

class IconBar extends Component {

  render() {
    return (
      <div className="iconWrapper">
        <div className="icon">
          <a href="https://www.linkedin.com/in/jiazhen-zhu-78a46632/" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>

        <div className="icon">
          <a href="https://github.com/jason-jz-zhu" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
        <div className="icon">
          <a href="mailto:jason.jz.zhu@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.pinterest.com/jiazhenzhu16/" target="_blank">
            <i className="fa fa-pinterest-p" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default IconBar;
