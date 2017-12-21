import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
  render() {
    const cards = this.props.data.map(itemList => (
      <div key={itemList.id} className="cardWrapper">
        <a href={itemList.link} className="card">
          <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)' }}>
            <div className="titleContent">
              <h3>{itemList.title}</h3>
            </div>
            <div className="cardInfo">
              D3
            </div>
            <div className="colorOverlay" />
          </div>
        </a>
      </div>
    ));

    return (
      <div className="cards">
        {cards}
      </div>
    );
  }
}

export default Cards;
