import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Work from './pages/Work/Work';
import Blog from './pages/Blog/Blog';
import Resource from './pages/Resource/Resource';
import CrimeAnalysis from './pages/Work/Projects/CrimeAnalysis/CrimeAnalysis';
import Homeless from './pages/Work/Projects/Homeless/Homeless';
import LearningTrack from './pages/Work/Projects/LearningTrack/LearningTrack';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/work/crimeanalysis" component={CrimeAnalysis} />
          <Route exact path="/work/homeless" component={Homeless} />
          <Route exact path="/work/learningtrack" component={LearningTrack} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/resource" component={Resource} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
