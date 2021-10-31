import "./style.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Index";
import About from "./Components/About/Index";
import Contact from "./Components/Contact/Index";
import Register from "./Components/Register/Index";
import Login from "./Components/Login/Index";
import LoginViaOTP from "./Components/LoginViaOTP/Index";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/loginviaotp" component={LoginViaOTP}></Route>
      </Switch>
    </Router>
  );
}

export default App;
