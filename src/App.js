import "./Style/style.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
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
import { userProfile } from './shared/store/actions/app.actions';
import { AUTH_TOKEN, LOCATION_ID } from "./shared/constants/app.constants";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ProductReview from "./pages/Review/ProductReview";
import { getLocationAction } from './shared/store/actions/app.actions';
import {
    getProductListAction,
    getCategoryListAction,
    getProductsAction
} from './shared/store/actions/product.actions';

function App() {
    const token = localStorage.getItem(AUTH_TOKEN);
    const defaultLocatioId = localStorage.getItem(LOCATION_ID);
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.app);

    useEffect(() => {
        token && dispatch(userProfile(token));
        token && dispatch(getLocationAction());
    }, [token, dispatch]);

    useEffect(() => {
        dispatch(getProductListAction({
            filterkey: '',
            location_id: defaultLocatioId
        }, { pageSize: 6 }));
        dispatch(getCategoryListAction({
            pageSize: 5
        }));
        dispatch(getProductsAction({
            filterkey: '',
            location_id: defaultLocatioId
        }));
    }, [dispatch]);

    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                {!user?.name && <Route exact path="/register" component={Register}></Route>}
                {!user?.name && <Route exact path="/login" component={Login}></Route>}
                {!user?.name && <Route exact path="/loginviaotp" component={LoginViaOTP}></Route>}
                <Route exact path="/categories" component={Categories}></Route>
                <Route exact path="/products" component={Products}></Route>
                {user && user.name && <Route exact path="/add_new_address" component={AddNewAdderess}></Route>}
                {user && user.name && <Route exact path="/add_new_address/:id" component={AddNewAdderess}></Route>}
                {user && user.name && <Route exact path="/profile_update" component={ProfileUpdate}></Route>}
                <Route exact path="/searchpage" component={SearchPage}></Route>
                <Route exact path="/pagenotfound" component={PageNotFound}></Route>
                {user && user.name && <Route exact path="/specail_order_request" component={SpecialOrderRequest}></Route>}
                <Route exact path="/categories_details/:id" component={CategoriesDetails}></Route>
                <Route exact path="/productdescription/:id" component={ProductDescription}></Route>
                {user && user.name && <Route exact path="/mycart" component={MyCart}></Route>}
                {user && user.name && <Route exact path="/delevering" component={Delivering}></Route>}
                {user && user.name && <Route exact path="/orders" component={Order}></Route>}
                {user && user.name && <Route exact path="/product-review/:id" component={ProductReview}></Route>}
                {user && user.name && <Route exact path="/order_details/:id" component={OrderDetails}></Route>}
                <Redirect from='*' to='/pagenotfound' />
            </Switch>
        </Router>
    );
}

export default App;