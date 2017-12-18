import React, { Component } from 'react';
import * as d3 from 'd3';
import "d3-selection-multi";


class RadialHistogram extends Component {

   constructor(props){
      super(props)
      this.createRadialHistogram = this.createRadialHistogram.bind(this)
   }
   componentDidMount() {
      this.createRadialHistogram()
   }
   componentDidUpdate() {
      this.createRadialHistogram()
   }

   createRadialHistogram() {
      const data = [{category: 'Data Science', subcategory: 'Descriptive Analysis', point: 4}, 
              {category: 'Data Science', subcategory: 'Predictive Analysis', point: 3},
              {category: 'Data Science', subcategory: 'Prescriptive Analysis', point: 2},
              {category: 'Data Engineering', subcategory: 'ETL', point: 5},
              {category: 'Data Engineering', subcategory: 'Big Data', point: 4},
              {category: 'Data Engineering', subcategory: 'Algroithms', point: 5},
              {category: 'Data Engineering', subcategory: 'Data Warehouse/Database', point: 5},
              {category: 'Data Visualization', subcategory: 'UX/UI', point: 3},
              {category: 'Data Visualization', subcategory: 'Data Art', point: 3},
              {category: 'Data Visualization', subcategory: 'Storytelling', point: 3},
              {category: 'Data Visualization', subcategory: 'Storytelling', point: 3},
              {category: 'Web Development', subcategory: 'Front-End', point: 4},
              {category: 'Web Development', subcategory: 'Back-End', point: 4}]
      const uniqueCategory = [...new Set(data.map(m => m.category))]
      console.log(uniqueCategory);
      const node = this.refs.radialhistogram
      const svg = d3.select(node)
      const RHLenScale = d3.scaleLinear().domain([0, 5]).range([10, 200])
      const RHColorScale = d3.scaleOrdinal()
                            .domain(uniqueCategory)
                            .range(['#a0c1e3', '#c457be', '#d0ac2f', '#8d8482'])
      svg.append('svg:g')
        .attr('class', 'main')
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'mainRect')
        .attrs({ x: 400, y: 200, width: 15, rx: 7.5, ry: 7.5 })
        .attr('height', (d) => RHLenScale(d.point))
        .attr('transform', (d, i) => `rotate(${i / data.length * 360}, 400, 200)`)
        .style('fill', d => RHColorScale(d.category))
        .style('opacity', 0.35);
      
      // legend
      const legend = svg.append('svg:g').attr('class', 'legend')
      // legend - bar
      legend.append('svg:g')
        .attr('class', 'legendRectWrapper')
        .selectAll('rect')
        .data(uniqueCategory)
        .enter()
        .append('rect')
        .attr('class', 'legendRect')
        .attrs({ x: 0, y: 0, height: 20, width: 10, rx: 5, ry: 5 })
        .attr('transform', (d, i) => `translate(700, ${i * 30 + 30})`)
        .style('fill', d => RHColorScale(d))
        .style('opacity', 0.35);
      // legend - text
      legend.append('svg:g')
        .attr('class', 'legendTextWrapper')
        .selectAll('text')
        .data(uniqueCategory)
        .enter()
        .append('text')
        .attr('class', 'legendText')
        .attrs({ x: 0, y: 0 })
        .attr('transform', (d, i) => `translate(730, ${i * 30 + 45})`)
        .text(d => d)
        .style('fill', d => RHColorScale(d));
        


  }
  render() {
        return <svg ref='radialhistogram' width={1000} height={500}></svg>
     }

}
export default RadialHistogram
