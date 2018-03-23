import React, { Component } from 'react';
import * as d3 from 'd3';
import 'd3-selection-multi';
import './Logo.css';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.createLogo = this.createLogo.bind(this);
  }
  componentDidMount() {
    this.createLogo();
  }
  componentDidUpdate() {
    this.createLogo();
  }

  createLogo() {
    const data = [
      {
        category: 'Data Engineering', subcategory: 'ETL', point: 5, description: 'Extract, Transform, and Loading',
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
    // const processBarFlag = [false, false, false];
    const axisData = [{ category: 'AXIS', subcategory: 'AXIS', point: 5 }, ...data];
    const noAxisData = axisData.slice(1, axisData.length + 1);
    const uniqueCategory = [...new Set(axisData.map(m => m.category))];
    const svg = d3.select(this.logo);
    const RHLenScale = d3.scaleLinear().domain([0, 5]).range([5, 30]);
    const RHColorScale = d3.scaleOrdinal()
      .domain(uniqueCategory)
      .range(['#fff', '#a0c1e3', '#c457be', '#d0ac2f', '#8d8482']);

    svg.selectAll('rect')
      .data(noAxisData)
      .enter()
      .append('rect')
      .attr('class', d => `logoMainRect${d.category.replace(/\s/g, '')}`)
      .attrs({
        x: 25, y: 25, width: 5, rx: 2.5, ry: 2.5,
      })
      .attr('height', d => RHLenScale(d.point))
      .attr('transform', (d, i) => `rotate(${(i / noAxisData.length) * 360}, 25, 25)`)
      .style('fill', d => RHColorScale(d.category))
      .style('opacity', 0.35);
  }

  render() {
    return (
      <svg ref={(c) => { this.logo = c; }} width={50} height={50} />
    );
  }
}

export default Logo;
