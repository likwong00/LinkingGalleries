import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Add any new paths here
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
  )
}

export default App;