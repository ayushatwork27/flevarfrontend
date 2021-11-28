import "./Style/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import CategoriesDetails from "./pages/CategoriesDetails/Index";
import OrderDetails from "./pages/OrderDetails/Index";
import AddNewAdderess from "./pages/AddNewAdderess/Index";
import ProfileUpdate from "./pages/ProfileUpdate/Index";
import EmptyCart from "./components/EmptyCart/Index"
import SpecialOrderRequest from "./pages/SpecialOrderRequest/Index";
import PageNotFound from "./pages/PageNotFound/Index";
import SearchPage from "./pages/SearchPage/Index"

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProductListAction());
  // }, [dispatch]);

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
          path="/procductdescription/:id"
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
        <Route exact path="/add_new_address" component={AddNewAdderess}></Route>
        <Route exact path="/add_new_address/:id" component={AddNewAdderess}></Route>
        <Route exact path="/profile_update" component={ProfileUpdate}></Route>
        <Route exact path="/emptycart" component={EmptyCart}></Route>
        <Route exact path="/specail_order_request" component={SpecialOrderRequest}></Route>
        <Route exact path="/pagenotfound" component={PageNotFound}></Route>
        <Route exact path="/searchpage" component={SearchPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;