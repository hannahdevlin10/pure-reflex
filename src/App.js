import * as React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ReactGA from 'react-ga';
import './App.css';
import Nav from './components/Nav';
import Drawer from './components/Drawer';
import Dashboard from './components/Dashboard';
import About from "./components/About";
import TC from "./components/TC";
import Treatments from "./components/Treatments";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

const TRACKING_ID = "G-D42EK4JFRF";
ReactGA.initialize(TRACKING_ID);

function App() {

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
          <Route exact path='/about_me' component={AboutMe} />
        </Switch>
        <Drawer />
      </div>
    </Router>
  );
}

export default App;
