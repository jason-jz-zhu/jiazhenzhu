import React, { Component } from 'react';
import './Work.css';

class Work extends Component {

  render() {
    const abstract = (
      <div className="WorkAbstractWrapper">
        <div className="textContainer">
          <h1 className="leftHeader">
            <strong className="jiazhen">
              Project
            </strong>
          </h1>
          <h2 className="rightHeader">
            MY PERSONAL EXPERIMENTS & PROFESSIONAL WORK
          </h2>
        </div>
      </div>
    )
    return (
      <div>
        {abstract}
        <div className="cardsWrapper">
          <div className="cards">


            <div className="cardWrapper">

              <a href="" className="card">
                <div className="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)"}}>
                  <div className="titleContent">
                    <h3>10 inspiring photos</h3>
                  </div>
                  <div className="cardInfo">
                    D3
                  </div>
                  <div className="colorOverlay"></div>
                </div>
              </a>

            </div>

            <div className="cardWrapper">

              <a href="" className="card">
                <div className="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)"}}>
                  <div className="titleContent">
                    <h3>10 inspiring photos</h3>
                  </div>
                  <div className="cardInfo">
                    D3
                  </div>
                  <div className="colorOverlay"></div>
                </div>
              </a>

            </div>

            <div className="cardWrapper">

              <a href="" className="card">
                <div className="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)"}}>
                  <div className="titleContent">
                    <h3>10 inspiring photos</h3>
                  </div>
                  <div className="cardInfo">
                    D3
                  </div>
                  <div className="colorOverlay"></div>
                </div>
              </a>

            </div>

            <div className="cardWrapper">

              <a href="" className="card">
                <div className="thumb" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)"}}>
                  <div className="titleContent">
                    <h3>10 inspiring photos</h3>
                  </div>
                  <div className="cardInfo">
                    D3
                  </div>
                  <div className="colorOverlay"></div>
                </div>
              </a>

            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default Work;
