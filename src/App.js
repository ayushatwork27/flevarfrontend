import "./style.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components//Home/Index";
import About from "./Components//About/Index";
import Contact from "./Components/Contact/Index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </Router>
  );
}

export default App;
