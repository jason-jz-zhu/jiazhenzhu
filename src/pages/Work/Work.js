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
        info: 'D3.js',
      },
      {
        id: 4,
        link: '/',
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg',
        title: 'Coming Soon!',
        info: 'D3.js',
      },
    ];
    this.setState({
      rawCardsData: cardsData,
      cardsData,
    });
  }

  filter = (e) => {
    const target = e.target.innerHTML;
    let newCardsData = [];
    if (target === 'All') {
      newCardsData = this.state.rawCardsData;
    } else {
      newCardsData = this.state.rawCardsData
        .filter(card => card.info === target);
    }
    this.setState({ cardsData: newCardsData });
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
            {this.state.filterList.map(item => (
              <li key={item}>
                <a href="#" onClick={this.filter}>{item}</a>
              </li>
            ))}
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
