import React, { Component } from 'react';
import './Abstract.css';

class Abstract extends Component {

  render() {

    const abstract = (
      <div className="abstractWrapper">
        <div className="textContainer">
          <h1 className="leftHeader">
            <strong>
              {this.props.data.left}
            </strong>
          </h1>
          <h2 className="rightHeader">
            {this.props.data.right}
          </h2>
        </div>
      </div>
    )

    return (
      <div>
        {abstract}
      </div>
    );
  }
}

export default Abstract;
