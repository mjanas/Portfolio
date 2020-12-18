import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <Router>
            <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
            </Switch>
          </Router>
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
