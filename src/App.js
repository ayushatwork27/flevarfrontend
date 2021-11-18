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
import Categories from "./Pages/Categories/Index";
import CategoriesDetails from "./Pages/CategoriesDetails/Index";
import OrderDetails from "./Pages/OrderDetails/Index";
import { LoginContext } from "./Contexts/LoginContext";
import { useState, useEffect } from "react";
import { ProductListContext } from "./Contexts/ProductListContext";
import { getProductsList } from "./service/api";

function App() {
  const [login, setLogin] = useState({ mobile: "" });
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let response = await getProductsList(products);
    if (response && response.data && response.data.success) {
      setProducts(response && response.data && response.data.data.data);
    } else console.log("beg one");
  };

  useEffect(() => getProducts(), []);

  return (
    <Router>
      <Switch>
        <ProductListContext.Provider value={{ products }}>
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/productdescription/:id"
            component={ProductDescription}
          ></Route>
        </ProductListContext.Provider>

        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/register" component={Register}></Route>
        <LoginContext.Provider value={{ login, setLogin }}>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/verifyotp" component={VerifyOTP}></Route>
        </LoginContext.Provider>
        <Route exact path="/order" component={Order}></Route>

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
