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
    // const backgroundRectSize = 150;
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

    // Create defs elements

    // Container for the gradients
    const defs = main.append('defs');

    // Filter for the outside shadow
    const filter = defs.append('filter')
      .attr('id', 'shadow-legend');

    filter.append('feColorMatrix')
      .attr('type', 'matrix')
      .attr('values', '0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 0 0.4 0');

    filter.append('feGaussianBlur')
      .attr('stdDeviation', '3')
      .attr('result', 'coloredBlur');

    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode')
      .attr('in', 'coloredBlur');
    feMerge.append('feMergeNode')
      .attr('in', 'SourceGraphic');

    const data = [
      {
        short_name: 'shu', area: 'eduction',
        key: 'Shanghai University', content: 'Bachelor of Computer Science',
        year_period: '2007 - 2011', hightlight: 'Scholarship', year_start: '2007',
      },
      {
        short_name: 'shu-research', area: 'eduction',
        key: 'Multimedia Technology Lab at SHU', content: 'Research Assistant',
        year_period: '2009 - 2011', hightlight: 'Face Recognition/Image Quality Assessment/Published two papers', year_start: '2009',
      },
      {
        short_name: 'gwu', area: 'eduction',
        key: 'George Washington University', content: 'Master of Computer Science',
        year: '2013 - 2014', hightlight: 'XXX', year_start: '2013',
      },
      {
        short_name: 'gatech', area: 'eduction',
        key: 'Georgia Institute of Technology', content: 'MicroMaster of Analytics',
        year: '2017 - 2018', hightlight: 'XXX', year_start: '2017',
      },
      {
        short_name: 'ttu-research', area: 'eduction',
        key: 'Data Discovery Lab at TTU', content: 'Research Assistant (Volunteer)',
        year: '2018 - Present', hightlight: 'Machine Learning, Deep Learning', year_start: '2018',
      },
      {
        short_name: 'pwc', area: 'working',
        key: 'PricewaterhouseCoopers', content: 'IT Intern',
        year_period: '2010 - 2010', hightlight: 'XXX', year_start: '2010',
      },
      {
        short_name: 'citi', area: 'working',
        key: 'Citi Bank', content: 'Software Engineer (Data)',
        year_period: '2011 - 2012', hightlight: 'Business Intelligence/Data WareHouse', year_start: '2011',
      },
      {
        short_name: 'nete', area: 'working',
        key: 'NETE', content: 'Data Scientist/Data Engineer',
        year: '2014 - Present', hightlight: 'Data', year_start: '2014',
      },
    ];

    const timelineScale = d3.scaleLinear().domain([2007, 2019]).range([50, 500]);
    // create circle wrapper
    const outerCircleWrapper = main.append('g').attr('class', 'outer-circle-wrapper');

    const circleWrapper = outerCircleWrapper.selectAll('.circle-wrapper')
      .data(data)
      .enter().append('g')
      .attr('transform', (d) => {
        const x = -baseRadius * baseDistanceRatio;
        const y = timelineScale(d.year_start);
        return `translate(${x}, ${y})`;
      });

    const circles = circleWrapper.append('g')
      .attr('class', d => `education-circle-${d.short_name}`)
      .style('isolation', 'isolate')
      .on('mouseover', (d) => {
        console.log('over');
      })
      .on('mouseout', (d) => {
        console.log('out');
      });

    const circleBackground = circles.append('rect')
      .attr('class', 'circle-background')
      .attr('x', -baseRadius * 2)
      .attr('y', -baseRadius)
      .attr('width', baseRadius * 5)
      .attr('height', baseRadius)
      .style('fill', 'none');
    // // Inner circle wrapper that can be scaled on hover
    // const circle = outerCircleWrapper.append('g')
    //   .attr('class', 'circle-legend')
    //   .style('isolation', 'isolate');
    // // Extra background that becomes visible on hover
    // const circleBackground = circle.append('circle')
    //   .attr('class', 'background-circle')
    //   .attr('r', baseRadius * backgroundCircleFactor)
    //   .style('opacity', 0);

    // circle.selectAll('.education-circle')
    //   .data(data)
    //   .enter().append('circle')
    //   .attr('class', d => `education-circle-${d.short_name}`)
    //   .attr('transform', (d) => {
    //     const x = -baseRadius * baseDistanceRatio;
    //     const y = timelineScale(d.year_start);
    //     return `translate(${x}, ${y})`;
    //   })
    //   .attr('r', baseRadius)
    //   .style('fill', '#f27c07')
    //   .style('opacity', 0.8)
    //   .on('mouseover', (d) => {
    //     const hoveredCircle = d3.selectAll(`.education-circle-${d.short_name}`);
    //     const y = timelineScale(d.year_start);
    //     hoveredCircle
    //       .transition('grow').duration(750)
    //       .attr('transform', `translate(-50, ${y}) scale(${scaleIncrease})`);
    //
    //     circle.select('.background-circle')
    //       .style('filter', 'url(#shadow-legend)')
    //       .transition().duration(1000)
    //       .style('opacity', 1);
    //   })
    //   .on('mouseout', (d) => {
    //     const hoveredCircle = d3.selectAll(`.education-circle-${d.short_name}`);
    //     const x = -baseRadius * baseDistanceRatio;
    //     const y = timelineScale(d.year_start);
    //     hoveredCircle
    //       .transition('grow').duration(400)
    //       .attr('transform', `translate(${x}, ${y}) scale(1)`);
    //   });
    // // Create circles for fighters
    // // circle.selectAll('.character-circle-legend')
    // //   .data(data)
    // //   .enter().append('circle')
    // //   .attr('class', 'character-circle-legend')
    // //   .attr('transform', (d, i) => {
    // //     const x = -baseRadius * baseDistanceRatio * (i === 0 ? 1 : -1);
    // //     return `translate(${x}, 50)`;
    // //   })
    // //   .attr('r', baseRadius)
    // //   .style('fill', d => d.color)
    // //   .on('mouseover', (d) => {
    // //     const hoveredCircle = d3.selectAll('.circle-legend');
    // //     const y = -50 * (scaleIncrease - 1);
    // //     hoveredCircle
    // //       .transition('grow').duration(750)
    // //       .attr('transform', `translate(0, ${y}) scale(${scaleIncrease})`);
    // //
    // //     hoveredCircle.selectAll('.character-circle-legend')
    // //       .transition('move').duration(1000)
    // //       .attr('transform', (d, i) => {
    // //         const x = -baseRadius * 2.5 * (i % 2 === 0 ? 1 : -1);
    // //         return `translate(${x}, 50)`;
    // //       });
    // //   })
    // //   .on('mouseout', (d) => {
    // //     const hoveredCircle = d3.selectAll('.circle-legend');
    // //     hoveredCircle
    // //       .transition('grow').duration(400)
    // //       .attr('transform', 'scale(1)');
    // //
    // //
    // //     hoveredCircle.selectAll('.character-circle-legend, .fight-legend-circle-text')
    // //       .transition('move').duration(750)
    // //       .attr('transform', (d, i) => {
    // //         const x = -baseRadius * baseDistanceRatio * (i % 2 === 0 ? 1 : -1);
    // //         return `translate(${x}, 50)`;
    // //       });
    // //   });
    //
    // // Add SSJ class around Goku
    // circle.selectAll('.education-circle-o')
    //   .data(data)
    //   .enter().append('circle')
    //   .attr('class', d => `education-circle-${d.short_name}`)
    //   .attr('transform', (d) => {
    //     const x = -baseRadius * baseDistanceRatio;
    //     const y = timelineScale(d.year_start);
    //     return `translate(${x}, ${y})`;
    //   })
    //   .attr('r', baseRadius * 1.5)
    //   .style('fill', 'none')
    //   .style('stroke', data[0].color)
    //   .style('stroke-width', 1);
  }

  render() {
    return (
      <svg ref={(c) => { this.timeline = c; }} width={200} height={800} />
    );
  }
}

export default Timeline;
