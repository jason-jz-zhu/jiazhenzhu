import React, { Component } from 'react';
import './About.css';
import Abstract from '../../components/Abstract/Abstract';

class About extends Component {

  render() {

    const right = (
      <div>
        WHO I AM
        <br />
        WHO I WANT TO BE
      </div>
    )

    const aboutAbstractData = {
      left: "About Me",
      right: right
    }

    return (
      <div>
        <Abstract data={aboutAbstractData} />
        <div className="aboutMeWrapper">
          <div className="aboutMe">
            <div>one</div>
            <div>two</div>
            <div>three</div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
