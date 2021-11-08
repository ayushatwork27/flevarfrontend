import "./Style/style.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Index";
import About from "./Pages/About/Index";
import Contact from "./Pages/Contact/Index";
import Register from "./Components/Register/Index";
import Login from "./Components/Login/Index";
import LoginViaOTP from "./Components/LoginViaOTP/Index";
import ProductDescription from "./Pages/ProductDescription/Index";
import MyCart from "./Pages/MyCart/Index";
import Delivering from "./Pages/Delivering/Index";
import Order from "./Pages/Orders/Index";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/order" component={Order}></Route>
        <Route exact path="/loginviaotp" component={LoginViaOTP}></Route>
        <Route
          exact
          path="/procductdescription"
          component={ProductDescription}
        ></Route>
        <Route exact path="/mycart" component={MyCart}></Route>
        <Route exact path="/delevering" component={Delivering}></Route>
      </Switch>
    </Router>
  );
}

export default App;
