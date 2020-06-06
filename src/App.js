import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Modules/Home/Home'
import About from './Modules/About/About'
// import Product from './Modules/Product'

function App() {
  return (
      <Router>
        <Header />
        <div className="p-3">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        </div>
        <Footer />
      </Router>
   
  );
}

export default App;
