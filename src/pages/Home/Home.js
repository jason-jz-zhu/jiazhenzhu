import React, { Component } from 'react';
// import components
import RadialHistogram from '../../components/D3/RadialHistogram/RadialHistogram';
import Timeline from '../../components/D3/Timeline/Timeline';
import IconBar from '../../components/IconBar/IconBar';
// import Cards from '../../components/Cards/Cards';

import './Home.css';

class Home extends Component {
  render() {
    const profile = (
      <div className="profile">
        <img src="/jiazhen.jpg" weight="200" height="280" />
      </div>
    );

    const contact = (
      <div className="contact">
        <table border="0">
          <tbody>
            <tr>
              <td><font size="5">Jiazhen Zhu &nbsp;</font></td>
              <td><img align="right" src="/Jiazhen_Zhu.png" height="50" /></td>
            </tr>
          </tbody>
        </table>
        <br /><br />
        <font face="verdana" size="2">Data Researcher and Data Engineer</font>
        <br />
        <font face="verdana" size="2">Email: jason.jz.zhu at gmail dot com</font>
        <br />
        <br />
        <br />
        <font face="courier" size="2" color="#888"><p>"If you can dream it, you can do it. &nbsp;- Walt Disney"</p></font>
      </div>
    );

    return (
      <div className="homeWrapper">
        <div className="leftNav">
          <IconBar />
        </div>
        <div className="rightNav">
          <Timeline />
        </div>
        <section className="profileContactWrapper">
          {profile}
          {contact}
        </section>
        <section className="bioWrapper">
          <h2 className="underline">Biography [<a href="/Jiazhen_Zhu_Resume.pdf">CV</a>]</h2>
          <p>
            Currently, I am seeking Master of Science Analytics from <span className="education-link"><a href="https://pe.gatech.edu/degrees/analytics">Gatech</a></span>, and&nbsp;
            I am a research assistant (volunteer) under Data Discovery Lab at <span className="education-link"><a href="http://myweb.ttu.edu/fjin/">TTU</a></span>,&nbsp;
            under the supervision of Prof. <span className="education-link"><a href="http://www.depts.ttu.edu/cs/faculty/fang_jin/index.php">Fang Jin</a></span>.&nbsp;
            Also I am a Data Engineer at <span className="working-link"><a href="https://nete.com/">NETE</a></span>.
            Previously, I got my MicroMaster of Analytics from <span className="education-link"><a href="https://pe.gatech.edu/master-science-degrees/analytics/analytics-essential-tools-and-methods-micromasters">Gatech</a></span> in 2018.
            And I earned my Master of Computer Science from <span className="education-link"><a href="https://www.gwu.edu/">the George Washington University</a></span> in 2013
            and Bachelor of Computer Science from <span className="education-link"><a href="http://en.shu.edu.cn/Default.aspx">Shanghai University</a></span> in 2011, where I worked with <span className="education-link"><a href="http://iic.shu.edu.cn/en/shiyanshi_renyuan_fyc.html">Prof. Yuchun Fang</a></span>.
            I was a Software Engineer (Data) for 1.5 years at <span className="working-link"><a href="http://www.citigroup.com/china/csts/index.htm">Citi Bank</a></span>, Shanghai, CHINA in 2011.
          </p>
          <p>
            I am interested in data, methods and models that can be used to understand the communication between people and computer,
            human behavior in networks, analysis of social networks etc. Another interesting area of
            research is the design of system using practical data engineering workflows.
            I do whole workflow for data engineering such as validate/clean/aggregation data, data modeling and data visualization.
          </p>
        </section>
        <section className="newsWrapper">
          <h2 className="underline">News</h2>
          <ul>
            <li>[07/2019] I will join <b>Walmart Labs</b> as Software Engineer, Data. </li>
            <li>[06/2019] I will begin data science learning at <b>Gatech</b> on this fall. </li>
            <li>[12/2018] One Paper has been accepted by <b>PAKDD</b>. </li>
            <li>[09/2018] One Paper on coordinating volunteers in disaster relief using reinforcement learning has been submitted to <b>Big Data</b>. </li>
            <li>[08/2018] I begin to learn the MicoMaster for Data Science from MIT. </li>
            <li>[06/2018] I will work on crop prediction project using Mutli-Task Learning and Gaussian Processes. </li>
            <li>[06/2018] I have successfully earned my MicroMaster of Analytics from Gatech. </li>
            <li>[05/2018] I will work on Coordinating Disaster Emergency Response using Heuristic Reinforcement Learning. </li>
            <li>[05/2018] I will come to Data Discovery Lab at TTU as research assistant (volunteer) to work on deep learning. </li>
            <li>[08/2014] I will come to NETE as data engineer and data scientist. </li>
            <li>[08/2014] I have successfully earned my Master of Computer Science from The George Washington University. </li>
            <li>[01/2014] I will join the team in GWU to analyze the relationsihp between market environment and goverment policy. </li>
            <li>[01/2013] I will come to The George Washington University for my master study this spring. </li>
            <li>[12/2012] The paper on Facial Image Quality Assessment has been accepted to <b>CCBR</b>. </li>
            <li>[12/2011] I will come to Citi Bank as software engineer (data). </li>
            <li>[11/2011] The paper on Facial Image Quality Assessment has been accepted to <b>ICIP</b>. </li>
          </ul>
        </section>
        <section className="publicationsWrapper">
          <h2 className="underline">Publications</h2>
          <h3>2018</h3>
          <ul>
            <li>
              <a href="/paper_647.pdf">Spatial-temporal Multi-Task Learning for Within-field Cotton Yield Prediction</a>
              <br />
              Long Nguyen, <b>Jiazhen Zhu</b>, Zhe Lin, Hanxiang Du, Zhou Yang, Wenxuan Guo, and Fang Jin
              <br />
              The Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD)
              <br />
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://arxiv.org/pdf/1811.05010.pdf">Coordinating Disaster Emergency Response with Heuristic Reinforcement Learning</a>
              <br />
              Yang Zhou, Nguyen Long, <b>Jiazhen Zhu</b>, Fang Jin
              <br />
              arxiv
              <br />
            </li>
          </ul>
          <h3>2012</h3>
          <ul>
            <li>
              <a href="/Fusion of mSSIM and SVM for Reduced-Reference Facial Image Quality Assessment.pdf">Fusion of mSSIM and SVM for Reduced-Reference Facial Image Quality Assessment</a>
              <br />
              Pengjun Ji, Yuchun Fang, Zhonghua Zhou, <b>Jiazhen Zhu</b>
              <br />
              Chinese Conference on Biometric Recognition (CCBR), 2012.
              <br />
            </li>
          </ul>
          <h3>2011</h3>
          <ul>
            <li>
              <a href="/RRAR_A Novel Reduced-Reference IQA Algorithm for Facial Images.pdf">RRAR: A novel reduced-reference IQA algorithm for facial images</a>
              <br />
              <b>Jiazhen Zhu</b>, Yuchun Fang, Pengjun Ji, Abdl Moad-EL, Wang Dai
              <br />
              IEEE International Conference on Image Processing (ICIP), 2011.
              <br />
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Home;
