import * as React from "react";
import { Route, Switch, BrowserRouter as Router, } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import About from "./components/About";
import TC from "./components/TC";
import Treatments from "./components/Treatments";
import Contact from "./components/Contact";

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/about' component={About} />
          <Route exact path='/treatments_prices' component={Treatments} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/TC' component={TC} />
        </Switch>
        <Drawer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
