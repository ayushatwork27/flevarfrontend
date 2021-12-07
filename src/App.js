import "./Style/style.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import Home from "./pages/Home/Index";
import About from "./pages/About/Index";
import Contact from "./pages/Contact/Index";
import Register from "./components/Register/Index";
import Login from "./components/Login/Index";
import LoginViaOTP from "./components/LoginViaOTP/Index";
import ProductDescription from "./pages/ProductDescription/Index";
import MyCart from "./pages/MyCart/Index";
import Delivering from "./pages/Delivering/Index";
import Order from "./pages/Orders/Index";
import Categories from "./pages/Categories/Index";
import Products from "./pages/Products/Index";
import CategoriesDetails from "./pages/CategoriesDetails/Index";
import OrderDetails from "./pages/OrderDetails/Index";
import AddNewAdderess from "./pages/AddNewAdderess/Index";
import ProfileUpdate from "./pages/ProfileUpdate/Index";
import SpecialOrderRequest from "./pages/SpecialOrderRequest/Index";
import SearchPage from "./pages/SearchPage/Index"
import PageNotFound from "./pages/PageNotFound/Index";
import { getProductListAction, getCategoryListAction } from './shared/store/actions/product.actions';
import { userProfile, getAddressListAction } from './shared/store/actions/app.actions';
import { AUTH_TOKEN } from "./shared/constants/app.constants";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
    const token = localStorage.getItem(AUTH_TOKEN);
    const dispatch = useDispatch();
    
    useEffect(() => token && dispatch(userProfile(token)), [token, dispatch]);
    
    useEffect(() => {
        dispatch(getProductListAction({
            filterkey: '',
            location_id: 2
        }, { pageSize: 6 }));
        dispatch(getCategoryListAction({
            pageSize: 5
        }));
    }, [dispatch]);

    useEffect(() => token && dispatch(getAddressListAction(token)), [token]);

    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                {!token && <Route exact path="/register" component={Register}></Route>}
                {!token && <Route exact path="/login" component={Login}></Route>}
                {!token && <Route exact path="/loginviaotp" component={LoginViaOTP}></Route>}
                <Route exact path="/categories" component={Categories}></Route>
                <Route exact path="/products" component={Products}></Route>
                {token && <Route exact path="/add_new_address" component={AddNewAdderess}></Route>}
                {token && <Route exact path="/add_new_address/:id" component={AddNewAdderess}></Route>}
                {token && <Route exact path="/profile_update" component={ProfileUpdate}></Route>}
                <Route exact path="/searchpage" component={SearchPage}></Route>
                <Route exact path="/pagenotfound" component={PageNotFound}></Route>
                {token && <Route exact path="/specail_order_request" component={SpecialOrderRequest}></Route>}
                <Route exact path="/categories_details/:id" component={CategoriesDetails}></Route>
                <Route exact path="/productdescription/:id" component={ProductDescription}></Route>
                {token && <Route exact path="/mycart" component={MyCart}></Route>}
                {token && <Route exact path="/delevering" component={Delivering}></Route>}
                {token && <Route exact path="/order" component={Order}></Route>}
                {token && <Route exact path="/order_details/:id" component={OrderDetails}></Route>}
                <Redirect from='*' to='/pagenotfound' />
            </Switch>
        </Router>
    );
}

export default App;