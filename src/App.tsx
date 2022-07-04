import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import AppHeader from "./components/AppHeader";
import Showcase from "./components/Showcase";

//pages
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <AppHeader title="nu3" />
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/" exact>
          <Showcase>
            <Home />
          </Showcase>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
