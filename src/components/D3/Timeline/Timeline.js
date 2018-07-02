import React, { Component } from 'react';
import * as d3 from 'd3';
import 'd3-selection-multi';
import './Timeline.css';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.createTimeline = this.createTimeline.bind(this);
  }
  componentDidMount() {
    this.createTimeline();
  }
  componentDidUpdate() {
    this.createTimeline();
  }

  createTimeline() {
    const baseRadius = 5;
    // How many times the baseRadius should the background circle become
    const backgroundCircleFactor = 7;
    const baseDistanceRatio = 0.7; // The default distance that the circles are apart
    const scaleIncrease = 3;

    const margin = {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    };
    const width = document.getElementsByClassName('rightNav')[0].clientWidth - margin.left - margin.right;
    const height = 1000;
    // console.log(width);
    const svg = d3.select(this.timeline);

    const main = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${margin.top})`);

    // create side text
    main.append('text')
      .attr('class', 'timeline-side-text')
      .attr('x', Math.min(-width / 4, -60))
      .attr('y', 10)
      .attr('dy', '0.3em')
      .text('Education');

    main.append('text')
      .attr('class', 'timeline-side-text')
      .attr('x', Math.max(width / 4, 60))
      .attr('y', 10)
      .attr('dy', '0.3em')
      .text('Working');

    // create line
    main.append('line')
      .attr('class', 'saga-line')
      .attr('x1', 0)
      .attr('y1', -height * 0.3)
      .attr('x2', 0.001)
      .attr('y2', height / 2)
      .style('stroke', '#d3d3d3');


    // create circle wrapper
    const circleWrapper = main.append('g').attr('class', 'circle-wrapper-legend');

    // Inner circle wrapper that can be scaled on hover
    const circle = circleWrapper.append('g')
      .attr('class', 'circle-legend')
      .style('isolation', 'isolate');


    // Extra background that becomes visible on hover
    // const CircleBackground = circle.append('circle')
    //   .attr('class', 'fight-background-circle-legend')
    //   .attr('r', baseRadius * backgroundCircleFactor)
    //   .style('opacity', 0);
    const eductionData = [
      {
        key: 'Shanghai University', content: 'Bachelor of Computer Science',
        year_period: '2007 - 2011', hightlight: 'Scholarship', year_start: '2007',
      },
      {
        key: 'Multimedia Technology Lab at SHU', content: 'Research Assistant',
        year_period: '2009 - 2011', hightlight: 'Face Recognition/Image Quality Assessment/Published two papers', year_start: '2009',
      },
      {
        key: 'George Washington University', content: 'Master of Computer Science',
        year: '2013 - 2014', hightlight: 'XXX', year_start: '2013',
      },
      {
        key: 'Georgia Institute of Technology', content: 'MicroMaster of Analytics',
        year: '2017 - 2018', hightlight: 'XXX', year_start: '2017',
      },
      {
        key: 'Data Discovery Lab at TTU', content: 'Research Assistant (Volunteer)',
        year: '2018 - Present', hightlight: 'Machine Learning, Deep Learning', year_start: '2018',
      },
    ];

    const workingData = [
      {
        key: 'PricewaterhouseCoopers', content: 'IT Intern',
        year_period: '2010 - 2010', hightlight: 'XXX', year_start: '2010',
      },
      {
        key: 'Citi Bank', content: 'Software Engineer (Data)',
        year_period: '2011 - 2012', hightlight: 'Business Intelligence/Data WareHouse', year_start: '2011',
      },
      {
        key: 'NETE', content: 'Data Scientist/Data Engineer',
        year: '2014 - Present', hightlight: 'Data', year_start: '2014',
      },
    ];

      var data = [
        {character: "Goku", color: "#f27c07"},
        {character: "Vegeta", color: "#1D75AD"},
      ];

    // Create circles for fighters
    circle.selectAll('.character-circle-legend')
      .data(data)
      .enter().append('circle')
      .attr('class', 'character-circle-legend')
      .attr('transform', (d, i) => {
        const x = -baseRadius * baseDistanceRatio * (i === 0 ? 1 : -1);
        return `translate(${x}, 50)`;
      })
      .attr('r', baseRadius)
      .style('fill', d => d.color)
      .on('mouseover', (d) => {
        const hoveredCircle = d3.selectAll('.circle-legend');
        const y = -50 * (scaleIncrease - 1);
        hoveredCircle
          .transition('grow').duration(750)
          .attr('transform', `translate(0, ${y}) scale(${scaleIncrease})`);

        hoveredCircle.selectAll('.character-circle-legend')
          .transition('move').duration(1000)
          .attr('transform', (d, i) => {
            const x = -baseRadius * 2.5 * (i % 2 === 0 ? 1 : -1);
            return `translate(${x}, 50)`;
          });
      })
      .on('mouseout', (d) => {
        const hoveredCircle = d3.selectAll('.circle-legend');
        hoveredCircle
          .transition('grow').duration(400)
          .attr('transform', 'scale(1)');


        hoveredCircle.selectAll('.character-circle-legend, .fight-legend-circle-text')
          .transition('move').duration(750)
          .attr('transform', (d, i) => {
            const x = -baseRadius * baseDistanceRatio * (i % 2 === 0 ? 1 : -1);
            return `translate(${x}, 50)`;
          });
      });

    // Add SSJ class around Goku
    circle.append('circle')
      .attr('class', 'character-circle-legend')
      .attr('transform', () => `translate(${-baseRadius * baseDistanceRatio}, 50)`)
      .attr('r', baseRadius * 1.5)
      .style('fill', 'none')
      .style('stroke', data[0].color)
      .style('stroke-width', 1);
  }

  render() {
    return (
      <svg ref={(c) => { this.timeline = c; }} width={200} height={800} />
    );
  }
}

export default Timeline;
