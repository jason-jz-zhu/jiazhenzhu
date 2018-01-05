import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import './Cards.css';

class Cards extends Component {
  render() {
    const cards = this.props.data.map(itemList => (
      <div key={itemList.id} className="cardWrapper card-item">
        <a href={itemList.link} className="card">
          <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)' }}>
            <div className="titleContent">
              <h3>{itemList.title}</h3>
            </div>
            <div className="cardInfo">
              {itemList.info}
            </div>
            <div className="colorOverlay" />
          </div>
        </a>
      </div>
    ));

    return (
      <FlipMove duration={750} easing="ease" className="cards">
        {cards}
      </FlipMove>
    );
  }
}

export default Cards;
