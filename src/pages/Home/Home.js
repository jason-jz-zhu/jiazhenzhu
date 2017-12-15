import React, { Component } from 'react';

// import components
import Header from '../../components/Header/Header';

// import class
import './Home.css'

class Home extends Component {

  render() {

    const abstract = (
      <div className="HomeAbstractWrapper">
        <div className="textContainer">
          <h1 className="leftHeader">
            <strong>
              I am Jiazhen Zhu.
            </strong>
          </h1>
          <h2 className="rightHeader">
            I love&nbsp;
            <span className="transparent">data engineering</span>,
            <br />
            <span className="transparent">data science</span>, and&nbsp;
            <span className="transparent">data visualizations</span>.&nbsp;
            <br />
            I know how to tranfer raw data into visualizations
            <br />
            and make data more sense.
          </h2>
        </div>
      </div>
    )

    return (
      <div>
        <Header />
        {abstract}
      </div>
    );
  }
}

export default Home;
