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
    const baseRadius = 5.5;
    // How many times the baseRadius should the background circle become
    // const backgroundRectSize = 150;
    const baseDistanceRatio = 0.7; // The default distance that the circles are apart
    const scaleIncrease = 3;
    const backgroundCircleFactor = 6;
    const margin = {
      top: 60,
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

    svg.append('text')
      .attr('class', 'future')
      .attr('x', 195)
      .attr('y', 10)
      .attr('dy', '0.3em')
      .text('Future');

    svg.append('text')
      .attr('class', 'past')
      .attr('x', 95)
      .attr('y', 720)
      .attr('dy', '-0.3em')
      .text('Past');
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
      .attr('class', 'history-line')
      .attr('x2', 0)
      .attr('y2', 20)
      .attr('x1', 0.001)
      .attr('y1', (height / 2) + 150)
      .style('stroke', '#d3d3d3');

    main.append('line')
      .attr('class', 'future-line')
      .attr('x1', 0)
      .attr('y1', 20)
      .attr('x2', 0.001)
      .attr('y2', -10)
      .style('stroke', '#d3d3d3')
      .style('stroke-dasharray', ('2, 2'))
      .attr('marker-end', 'url(#triangle)');


    // Create defs elements
    // Container for the gradients
    const defs = main.append('defs');

    // Filter for the outside shadow
    const filter = defs.append('filter')
      .attr('id', 'shadow');

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

    defs.append('marker')
      .attr('id', 'triangle')
      .attr('refX', 6)
      .attr('refY', 6)
      .attr('markerWidth', 30)
      .attr('markerHeight', 30)
      .attr('orient', 'auto')
      .append('path')
      .attr('class', 'line-legend-arrow')
      .attr('d', 'M 0 0 12 6 0 12 3 6');

    defs.append('marker')
      .attr('id', 'pointer-triangle')
      .attr('refX', 6)
      .attr('refY', 6)
      .attr('markerWidth', 30)
      .attr('markerHeight', 30)
      .attr('orient', 'auto')
      .append('path')
      .attr('class', 'line-legend-arrow')
      .attr('d', 'M 0 0 L 0 12 L 12 6 L 6 6');

    const data = [
      {
        short_name: 'SHU', area: 'education', key: 'Shanghai University', content: 'Bachelor of CS', year_period: '2007 - 2011', hightlight: 'Scholarship', year_start: '2007',
      },
      {
        short_name: 'SHU-Lab', area: 'education', key: 'Multimedia Technology Lab at SHU', content: 'Research Assistant', year_period: '2009 - 2011', hightlight: 'Face Recognition/Image Quality Assessment/Published two papers', year_start: '2009',
      },
      {
        short_name: 'GWU', area: 'education', key: 'George Washington University', content: 'Master of CS', year_period: '2013 - 2014', hightlight: 'XXX', year_start: '2013',
      },
      {
        short_name: 'Gatech', area: 'education', key: 'Georgia Institute of Technology', content: 'MicroMaster of Analytics', year_period: '2017 - 2018', hightlight: 'XXX', year_start: '2017',
      },
      {
        short_name: 'TTU-Lab', area: 'education', key: 'Data Discovery Lab at TTU', content: 'Research Assistant', year_period: '2018 - Present', hightlight: 'Machine Learning, Deep Learning', year_start: '2018',
      },
      {
        short_name: 'PWC', area: 'working', key: 'PricewaterhouseCoopers', content: 'IT Intern', year_period: '2010 - 2010', hightlight: 'XXX', year_start: '2010',
      },
      {
        short_name: 'CITI', area: 'working', key: 'Citi Bank', content: 'Software Engineer', year_period: '2011 - 2012', hightlight: 'Business Intelligence/Data WareHouse', year_start: '2011',
      },
      {
        short_name: 'NETE', area: 'working', key: 'NETE', content: 'Data Scientist/Data Engineer', year_period: '2014 - Present', hightlight: 'Data', year_start: '2014',
      },
      {
        short_name: 'MIT', area: 'education', key: 'Massachusetts Institute of Technology', content: 'MicroMaster of Data Science', year_period: '2018 - 2019', hightlight: 'Data', year_start: '2019',
      },
    ];

    const timelineScale = d3.scaleLinear().domain([2007, 2019]).range([600, 50]);
    // create circle wrapper
    const outerCircleWrapper = main.append('g').attr('class', 'outer-circle-wrapper');

    const circleWrapper = outerCircleWrapper.selectAll('.circle-wrapper')
      .data(data)
      .enter().append('g')
      .attr('transform', (d) => {
        const x = 0;
        const y = timelineScale(d.year_start);
        return `translate(${x}, ${y})`;
      });

    const circles = circleWrapper.append('g')
      .attr('class', d => `education-circle-${d.short_name}`)

      .style('isolation', 'isolate')
      .on('click', () => d3.event.stopPropagation())
      .on('mouseover', (d) => {
        const el = d3.select(`.education-circle-${d.short_name}`);
        d3.select(el.node().parentNode).raise();
        d3.event.stopPropagation();
        // console.log(d.short_name);
        // console.log(el);
        const x = (d.area === 'education' ? -12 : 12);
        el.transition('grow').duration(750)
          .attr('transform', `scale(${scaleIncrease})`);
        el.selectAll('.character-circle')
          .transition('move').duration(700)
          .attr('transform', `translate(${x}, 0)`);

        el.select('.rect-background')
          .transition().duration(500)
          .attr('y', -baseRadius / 2)
          .attr('height', baseRadius / 2);

        el.select('.circle-background')
          .style('filter', 'url(#shadow)')
          .transition().duration(500)
          .style('opacity', 1);

        el.selectAll('.circle-legend-text')
          .transition('fade').duration(1000)
          .style('opacity', 1);

        if (d.short_name === 'NETE') {
          el.select('.nete-note')
            .transition('fade').duration(500)
            .style('opacity', 0);
          el.select('.nete-note')
            .transition('move').duration(1000)
            .attr('transform', 'translate(200, 0)');
        } else if (d.short_name === 'MIT') {
          el.select('.mit-note')
            .transition('fade').duration(500)
            .style('opacity', 0);
          el.select('.mit-note')
            .transition('move').duration(1000)
            .attr('transform', 'translate(200, 0)');
        } else if (d.short_name === 'TTU-Lab') {
          el.select('.ttu-note')
            .transition('fade').duration(500)
            .style('opacity', 0);
          el.select('.ttu-note')
            .transition('move').duration(1000)
            .attr('transform', 'translate(-200, 0)');
        } else if (d.short_name === 'SHU-Lab') {
          el.select('.shu-note')
            .transition('fade').duration(500)
            .style('opacity', 0);
          el.select('.shu-note')
            .transition('move').duration(1000)
            .attr('transform', 'translate(-200, 0)');
        } else if (d.short_name === 'CITI') {
          el.select('.pointer-note')
            .transition('fade').duration(500)
            .style('opacity', 0);
          el.select('.pointer-note')
            .transition('move').duration(1000)
            .attr('transform', 'translate(300, 0)');
        }
      })
      .on('mouseout', (d) => {
        const el = d3.select(`.education-circle-${d.short_name}`);
        const x = (d.area === 'education' ? (-baseRadius * baseDistanceRatio) : (baseRadius * baseDistanceRatio));
        el.transition('grow').duration(500)
          .attr('transform', 'scale(1)');

        el.selectAll('.character-circle')
          .transition('move').duration(700)
          .attr('transform', `translate(${x}, 0)`);

        el.select('.circle-background')
          .transition().duration(500)
          .style('opacity', 0)
          .on('end', () => el.select('.circle-background').style('filter', null));

        el.selectAll('.circle-legend-text')
          .transition('fade').duration(450)
          .style('opacity', 0);

        if (d.short_name === 'NETE') {
          el.select('.nete-note')
            .transition('move').duration(500)
            .attr('transform', 'translate(0, 0)');
          el.select('.nete-note')
            .transition().duration(1000)
            .style('opacity', 1);
        } else if (d.short_name === 'MIT') {
          el.select('.mit-note')
            .transition('move').duration(500)
            .attr('transform', 'translate(0, 0)');
          el.select('.mit-note')
            .transition().duration(1000)
            .style('opacity', 1);
        } else if (d.short_name === 'TTU-Lab') {
          el.select('.ttu-note')
            .transition('move').duration(500)
            .attr('transform', 'translate(0, 0)');
          el.select('.ttu-note')
            .transition().duration(1000)
            .style('opacity', 1);
        } else if (d.short_name === 'SHU-Lab') {
          el.select('.shu-note')
            .transition('move').duration(500)
            .attr('transform', 'translate(0, 0)');
          el.select('.shu-note')
            .transition().duration(1000)
            .style('opacity', 1);
        } else if (d.short_name === 'CITI') {
          el.select('.pointer-note')
            .transition('move').duration(500)
            .attr('transform', 'translate(0, 0)');
          el.select('.pointer-note')
            .transition().duration(1000)
            .style('opacity', 1);
        }
      });

    circles.append('rect')
      .attr('class', 'rect-background')
      .attr('x', -baseRadius * 2)
      .attr('y', -baseRadius)
      .attr('width', baseRadius * 5)
      .attr('height', baseRadius * 2)
      .style('fill', 'none');

    circles.append('circle')
      .attr('class', 'circle-background')
      .attr('r', baseRadius * backgroundCircleFactor)
      .style('opacity', 0)
      .style('fill', 'white');

    circles.append('circle')
      .attr('class', 'character-circle')
      .attr('transform', (d) => {
        const x = (d.area === 'education' ? (-baseRadius * baseDistanceRatio) : (baseRadius * baseDistanceRatio));
        return `translate(${x}, 0)`;
      })
      .attr('r', baseRadius)
      .style('fill', d => (d.area === 'education' ? '#f27c07' : '#1D75AD'));

    circles.append('circle')
      .attr('class', 'character-circle')
      .attr('transform', (d) => {
        const x = (d.area === 'education' ? (-baseRadius * baseDistanceRatio) : (baseRadius * baseDistanceRatio));
        return `translate(${x}, 0)`;
      })
      .attr('r', baseRadius * 1.5)
      .style('fill', 'none')
      .style('stroke', d => (d.area === 'education' ? '#f27c07' : '#ffffff'))
      .style('stroke-width', 1);

    circles.append('text')
      .attr('class', 'circle-legend-text')
      .attr('dy', '-3.7em')
      .style('fill', d => (d.area === 'education' ? '#f27c07' : '#1D75AD'))
      .style('opacity', 0)
      .text(d => d.short_name);

    circles.append('text')
      .attr('class', 'circle-legend-text')
      .attr('dy', '4.3em')
      .style('fill', d => (d.area === 'education' ? '#f27c07' : '#1D75AD'))
      .style('opacity', 0)
      .text(d => d.content);

    circles.append('text')
      .attr('class', 'circle-legend-text')
      .attr('dx', d => (d.area === 'education' ? '2.80em' : '-2.60em'))
      .attr('dy', '0.3em')
      .style('fill', d => (d.area === 'education' ? '#f27c07' : '#1D75AD'))
      .style('opacity', 0)
      .text(d => d.year_period);

    // curve line
    const lineGenerator = d3.line()
      .curve(d3.curveCardinal);
    // nete note
    const points1 = [
      [10, -3],
      [50, -30],
      [80, -35],
    ];
    const path1Data = lineGenerator(points1);
    const neteNote = d3.select('.education-circle-NETE').append('g').attr('class', 'nete-note');
    neteNote.append('path')
      .attr('d', path1Data)
      .style('fill', 'none')
      .style('stroke', '#1D75AD')
      .style('opacity', 1);
    neteNote.append('rect')
      .attr('x', 85)
      .attr('y', -45)
      .attr('width', 5)
      .attr('height', 30)
      .style('fill', '#1D75AD')
      .style('opacity', 1);
    neteNote.append('text')
      .attr('class', 'note-top')
      .attr('x', 95)
      .attr('y', -33)
      .text('Data Engineer')
      .style('opacity', 1);
    neteNote.append('text')
      .attr('class', 'note-down')
      .attr('x', 95)
      .attr('y', -20)
      .text('NETE\u00A0|\u00A02014 - Present')
      .style('opacity', 1);
    // mit note
    const points2 = [
      [8, 3],
      [50, 30],
      [80, 35],
    ];
    const path2Data = lineGenerator(points2);
    const mitNote = d3.select('.education-circle-MIT').append('g').attr('class', 'mit-note');
    mitNote.append('path')
      .attr('d', path2Data)
      .style('fill', 'none')
      .style('stroke', '#f27c07')
      .style('opacity', 1);
    mitNote.append('rect')
      .attr('x', 85)
      .attr('y', 20)
      .attr('width', 5)
      .attr('height', 30)
      .style('fill', '#f27c07')
      .style('opacity', 1);
    mitNote.append('text')
      .attr('class', 'note-top')
      .attr('x', 95)
      .attr('y', 31)
      .text('MicoMaster Candidate')
      .style('opacity', 1);
    mitNote.append('text')
      .attr('class', 'note-down')
      .attr('x', 95)
      .attr('y', 45)
      .text('MIT\u00A0|\u00A02018 - Present')
      .style('opacity', 1);

    // ttu-research note
    const points3 = [
      [-13, -3],
      [-50, -30],
      [-80, -35],
    ];
    const path3Data = lineGenerator(points3);
    const ttuNote = d3.select('.education-circle-TTU-Lab').append('g').attr('class', 'ttu-note');
    ttuNote.append('path')
      .attr('d', path3Data)
      .style('fill', 'none')
      .style('stroke', '#f27c07')
      .style('opacity', 1);
    ttuNote.append('rect')
      .attr('x', -190)
      .attr('y', -45)
      .attr('width', 5)
      .attr('height', 30)
      .style('fill', '#f27c07')
      .style('opacity', 1);
    ttuNote.append('text')
      .attr('class', 'note-top')
      .attr('x', -180)
      .attr('y', -33)
      .text('Research Assistant')
      .style('opacity', 1);
    ttuNote.append('text')
      .attr('class', 'note-down')
      .attr('x', -180)
      .attr('y', -20)
      .text('TTU\u00A0|\u00A02018 - Present')
      .style('opacity', 1);

    // shu-research note
    const points4 = [
      [-13, -3],
      [-50, -30],
      [-80, -35],
    ];
    const path4Data = lineGenerator(points4);
    const shuNote = d3.select('.education-circle-SHU-Lab').append('g').attr('class', 'shu-note');
    shuNote.append('path')
      .attr('d', path4Data)
      .style('fill', 'none')
      .style('stroke', '#f27c07')
      .style('opacity', 1);
    shuNote.append('rect')
      .attr('x', -190)
      .attr('y', -45)
      .attr('width', 5)
      .attr('height', 30)
      .style('fill', '#f27c07')
      .style('opacity', 1);
    shuNote.append('text')
      .attr('class', 'note-top')
      .attr('x', -180)
      .attr('y', -33)
      .text('Research Assistant')
      .style('opacity', 1);
    shuNote.append('text')
      .attr('class', 'note-down')
      .attr('x', -180)
      .attr('y', -20)
      .text('SHU\u00A0|\u00A02009 - 2011')
      .style('opacity', 1);


    // pointer note
    const points5 = [
      [150, -105],
      [50, -50],
      [20, -15],
    ];
    const path5Data = lineGenerator(points5);
    const pointerNote = d3.select('.education-circle-CITI').append('g').attr('class', 'pointer-note');
    pointerNote.append('path')
      .attr('d', path5Data)
      .style('fill', 'none')
      .style('stroke', 'rgb(211, 211, 211)')
      .style('opacity', 1)
      .attr('marker-end', 'url(#pointer-triangle)');

    pointerNote.append('text')
      .attr('class', 'pointer-note')
      .attr('x', 70)
      .attr('y', -43)
      .text('Try to hover over me!!!')
      .style('opacity', 1);
  }

  render() {
    return (
      <svg ref={(c) => { this.timeline = c; }} width={400} height={1000} />
    );
  }
}

export default Timeline;
