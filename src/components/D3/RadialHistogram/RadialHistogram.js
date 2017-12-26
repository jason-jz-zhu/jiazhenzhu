import React, { Component } from 'react';
import * as d3 from 'd3';
import 'd3-selection-multi';
import './RadialHistogram.css';

class RadialHistogram extends Component {
  constructor(props) {
    super(props);
    this.createRadialHistogram = this.createRadialHistogram.bind(this);
  }
  componentDidMount() {
    this.createRadialHistogram();
  }
  componentDidUpdate() {
    this.createRadialHistogram();
  }

  createRadialHistogram() {
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

    let rAxisFlag = true;
    // const processBarFlag = [false, false, false];
    const axisData = [{ category: 'AXIS', subcategory: 'AXIS', point: 5 }, ...data];
    const uniqueCategory = [...new Set(axisData.map(m => m.category))];
    const node = this.radialhistogram;
    const svg = d3.select(node);
    const RHLenScale = d3.scaleLinear().domain([0, 5]).range([10, 200]);
    const RHColorScale = d3.scaleOrdinal()
      .domain(uniqueCategory)
      .range(['#fff', '#a0c1e3', '#c457be', '#d0ac2f', '#8d8482']);
    const rAxisSmall = d3.axisRight(RHLenScale).tickValues([2, 4]).tickPadding(6).tickSize(2);
    const rAxisLarge = d3.axisRight(RHLenScale).tickValues([1, 3, 5]).tickSize(6);
    // show the tooltip
    const showTooltip = (d) => {
      const tooltipCategory = d.category;
      const tooltipStatus = d.point;
      const tooltipSubcategory = d.subcategory;
      const tooltipShortdescription = d.description;
      // get current mouse position
      const xPos = d3.event.pageX - 15;
      const yPos = d3.event.pageY - 15;
      // create container for tooltip
      d3.select('.tooltipCategory').text(tooltipCategory);
      d3.select('.tooltipStatus').text(tooltipStatus);
      d3.select('.tooltipSubcategory')
        .text(tooltipSubcategory)
        .style('color', RHColorScale(tooltipCategory));
      d3.select('.tooltipShortdescription').text(tooltipShortdescription);
      // transform the tooltip to correct position
      d3.select('.tooltip')
        .style('top', `${yPos}px`)
        .style('left', `${xPos}px`)
        .transition()
        .duration(0)
        .style('opacity', 1);
      d3.select('.tooltipStatus')
        .style('text-align', 'right');
    };
    // hide the tooltip
    const hideTooltip = () => {
      d3.select('.tooltip')
        .transition().duration(100)
        .style('opacity', 0);
    };
    const updateOneRadialHistogram = (inputData) => {
      const mainRect = d3.select('.main').selectAll('rect').data(inputData);
      // update
      mainRect.transition()
        .duration(500)
        .attrs({
          x: 400, y: 200, width: 15, rx: 7.5, ry: 7.5,
        })
        .attr('height', d => RHLenScale(d.point))
        .attr('transform', (d, i) => `rotate(${(i / inputData.length) * 360}, 400, 200)`)
        .style('fill', d => RHColorScale(d.category))
        .style('opacity', 0.35);
      // enter
      const mainRectEnter = mainRect.enter()
        .append('rect')
        .attr('class', d => `mainRect${d.category.replace(/\s/g, '')}`)
        .attrs({
          x: 400, y: 200, width: 15, rx: 7.5, ry: 7.5,
        })
        .attr('height', d => RHLenScale(d.point))
        .style('fill', d => RHColorScale(d.category))
        .style('opacity', 0.35);
      mainRectEnter.transition()
        .duration(500)
        .attr('transform', (d, i) => `rotate(${(i / inputData.length) * 360}, 400, 200)`);
      mainRectEnter.on('mouseover', d => showTooltip(d))
        .on('mouseout', () => hideTooltip());
      // exit
      mainRect.exit().transition().remove();
    };

    const createRAxis = (rAxisSmallArg, rAxisLargeArg) => {
      // select rAxis dom
      const rAxis = d3.select('.rAxisWrapper');

      rAxis.append('g')
        .attr('class', 'rAxisSmall')
        .attr('transform', 'translate(400, 200)')
        .call(rAxisSmallArg);
      d3.select('.rAxisSmall').select('.domain').remove();

      rAxis.append('g')
        .attr('class', 'rAxisLarge')
        .attr('transform', 'translate(398, 200)')
        .call(rAxisLargeArg);
      d3.select('.rAxisLarge').select('.domain').remove();
    };

    const removeRAxis = () => {
      d3.select('.rAxisSmall').remove();
      d3.select('.rAxisLarge').remove();
    };

    // const createProcessBar = () => {
    //   const processBarWrapper = d3.select('.processBarWrapper');
    //
    //   processBarWrapper.selectAll('circle')
    //     .data([1, 2, 3])
    //     .enter()
    //     .append('circle')
    //     .attr('class', d => `processBar${d}`)
    //     .attr('r', 15)
    //     .style('stroke', 'gray')
    //     .style('stroke-opacity', 0.5)
    //     .style('fill', 'white')
    //     .attr('transform', (d, i) => `translate(${450 + (i * 50)}, 30)`)
    //     .on('click', (d) => {
    //       if (processBarFlag[d - 1] === false) {
    //         d3.select(`.processBar${d}`)
    //           .transition()
    //           .duration(500)
    //           .style('fill', 'dodgerblue');
    //         processBarFlag[d - 1] = true;
    //       } else if (processBarFlag[d - 1] === true) {
    //         d3.select(`.processBar${d}`)
    //           .transition()
    //           .duration(500)
    //           .style('fill', 'white');
    //         processBarFlag[d - 1] = false;
    //       }
    //     });
    // };

    // process bar
    // svg.append('svg:g')
    //   .attr('class', 'processBarWrapper');
    // createProcessBar();
    // main rect

    svg.append('svg:g')
      .attr('class', 'main')
      .selectAll('rect')
      .data(axisData)
      .enter()
      .append('rect')
      .attr('class', d => `mainRect${d.category.replace(/\s/g, '')}`)
      .attrs({
        x: 400, y: 200, width: 15, rx: 7.5, ry: 7.5,
      })
      .attr('height', d => RHLenScale(d.point))
      .attr('transform', (d, i) => `rotate(${(i / axisData.length) * 360}, 400, 200)`)
      .style('fill', d => RHColorScale(d.category))
      .style('opacity', 0.35)
      .on('mouseover', d => showTooltip(d))
      .on('mouseout', () => hideTooltip());

    // r axis
    svg.append('g')
      .attr('class', 'rAxisWrapper');

    createRAxis(rAxisSmall, rAxisLarge);

    // legend
    const legend = svg.append('svg:g').attr('class', 'legendWrapper');
    // legend - bar
    legend.append('svg:g')
      .attr('class', 'legendRectWrapper')
      .selectAll('rect')
      .data(uniqueCategory)
      .enter()
      .append('rect')
      .attr('class', 'legendRect')
      .attrs({
        x: 0, y: 0, height: 20, width: 10, rx: 5, ry: 5,
      })
      .attr('transform', (d, i) => `translate(700, ${(i * 30) + 60})`)
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
      .attr('transform', (d, i) => `translate(730, ${(i * 30) + 75})`)
      .text(d => d)
      .style('fill', d => RHColorScale(d));

    // remove or add r axis
    svg.append('g')
      .append('rect')
      .attr('class', 'removeRAxisButton')
      .attrs({
        x: 0, y: 0, height: 30, width: 30, rx: 15, ry: 15,
      })
      .attr('transform', 'translate(690, 30)')
      .style('fill', 'rgba(238,114,114,0.7)')
      .on('click', () => {
        if (rAxisFlag === true) {
          removeRAxis();
          const noAxisData = axisData.slice(1, axisData.length + 1);
          updateOneRadialHistogram(noAxisData);
          d3.select('.removeRAxisButton')
            .style('fill', 'rgba(238,114,114,0.3)');
          rAxisFlag = false;
        } else {
          updateOneRadialHistogram(axisData);
          createRAxis(rAxisSmall, rAxisLarge);
          d3.select('.removeRAxisButton')
            .style('fill', 'rgba(238,114,114,0.7)');
          rAxisFlag = true;
        }
      });
  }

  render() {
    return (
      <div>
        <svg ref={(c) => { this.radialhistogram = c; }} width={1000} height={500} />
        <div className="tooltip">
          <div className="tooltipContainer">
            <div className="tooltipContainerUpper">
              <div className="tooltipCategory" />
              <div className="tooltipStatus" />
            </div>
            <div className="tooltipRule" />
            <div className="tooltipSubcategory" />
            <div className="tooltipShortdescription" />
          </div>
        </div>
        <div className="arrow"><i className="fa fa-arrow-left" /></div>
      </div>
    );
  }
}

export default RadialHistogram;
