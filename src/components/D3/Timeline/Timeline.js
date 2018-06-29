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
    
    const margin = {
  	  top: 10,
  	  right: 10,
  	  bottom: 10,
  	  left: 10
  	};
    const width = document.getElementsByClassName("rightNav")[0].clientWidth - 4*15 - margin.left - margin.right;
    const height = 1000; 
    // console.log(width);
    const svg = d3.select(this.timeline);
    
    const main = svg.append("g")
		  .attr("transform", "translate(" + (margin.left + width/2) + "," + margin.top + ")");
    
    
    main.append("text")
  		.attr("class","fight-legend-text")
  		.attr("x", 0)
  		// .attr("y", -height/2+5)
  		.attr("dy", "0.3em")
  		.text("1 fight");
    // svg.selectAll('rect')
    //   .data(noAxisData)
    //   .enter()
    //   .append('rect')
    //   .attr('class', d => `logoMainRect${d.category.replace(/\s/g, '')}`)
    //   .attrs({
    //     x: 25, y: 25, width: 5, rx: 2.5, ry: 2.5,
    //   })
    //   .attr('height', d => RHLenScale(d.point))
    //   .attr('transform', (d, i) => `rotate(${(i / noAxisData.length) * 360}, 25, 25)`)
    //   .style('fill', d => RHColorScale(d.category))
    //   .style('opacity', 0.35);
  }

  render() {
    return (
      <svg ref={(c) => { this.timeline = c; }} width={50} height={50} />
    );
  }
}

export default Timeline;