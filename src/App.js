import React from 'react';
import ReactPlayer from 'react-player'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact components=
            {Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
