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
        <div className="whoIAmWrapper">
          <div className="whoIAm">
            <div className="title">
              <p>Who</p>
              <p>am</p>
              <p>I</p>
            </div>
            <div className="leftContent">
              <p>
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </p>

            </div>
            <div className="rightContent">three</div>
          </div>
        </div>
        <div className="wantToBeWrapper">
          WHO I WANT TO BE
        </div>
      </div>
    );
  }
}

export default About;
