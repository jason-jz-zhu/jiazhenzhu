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

  toDegrees = angle => angle * (180 / Math.PI);
  toRaidans = angle => angle * (Math.PI / 180);

  calculatePoint = (centreX, centreY, r, angle) => {
    const x = Math.abs(centreX);
    const y = Math.abs(centreY);
    const rawAngle = this.toDegrees(Math.atan2(y, x));
    const newAngle = rawAngle + angle >= 90 || rawAngle + angle <= 0
      ? rawAngle - angle
      : rawAngle + angle;
    if (centreX > 0 && centreY < 0) {
      return {
        x: Math.cos(this.toRaidans(newAngle)) * r,
        y: -Math.sin(this.toRaidans(newAngle)) * r,
      };
    }
    return {
      x: -1,
      y: -1,
    };
  }

  createLearningTrack = () => {
    const data = [
      {
        category: 'Data Engineering',
        subcategory: 'ETL',
        point: 4,
        courses: [{ name: 'ETL0', time: 0 }, { name: 'ETL1', time: 1 }, { name: 'ETL2', time: 2 }, { name: 'ETL3', time: 3 }],
        description: 'Extract, Transform, and Loading',
      },
      {
        category: 'Data Engineering',
        subcategory: 'Big Data',
        point: 4,
        courses: [{ name: 'BD0', time: 0 }, { name: 'BD1', time: 1 }, { name: 'BD2', time: 2 }, { name: 'BD3', time: 3 }],
        description: '3Vs (volume, variety and velocity) Data',
      },
      {
        category: 'Data Engineering',
        subcategory: 'Algroithms',
        point: 5,
        courses: [{ name: 'Alg0', time: 0 }, { name: 'Alg1', time: 1 }, { name: 'Alg2', time: 2 }, { name: 'Alg3', time: 3 }],
        description: 'Effective Method with Finite Amount of Space and Time',
      },
      {
        category: 'Data Engineering',
        subcategory: 'Data Warehouse/Database',
        point: 5,
        courses: [{ name: 'DW0', time: 0 }, { name: 'DW1', time: 1 }, { name: 'DW2', time: 2 }, { name: 'DW3', time: 3 }],
        description: 'Store Data',
      },
      {
        category: 'Data Science',
        subcategory: 'Descriptive Analysis',
        point: 4,
        courses: [{ name: 'Desc0', time: 0 }, { name: 'Desc1', time: 1 }, { name: 'Desc2', time: 2 }, { name: 'Desc3', time: 3 }],
        description: 'Summarize a Given Data Set',
      },
      {
        category: 'Data Science',
        subcategory: 'Predictive Analysis',
        point: 3,
        courses: [{ name: 'Desc0', time: 0 }, { name: 'Desc1', time: 1 }, { name: 'Desc2', time: 2 }, { name: 'Desc3', time: 3 }],
        description: 'Predict Future',
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
    const courses = [{ name: 'c1', time: 3 }, { name: 'c2', time: 2 }, { name: 'c2', time: 1 }, { name: 'c3', time: 0 }];
    const radius = 100;
    const node = this.learningtrack;
    const svg = d3.select(node);
    const donutColorScale = d3.scaleOrdinal()
      .domain(data.map(m => m.category))
      .range(['#a0c1e3', '#c457be', '#d0ac2f', '#8d8482']);
    const rScale = d3.scaleLinear()
      .domain([0, Math.max(...courses.map(course => course.time))])
      .range([(4 * radius) + 20, radius + 20]);
    // console.log(courses.map(course => course.time));
    // console.log(rScale(2));
    // console.log(donutColorScale('Web Development'));
    // dunot arc
    const arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 20)
      .padAngle(0.03)
      .cornerRadius(8);
    // dunot pie
    const pie = d3.pie()
      .sort(null)
      .value(d => d.subcategory.length);
    // get center for each pie
    const centersData = pie(data).map(arc.centroid);
    console.log(centersData);
    const ttt = this.calculatePoint(4.942310457390452, -84.8561934530578, 100, 1);
    console.log('here');
    console.log(ttt);
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
    const need = [
      { x: 0, y: 0, finish: false },
      { x: 4.942310457390452, y: -84.8561934530578, finish: true },
      { x: 0, y: -150, finish: false },
      { x: -5, y: -200, finish: false },
      { x: 50, y: -250, finish: false },
      { x: 200, y: -250, finish: false },
    ];
    const need2 = courses.map((item) => {
      const tmp = this.calculatePoint(5.087672529666641, -87.35196384873596, rScale(item.time), (Math.random() * 10) - 5);
      console.log(tmp);
      return {
        x: tmp.x,
        y: tmp.y,
        name: item.name,
        finish: false,
      };
    });
    const need3 = [{ x: 0, y: 0, finish: false }, { x: 5.087672529666641, y: -87.35196384873596, finish: true }, ...need2, { x: 200, y: -250, finish: false }]
    const lineGenerate = d3.line()
      .x(d => d.x)
      .y(d => d.y)
      .curve(d3.curveCardinalOpen);

    for (let i = 0; i < need.length - 2; i += 1) {
      main.selectAll(`xx${i}`)
        .data([need3.slice(i, i + 4)])
        .enter()
        .append('path')
        .attr('class', `xx${i}`)
        .attr('d', lineGenerate)
        .style('stroke', (d) => {
          if (d[1].finish === false && d[1].finish === false) {
            return '#aaa';
          }
          return 'rgb(224, 0, 130)';
        })
        .style('stroke-width', '2')
        .style('fill', 'none')
        .style('opacity', 0.35);
    }
    main.append('g')
      .selectAll('circle2')
      .data(need3.slice(2, need3.length - 1))
      .enter()
      .append('circle')
      .attr('r', '6')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .style('fill', 'white')
      .style('stroke', '#aaa');
    // create circle background
    main.append('g')
      .attr('class', 'circleBackgoundGroup')
      .selectAll('.circleBackgound')
      .data([3, 2, 1, 0])
      .enter()
      .append('circle')
      .attr('r', d => rScale(d))
      .style('fill', 'none')
      .style('stroke', 'rgb(178, 178, 178)')
      .style('opacity', '0.3');
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
