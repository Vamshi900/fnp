import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Modules/Home/Home'
import About from './Modules/About/About'
import { createGlobalStyle } from 'styled-components';
// Import Components
import Container from './Components/container';
// Import assets
import woff2 from './fonts/open-sans-v16-latin-regular.woff2';
import woff from './fonts/open-sans-v16-latin-regular.woff';


// Global Style
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('${woff2}') format('woff2'),
        url('${woff}') format('woff'); 
  }

  body {
    font-family: Open Sans, Segoe UI, Tahoma, sans-serif !important;
    color: #fff;
    padding: 1em;
    line-height: 1.8em;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word
  }
  a {
    text-decoration: none;
}
li {
  list-style: none;
} 
`;

// Main page
const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Container>
      <GlobalStyle />
      <Footer />
    </Router>
  );
};




export default App;

