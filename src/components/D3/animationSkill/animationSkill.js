import React, { Component } from 'react';
import PropTypes from 'prop-types';
import d3 from 'd3';

class SparkDonut extends Component {

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
    option: PropTypes.number.isRequired,
    fillColor: PropTypes.arrayOf(PropTypes.string).isRequired,
    numberColor: PropTypes.string.isRequired,
    outerRadiusRatioOutside: PropTypes.number.isRequired,
    innerRadiusRatioOutside: PropTypes.number.isRequired,
  }

  componentDidMount() {
    this.sparkdonut(this.props.data, this.props.outerRadiusRatioOutside,
      this.props.innerRadiusRatioOutside, this.props.fillColor, this.props.numberColor);
  }

  componentDidUpdate() {
    this.sparkdonut(this.props.data, this.props.outerRadiusRatioOutside,
      this.props.innerRadiusRatioOutside, this.props.fillColor, this.props.numberColor);
  }



  drawDonut = ({ selector, data, outerRadiusRatio, innerRadiusRatio, fillColor, numberColor }) => {
    if (document.getElementById(selector) != null) {
      document.getElementById(selector).innerHTML = '';
    } else {
      return;
    }
    let dataset = {};
    if (data.length === 2) {
      const secondPartArc = data[1] - data[0];
      dataset = {
        dataset: [data[0], secondPartArc],
      };
      // if data[1] is a negative number, then we set it to zero
      if (secondPartArc < 0) {
        dataset.dataset[1] = 0;
      }
      if (data[0] === 0 && data[1] === 0) {
        dataset.dataset[1] = 1;
      }
    } else {
      dataset = {
        dataset: [...data],
      };
    }


    const width = parseInt(d3.select(`#${selector}`).style('width'), 10);
    const height = parseInt(d3.select(`#${selector}`).style('height'), 10);
    const side = Math.min(width, height) / 2;
    // set fillColor
    const color = fillColor;
    // const color = ['red', 'yellow', 'green'];
    const donutPie = d3.layout.pie()
        .sort(null);
    // set inner and outer radius based on circleWidth
    const arc = d3.svg.arc()
        .innerRadius(innerRadiusRatio * outerRadiusRatio * side)
        .outerRadius(outerRadiusRatio * side);

    const svg = d3.select(`#${selector}`).append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

    svg.selectAll('path')
        .data(donutPie(dataset.dataset))
        .enter()
        .append('path')
        .attr('fill', (d, i) => color[i])
        .attr('d', arc);
    // create text inside the pieChart
    const textPie = data.length === 2
      ? `${Math.floor((data[0] / data[1]) * 100)}`
      : `${Math.floor((data.slice(0, -1).reduce(this.sum) / data.reduce(this.sum)) * 100)}`;
    const fontSize = ((10 / 35) * width) - 5;
    let adjust = fontSize;
    let adjustPer = fontSize;
    switch (textPie.length) {
      case 1: adjust *= 0; adjustPer *= 0.20; break;
      case 2: adjust *= -0.2; adjustPer *= 0.40; break;
      case 3: adjust *= -0.3; adjustPer *= 0.50; break;
      default: break;
    }
    svg.append('text')
      .attr('dy', '.35em')
      .attr('dx', `${adjust}`)
      .style('text-anchor', 'middle')
      .style('font-family', 'Roboto, Helvetica, Arial, sans-serif')
      .style('font-weight', 100)
      .attr('font-size', `${fontSize}`)
      .attr('fill', numberColor)
      .text(textPie);
    svg.append('text')
      .attr('dy', '.40em')
      .attr('dx', `${adjustPer}`)
      .style('text-anchor', 'start')
      .style('font-family', 'Roboto, Helvetica, Arial, sans-serif')
      .style('font-weight', 100)
      .attr('font-size', () => ((15 / 68) * width) - 4.2)
      .attr('fill', numberColor)
      .text('%');
  }
  // add sparkdonut function
  sparkdonut = (data, outerRadiusRatioOutside, innerRadiusRatioOutside, fillColor, numberColor) => {
    const outerRadiusRatio = outerRadiusRatioOutside;
    const innerRadiusRatio = innerRadiusRatioOutside;
    d3.select('#BurnLine').remove();
    const selector = this.props.option === undefined ? 'sparkdonut' : `sparkdonut${this.props.option}`;
    this.drawDonut({ selector, data, outerRadiusRatio, innerRadiusRatio, fillColor, numberColor });

    const resize = () => {
      this.drawDonut(
        { selector, data, outerRadiusRatio, innerRadiusRatio, fillColor, numberColor },
      );
    };
    window.addEventListener('resize', resize);
  };

  render() {
    return (
      <div
        style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center' }}
        id={this.props.option === undefined ? 'sparkdonut' : `sparkdonut${this.props.option}`}
      />
    );
  }
}

export default SparkDonut;
