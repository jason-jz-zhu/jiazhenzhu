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
      const node = this.refs.radialhistogram

      d3.select(node)
        .append('rect')
        .attrs({ x: 10, y: 10, width: 15, height: 200, fill: '#a0c1e3', rx: 7.5, ry: 7.5 })
        .style('opacity', 0.35);


  }
  render() {
        return <svg ref='radialhistogram' width={1000} height={500}></svg>
     }

}
export default RadialHistogram
