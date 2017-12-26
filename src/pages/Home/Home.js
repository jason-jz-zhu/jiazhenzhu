import React, { Component } from 'react';
// import components
import RadialHistogram from '../../components/D3/RadialHistogram/RadialHistogram';
import IconBar from '../../components/IconBar/IconBar';
import Cards from '../../components/Cards/Cards';
// import ddd from '../WorkCardData.json'
// import class
import './Home.css';

class Home extends Component {
  render() {
    const cardsData = [
      {
        id: 1,
        link: '/work/crimeanalysis',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg',
        title: 'SF Crime Analysis',
        info: 'Tableau',
      },
      {
        id: 2,
        link: '/work/homeless',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg',
        title: 'Homeless',
        info: 'Tableau',
      },
      {
        id: 3,
        link: '/',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg',
        title: 'Coming Soon!',
        info: 'D3',
      },
      {
        id: 4,
        link: '/',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg',
        title: 'Coming Soon!',
        info: 'D3',
      },
    ];

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
    );

    return (
      <div>
        {abstract}
        <div className="chart">
          <RadialHistogram />
        </div>
        <div className="cardsWrapper">
          <Cards data={cardsData} />
        </div>
      </div>
    );
  }
}

export default Home;
