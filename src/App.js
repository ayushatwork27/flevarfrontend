import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

// components

import Home from "./components/Home/Index";
import About from "./components/About/Index";

function App() {
  return (
    <BrowserRouter>
      {/* <Router> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
      {/* </Router> */}
    </BrowserRouter>
  );
}

export default App;
