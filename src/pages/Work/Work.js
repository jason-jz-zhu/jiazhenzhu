import React, { Component } from 'react';
import './Work.css';

// import Component
import Cards from '../../components/Cards/Cards';
import Abstract from '../../components/Abstract/Abstract';

class Work extends Component {
  render() {
    const cardsData = [
      {
        id: 1,
        link: 'http://localhost:3000/work/crimeanalysis',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg',
        title: 'SF Crime Analysis',
        info: 'Tableau',
      },
      {
        id: 2,
        link: 'http://localhost:3000/work/homeless',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg',
        title: 'Homeless',
        info: 'Tableau',
      },
      {
        id: 3,
        link: 'http://localhost:3000/',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg',
        title: 'Coming Soon!',
        info: 'D3',
      },
      {
        id: 4,
        link: 'http://localhost:3000/',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg',
        title: 'Coming Soon!',
        info: 'D3',
      },
    ];

    const workAbstractData = {
      left: 'Project',
      right: 'MY PERSONAL EXPERIMENTS & PROFESSIONAL WORK',
    };

    return (
      <div>
        <Abstract data={workAbstractData} />
        <div className="cardsWrapper">
          <Cards data={cardsData} />
        </div>
      </div>
    );
  }
}

export default Work;
