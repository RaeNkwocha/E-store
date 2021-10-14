import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Exploredetail from "./explore-component/Exploredetail";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/explore" component={Explore}></Route>
          <Route path="/explore/:id" component={Exploredetail}></Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
