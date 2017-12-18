import React, { Component } from 'react';
// import components
import BarChart from '../../components/D3/BarChart/BarChart';
import RadialHistogram from '../../components/D3/RadialHistogram/RadialHistogram';
import IconBar from '../../components/IconBar/IconBar';
// import class
import './Home.css'

class Home extends Component {

  render() {
    const abstract = (
      <div className="HomeAbstractWrapper">
        <div className="textContainer">
          <h1 className="leftHeader">
            <strong className="jiazhen">
              I am Jiazhen Zhu.
            </strong>
          </h1>
          <h2 className="rightHeader">
            <div className="rightUpHeader">
              I love&nbsp;
              <span className="transparent">data engineering</span>,
              <br />
              <span className="transparent">data science</span>, and&nbsp;
              <span className="transparent">data visualizations</span>.&nbsp;
              <br />
              I know how to tranfer raw data into visualizations
              <br />
              and make data more sense.
            </div>
            <div className="rightDownIconBar">
              <IconBar />
            </div>
          </h2>

        </div>
      </div>
    )

    return (
      <div>
        {abstract}
        <div className='chart'>
          <RadialHistogram />
        </div>
      </div>
    );
  }
}

export default Home;
