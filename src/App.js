import React from 'react';
import './css/App.css';
import {HashRouter, Route} from 'react-router-dom';
import Skills from './routes/Skills.js';
import Home from './routes/Home.js';
import Practice from './routes/Practice.js'
import Navigation from './components/Navigation.js';
import Top from './components/Top.js';

import TripP from './routes/TripP';
import Count from './routes/Count.js';
import Project from './routes/Project';
import Matzip from './components/Matzip';
import History from './routes/History.js';

function App(){
  return (
    <HashRouter>
        <Navigation />
        <Top />
        <Route path="/practice"  component={Home}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/before" component={Practice}/>
        <Route path="/trip" component={TripP}/>
        <Route path="/" exact={true} component={Count}/>
        <Route path="/project" component={Project}/>
        <Route path="/matzip" component={Matzip}/>
        <Route path="/history" component={History}/>
    </HashRouter>
  );
}


export default App;
