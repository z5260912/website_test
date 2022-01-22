import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import Other from './components/pages/Other';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/about' exact component={Other} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
