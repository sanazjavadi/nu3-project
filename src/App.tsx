import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import AppHeader from "./components/AppHeader";
import Showcase from "./components/Showcase";

//pages
import Pdp from "./pages/Pdp";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <AppHeader title="nu3" />
      <Switch>
        <Route path="/product-detail-page">
          <Pdp />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/" exact>
          <Showcase>
            <Home />
          </Showcase>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
