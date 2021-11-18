import "./Style/style.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Index";
import About from "./Pages/About/Index";
import Contact from "./Pages/Contact/Index";
import Register from "./Components/Register/Index";
import Login from "./Components/Login/Index";
import VerifyOTP from "./Components/VerifyOTP/Index";
import ProductDescription from "./Pages/ProductDescription/Index";
import MyCart from "./Pages/MyCart/Index";
import Delivering from "./Pages/Delivering/Index";
import Order from "./Pages/Orders/Index";
import { LoginContext } from "./Contexts/LoginContext";
import { useState } from "react";

import Categories from "./Pages/Categories/Index";
import CategoriesDetails from "./Pages/CategoriesDetails/Index";
import OrderDetails from "./Pages/OrderDetails/Index";
function App() {
  const [login, setLogin] = useState({ mobile: "" });

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/register" component={Register}></Route>
        <LoginContext.Provider value={{ login, setLogin }}>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/verifyotp" component={VerifyOTP}></Route>
        </LoginContext.Provider>
        <Route exact path="/order" component={Order}></Route>

        <Route
          exact
          path="/productdescription"
          component={ProductDescription}
        ></Route>
        <Route exact path="/mycart" component={MyCart}></Route>
        <Route exact path="/delevering" component={Delivering}></Route>
        <Route exact path="/categories" component={Categories}></Route>
        <Route
          exact
          path="/categories_details"
          component={CategoriesDetails}
        ></Route>
        <Route exact path="/order_details" component={OrderDetails}></Route>
      </Switch>
    </Router>
  );
}

export default App;
