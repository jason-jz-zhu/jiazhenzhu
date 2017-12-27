import React, { Component } from 'react';
import './About.css';
import Abstract from '../../components/Abstract/Abstract';
import IconBar from '../../components/IconBar/IconBar';

class About extends Component {
  render() {
    const rightHTML = (
      <div>
        WHO I AM
        <br />
        WHO I WANT TO BE
      </div>
    );

    const aboutAbstractData = {
      left: 'About Me',
      right: rightHTML,
    };

    return (
      <div>
        <Abstract data={aboutAbstractData} />
        <div className="aboutMeWrapper">
          <div className="aboutMe">
            <div className="leftTitle title">
              <p>Who</p>
              <p>I</p>
              <p>Am</p>
            </div>
            <div className="content">
              <p>
                I am a <span className="textTransparent">Data Engineer</span> and&nbsp;
                <span className="textTransparent">Data Scientist</span>.
                Around 2013, I came to USA and begin my graduate education.
                I used 1.5 years to finish my master degree for computer science
                at the George Washington University and join the my current job at NETE.
                Before I came to USA, I worked at CITI/CSC and PWC about 2 years at Shanghai CHINA.
              </p>
              <p>
                When I touch with the new word <span className="underLine">data science</span>&nbsp;
                in 2012, I found my passion finially.
                This is what I exactly want to do:&nbsp;
                <em><strong>finding/extracting</strong></em> raw data,&nbsp;
                <em><strong>cleaning</strong></em> them, doing&nbsp;
                <em><strong>descriptive analysis</strong></em>,&nbsp;
                <em><strong>finding correlation</strong></em> between data,
                and presenting them using humanly <em><strong>data visualizations</strong></em>.
                I am doing data engineering and data science project from the beginning to the end.
              </p>
              <p>
                I really want to share my knowledge, experience,
                and feeling to everyone who love data.
              </p>
              <p>
                I firmly believe that data can change decision of people and the world also.
              </p>
            </div>
            <div className="content">
              <p>
                To be a <span className="textTransparent">Full Stack Data Scientist</span> is
                what I want to be in the near future.
                Data Science combiness mathematics, statistics, information science,
                and computer science together. There is a funny story - I want to
                be a best computer scientiest in the statistics area,
                I want to be a best statistician in the computer sicence area.
              </p>
              <p>
                I have a lot of interested ideas in my daily life.
                For example, resume can be presented by data visualizations,
                how can we use data science knowledge to improve profit of small restaurant?
                and sharing our todolist in order to help and get help from others.
                I really want to implement them one by one.
                The ideas are like a baby, I want to grow them up.
              </p>
              <p>
                If you are interested in my ideas/projects or want to join them,
                please feel free to&nbsp;
                <a className="textLink" href="http://localhost:3000/contact">contact me</a>,
                &nbsp;maybe we can work together.
              </p>
              <IconBar />
            </div>
            <div className="rightTitle title">
              <p>Who</p>
              <p>I</p>
              <p>Want</p>
              <p>To</p>
              <p>Be</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
