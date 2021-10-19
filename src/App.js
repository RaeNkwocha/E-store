import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Exploredetail from "./explore-component/Exploredetail";
import { AuthProvider } from "./auth/Authcontext";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Categories from "./explore-component/Categories";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <AuthProvider>
            <Route path="/" exact component={Signup}></Route>
            <Route path="/login" exact component={Login}></Route>

            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/explore" component={Explore}></Route>
            <Route path="/explore/:id" component={Exploredetail}></Route>
          </AuthProvider>
        </Switch>
      </>
    </Router>
  );
}

export default App;
