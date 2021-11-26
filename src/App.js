import "./Style/style.scss";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
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
import Categories from "./Pages/Categories/Index";
import CategoriesDetails from "./Pages/CategoriesDetails/Index";
import OrderDetails from "./Pages/OrderDetails/Index";
import { getProducts as listProducts } from './redux/actions/productActions';
import { loadUserDetail as userDetail } from './redux/actions/userActions';
import AddNewAdderess from "./Pages/AddNewAdderess/Index";
import ProfileUpdate from "./Pages/ProfileUpdate/Index";
import EmptyCart from "./Components/EmptyCart/Index"

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts())
        dispatch(userDetail())
    }, [dispatch]);

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/loginviaotp" component={LoginViaOTP}></Route>
                <Route exact path="/order" component={Order}></Route>
                <Route exact path="/productdescription/:id" component={ProductDescription}></Route>
                <Route exact path="/mycart" component={MyCart}></Route>
                <Route exact path="/delevering" component={Delivering}></Route>
                <Route exact path="/categories" component={Categories}></Route>
                <Route exact path="/categories_details" component={CategoriesDetails}></Route>
                <Route exact path="/order_details" component={OrderDetails}></Route>
                <Route exact path="/add_new_address" component={AddNewAdderess}></Route>
                <Route exact path="/add_new_address/:id" component={AddNewAdderess}></Route>
                <Route exact path="/profile_update" component={ProfileUpdate}></Route>
                <Route exact path="/emptycart" component={EmptyCart}></Route>
            </Switch>
        </Router>
    );
}

export default App;