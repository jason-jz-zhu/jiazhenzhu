import React, { Component } from 'react';
import * as d3 from 'd3';
import 'd3-selection-multi';

class LearningTrack extends Component {
  componentDidMount() {
    this.createLearningTrack();
  }
  componentDidUpdate() {
    this.createLearningTrack();
  }

  createLearningTrack = () => {
    const data = [
      {
        category: 'Data Engineering', subcategory: 'ETL', class: [{ f1: 1 }, { f2: 2 }], description: 'Extract, Transform, and Loading',
      },
      {
        category: 'Data Engineering', subcategory: 'Big Data', point: 4, description: '3Vs (volume, variety and velocity) Data',
      },
      {
        category: 'Data Engineering', subcategory: 'Algroithms', point: 5, description: 'Effective Method with Finite Amount of Space and Time',
      },
      {
        category: 'Data Engineering', subcategory: 'Data Warehouse/Database', point: 5, description: 'Store Data',
      },
      {
        category: 'Data Science', subcategory: 'Descriptive Analysis', point: 4, description: 'Summarize a Given Data Set',
      },
      {
        category: 'Data Science', subcategory: 'Predictive Analysis', point: 3, description: 'Predict Future',
      },
      {
        category: 'Data Science', subcategory: 'Prescriptive Analysis', point: 3, description: 'Give an Effective Method',
      },
      {
        category: 'Data Science', subcategory: 'Machine Learning', point: 3, description: 'Machine Learning',
      },
      {
        category: 'Data Visualization', subcategory: 'UX/UI', point: 3, description: 'User Experience',
      },
      {
        category: 'Data Visualization', subcategory: 'Data Art', point: 3, description: 'Art',
      },
      {
        category: 'Data Visualization', subcategory: 'Storytelling', point: 3, description: 'Good Story',
      },
      {
        category: 'Web Development', subcategory: 'Front-End', point: 4, description: 'Show Data for Web',
      },
      {
        category: 'Web Development', subcategory: 'Back-End', point: 4, description: 'Calculate Data for Web',
      }];
    const courses = [{ name: 'c1', time: 1 }, { name: 'c2', time: 2 }, { name: 'c3', time: 3 }]
    const radius = 100;
    const node = this.learningtrack;
    const svg = d3.select(node);
    const donutColorScale = d3.scaleOrdinal()
      .domain(data.map(m => m.category))
      .range(['#a0c1e3', '#c457be', '#d0ac2f', '#8d8482']);
    const rScale = d3.scaleLinear()
      .domain([0, Math.max(...courses.map(course => course.time))])
      .range([4 * radius, radius]);
    console.log(rScale(0.5));
    // console.log(donutColorScale('Web Development'));
    // dunot arc
    const arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 15)
      .padAngle(0.03)
      .cornerRadius(8);
    // dunot pie
    const pie = d3.pie()
      .sort(null)
      .value(d => d.subcategory.length);
    // get center for each pie
    const centersData = pie(data).map(arc.centroid);
    // console.log(centersData);
    // main
    const main = svg.append('g')
      .attr('transform', `translate(${500}, ${500})`)
      .attr('class', 'LTMain');

    const dount = main.append('g')
      .attr('class', 'dountGroup')
      .selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');
    dount.append('path')
      .attr('d', arc)
      .style('fill', d => donutColorScale(d.data.category))
      .style('opacity', 0.35);
    // points on the arc
    main.append('g')
      .selectAll('circle')
      .data(centersData)
      .enter()
      .append('circle')
      .attr('r', '4')
      .attr('cx', d => d[0])
      .attr('cy', d => d[1])
      .style('fill', 'white')
      .style('stroke', '#aaa');

    // var n = 21;
    // var dataset = d3.range(n).map(function(d) { return {"y": d3.randomUniform(1)() } })
    //
    //
    const need = [
      { x: 5.087672529666641, y: -87.35196384873596 },
      { x: 0, y: -150 }, { x: -5, y: -200 },
      { x: 150, y: -200 },
    ];
    const lineGenerate = d3.line()
      .x(d => d.x)
      .y(d => d.y)
      .curve(d3.curveCardinal);

    main.selectAll(`xx`)
      .data([need])
      .enter()
      .append('path')
      .attr('class', `xx`)
      .attr('d', lineGenerate)
      .style('stroke', 'steelblue')
      .style('stroke-width', '2')
      .style('fill', 'none');

    // for (let i = 0; i < need.length - 1; i += 1) {
    //   console.log(need.slice(i, i + 2));
    //   main.selectAll(`xx${i}`)
    //     .data([need.slice(i, i + 4)])
    //     .enter()
    //     .append('path')
    //     .attr('class', `xx${i}`)
    //     .attr('d', lineGenerate)
    //     .style('stroke', 'steelblue')
    //     .style('stroke-width', '2')
    //     .style('fill', 'none');
    // }
    main.append('g')
      .selectAll('circle2')
      .data(need)
      .enter()
      .append('circle')
      .attr('r', '6')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .style('fill', 'white')
      .style('stroke', '#aaa');
  }

  render() {
    return (
      <div>
        <div>Title</div>
        <svg ref={(c) => { this.learningtrack = c; }} width={1000} height={1000} />
      </div>
    );
  }
}

export default LearningTrack;
