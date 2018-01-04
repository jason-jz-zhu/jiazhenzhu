import React, { Component } from 'react';
import './Work.css';
// import Component
import Cards from '../../components/Cards/Cards';
import Abstract from '../../components/Abstract/Abstract';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawCardsData: [],
      cardsData: [],
      filterList: ['All', 'D3.js', 'Tableau', 'Machine Learning', 'Airflow'],
    };
  }

  componentWillMount() {
    this.initData();
  }

  initData = () => {
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
    this.setState({
      rawCardsData: cardsData,
      cardsData,
    });
  }

  filter = (e) => {
    console.log(e.target.innerHTML);
  }

  render() {
    const workAbstractData = {
      left: 'Project',
      right: 'MY PERSONAL EXPERIMENTS & PROFESSIONAL WORK',
    };
    return (
      <div>
        <Abstract data={workAbstractData} />
        <nav className="filterWrapper">
          <ul>
            <li><a href="#" onClick={this.filter}>All</a></li>
            <li><a>D3.js</a></li>
            <li><a>Tableau</a></li>
            <li><a>Machine Learning</a></li>
            <li><a>Airflow</a></li>
          </ul>
        </nav>
        <div className="cardsWrapper">
          <Cards data={this.state.cardsData} />
        </div>
      </div>
    );
  }
}

export default Work;
