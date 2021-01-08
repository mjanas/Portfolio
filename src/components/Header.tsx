import React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Projects } from '../pages/Projects';
import { Blog } from '../pages/Blog';

const HeaderStyled = styled.header`    
    width: 100%;
`;

export const Header = () => {
    return (
        <HeaderStyled>
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
        </HeaderStyled>
    );
};