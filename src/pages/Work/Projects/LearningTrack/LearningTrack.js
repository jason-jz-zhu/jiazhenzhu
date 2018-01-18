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
        courses: [
          {
            name: 'ETL Framework for Data Warehouse Environments',
            url: 'https://www.udemy.com/etl-framework-for-data-warehouse-environments/',
            source: 'Udemy',
            step: 1,
          },
          {
            name: 'Building Data Pipelines with Python',
            url: 'http://shop.oreilly.com/product/0636920055334.do',
            source: 'Oreilly',
            step: 2,
          },
          {
            name: 'Data Cleaning 101',
            url: 'https://github.com/kjam/data-cleaning-101/tree/master/cleaning-notebooks',
            source: 'Katharine',
            time: 3,
          }],
      },
      {
        category: 'Data Engineering',
        subcategory: 'Big Data',
        point: 4,
        courses: [
          {
            name: 'Intro to Hadoop and MapReduce',
            url: 'https://www.udacity.com/course/intro-to-hadoop-and-mapreduce--ud617',
            source: 'Cloudera',
            time: 0,
          },
          {
            name: 'Big Data Analysis with Twitter',
            url: 'http://blogs.ischool.berkeley.edu/i290-abdt-s12/',
            source: 'UC Berkeley',
            time: 0,
          },
          {
            name: 'Big Data Foundations: Techniques and Concepts',
            url: 'https://www.linkedin.com/learning/big-data-foundations-techniques-and-concepts',
            source: 'Linkedlin',
            time: 2,
          },
          {
            name: 'Big Data Internship Program - Data Processing - Hive and Pig',
            url: 'https://www.udemy.com/big-data-internship-program-data-processing-hive-and-pig/learn/v4/overview',
            source: 'Udemy',
            time: 3,
          },
          {
            name: 'Spark',
            time: 3,
          },
        ],
      },
      {
        category: 'Data Engineering',
        subcategory: 'Algroithms/Programing Lanague',
        point: 5,
        courses: [
          {
            name: 'Problem Solving with Algorithms and Data Structures using Python',
            url: 'http://interactivepython.org/courselib/static/pythonds/index.html',
            source: 'Brad Miller and David Ranum',
            step: 1,
          },
          {
            name: 'Python Google',
            url: 'https://developers.google.com/edu/python/?csw=1',
            source: 'Google',
            step: 0,
          },
          {
            name: 'Data Structures',
            url: 'https://people.eecs.berkeley.edu/~jrs/61b/',
            source: 'UC Berkeley',
            step: 1,
          },
          {
            name: 'Design of Computer Programs',
            url: 'https://www.udacity.com/course/design-of-computer-programs--cs212',
            source: 'Udacity',
            step: 3,
          },
          {
            name: 'Algorithms: Design and Analysis, Part 1',
            url: 'https://online.stanford.edu/course/algorithms-design-and-analysis-part-1-1',
            source: 'Stanford University',
            step: 3,
          },
          {
            name: 'Algorithms: Design and Analysis, Part 2',
            url: 'https://online.stanford.edu/course/algorithms-design-and-analysis-part-2',
            source: 'Stanford University',
            step: 4,
          },
          {
            name: 'Algorithms, Part I',
            url: 'https://www.coursera.org/learn/algorithms-part1',
            source: 'Princeton University',
            step: 3,
          },
          {
            name: 'Algorithms, Part II',
            url: 'https://www.coursera.org/learn/algorithms-part2',
            source: 'Princeton University',
            step: 4,
          },
        ],
      },
      {
        category: 'Data Engineering',
        subcategory: 'Data Warehouse/Database/SQL',
        point: 5,
        courses: [
          {
            name: 'Introduction to Databases',
            url: 'https://lagunita.stanford.edu/courses/Engineering/db/2014_1/about',
            source: 'Stanford University',
            time: 0,
          },
          {
            name: 'data warehouse modeling - star schema design fundamentals',
            url: 'https://www.udemy.com/data-warehouse-modeling-star-schema-design-fundamentals/learn/v4/overview',
            source: 'Udemy',
            step: 0,
          },
          {
            name: 'SQL School',
            url: 'https://community.modeanalytics.com/sql/tutorial/introduction-to-sql/',
            source: 'SQLZoo',
            time: 1,
          },
          {
            name: 'SQL ZOO',
            url: 'http://sqlzoo.net/wiki/SQL_Tutorial',
            source: 'SQLZoo',
            time: 1,
          },
          {
            name: 'Hackerrank SQL',
            url: 'https://www.hackerrank.com/domains/sql/select',
            source: 'Hackerrank',
            time: 2,
          },
          {
            name: 'SQL Performance Explained',
            url: 'http://use-the-index-luke.com/',
            source: 'Markus Winand',
            time: 3,
          },
          {
            name: 'High Performance MySQL',
            url: 'http://shop.oreilly.com/product/0636920022343.do',
            source: 'Oreilly',
            time: 3,
          },
          {
            name: 'Leetcode SQL',
            url: 'https://leetcode.com/problemset/database/',
            source: 'Leetcode',
            time: 3,
          },
        ],
      },
      {
        category: 'Data Science',
        subcategory: 'Data Science Fundamentals',
        point: 4,
        courses: [
          {
            name: 'Intro to Data Science',
            url: 'https://www.udacity.com/course/intro-to-data-science--ud359',
            source: 'Udacity',
            step: 0,
          },
          {
            name: 'Data Science',
            url: 'http://cs109.github.io/2015/',
            source: 'Harvard',
            step: 1,
          },
          {
            name: 'Computing for Data Analysis',
            url: 'https://www.edx.org/course/computing-data-analysis-gtx-cse6040x-0',
            source: 'Gatech',
            step: 3,
          },
        ],
      },
      {
        category: 'Data Science',
        subcategory: 'Probability and Statistics',
        point: 4,
        courses: [
          {
            name: 'Statistics and probability',
            url: 'https://www.khanacademy.org/math/statistics-probability',
            point: 10,
            step: 0,
          },
          {
            name: 'An Intuitive Introduction to Probability',
            url: 'https://www.coursera.org/learn/introductiontoprobability',
            step: 1,
          },
          {
            name: 'Probabilistic Programming & Bayesian Methods for Hackers',
            url: 'http://camdavidsonpilon.github.io/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers/',
            time: 2,
          },
        ],
      },
      {
        category: 'Data Science',
        subcategory: 'Machine Learning',
        point: 3,
        courses: [
          {
            name: 'Machine Learning',
            url: 'https://www.coursera.org/learn/machine-learning',
            time: 1,
          },
          {
            name: 'Machine Learning',
            url: 'https://www.udacity.com/course/machine-learning--ud262',
            source: 'Gatech',
            time: 1,
          },
          {
            name: 'Statistical Learning',
            url: 'https://online.stanford.edu/course/statistical-learning',
            source: 'Stanford University',
            time: 1,
          },
          {
            name: 'Learning From Data',
            url: 'http://work.caltech.edu/lectures.html',
            source: 'Caltech',
            time: 2,
          },
          {
            name: 'Machine Learning for Hackers',
            url: 'http://slendermeans.org/pages/will-it-python.html',
            source: 'Oreilly',
            time: 3,
          },
          {
            name: 'Intro to scikit-learn',
            url: 'https://www.youtube.com/watch?v=r4bRUvvlaBw',
            source: 'Enthought',
            time: 3,
          },
          {
            name: 'Introduction to Analytics Modeling',
            url: 'https://www.edx.org/course/introduction-analytics-modeling-gtx-isye6501x-1',
            source: 'Gatech',
            step: 0,
          },
        ],
      },
      {
        category: 'Data Science',
        subcategory: 'Data Analysis',
        point: 3,
        courses: [
          {
            name: 'Data Analysis in Python',
            url: 'https://community.modeanalytics.com/python/',
            source: 'MODE Community',
            step: 1,
          },
          {
            name: 'Python for Data Analysis',
            url: 'http://shop.oreilly.com/product/0636920023784.do',
            source: 'Oreilly',
            step: 1,
          },
        ],
      },
      {
        category: 'Data Science',
        subcategory: 'Business Sense/Feature Engineering',
        point: 3,
        courses: [
          {
            name: 'Cracking the PM Interview: How to Land a Product Manager Job in Technology',
            url: 'https://www.amazon.com/gp/product/0984782818/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0984782818&linkCode=as2&tag=1point3acres-20&linkId=1ca083ab227cdb5bc4bfa3df2f05dd12',
            time: 1,
          },
        ],
      },
      {
        category: 'Data Science',
        subcategory: 'Others',
        courses: [
          {
            name: 'A/B Testing',
            url: 'https://www.udacity.com/course/ab-testing--ud257',
            source: 'Udacity',
            time: 1,
          },
          {
            name: 'How to Use Git and GitHub',
            url: 'https://www.udacity.com/course/how-to-use-git-and-github--ud775',
            source: 'Udacity',
            time: 1,
          },
        ],
        point: 3,
      },
      {
        category: 'Data Visualization',
        subcategory: 'Data Visualization Fundamentals',
        courses: [
          {
            name: 'Visualization',
            url: 'http://www.cs171.org/2016/',
            source: 'Harvard',
            step: 0,
          },
          {
            name: 'Data Visualization and D3.js',
            url: 'https://www.udacity.com/course/data-visualization-and-d3js--ud507',
            source: 'Udacity',
            step: 1,
          },
          {
            name: 'D3',
            url: 'http://alignedleft.com/tutorials/d3/about',
            source: 'Scott Murray',
            step: 1,
          },
        ],
        point: 3,
      },
      {
        category: 'Data Visualization',
        subcategory: 'Data Art',
        courses: [
          {
            name: 'Dear Data',
            url: 'http://www.dear-data.com/',
            source: 'dear-data',
            step: 1,
          },
        ],
        point: 3,
      },
      {
        category: 'Web Development',
        subcategory: 'Front-End',
        point: 4,
      },
      {
        category: 'Web Development',
        subcategory: 'Back-End',
        point: 4,
      },
    ];
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
